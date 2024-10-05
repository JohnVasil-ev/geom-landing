import { ReactNode } from 'react';
import type { MarqueeProps } from 'react-fast-marquee';

export interface Props extends MarqueeProps {
	children: ReactNode;
}
