import Head from 'next/head'

import 'styles/index.css'

export default function MyApp({ Component, pageProps }) {
  	return (
	  	<>
			<Head>
				<title>Recippy | No nonsense Recipes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
	  	</>
	)
}