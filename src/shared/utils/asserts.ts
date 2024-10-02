import { AssertionError } from 'assert';

import { IS_DEVELOPMENT } from '../constants';

export function assertEq(condition: unknown, assertionMessage: string = 'Assertion failed!') {
	if (IS_DEVELOPMENT && !Boolean(condition)) {
		throw new AssertionError({ message: assertionMessage });
	}
}
