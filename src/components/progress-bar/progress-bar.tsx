import { useEffect, useState } from 'react';

import styles from './progress-bar.module.css';

export function ProgressBar() {
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => requestAnimationFrame(() => setWidth(
			document.documentElement.scrollTop /
			(document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
		));
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={styles['progress-bar']}>
			<div className={styles.progress} style={{ width: `${width}%` }} />
		</div>
	);
}
