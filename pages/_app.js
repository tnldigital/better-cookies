import Head from 'next/head'

import 'styles/index.css'

export default function MyApp({ Component, pageProps }) {
  	return (
	  	<>
			<Head>
				<title>Next.js + Tailwind CSS</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
	  	</>
	)
}