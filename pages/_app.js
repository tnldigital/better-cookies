import Head from "next/head"
import Script from "next/script"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Toaster, toast } from "sonner"

// Styles
import "@/styles/global.css"

// Fonts
import { Inter, Space_Grotesk } from "next/font/google"
// eslint-disable-next-line no-unused-vars
const inter = Inter({
	subsets: ["latin"],
})
// eslint-disable-next-line no-unused-vars
const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
})

export default function MyApp({ Component, pageProps }) {
	// Access router
	const router = useRouter()
	const { message } = router.query

	/**
	 * Display message from query param if we have one
	 */
	useEffect(() => {
		if (router.isReady && message) {
			toast(message)
		}
	}, [router, message])

	return (
		<>
			<Head>
				<title>Better Cookies | Making the internet a better place</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Component {...pageProps} />
			<Toaster />
			<Script id="cookie-banner">
				{`
          window.BetterCookies.init({
            onInit: function () { },
            onAccept: function () { },
          })
        `}
			</Script>
		</>
	)
}
