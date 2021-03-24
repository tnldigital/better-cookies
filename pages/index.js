import Link from "next/link"

const features = [
   {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>,
      text: <span>It's fully<br /> responsive.</span>
   },
   {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      text: <span>Install on your<br /> site in seconds.</span>
   },
   {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>,
      text: <span>Customise to<br /> fit your brand.</span>
   },
   {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>,
      text: <span>Monitor<br /> engagement.</span>
   },
]

export default function Home() {

   const Header = () => {

      const NavItem = ({children, href}) => {
         return (
            <Link href={href}>
               <a className="px-2 py-2 rounded-md bg-white duration-100 hover:opacty-80">{children}</a>
            </Link>
         )
      }

      return (
         <div className="container mx-auto">
            <div className="flex justify-between py-6">
               <div>
                  <h1 className="font-bold text-2xl text-gray-600 bg-white px-2 py-2 rounded-md">
                     <span className="text-gray-900">better</span>cookies.
                  </h1>
               </div>
               <div className="flex space-x-6">
                  <NavItem href="/docs">Docs</NavItem>
                  <NavItem href="/login">Login</NavItem>
               </div>
            </div>
         </div>
      )
   }

   const Button = ({ href, onClick, disabled, color, square, children }) => {

      const baseClass = `flex space-x-2 items-center rounded-md ${square ? 'px-1 py-1' : 'px-4 py-2'} transition duration-200`
      let customClass

      switch (color) {
         case "blue":
            customClass = "bg-blue-600 text-white hover:bg-blue-500"
            break
         case "green":
            customClass = "bg-green-600 text-white hover:bg-green-500"
            break
         case "grey":
         default:
            customClass = "bg-gray-800 text-white hover:bg-gray-700"
            break
      }

      const finalClass = `${baseClass} ${customClass}`

      return href ? (
         <a href={href} className={finalClass}>
            {children}
         </a>
      ) : (
         <button type="button" className={finalClass}>
            {children}
         </button>
      )
   }

   return (
      <main className="flex-1 bg-hero-pattern bg-top bg-contain bg-no-repeat">

         {/* Introduction */}
         <div className="flex flex-1 flex-col justify-between h-screen">

            <Header />

            <div className="flex flex-col items-center py-12">
               <div className="flex flex-col items-center text-center space-y-4">
                  <h1 className="font-bold text-4xl text-gray-800 md:text-6xl">Better cookie banners.</h1>
                  <h2 className="font-semibold text-2xl text-gray-600 md:text-4xl">Making the internet a better place.</h2>
               </div>
               <div className="mt-12">
                  <Button href="#demo">
                     <span>Configure yours now </span>
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                     </div>
                  </Button>
               </div>
            </div>
            <div className="flex justify-center border-b">
               <div className="grid grid-cols-2 md:divide-x md:grid-cols-4">
                  {
                     features.map(({ icon, text }) => (
                        <div className="flex flex-col space-y-2 px-8 pt-4 pb-8">
                           <div className="text-xl text-gray-600 font-semibold w-6 h-6 mb-2">
                              {icon}
                           </div>
                           <div className="text-sm leading-5 text-gray-400">
                              {text}
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>
         </div>

      </main>
   )
}
