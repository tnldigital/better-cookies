import Link from "next/link"

export default function Header() {

   /**
    * Nav item element 
    */
   const NavItem = ({ children, href }) => {
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
               <Link href="/">
                  <a>
                     <img src="/img/logo.svg" alt="Better cookies Logo" className="h-6" />
                  </a>
               </Link>
            </div>
            {/* <div className="flex space-x-6">
               <NavItem href="/docs">Docs</NavItem>
               <NavItem href="/login">Login</NavItem>
            </div> */}
         </div>
      </div>
   )
}