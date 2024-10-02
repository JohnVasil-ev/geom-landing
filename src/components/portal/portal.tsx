import { createPortal } from 'react-dom';

import type { Props } from './portal.types';

export function Portal({ children, isActive, container = 'portal' }: Props) {
	return isActive ? (
		<>
			{createPortal(children, document.getElementById(container)!)}
		</>
	) : null;
}
