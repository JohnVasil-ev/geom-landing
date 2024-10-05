import BaseMarquee from 'react-fast-marquee';

import type { Props } from './marquee.types';

export function Marquee({ children, ...props }: Props) {
	return (
		<BaseMarquee autoFill {...props}>
			{children}
		</BaseMarquee>
	);
}
