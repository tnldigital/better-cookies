import Card from "components/Card"
import Button from "components/Button"

export default function Banner({ text, link,  }) {
   return (
      <div className="h-screen flex justify-end items-end p-4 antialiased">
         <Card>
            <div className="flex flex-col sm:items-start space-y-4 p-5 sm:max-w-md">
               <div>
                  <p className="text-gray-500 text-sm sm:text-base">We use cookies to improve your experience and for marketing. Learn more in our <a href="#" target="_blank" className="underline text-gray-800">cookie policy</a>.</p>
               </div>
               <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
                  <div>
                     <Button color="white" size="sm" block> 
                        <div className="px-6">Manage cookies</div>
                     </Button>
                  </div>
                  <div>
                     <Button color="black" size="sm" block> 
                        <div className="px-6">Okay</div>
                     </Button>
                  </div>
               </div>
            </div>
         </Card>
      </div>
   )
}