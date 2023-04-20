import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
	return (
		<Html className="h-full bg-white">
			<Head />
			<body className="h-full">
				<Main />
				<NextScript />
				<Script
					src="https://cookies.so/v1/basic/sdk.js"
					strategy="beforeInteractive"
				/>
			</body>
		</Html>
	)
}
