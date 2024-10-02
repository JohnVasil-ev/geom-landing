import { Sidebar } from '@/features';
import { ProgressBar } from '@/components';

import styles from './header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<ProgressBar />
			<Sidebar />
		</header>
	);
}
