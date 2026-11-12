// Predict each output BEFORE running `node exercises/js-predictions.js`.
console.log('1. Start');
setTimeout(() => console.log('1. Timer'), 0);
Promise.resolve().then(() => console.log('1. Promise'));
console.log('1. End');

function makeCounter() {
  let count = 0;
  return () => ++count; // Closure retains count between calls.
}
const counter = makeCounter();
console.log('2.', counter(), counter());

async function getValue() { return 7; }
console.log('3. Sync');
getValue().then(value => console.log('3. Async', value));
console.log('3. End');
