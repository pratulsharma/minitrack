const test = require('node:test');
const assert = require('node:assert/strict');
const { normalizeTitle, isValidId } = require('../src/validation');

test('trim a valid title', () => assert.equal(normalizeTitle('  Learn SQL  '), 'Learn SQL'));
test('reject blank and oversized titles', () => {
  assert.equal(normalizeTitle('  '), null);
  assert.equal(normalizeTitle('a'.repeat(201)), null);
});
test('validate task ID', () => {
  assert.equal(isValidId('12'), true);
  assert.equal(isValidId('12abc'), false);
  assert.equal(isValidId('0'), false);
});
