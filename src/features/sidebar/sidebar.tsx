import { useCallback, useEffect, useRef, useState } from 'react';

import { Button, Portal } from '@/components';
import { Anchors } from '@/shared/types';
import { assertEq } from '@/shared/utils';

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
		document.body.classList.remove('model-open');
		timerIdRef.current = setTimeout(() => setIsActive(false), 500);
	}, [isActive]);

	const onAnchorClick = (anchorID: Anchors) => {
		const anchorEl = document.getElementById(anchorID);
		if (!assertEq<HTMLElement>(anchorEl, `Anchor '${anchorID}' is not found!`)) {
			return;
		}
		onSidebarClose();
		setTimeout(() => anchorEl.scrollIntoView({ behavior: 'smooth' }), 0);
	};

	useEffect(() => {
		const onCloseByKey = ({ code }: KeyboardEvent) => {
			if (code !== 'Escape' || !isActive) return;
			onSidebarClose();
		};

		if (isActive) {
			setOpacity(0.6);
			setTranslateX('0%');
			document.body.classList.add('model-open');
			window.addEventListener('keydown', onCloseByKey);
		}

		return () => {
			onSidebarClose();
			window.removeEventListener('keydown', onCloseByKey);
		};
	}, [isActive, onSidebarClose]);

	return (
		<>
			<Button className={style['open-button']} onClick={onSidebarOpen}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff" stroke-width="2">
					<path d="M4 7h16M4 12h16M4 17h16" />
				</svg>
			</Button>

			<Portal isActive={isActive}>
				<div className={style['sidebar-wrapper']}>
					<div className={style.backdrop} style={{ opacity }} onClick={onSidebarClose} />
					<div className={style.sidebar} style={{ transform: `translate(${translateX}, 0%)` }}>
						<Button className={style['close-button']} onClick={onSidebarClose}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000000" stroke-width="1">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</Button>

						<div className={style.anchors}>
							<span className={style.anchor} onClick={() => onAnchorClick(Anchors.Hero)}>
								Домой
							</span>

							<span className={style.anchor} onClick={() => onAnchorClick(Anchors.About)}>
								О Нас
							</span>

							<span className={style.anchor} onClick={() => onAnchorClick(Anchors.Portfolio)}>
								Портфолио
							</span>

							<span className={style.anchor} onClick={() => onAnchorClick(Anchors.Contacts)}>
								Контакты
							</span>
						</div>
					</div>
				</div>
			</Portal>
		</>
	);
}
