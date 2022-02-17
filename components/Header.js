import Link from "next/link"

export default function Header () {

   /**
    * Nav item element 
    */
   const NavItem = ({children, href}) => {
      return (
         <Link href={href}>
            <a className="px-2 py-2 rounded-md bg-white duration-100 hover:opacty-80">{children}</a>
         </Link>
      )
   }

   return (
      <div className="w-full max-w-6xl mx-auto">
         <div className="flex justify-center py-6">
            <div>
               <h1 className="font-bold text-2xl text-gray-600 bg-white px-2 py-2 rounded-md">
                  <span className="text-gray-900">better</span><span className="text-gray-600">cookies</span>.
               </h1>
            </div>
            {/* <div className="flex space-x-6">
               <NavItem href="/docs">Docs</NavItem>
               <NavItem href="/login">Login</NavItem>
            </div> */}
         </div>
      </div>
   )
}