import Link from "next/link"

export default function Button({
	href = "",
	onClick = () => {},
	disabled = false,
	size = "",
	color = "",
	square = false,
	children = null,
	block = false,
}) {
	const baseClass = `flex space-x-2 border items-center justify-center font-medium rounded-md ${
		block ? "w-full" : "w-auto"
	} ${square ? "px-1 py-1" : "px-4 py-2"} transition duration-200`

	let sizeClass
	switch (size) {
		case "sm":
			sizeClass = "text-sm"
			break
		default:
			break
	}

	let customClass
	switch (color) {
		case "blue":
			customClass =
				"bg-blue-600 border-blue-600 text-white hover:bg-blue-500 hover:border-blue-500"
			break
		case "green":
			customClass =
				"bg-green-600 border-green-600 text-white hover:bg-green-500 hover:border-green-500"
			break
		case "black":
			customClass =
				"bg-black border-black text-white hover:bg-gray-800 hover:border-gray-800"
			break
		case "white":
			customClass = "bg-white border-gray-200 text-gray-600 hover:bg-gray-100"
			break
		case "grey":
		default:
			customClass =
				"bg-gray-800 border-gray-800 text-white hover:bg-gray-700 hover:border-gray-700"
			break
	}

	const finalClass = `${baseClass} ${customClass} ${sizeClass}`

	return href ? (
		<Link href={href} className={finalClass}>
			{children}
		</Link>
	) : (
		<button
			type="button"
			className={finalClass}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
