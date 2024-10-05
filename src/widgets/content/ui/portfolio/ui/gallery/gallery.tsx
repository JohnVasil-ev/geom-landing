'use client'
import Image from 'next/image';
import { useLayoutEffect, useState } from 'react';

import { staticImages } from './gallery.constants';
import style from './gallery.module.css';

export function Gallery() {
	const [windowSize, setWindowSize] = useState<{ height: number; width: number }>({ width: 0, height: 0 });

	useLayoutEffect(() => {
		function handleResize() {
			setWindowSize({ height: window.innerHeight, width: window.innerWidth });
		}
		handleResize();
		setWindowSize({ height: window.innerHeight, width: window.innerWidth });
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={style['gallery-wrapper']}>
			<div className={style.gallery}>
				{staticImages.map((src, index) => (
					<div key={index} className={style['gallery-item']}>
						<Image
							src={src}
							alt={`photo-${index}`}
							width={windowSize.width / 4}
							height={windowSize.height / 5}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
