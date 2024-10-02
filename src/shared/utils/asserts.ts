import { AssertionError } from 'assert';

import { IS_DEVELOPMENT, IS_LOCAL, WITH_DEBUGGER } from '../constants';

export function assertEq<T>(condition: unknown, assertionMessage: string = 'Assertion failed!'): condition is T {
	if (IS_LOCAL && !Boolean(condition)) {
		if (WITH_DEBUGGER) debugger;
		else throw new AssertionError({ message: assertionMessage });
	}

	if (IS_DEVELOPMENT && !Boolean(condition)) {
		console.error(assertionMessage);
	}

	return Boolean(condition);
}
