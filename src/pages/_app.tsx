import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import { Fragment } from 'react';

import { SEO } from '@/widgets';
import { PortalContainer } from '@/components';

import '@/shared/styles/global.css';

const roboto = Roboto({
	weight: ['300', '400', '500'],
	style: ['normal', 'italic'],
	subsets: ['cyrillic', 'latin'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<SEO />
				<title>GEOM</title>
			</Head>
			<style jsx global>{`
				html {
					font-family: ${roboto.style.fontFamily};
				}
			`}
			</style>

			<Component {...pageProps} />
			<PortalContainer />
		</>
	)
}
