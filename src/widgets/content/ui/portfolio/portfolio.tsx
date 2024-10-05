import { Anchors } from '@/shared/types';

import style from './portfolio.module.css';
import { BenchmarkMarquee, Gallery, PortfolioMarquee } from './ui';

export function Portfolio() {
	return (
		<section className={style.portfolio} id={Anchors.Portfolio}>
			<PortfolioMarquee />
			<Gallery />
			<BenchmarkMarquee />
		</section>
	);
}
