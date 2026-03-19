export const NON_RETRYABLE_STATUS_CODES = new Set([400, 401, 403, 409]);

export const ENDPOINT_SPECIFIC_FAILURES = new Map([['getPlayerByName', new Set([404])]]);
