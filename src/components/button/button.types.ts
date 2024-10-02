import type { HTMLAttributes, ReactNode } from 'react';

export type ButtonMode = 'primary' | 'secondary';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	mode?: ButtonMode;
}
