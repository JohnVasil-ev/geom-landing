import type { Props } from './nullable.types';

export function Nullable({ children, isActive }: Props) {
	return isActive ? children : null;
}
