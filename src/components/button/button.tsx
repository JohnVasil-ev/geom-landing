import styles from './button.module.css';
import { Props } from './button.types';

export function Button({ children, mode = 'primary', ...props }: Props) {
	return (
		<button className={`${styles.button} ${styles[mode]}`} {...props}>
			{children}
		</button >
	);
}
