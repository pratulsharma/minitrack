# JavaScript Promises and Execution Order

Use this document to review Promises, asynchronous code, and the event loop. Add future concepts and interview questions here.

## 1. Synchronous versus asynchronous work

Synchronous work finishes before the next statement runs. A normal function is usually the clearest choice:

```js
function add(a, b) {
  return a + b;
}

const sum = add(2, 3); // 5 is available immediately
```

Asynchronous work takes time to produce its result, such as a network request or timer. A Promise represents a result that may become available later. It eventually **fulfills** with a value or **rejects** with an error.

```js
const responsePromise = fetch("/api/user");
```

Promises do not make a network request faster. They provide a way to receive its eventual result or error without blocking the rest of JavaScript from running.

## 2. Why returning a local variable fails

This function starts a request but returns before the request finishes:

```js
function getUser() {
  let user;

  fetch("/api/user")
    .then(response => response.json())
    .then(data => {
      user = data; // runs later
    });

  return user; // runs now; returns undefined
}
```

The sequence is:

```text
Call getUser()
    |
    +-- start fetch
    +-- return current value of user (undefined)
    |
    +-- later: response arrives and callback assigns data to user
```

The returned value is already `undefined`. Assigning to the local variable later does not change the value the caller received. The request still runs, but its result is not returned to the caller.

If another part of the program assumes it got a user object, it may fail:

```js
const user = getUser();
console.log(user.name); // TypeError: user is undefined
```

Even when reading `user` does not throw, the caller still does not have the requested data or a reliable signal for when it will be ready.

## 3. Return the Promise

Return the Promise chain so the caller can wait for the data:

```js
function getUser() {
  return fetch("/api/user")
    .then(response => response.json());
}

getUser().then(user => {
  console.log(user.name);
});
```

The caller can also use `async`/`await`:

```js
async function getUser() {
  const response = await fetch("/api/user");
  return response.json();
}

async function showUser() {
  const user = await getUser();
  console.log(user.name);
}

showUser();
```

The important rule is: **return the Promise, not a regular variable you expect to fill in later.** Then the caller can wait for the asynchronous result before using it.

## 4. `.then()` and `async`/`await`

Both styles work with Promises. `.then()` registers a callback for when the Promise fulfills:

```js
getUser().then(user => {
  console.log(user.name);
});
```

`await` makes the steps read more like ordinary sequential code:

```js
async function showUser() {
  const user = await getUser();
  console.log(user.name);
}
```

`await` pauses the current `async` function until the Promise settles. It does **not** pause all of JavaScript:

```js
async function showUser() {
  const user = await getUser(); // showUser pauses here
  console.log(user.name);       // continues when the Promise fulfills
}

showUser();
console.log("This can run while the request is in progress");
```

If there is no other work to do, JavaScript can be idle while waiting. When the Promise settles, the paused function can continue.

## 5. `async` functions and errors

Calling an `async` function always returns a Promise. Returning a normal value fulfills that Promise with the value:

```js
async function test() {
  return "hello";
}

test().then(value => console.log(value)); // hello
```

Throwing an error inside an `async` function rejects the Promise:

```js
async function getRequiredUser(id) {
  if (!id) {
    throw new Error("id is required");
  }

  return getUser();
}
```

You do not need `try/catch` just to reject a Promise. Use `try/catch` when you want to handle an error inside the function. If you catch and then return normally, the Promise fulfills; rethrow the error if it should remain rejected:

```js
async function showUser() {
  try {
    const user = await getUser();
    console.log(user.name);
  } catch (error) {
    console.error("Could not load user:", error);
    throw error;
  }
}
```

## 6. How JavaScript executes code

JavaScript runs synchronous code on the **call stack**, one piece at a time. The browser or Node.js runtime handles operations such as timers and network requests. When their callbacks are ready, they are queued for JavaScript to run.

```text
                 Current synchronous code
                           |
                           v
                      Call stack
                           |
                  stack becomes empty
                           |
                           v
            Drain queued Promise microtasks
                           |
                 microtasks become empty
                           |
                           v
                Run the next queued task
                           |
                           +------ repeat
```

- **Call stack:** Functions currently executing.
- **Microtask queue:** Promise callbacks (`.then`, `.catch`, `.finally`) and continuations after `await`.
- **Task queue:** Callbacks such as timers and many event callbacks.
- **Event loop:** Coordinates when queued work can run.

After the current synchronous work finishes, JavaScript drains queued microtasks before moving on to the next task. Exact runtime details can vary, but this is the useful browser interview model.

### Example: predict the output

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

async function run() {
  console.log("D");
  await null;
  console.log("E");
}

run();

console.log("F");
```

Output:

```text
A
D
F
C
E
B
```

Reasoning:

```text
1. Synchronous code: A, D, F
2. Microtasks: C, then E
3. Timer task: B
```

`C` is queued before `run()` reaches `await`, so it runs before the continuation that prints `E`. Both microtasks run before the timer callback.

## 7. Interview questions and answers

### Question 1: Does `setTimeout(..., 0)` run immediately?

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
```

**Answer:** `1, 3, 2`. The synchronous statements run first. A zero-delay timer is queued to run later; `0` does not mean “interrupt the current code.”

### Question 2: Which runs first, a Promise callback or a timer?

```js
setTimeout(() => console.log("timer"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("sync");
```

**Answer:** `sync, promise, timer`. Synchronous code runs first, then Promise microtasks, then the timer task.

### Question 3: Does a Promise executor run immediately?

```js
console.log("A");

new Promise(resolve => {
  console.log("B");
  resolve();
}).then(() => console.log("C"));

console.log("D");
```

**Answer:** `A, B, D, C`. The Promise executor runs synchronously. The `.then()` callback runs later as a microtask.

### Question 4: What does an `async` function return?

```js
async function getNumber() {
  return 42;
}

console.log(getNumber());
```

**Answer:** A Promise, not the number directly. It fulfills with `42`. Use `await getNumber()` or `getNumber().then(...)` to access the value.

### Question 5: What happens when an `async` function throws?

```js
async function fail() {
  throw new Error("Oops");
}
```

**Answer:** `fail()` returns a rejected Promise. Handle it with `try/catch` around `await fail()`, or with `.catch()`.

### Question 6: Can synchronous work delay a timer?

```js
setTimeout(() => console.log("timer"), 0);

for (let i = 0; i < 1_000_000; i++) {
  // synchronous work
}
```

**Answer:** Yes. JavaScript must finish the loop before it can run the timer callback. Asynchronous callbacks do not interrupt currently running synchronous code.

### Question 7: Why is this function's result `undefined`?

```js
function getUser() {
  let user;
  fetch("/api/user")
    .then(response => response.json())
    .then(data => {
      user = data;
    });
  return user;
}
```

**Answer:** `return user` runs before the request finishes, so it returns the variable's current value, `undefined`. Return the Promise from `fetch` instead, then use `.then()` or `await` to access the eventual data.

## Quick sequence to remember

```text
1. Run synchronous code.
2. When the call stack is clear, drain Promise microtasks.
3. Run the next queued task, such as a timer callback.
4. Repeat.
```

For interview output questions, label each line as **synchronous**, **microtask**, or **task**, then write them in that order.
