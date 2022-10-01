export function isValidJSON(maybeJSON: unknown) {
  if (typeof maybeJSON !== 'string') {
    return false;
  }

  try {
    JSON.parse(maybeJSON);
    return true;
  } catch (err: unknown) {
    return false;
  }
}
