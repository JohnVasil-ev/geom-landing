import type { Props } from './nullable.types';

export function Nullable({ children, condition }: Props) {
	return condition ? children : null;
}
