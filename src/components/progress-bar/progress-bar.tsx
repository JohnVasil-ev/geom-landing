import { useCallback, useEffect, useState } from 'react';

import styles from './progress-bar.module.css';

export function ProgressBar() {
	const [width, setWidth] = useState<number>(0);

	const calculateProgress = useCallback(() => {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;
		return scrollTop / (scrollHeight - clientHeight) * 100;
	}, [])

	useEffect(() => {
		setWidth(calculateProgress());
		const handleScroll = () => requestAnimationFrame(() => setWidth(calculateProgress()));
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [calculateProgress]);

	return (
		<div className={styles['progress-bar']}>
			<div className={styles.progress} style={{ width: `${width}%` }} />
		</div>
	);
}
