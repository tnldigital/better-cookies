import Button from "components/Button"
import Header from "components/Header"
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline"
import { toast } from "sonner"
import Configure from "./v1/sdk/configure"

const SDK = `<script src="https://cookies.so/v1/basic/sdk.js"></script>
<script>
  window.BetterCookies.init({
      policyLink: '#',
      onInit: function () { },
      onAccept: function () { },
  })
</script>`

export default function Home() {
	return (
		<main className="flex-1 bg-hero-pattern bg-top bg-contain bg-no-repeat">
			<Header />
			<div className="prose mx-auto py-6 lg:py-12">
				<h3>How do I install it?</h3>
				<p>
					Simply copy and paste the code snippet below into your website. The
					banner will automatically appear on page load and persist the users
					selection across subsequent sessions.
				</p>
				<div className="relative">
					<pre>{SDK}</pre>
					<div className="absolute bottom-3 right-3">
						<Button
							color="white"
							size="sm"
							onClick={() => {
								navigator.clipboard.writeText(SDK)
								toast.success("Copied SDK to keyboard")
							}}
							square
						>
							<DocumentDuplicateIcon className="w-5 h-5 text-black" />
						</Button>
					</div>
				</div>
				<h3>Configuration</h3>
				<table>
					<thead>
						<tr>
							<th>Option</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<i>policyLink</i>
							</td>
							<td>
								If present, we will embed a link to your internal cookie or
								privacy policy.
							</td>
						</tr>
						<tr>
							<td>
								<i>onInit</i>
							</td>
							<td>
								This callback will fire once the cookie banner has been
								initialised.
							</td>
						</tr>
						<tr>
							<td>
								<i>onAccept</i>
							</td>
							<td>
								This callback will fire once the user has clicked on{" "}
								{`"accept"`}.
							</td>
						</tr>
					</tbody>
				</table>
				<div className="flex gap-3 justify-between items-end">
					<div>
						<h3>Advanced</h3>
					</div>
					<div className="pb-3.5">
						<span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
							Coming soon
						</span>
					</div>
				</div>
				<p>
					Coming soon users will be able to opt-in to specific cookie groups
					(e.g. functional, marketing, statistics) so you will have more
					granular control over cookie consent.
				</p>
				<iframe src="/v1/sdk/configure" width="100%" height="600" />
				<p>You will also be able to track key metrics such:</p>
				<ul>
					<li>What type of cookies are being enabled</li>
					<li>How many users have opted-in</li>
					<li>How many users have opted-out</li>
					<li>How many users ignore the prompt</li>
				</ul>
			</div>
		</main>
	)
}
