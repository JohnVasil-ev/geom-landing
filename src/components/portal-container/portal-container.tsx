import { useEffect, useRef } from 'react';

export function PortalContainer() {
	const portalContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!portalContainerRef.current) return;
	}, [portalContainerRef]);

	return <div ref={portalContainerRef} id='portal' />;
}
