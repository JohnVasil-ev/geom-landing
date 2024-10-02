import { ReactNode } from 'react';

export interface Props {
	children: ReactNode;
	isActive: boolean;
	container?: string;
}
