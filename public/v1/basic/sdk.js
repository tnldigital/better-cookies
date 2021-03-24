/**
 * Better Cookies SDK 
 * Basic v1
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
      var styles = document.createElement('style')

      // Configure banner 
      banner.id = 'bc-banner'
      banner.innerHTML = `<div class="bc-card">
            <div class="bc-wrapper">
               <div class="bc-content">
                    <span class="bc-body">We use cookies to help personalise content, tailor and measure ads, and provide a safer experience. By navigating the site, you agree to the use of cookies to collect information on and off this website. Read our ${BetterCookies.policyLink ? '<a href=' + BetterCookies.policyLink + '">cookie policy</a>' : 'cookie policy'} to learn more.</span>
                </div>
                <div class="bc-buttons">
                    <button id="bc-accept-trigger" type="button" class="black">
                        Okay
                    </button>
                </div>
            </div>
        </div>`

      // Set styles 
      styles.innerHTML = `
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
                border: 1px solid #F3F4F6;
                border-radius: 10px;
                box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
            }
            #bc-banner .bc-wrapper {
                display: flex; 
                padding: 0.5rem; 
                align-items: center;
                font-weight: 500;
            }
            #bc-banner .bc-wrapper .bc-content,
            #bc-banner .bc-wrapper .bc-buttons {
               padding: 15px; 
            }
            #bc-banner .bc-wrapper .bc-content { padding-right: 50px; }
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
               color: #0066FF; 
               text-decoration: none;
            }
            #bc-banner .bc-wrapper .bc-content a:hover, 
            #bc-banner .bc-wrapper .bc-content a:focus, 
            #bc-banner .bc-wrapper .bc-content a:active {
               color: #4083E7;
            }
            #bc-banner .bc-wrapper .bc-buttons { 
               display: flex;
            }
            #bc-banner .bc-wrapper button {
                font-size: 14px;
                cursor: pointer;
                display: flex; 
                align-items: center;
                border-radius: 6px;
                border: 0;
                margin: 0;
                padding: 10px 50px;
                -webkit-appearance: none;
                transition: all 0.2s ease;
                background-color: rgb(5, 150, 105); 
                color: white;
            }
            #bc-banner .bc-wrapper button.grey { background-color: rgb(229, 231, 235); color: rgb(156, 163, 175); }
            #bc-banner .bc-wrapper button.grey:hover { background-color: rgb(229, 231, 235, 0.8); }
            #bc-banner .bc-wrapper button.green { background-color: rgb(5, 150, 105); color: white; }
            #bc-banner .bc-wrapper button.green:hover { background-color: rgb(5, 150, 105, 0.8); }
            #bc-banner .bc-wrapper button.black { background-color: #111; color: white; }
            #bc-banner .bc-wrapper button.black:hover { background-color: #222; }
            #bc-banner .bc-wrapper button svg {
                width: 24px; 
                height: 24px;
            }
        `

      // Draw elements
      document.body.appendChild(styles)
      document.body.appendChild(banner)

      // Trigger event 
      BetterCookies.onInit()

      // Handle banner buttons 
      var acceptButton = document.getElementById('bc-accept-trigger')
      acceptButton.onclick = function () {

         // Store cookie 
         document.cookie = 'bc_completed=1; expires=Fri, 31 Dec 9999 23:59:59 GMT'

         // Hide banner
         banner.style.display = 'none'

         // Trigger event 
         BetterCookies.onAccept()

      }
   }

   // Define init
   BetterCookies.init = function (config) {

      // Define config based off parameters 
      BetterCookies.policyLink = config.policyLink ?? null
      BetterCookies.onInit = config.onInit ?? function () { }
      BetterCookies.onAccept = config.onAccept ?? function () { }

      // Trigger draw if we need to
      if (!document.cookie.split('; ').find(row => row.startsWith('bc_completed'))) {
         BetterCookies.draw()
      }

   }

})(window);