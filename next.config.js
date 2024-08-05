module.exports = {
	async headers() {
		return [
			{
				source: "/v1/basic/sdk.js",
				headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
			},
		]
	},
}
