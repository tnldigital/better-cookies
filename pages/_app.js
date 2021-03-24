import Head from 'next/head'

import 'styles/index.css'

export default function MyApp({ Component, pageProps }) {
  	return (
	  	<>
			<Head>
				<title>Better Cookies | Making the internet a better place</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
	  	</>
	)
}