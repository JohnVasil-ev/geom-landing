import { Anchors } from '@/shared/types';

import style from './content.module.css';

export function Content() {
	return (
		<main>
			<div className={style.hero} id={Anchors.Hero} />
			<div className={style.about} id={Anchors.About} />
		</main>
	);
}
