import { Marquee } from '@/components';

import style from './portfolio-marquee.module.css';

export function PortfolioMarquee() {
	return (
		<Marquee className={style['portfolio-marquee']} direction='right'>
			<span className={style['portfolio-marquee-item']}>ПОРТФОЛИО</span>
		</Marquee>
	);
}
