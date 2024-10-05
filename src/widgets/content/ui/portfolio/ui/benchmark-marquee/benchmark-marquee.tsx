import { Marquee } from '@/components';

import { MarqueeItem } from './benchmark-item';
import style from './benchmark-marquee.module.css';

export function BenchmarkMarquee() {
	return (
		<div className={style.marquee}>
			<Marquee direction='right'><MarqueeItem /></Marquee>
			<Marquee direction='left'><MarqueeItem /></Marquee>
		</div>
	);
}
