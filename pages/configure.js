import Button from "components/Button"
import Header from "components/Header"

export default function Home() {

   const Box = ({children, title, description, cost}) => (
      <div className="rounded-md border border-gray-300 p-6">
         {title && <h3 className="font-semibold tracking-snug text-3xl text-gray-800">{title}</h3>}
         {description && <p className="text-gray-600 mt-4 mb-8">{description}</p>}
         <div className="font-bold text-6xl tracking-snug text-gray-800">
         {
            cost ? (
            <span>{cost} <span className="text-base font-normal text-gray-600">/ per month</span></span>
            ) : (
            <span>Free</span>
            )
         }
         </div> 
         {children}
         <div className='mt-6'>
            <Button block>Use now</Button>
         </div>
      </div>
   )

   return (
      <main className="flex-1 bg-hero-pattern bg-top bg-contain bg-no-repeat">

         {/* Introduction */}
         <div className="flex flex-1 flex-col justify-between h-screen">

            <Header />

            <div className="w-full max-w-4xl mx-auto">
               <div className="flex flex-col items-center text-center mb-12">
                  <h1 className="font-bold text-4xl text-gray-800 md:text-6xl">Choose your experience.</h1>
               </div>
               <div className="grid gap-8 md:grid-cols-2">
                  
                  {/* Basic */}
                  <Box title="Basic" description="A quick, simple, no config solution. Simply copy the code and use it on your site instantly." />

                  {/* Premium */}
                  <Box title="Premium" description="Customise and configure your cookie banner and allow your customers to opt-in to specific cookies." cost="$3.99" />

               </div>
            </div>

            {/* Footer */}
            <div></div>

         </div>

      </main>
   )
}
