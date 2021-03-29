/**
 * Better Cookies SDK 
 * v1
 */
(function (window) {

   // Declare client initializer
   window.BetterCookies = window.betterCookies || {}

   // Define draw 
   BetterCookies.draw = function () {

      // Get viewport width 
      const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

      // Prepare elements 
      var banner = document.createElement('div')
      var iframeWrapper = document.createElement('div')
      var iframe = document.createElement('iframe')
      var styles = document.createElement('style')

      // Configure iframe 
      iframeWrapper.id = 'bc-frame-wrapper'
      iframe.id = 'bc-frame'
      iframe.src = '/v1/sdk/configure'

      // Configure banner 
      banner.id = 'bc-banner'
      banner.innerHTML = `<div class="bc-card">
            <div class="bc-wrapper">
                <div style="padding: 0 15px 0 10px;">
                    <span>We use cookies</span>
                </div>
                <div style="display: flex;">
                    <button id="bc-configure-open-trigger" type="button" class="grey" style="margin-right: 6px;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </button>
                    <button id="bc-accept-all-trigger" type="button" class="green">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                </div>
            </div>
        </div>`

      // Set styles 
      styles.innerHTML = `
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
                border: 1px solid #F3F4F6;
                border-radius: 6px;
                box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
            }
            #bc-banner .bc-wrapper {
                display: flex; 
                padding: 0.5rem; 
                align-items: center;
                font-weight: 500;
            }
            #bc-banner .bc-wrapper button {
                cursor: pointer;
                display: flex; 
                align-items: center;
                border-radius: 6px;
                border: 0;
                margin: 0;
                padding: 5px;
                -webkit-appearance: none;
                transition: all 0.2s ease;
                font-size: 1rem;
                background-color: rgb(5, 150, 105); 
                color: white;
            }
            #bc-banner .bc-wrapper button.grey { background-color: rgb(229, 231, 235); color: rgb(156, 163, 175); }
            #bc-banner .bc-wrapper button.green { background-color: rgb(5, 150, 105); color: white; }
            #bc-banner .bc-wrapper button.grey:hover { background-color: rgb(229, 231, 235, 0.8); }
            #bc-banner .bc-wrapper button.green:hover { background-color: rgb(5, 150, 105, 0.8); }

            #bc-banner .bc-wrapper button svg {
                width: 24px; 
                height: 24px;
            }
        `

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

   // Define init
   BetterCookies.init = function (config) {

      // Define config based off parameters 
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