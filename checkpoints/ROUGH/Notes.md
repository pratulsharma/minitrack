const closu = () =>{
    let count = 0
    return function test(){
        return count++
    }
}

const check = closu()
const check1 = closu()

console.log(check())
console.log(check())
console.log(check())
console.log(check())

// promises 

// Promise --> represent result or error available later 
// promise represents results or error available later 
// await --> its call the async function or promise -> it pauses until the promise settles 
// await is used to call a promise and pause until it settles -> it does not stop execution 
// closures --> it retains the variable value and passes on to the callback function 
// stream --> http request bodies or payload arrive in chunks --> these are called streams 


// postgress DB install 
// run the db -> start postgresql@17
// createdb minitrack --> this creates the database

//Now we create the table schema in the database --> 
// CREATE TABLE if NOT exists tasks (
// ID  -- BIGINT (64 bit integer) GENERATED ALWAYS AS IDENTITY PRIMARY KEY
// TITLE -- TEXT NOT NULL CHECK (char_length(title) BETWEEN 1 and 200)
// DONE BOOLEAN NOT NULL DEFAULT false
// created_at -- TIMESTAMPTZ NOT NULL DEFAULT now())

// Here is the final schema 
```
-- Re-runnable Week 1 schema. Do not DROP the table each time you run this.
CREATE TABLE IF NOT EXISTS tasks (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL CHECK (char_length(title) BETWEEN 1 AND 200),
  done BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- A small starter set, only inserted if the table is still empty.
INSERT INTO tasks (title, done)
SELECT 'Learn the JavaScript event loop', TRUE
WHERE NOT EXISTS (SELECT 1 FROM tasks);
INSERT INTO tasks (title, done)
SELECT 'Build a full-stack task tracker', FALSE
WHERE (SELECT COUNT(*) FROM tasks) = 1;

```
-- in summary create table IF NOT EXISTS tasks (
// ID TYPE, -> int, string, date, condition default value etc)
// insert the dummy data in the table --> why ?  so as to seed the table 

// INSERT INTO tasks (title,done)
// SELECT 'learn js' TRUE
// WHERE NOT EXISTS (SELECT 1 FROM TASKS) --> this checks if 1 rows already existed --> whether the table was empty or not

// Now we will create a db driver 
// what does the db driver do? --> it creates the pool in the connection 
// keeping a small number of reusable connections is cheaper that creating new 
// connection every time
// what does the pool do? --> one http connection to the db can support multiple db tranactions -->
// for example say if have pool of 5 --> 5 parallel interactions can happen with the db 
// how we come up with the pool size? --> later --> depends upon the traffic I think?
-- we will create this db driver in the frontend/lib/db.ts 
>[!WARNING]  
 > we use this in the db driver so that -  In Next.js development, hot reloading can reload modules, causing Option 2 to create additional pools. Your original globalThis version helps avoid that problem.
 > const globalForPg = globalThis as typeof globalThis & { taskPool?: Pool };
- Now we will create a functions that we are going to use in the BE calls for DB interactions 
- listtask and create tasks --> so obviously we need task object 
- since we need task object we need to define the type of the task object 
- we will read and write in this function 
- learn about using the pool for query 
- import the getPool function that returned the pool we created
- we use getPool.query<TaskRow>(`SELECT ..) --> to query the DB 
- to insert/write data in the DB 
> `INSERT INTO tasks (title) VALUES ($1) RETURNING id, title, done, created_at`,[title]
- Note that if we define the type of an object say 
> type Person = {
    fname: string;
    lname: string
} 
and then we want to use the array of this object then 
we use Person[]
[Open frontend/lib/tasks.ts](../../frontend/lib/tasks.ts)
- Ok we learned how to read and write into the postgres DB 
- Note that PG returns the id as a string even though we defined it as a bigint in the schema 
- Now what are we going to do? 
- validate the input request --> whether the incoming json is correct
- if the object is correct
- if yes then create the record in the db; if not send back the error 
- we will do all this in the route handler
- note that all the functions (GET, PUT, POST etc) in route handler are async 
- always use try/catch inside the async function
- note that the GET --> we respond with the headers with Cache-Control; can we send this hearsd with the POST? may be
- also create a route for the healthcheck 
- SQL Interview drill - find all the done tasks 
> SELECT id, title, done, created_at from tasks WHERE done = true ORDER BY id;
- updating the SQL table  use SET 
> UPDATE tasks SET done = true WHERE id = 1 RETURNING *;
- count the items 
> SELECT COUNT(*) FROM tasks WHERE done = false 
###### Q1. Why use $###### Q1. Why use $1 parameters instead of building SQL with template strings?
- so that sql query is separate from the data --> to avoid sql injection
- so that sql query cannot be used as executable as is 
![alt text](image.png)
- 
###### Q2. Why use postgres RETURING clause? 
- so that user know what data/row is updated, deleted or inserted on the same round trip
###### Q3. Is a generated database ID guaranteed to be gap-free?
- no, only uniqueness is guaranteed; 
- don't use ids for receipts etc.. because hacker would find out the sequence. 
- Senior follow-up: IDs should not be used as business-visible sequence numbers such as invoice numbers when the business requires a special gap policy. That requirement needs separate domain logic and careful concurrency design.
###### Q4.What happens when the database connection pool is full?
- waits in the pool queue
- timeout if nothing is available in a given timeout 
- Example: With a pool limit of 10, the first 10 long-running
queries can use connections while the 11th request waits. If requests arrive faster than queries finish, latency and queue length grow.
- Senior follow-up: Production configuration should coordinate application-instance count, pool size, PostgreSQL's connection limit, query timeouts, and pool wait timeouts. Scaling to 20 app instances with a pool of 20 could potentially request 400 database connections.
###### Q5 What should happen if PostgreSQL becomes unavailable?
- code should catch it 
> try {
  const tasks = await listTasks();
  return Response.json(tasks);
} catch (error) {
  console.error('Unable to list tasks', error);
  return Response.json(
    { error: 'Service temporarily unavailable' },
    { status: 503 },
  );
}
- 
> Senior follow-up: Retries are safest for transient failures and idempotent operations. Blindly retrying an INSERT after an uncertain network failure can create duplicates, so creation APIs may need an idempotency key or another deduplication strategy.

- now we will start the FE with create-next-app rather than completed code 
- here we start with deleting the existing main page.tsx code 
>11/15/26
- So we will write a server side code that will directly invoke the db get the output 
- and display as a list of tasks ; a new thing we will use us suspence -> we use it for 
- providing the loading...
- a new thing I am learning here is that when this server based page is invoking and DB its not storing the output in a state; its storing it in JS variable and mapping it through to display the list of tasks 
- since we are starting from scratch again I need to setup the BE again -- so what all was in the backend 
- tasks.ts --> functions that was interacting with the DB listTasks and writeTask function 
- route handles in api/tasks (so that when we .. checj why the path for the api matters) that will handle the api calls; this route handler would intern call the listTasks and writeTasks functions from tasks.ts file and handle GET and POST requests. 
- we also need a validation --> of the title --> is it string? if yes then trim the end
- we also need a dababase driver function (in db.ts) -> this is for creating pools and then querying the DB using this driver
- we also need DB schema and the type for the tasks object/row 
- now lets work on the FE 
- first write a server page that will directly invoke the listTask and display the list of tasks 
- we will create a TaskList function that will 1) invoke the listTasks function -> assign it to some variable and then display the list --> 

>11/16/26
- handling a map in react to display the list 
  - generally use li and inside that use a key -> something unique 
  - use span to display the items inside it 
  - ARIA means Accessible Rich Internet Applications.
  - ARIA attributes help assistive technologies, such as screen readers, understand an interface
  - so some stuff learned along the way --> we can use suspense with fallback 
  >     <Suspense fallback={<p>Loading tasks...</p>}> <TaskList /> </Suspense>
  - we also learn that we can use conditionals in the class, also use line through based on the condition
  >     <span className={r.done ? "text-slate-300 textline-through" : "" }>{r.title}</span>
  - also checkbox
  >      <span aria-hidden="true">{r.done ? '✅' : '⬜'}</span>

 #### Interview questions: 

 - what is the difference between server and client components?
   - the server component can directly access the server side resources like postgres db, it does not send the js to browser.
   - client component is needed when we need interactive pages -> forms etc - forms etc, when we need useState etc. 
 - what is hydration?
    - a page is rendered by server side, then on top of it a clint side page updates it. 
    - Common problem: A hydration mismatch occurs when the client initially renders different content from the server, for example by rendering Date.now() or a browser-only value during the first render without handling the difference.
- why not use initial tasks using useEffect?
    - so that the first page load uses server side component, it also saves the extra trip to backend. 
- Why must secrets stay out of browser code?
    - browser code can be instected by the user. Secrets need to be hidden.
-  What is a React list key, and why should it be stable?
Interview-ready answer: A key identifies an item among its siblings so React can match that item between renders. A stable database ID helps React preserve the correct component state and update only the items that were inserted, removed, or reordered.

> tasks.map(task => <li key={task.id}>{task.title}</li>)
- Using the array index can cause state to follow the wrong visible item after a deletion or reorder. If the first item is removed, every later index changes even though those task identities did not.

- Important nuance: key is used internally by React and is not passed to the component as a normal prop. Pass task.id separately if the child component needs the ID.

> day-05
- Now we will add PATCH (update) and DELETE to the route handle
- PATCH is update ; note that for the update/patch we need primary key (id)
- so the pattern is 'Update <tablename> SET <attributename> = $1 WHERE <primarykey> = $2 RETURNING id, title,done,created_at',[attributename,primarykey]
- so first we will use the function - tasks.ts (thats the one in the /lib) and then call it in the route handler
- for deleting we use 'DELETE FROM tasks WHERE id=$1 RETURNING id', [id]
- now we will update the route handler in /api/tasks/[id]/route.ts --> note that its inside [id] directory
- one important thing to note is that when we are updating/patching or deleting a record/task we need to send the id in th path; so we need to capture the if from the path in route handler
- we get it from the RouteContext -> Note that we need to define the type of RouteContext 
> type RouteContext = { params: Promise<{id: string}> }

- for route handler i noticed that all awaits are inside try/catch --> may be due to different type of failures need different type of error response. 
- Note that in delete route handler we want to use {id} in the catch block so de define it before (or outside the try block)
- Now we want to work on the form --> a real client side page in which the user will add a new task and add it in the db

- 
- what is the update pattern --> we need primary key so that we know which row to update?
- we also need to know which attribute to update --> for that we use set blah blah
- Update tablename set fname $1 where primarykey $2 Returning id,
- what do need in the delete? we also need primary key in the delete --> 
- note that for the delete and update we need id; the path will have the id ../tasks/id/
- the FE we create the dir structure --> tasks/[id]/route.ts 
- type RouteContext = {params: Promise<id: string>}

>> 11/24/2026

- controlled input --> where the form input value is a state --> defined by the user input can be changed by onChange; 
- post validation --> possibly the validation of the user input 
- persistance --> db 
- failure boundary --> defined in the validation 
- onChange changes the used input --
- onsubmit submits the form object 
- preventDefault prevents the form reload 
 >> 11/26/2026
 I have 3 hrs 30 mins --> lets do a 3 hrs marathon 
- creating POST function for route.ts 
- it takes the query input and provides the response - a promise because its a async function 
- it parses the input; validates the body and then get whatever is needed from the body and then sends 
-  a response back; 
- The Request and Response are standard web API types -> Request has headers, body, url and more. Response is what goes back 
- I will focus on add-task component - a fe component; what does this component do? --> 
  - this component has a form that allows user to add the task; post the task and add it in the backend db -> postgres db 
  - for this kind of FE component that has form we typicaly use - states for 
    - saving the form input
    - displaying error 
    - loading/busy
    - for the post we can also refresh the server side data. 
    - So how I am going to approach this --> 
    - 1) define 'use client'; import all that is needed -> types, libs, functions 
    - 2) define the function and its arguments and type of the arguments 
    - 3) define the states needed 
    - 4) define the form - inputs - onChange ; button 
    - 5) define the error block 
    - 6) define the list block that displays the list of tasks
  - I have decided to use the the old way of fetching the tasks - when the page loads, useEffect runs and then calls the get API to fetch the data 
 

 - Brain dump -> start with writing the input 