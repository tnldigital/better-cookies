import Card from "components/Card"
import Heading from "components/Heading"
import Text from "components/Text"
import Toggle from "components/Toggle"
import { useState } from "react"

export default function Configure () {

   const Button = ({ id, href, onClick, disabled, color, square, block, children }) => {

      const baseClass = `flex ${block && 'flex-1 justify-center'} space-x-2 items-center rounded-md ${square ? 'px-1 py-1' : 'px-4 py-2'} transition duration-200`

      let customClass
      switch (color) {
         case "blue":
            customClass = "bg-blue-600 text-white hover:bg-blue-500"
            break
         case "green":
            customClass = "bg-green-600 text-white hover:bg-green-500"
            break
         case "black":
            customClass = "bg-gray-900 text-white hover:bg-gray-800"
            break
         case "grey":
         default:
            customClass = "bg-gray-200 text-gray-400 hover:bg-gray-300"
            break
      }

      const finalClass = `${baseClass} ${customClass}`

      return href ? (
         <a id={id} href={href} className={finalClass} onClick={onClick}>
            {children}
         </a>
      ) : (
         <button id={id} type="button" className={finalClass} onClick={onClick}>
            {children}
         </button>
      )
   }

   const Banner = () => {
      return (
         <div className="p-fixed flex justify-start z-50 bottom-0 left-0 p-4">
            <Card>
               <div className="p-2 flex items-center space-x-5">
                  <span className="pl-2 font-semibold">We use cookies</span>
                  <div className="flex space-x-2">
                     <Button id="configure-open-trigger" color="grey" square onClick={() => setShowConfig(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                     </Button>
                     <Button id="accept-trigger" color="green" square>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                     </Button>
                  </div>
               </div>
            </Card>
         </div>
      )
   }

   const Config = ({ }) => {

      // Config 
      const [config, setConfig] = useState({
         statistical: false,
         marketing: false,
         preference: false
      })

      /**
      * Push message to parent 
       */
      const pushMessage = payload => {
         // const origin = (new URLSearchParams(window.location.search)).get('origin');
         window.parent.postMessage(payload)
      }

      /**
       * On close
       */
      const onClose = () => {
         pushMessage({
            type: 'close'
         })
      }

      /**
       * On save
       */
      const onSave = () => {
         pushMessage({
            type: 'save',
            config
         })
      }

      return (
         <div className="p-fixed flex w-screen h-screen justify-center items-center z-50 top-0 left-0 bg-gray-800 bg-opacity-50">
            <Card>
               <div className="flex flex-col w-full max-w-lg max-h-80vh">

                  {/* Close */}
                  <div className="flex justify-between items-center space-x-4 p-6">
                     <div className="flex">
                        <button id="configure-close-trigger" type="button" onClick={onClose}>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                           </svg>
                        </button>
                     </div>
                     <div>
                        <span className="text-sm">
                           Powered by <a href="#" target="_BLANK" className="underline hover:text-gray-700">Better Cookies</a>
                        </span>
                     </div>
                  </div>

                  {/* Divider */}
                  <hr className="my-0 py-0" />

                  {/* Cookie types */}
                  <div className="p-6 space-y-6 overflow-y-auto">
                     <div>
                        <div className="flex items-center justify-between mb-4">
                           <div>
                              <Heading>Essential cookies</Heading>
                           </div>
                           <div className="flex bg-green-100 text-green-600 text-sm px-2 rounded-full">
                              Required
                           </div>
                        </div>
                        <Text>
                           These cookies are essential so that you can move around the website and use its features. Without these cookies services you have asked for cannot be provided.
                        </Text>
                     </div>
                     <div>
                        <div className="flex items-center justify-between mb-4">
                           <div>
                              <Heading>Statistical cookies</Heading>
                           </div>
                           <Toggle id="statistical-toggle" active={config.statistical} onChange={(active) => setConfig({ ...config, statistical: active })} />
                        </div>
                        <Text>
                           These cookies track user behaviour on the website such as pages visited, duration of time spent on a page and what users are doing on a page.
                        </Text>
                     </div>
                     <div>
                        <div className="flex items-center justify-between mb-4">
                           <div>
                              <Heading>Marketing cookies</Heading>
                           </div>
                           <Toggle id="marketing-toggle" active={config.marketing} onChange={(active) => setConfig({ ...config, marketing: active })} />
                        </div>
                        <Text>
                           These cookies are set through our site by our advertising partners which can help identify users in order to show relevant material.
                        </Text>
                     </div>
                     <div>
                        <div className="flex items-center justify-between mb-4">
                           <div>
                              <Heading>Preference cookies</Heading>
                           </div>
                           <Toggle id="preference-toggle" active={config.preference} onChange={(active) => setConfig({ ...config, preference: active })} />
                        </div>
                        <Text>
                           These cookies are used to remember choices you've made on the site in order to personalise and persist your experience across multiple visits.
                        </Text>
                     </div>
                  </div>

                  {/* Save */}
                  <div className="flex p-6">
                     <Button id="save-trigger" color="black" block onClick={onSave}>Save</Button>
                  </div>
               </div>
            </Card>
         </div>
      )
   }

   return <Config />
}