import assert from 'node:assert/strict';
import { test } from 'node:test';
import { isValidId, normalizeTitle } from '../lib/validation';

test('trim a valid title', () => assert.equal(normalizeTitle('  Learn SQL  '), 'Learn SQL'));

test('reject blank, non-string, and oversized titles', () => {
  assert.equal(normalizeTitle('  '), null);
  assert.equal(normalizeTitle(12), null);
  assert.equal(normalizeTitle('a'.repeat(201)), null);
});

test('validate task ID', () => {
  assert.equal(isValidId('12'), true);
  assert.equal(isValidId('12abc'), false);
  assert.equal(isValidId('0'), false);
});
