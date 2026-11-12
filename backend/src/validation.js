// Keep validation small this week; focus on the data flow and HTTP semantics.
function normalizeTitle(value) {
  if (typeof value !== 'string') return null;
  const title = value.trim();
  return title.length >= 1 && title.length <= 200 ? title : null;
}

function isValidId(raw) {
  // Avoid accepting 12abc, negatives, decimals or unsafe JS integers.
  return /^[1-9]\d*$/.test(raw) && Number.isSafeInteger(Number(raw));
}

module.exports = { normalizeTitle, isValidId };
