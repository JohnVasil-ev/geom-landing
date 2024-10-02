import { useCallback, useEffect, useRef, useState } from 'react';

import { Button, Portal } from '@/components';

import style from './sidebar.module.css';

export function Sidebar() {
	const timerIdRef = useRef<NodeJS.Timeout>();
	const [isActive, setIsActive] = useState<boolean>(false);
	const [opacity, setOpacity] = useState<number>(0);
	const [translateX, setTranslateX] = useState<string>('100%');

	const onSidebarOpen = () => {
		if (isActive) return;
		if (timerIdRef.current) clearTimeout(timerIdRef.current);
		setIsActive(true);
	}

	const onSidebarClose = useCallback(() => {
		if (!isActive) return;
		setOpacity(0);
		setTranslateX('100%');
		timerIdRef.current = setTimeout(() => setIsActive(false), 500);
	}, [isActive]);

	useEffect(() => {
		if (isActive) {
			setOpacity(0.6);
			setTranslateX('0%');
			document.body.classList.add('model-open');
		}
		return onSidebarClose;
	}, [isActive, onSidebarClose]);

	return (
		<>
			<Button onClick={onSidebarOpen}>Open sidebar</Button>

			<Portal isActive={isActive}>
				<div className={style['sidebar-wrapper']}>
					<div className={style.backdrop} style={{ opacity }} onClick={onSidebarClose} />
					<div className={style.sidebar} style={{ transform: `translate(${translateX}, 0%)` }}>
						Sidebar
					</div>
				</div>
			</Portal>
		</>
	);
}
