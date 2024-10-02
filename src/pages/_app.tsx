import { AppProps } from 'next/app';
import Head from 'next/head';

import { SEO } from '@/widgets';
import { PortalContainer } from '@/components';

import '@/shared/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<SEO />
				<title>GEOM</title>
			</Head>

			<Component {...pageProps} />
			<PortalContainer />
		</>
	)
}
