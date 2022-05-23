/**
 * Better Cookies SDK 
 * SDK v1
 */

(function (window) {


   const stylesCSS = `
      #bc-frame-wrapper {
         position: fixed; 
         top: 0;
         left: 0;
         z-index: 999;
         width: 100vw;
         height: 100vh;
         display: none; 
      }
      #bc-frame-wrapper iframe {
         width: 100%; 
         height: 100%;
         border: none;
      }
      #bc-banner, #bc-banner * {
         box-sizing: border-box;
      }
      #bc-banner {
         display: flex; 
         justify-content: start;
         width: 100vw;
         position: fixed; 
         bottom: 0;
         left: 0;
         padding: 1rem; 
         z-index: 998;
         color: rgb(31, 41, 55);
         font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      }
      #bc-banner .bc-card {
         display: flex; 
         background: white;
         border: 1px solid #f0f0f0;
         border-radius: 10px;
         box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      }
      #bc-banner .bc-wrapper {
         padding: 0.5rem; 
         font-weight: 500;
      }
      #bc-banner .bc-wrapper .bc-content,
      #bc-banner .bc-wrapper .bc-buttons {
         padding: 15px; 
      }
      #bc-banner .bc-wrapper .bc-content { 
         padding-bottom: 5px; 
      }
      #bc-banner .bc-wrapper .bc-content .bc-title {
         font-size: 18px;
         font-weight: 600; 
         color: #222;
         margin: 0 0 10px;
      }
      #bc-banner .bc-wrapper .bc-content .bc-body {
         font-size: 14px;
         line-height: 21px;
         font-weight: 400;
         color: #666;
      }
      #bc-banner .bc-wrapper .bc-content a {
         color: #222;
         font-weight: 600; 
         text-decoration: underline;
      }
      #bc-banner .bc-wrapper .bc-content a:hover, 
      #bc-banner .bc-wrapper .bc-content a:focus, 
      #bc-banner .bc-wrapper .bc-content a:active {
         color: #333;
      }
      #bc-banner .bc-wrapper .bc-buttons { 
         display: flex;
      }
      #bc-banner .bc-wrapper button {
         width: 100%;
         font-size: 14px;
         font-weight: 600;
         cursor: pointer;
         display: flex; 
         justify-content: center;
         align-items: center;
         text-align: center;
         border-radius: 6px;
         border: 0;
         margin: 0;
         padding: 10px 50px;
         border: 1px solid black; 
         -webkit-appearance: none;
         transition: all 0.2s ease;
         background-color: rgb(5, 150, 105); 
         color: white;
      }
      #bc-banner .bc-wrapper button.black { border-color: #111; background-color: #111; color: white; }
      #bc-banner .bc-wrapper button.black:hover { background-color: #222; }
      #bc-banner .bc-wrapper button.outline { border-color: #111; background-color: transparent; color: #111; }
      #bc-banner .bc-wrapper button.outline:hover { background-color: #EEE; }

      #bc-banner .bc-wrapper button svg {
          width: 24px; 
          height: 24px;
      }

      @media (min-width: 768px) { 
         #bc-banner .bc-wrapper {
            display: flex; 
            align-items: center; 
         }
         #bc-banner .bc-wrapper .bc-content {
            padding: 15px 50px 15px 15px; 
         }
         #bc-banner .bc-wrapper button {
            width: auto; 
         }
      }

      @media (min-width: 1536px) { 
         #bc-banner .bc-wrapper {
            max-width: 50vw;
         }
      }
   `

   // Declare client initializer
   window.BetterCookies = window.BetterCookies || {}

   // Define basic draw
   drawBasic = function () {

      // Prepare elements 
      var banner = document.createElement('div')
      var styles = document.createElement('style')

      // Configure banner 
      banner.id = 'bc-banner'
      banner.innerHTML = `
            <div class="bc-card">
               <div class="bc-wrapper">
                  <div class="bc-content">
                     <span class="bc-body">
                        We use cookies to help personalise content, tailor and measure ads, and provide a safer experience. By navigating the site, you agree to the use of cookies to collect information on and off this website. Read our ${BetterCookies.policyLink ? '<a href="' + BetterCookies.policyLink + '" target="_BLANK">cookie policy</a>' : 'cookie policy'} to learn more.
                     </span>
                  </div>
                  <div class="bc-buttons">
                     <button id="bc-accept-trigger" type="button" class="black">
                           Okay
                     </button>
                  </div>
               </div>
            </div>
         `

      // Set styles 
      styles.innerHTML = stylesCSS

      // Draw elements
      document.body.appendChild(styles)
      document.body.appendChild(banner)

      // Helper functions 
      var closeBanner = function () {
         banner.style.display = 'none'
      }

      // On accept click 
      var acceptButton = document.getElementById('bc-accept-trigger')
      acceptButton.onclick = function () {

         // Close banner 
         closeBanner()

         // Store cookie 
         document.cookie = 'bc_completed=1; expires=Fri, 31 Dec 9999 23:59:59 GMT'
      }

   }

   // Define full draw
   drawFull = function () {

      // Prepare elements 
      var banner = document.createElement('div')
      var iframeWrapper = document.createElement('div')
      var iframe = document.createElement('iframe')
      var styles = document.createElement('style')

      // Configure iframe 
      iframeWrapper.id = 'bc-frame-wrapper'
      iframe.id = 'bc-frame'
      iframe.src = '/v1/configure'

      // Configure banner 
      banner.id = 'bc-banner'
      banner.innerHTML = `
            <div class="bc-card">
               <div class="bc-wrapper">
                  <div class="bc-content">
                     <span class="bc-body">
                        We use cookies to help personalise content, tailor and measure ads, and provide a safer experience. By navigating the site, you agree to the use of cookies to collect information on and off this website. Read our ${BetterCookies.policyLink ? '<a href="' + BetterCookies.policyLink + '" target="_BLANK">cookie policy</a>' : 'cookie policy'} to learn more.
                     </span>
                  </div>
                  <div class="bc-buttons">
                     <button id="bc-configure-open-trigger" type="button" class="outline" style="margin-right: 6px;">
                        Settings
                     </button>
                     <button id="bc-accept-all-trigger" type="button" class="black">
                        Okay
                     </button>
                  </div>
               </div>
            </div>
         `

      // Set styles 
      styles.innerHTML = stylesCSS

      // Draw elements
      iframeWrapper.appendChild(iframe)
      document.body.appendChild(styles)
      document.body.appendChild(iframeWrapper)
      document.body.appendChild(banner)

      // Setup some handy events 
      var closeFrame = function () {
         iframeWrapper.style.display = 'none'
      }
      var closeBanner = function () {
         banner.style.display = 'none'
      }
      var complete = function () {

         // Close UI 
         closeFrame()
         closeBanner()

         // Store cookie 
         document.cookie = 'bc_completed=1; expires=Fri, 31 Dec 9999 23:59:59 GMT'
      }

      // Handle banner buttons 
      var configureButton = document.getElementById('bc-configure-open-trigger')
      var acceptButton = document.getElementById('bc-accept-all-trigger')
      configureButton.onclick = function () {

         // Show configure frame 
         iframeWrapper.style.display = 'block'

      }
      acceptButton.onclick = function () {

         // Trigger event 
         BetterCookies.onAcceptAll()

         // Trigger complete
         complete()
      }

      // Watch for events from the embed 
      window.addEventListener('message', (event) => {

         // TODO: verifiy origin 

         switch (event.data.type) {
            case 'init':

               // Trigger event 
               BetterCookies.onInit()

               break
            case 'close':

               // Close UI 
               closeFrame()

               // Trigger close event 
               BetterCookies.onClose()

               break
            case 'save':

               // Trigger complete 
               complete()

               // Trigger save event
               BetterCookies.onSave(event.data.config)

               // Check for data and call relevant callbacks 
               if (event.data.config.statistical) BetterCookies.onAcceptStatistical()
               if (event.data.config.marketing) BetterCookies.onAcceptMarketing()
               if (event.data.config.preference) BetterCookies.onAcceptPreference()

               break
         }

      })

   }

   // Define draw 
   BetterCookies.draw = function () {

      // Check if basic or full  
      BetterCookies.mode == 'full' ? drawFull() : drawBasic()

   }

   // Define init
   BetterCookies.init = function (config) {

      // Define config based off parameters 
      BetterCookies.policyLink = config.policyLink
      BetterCookies.mode = config.mode ?? 'basic'
      BetterCookies.onInit = config.onInit ?? function () { }
      BetterCookies.onClose = config.onClose ?? function () { }
      BetterCookies.onSave = config.onSave ?? function () { }
      BetterCookies.onAcceptAll = config.onAcceptAll ?? function () { }
      BetterCookies.onAcceptStatistical = config.onAcceptStatistical ?? function () { }
      BetterCookies.onAcceptMarketing = config.onAcceptMarketing ?? function () { }
      BetterCookies.onAcceptPreference = config.onAcceptPreference ?? function () { }

      // Trigger draw if we need to
      if (!document.cookie.split('; ').find(row => row.startsWith('bc_completed'))) {
         BetterCookies.draw()
      }

   }

})(window);