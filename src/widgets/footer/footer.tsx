import { Marquee } from '@/components';
import { Anchors } from '@/shared/types';

import style from './footer.module.css';

export function Footer() {
	return (
		<footer className={style.footer} id={Anchors.Contacts}>
			<div className={style.info}>
				<hr className={style.divider} />
				<p className={style['info-text']}>БУДЕМ РАДЫ</p>
				<p className={style['info-text']}>СОТРУДНИЧЕСТВУ</p>
				<p className={style['info-text']}>И НОВЫМ ДРУЗЬЯМ!</p>
			</div>
			<Marquee className={style.marquee} direction='right' speed={50}>
				<span className={style['marquee-text']}>INFO@GEOMS.RU</span>
			</Marquee>
			<div className={style.contacts}>
				<em className={style.year}>&copy;{new Date().getFullYear()}</em>
				<span className={style.email}>Email:&nbsp;&nbsp;info@geoms.ru</span>
			</div>
		</footer>
	);
}
