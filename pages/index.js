import { useState } from "react"

const recipe = {
	title: 'Chicken & Chorizo Jambalaya',
	time: '45 Minutes', 
	image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
	ingredients: [
		{
			title: 'Olive oil',
			method: null, 
			amount: '1 tsbp'
		},
		{
			title: 'Chicken breasts',
			method: 'Diced', 
			amount: '2'
		},
		{
			title: 'Onion',
			method: 'Diced', 
			amount: '1'
		},
		{
			title: 'Red pepper',
			method: 'Thinly sliced', 
			amount: '1'
		},
		{
			title: 'Garlic cloves',
			method: 'Crushed', 
			amount: '2'
		},
		{
			title: 'Chorizo',
			method: 'Sliced', 
			amount: '75g'
		},
		{
			title: 'Long grain rice',
			method: null, 
			amount: '250g'
		},
		{
			title: 'Canned plum tomatoes',
			method: null, 
			amount: '400g'
		},
		{
			title: 'Chicken stock',
			method: null, 
			amount: '350ml'
		},
		{
			title: 'Cajun seasoning',
			method: null, 
			amount: '1 tsbp'
		},
	],
	methods: [
		'Heat 1 tbsp olive oil in a large frying pan with a lid and brown 2 chopped chicken breasts for 5-8 mins until golden.',
		'Remove and set aside. Tip in the 1 diced onion and cook for 3-4 mins until soft.',
		'Add 1 thinly sliced red pepper, 2 crushed garlic cloves, 75g sliced chorizo and 1 tbsp Cajun seasoning, and cook for 5 mins more.',
		'Stir the chicken back in with 250g long grain rice, add the 400g can of tomatoes and 350ml chicken stock. Cover and simmer for 20-25 mins until the rice is tender.'
	]
}

const Header = () => {
	return (
		<header className="flex justify-between items-center py-4">
			<div className="font-bold text-3xl">Recippy.</div>
			<div className="flex gap-8 items-center">
				<a href="#" className="text-gray-600 text-lg">Recipes</a>
				<svg className="heart w-6 h-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
			</div>
		</header>
	)
}

const RecipeList = () => {
	return (
		<div className="py-8">
			{recipe.ingredients.map((item, index) => (
				<div key={index} className="flex justify-between items-center py-3">
					<div className="flex gap-2">
						<span className="font-bold">{item.title}</span>
						{item.method && <span className="text-gray-600">/ {item.method}</span>}
					</div>
					<div className="font-bold">
						{item.amount}
					</div>
				</div>
			))}
		</div>
	)
}

const RecipeMethod = () => {
	return (
		<div className="py-4">
			<h2 className="font-bold text-3xl mb-2">Method</h2>
			<div className="py-4">
				{recipe.methods.map((item, index) => (
					<div key={index} className="flex gap-8 py-4">
						<span className="font-bold text-4xl">{index + 1}.</span>
						<p className="text-gray-800 text-lg">
							{item}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

const Recipe = () => {

	const [ selectingAmount, setSelectingAmount ] = useState(false)

	return (
		<div className="py-8 lg:py-12">

			<a href="#" className="text-gray-600 underline">Back to all recipes</a>

			<div className="flex justify-between py-4 items-center">
				<h1 className="font-bold text-4xl leading-tight">{recipe.title}</h1>
				<div className="flex items-center gap-4">
					<svg className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor" class="clipboard-copy w-6 h-6"><path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path><path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"></path></svg>
					<svg className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
				</div>
			</div>

			<div className="flex gap-4">
				<div className="relative">
					<button onClick={() => setSelectingAmount(!selectingAmount)} className="flex gap-2 border rounded-md items-center p-2 font-bold focus:outline-none">
						<svg viewBox="0 0 20 20" fill="currentColor" className="user w-4 h-4"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
						<span>2</span>
						<svg viewBox="0 0 20 20" fill="currentColor" className="chevron-down w-4 h-4"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</button>
					{selectingAmount && <div className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg">
						<div className="py-1 flex flex-col rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
							<button className="text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">1 person</button>
							<button className="text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">2 people</button>
							<button className="text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">4 people</button>
						</div>
					</div>}
				</div>
				<div className="flex text-gray-600 items-center gap-2">
					<svg viewBox="0 0 20 20" fill="currentColor" class="clock w-4 h-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
					{recipe.time}
				</div>
			</div>

			<RecipeList />

			<RecipeMethod />

			<img className="rounded-lg shadow-lg" src={recipe.image} />

		</div>
	)
}

export default function Home() {
	return (
		<div className="container mx-auto px-6 lg:px-0">

			<Header />
			<Recipe />

		</div>
	)
}
