/**
 * `IS_LOCAL` variable using for local debugging
 */
export const IS_LOCAL = (process?.env?.APP_MODE ?? 'production') === 'local';

/**
 * `IS_DEVELOPMENT` variable using for displaying non-production information
 */
export const IS_DEVELOPMENT = (process?.env?.APP_MODE ?? 'production') !== 'production';

/**
 * `WITH_DEBUGGER` variable using for stopping app with debugger
 */
export const WITH_DEBUGGER = (Boolean(process?.env?.APP_DEBUGGER) ?? false);
