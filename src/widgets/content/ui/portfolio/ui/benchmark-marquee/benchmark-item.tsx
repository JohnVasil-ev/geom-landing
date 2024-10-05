import style from './benchmark-marquee.module.css';

export function MarqueeItem() {
	return (
		<span className={style['marquee-item']}>
			ВАШ ВИЗУАЛЬНЫЙ ОРИЕНТИР
			<span className={style['marquee-item-dot']}>•</span>
		</span>
	);
}
