import { mergeClasses } from '@/shared/utils';

import styles from './button.module.css';
import { Props } from './button.types';

export function Button({ children, className, mode = 'primary', ...props }: Props) {
	return (
		<button className={mergeClasses(styles.button, styles[mode], className)} {...props}>
			{children}
		</button >
	);
}
