!function e(t,n,o){function i(l,a){if(!n[l]){if(!t[l]){var d="function"==typeof require&&require;if(!a&&d)return d(l,!0);if(r)return r(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[l]={exports:{}};t[l][0].call(s.exports,function(e){var n=t[l][1][e];return i(n?n:e)},s,s.exports,e,t,n,o)}return n[l].exports}for(var r="function"==typeof require&&require,l=0;l<o.length;l++)i(o[l]);return i}({1:[function(e,t,n){t.exports=function(e,t){var n=t||document;if(n.createStyleSheet)n.createStyleSheet().cssText=e;else{var o=n.getElementsByTagName("head")[0],i=n.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),o.appendChild(i)}},t.exports.byUrl=function(e){if(document.createStyleSheet)document.createStyleSheet(e);else{var t=document.getElementsByTagName("head")[0],n=document.createElement("link");n.rel="stylesheet",n.href=e,t.appendChild(n)}}},{}],2:[function(e,t,n){t.exports=e("cssify")},{cssify:1}],3:[function(e,t,n){var o='.jPanelMenu {\n  overflow-x: initial !important; }\n\n.drizzle--dark-screen {\n  position: fixed !important;\n  z-index: 999 !important;\n  left: 0 !important;\n  top: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  overflow: auto !important;\n  background-color: black !important;\n  opacity: 0.3; }\n\n.drizzle--block-scroll {\n  overflow: hidden !important; }\n\n.drizzle--footer-bar {\n  position: fixed !important;\n  bottom: 0 !important;\n  left: 0 !important;\n  align-items: center !important;\n  width: 100% !important;\n  height: 70px !important;\n  border-top: rgba(0, 0, 0, 0.1) !important;\n  z-index: 2900000000;\n  /* The Modal (background) */\n  /* Modal Content/Box */\n  /* The Close Button */ }\n  .drizzle--footer-bar .drizzle--action-container {\n    position: relative !important;\n    height: 60px !important;\n    display: inherit !important; }\n    .drizzle--footer-bar .drizzle--action-container .drizzle--button {\n      font-weight: 400 !important;\n      border-radius: 4px !important;\n      border: none !important;\n      color: white !important;\n      font-size: 16px !important;\n      letter-spacing: 0.01em !important;\n      padding: 10px 15px !important;\n      outline: 0 !important;\n      transition: all 0.2s ease !important;\n      text-align: center !important;\n      text-decoration: none !important;\n      height: auto !important;\n      line-height: 1.5em !important;\n      box-shadow: none !important;\n      margin: 8px 10px !important; }\n    .drizzle--footer-bar .drizzle--action-container .drizzle--button:hover {\n      margin: 5px 10px !important; }\n    .drizzle--footer-bar .drizzle--action-container a.drizzle--button:hover {\n      padding-top: 13px !important; }\n    @media only screen and (max-width: 850px) {\n      .drizzle--footer-bar .drizzle--action-container .drizzle--second-button2 {\n        display: none !important; } }\n    @media only screen and (max-width: 690px) {\n      .drizzle--footer-bar .drizzle--action-container {\n        flex: 1 !important;\n        display: flex !important;\n        align-items: center !important;\n        width: 90% !important; }\n        .drizzle--footer-bar .drizzle--action-container .drizzle--button {\n          width: 80% !important;\n          margin: auto !important; }\n        .drizzle--footer-bar .drizzle--action-container .drizzle--button:hover {\n          margin: auto !important; }\n        .drizzle--footer-bar .drizzle--action-container .drizzle--second-button {\n          display: none !important; } }\n  .drizzle--footer-bar .drizzle--call-to-action-text {\n    flex: 1 !important;\n    text-align: center !important;\n    font-size: 18px !important;\n    letter-spacing: 0.01em !important;\n    color: white !important; }\n    @media only screen and (max-width: 690px) {\n      .drizzle--footer-bar .drizzle--call-to-action-text {\n        display: none !important; } }\n  .drizzle--footer-bar .drizzle--close-button {\n    position: absolute !important;\n    right: 15px !important;\n    top: 10px !important;\n    cursor: pointer !important;\n    color: white !important; }\n  .drizzle--footer-bar .drizzle--modal {\n    display: none;\n    /* Hidden by default */\n    position: fixed;\n    /* Stay in place */\n    z-index: 1000;\n    /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%;\n    /* Full width */\n    height: 100%;\n    /* Full height */\n    overflow: auto;\n    /* Enable scroll if needed */\n    background-color: black;\n    /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4);\n    /* Black w/ opacity */ }\n  .drizzle--footer-bar .drizzle--modal-content {\n    background-color: #fefefe;\n    margin: 5% auto;\n    /* 15% from the top and centered */\n    padding: 0 20px 20px 20px;\n    border: 1px solid #888;\n    width: 550px;\n    /* Could be more or less, depending on screen size */ }\n    @media only screen and (max-width: 690px) {\n      .drizzle--footer-bar .drizzle--modal-content {\n        width: 90%;\n        /* Could be more or less, depending on screen size */ } }\n  .drizzle--footer-bar .drizzle--modal-close {\n    color: #aaa;\n    font-size: 28px;\n    font-weight: bold; }\n  .drizzle--footer-bar .drizzle--modal-close:hover,\n  .drizzle--footer-bar .drizzle--modal-close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer; }\n  .drizzle--footer-bar .drizzle--tabs .drizzle--tab-title {\n    font-family: "Lato", "Helvetica Neue", Helvetica, sans-serif !important;\n    font-size: 18px !important;\n    font-weight: bold !important;\n    color: #333 !important;\n    margin-top: 0px !important;\n    margin-bottom: 5px !important; }\n  .drizzle--footer-bar .drizzle--tabs .drizzle--tab-list {\n    list-style: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    background-color: #555 !important; }\n    .drizzle--footer-bar .drizzle--tabs .drizzle--tab-list li {\n      float: left;\n      padding: 7px !important;\n      margin: 0 !important;\n      list-style: none !important;\n      height: 44px !important; }\n      .drizzle--footer-bar .drizzle--tabs .drizzle--tab-list li img {\n        width: 30px !important;\n        height: 30px !important; }\n    .drizzle--footer-bar .drizzle--tabs .drizzle--tab-list li > a:active, .drizzle--footer-bar .drizzle--tabs .drizzle--tab-list li > a:focus {\n      background-color: trasparent !important; }\n    .drizzle--footer-bar .drizzle--tabs .drizzle--tab-list li.drizzle--tabs-active {\n      background-color: #ddd !important; }\n  .drizzle--footer-bar .drizzle--tabs .drizzle--tab-panels {\n    list-style: none !important;\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important; }\n    .drizzle--footer-bar .drizzle--tabs .drizzle--tab-panels li {\n      list-style: none !important;\n      list-style-type: none !important;\n      margin-top: 10px !important;\n      text-align: center !important; }\n    .drizzle--footer-bar .drizzle--tabs .drizzle--tab-panels img {\n      width: 100%;\n      height: 100%;\n      max-width: 500px;\n      max-height: 500px; }\n';e("sassify")(o),t.exports=o},{sassify:2}],4:[function(e,t,n){t.exports={pixel:400,uiConfig:{callToActionText:"Ads help us create great content. Please pause Adblock or whitelist our domain.",buttonText:"OK, I turned off Adblock",buttonBackgroundColor:"#4cad41",footerBackgroundColor:"#0095e8",canClose:!0,font:"Lato",showDarkScreen:!0,modalTitle:"How to turn off",mobileModalTitle:"How to turn off on Mobile",afterCheckText:"Your Adblock is still enabled. Please see above instructions."},extraButtonConfig:{isEnabled:!0,buttonText:"Become a member",buttonBackgroundColor:"#4cad41",destinationURL:"https://github.com/tima101/Native-adblock-detector"},extraButton2Config:{isEnabled:!1,buttonText:"Extra button",buttonBackgroundColor:"#4fad41",destinationURL:"https://facebook.com/"},urlRules:["http://asiatoworld.com/.+"],excludeUrlRules:[]}},{}],5:[function(e,t,n){"use strict";function o(e){var t=e.window,n=e.callback,o=e.url,i=void 0,r=document.createElement("script");r.src=o,r.onerror=function(){clearTimeout(i),n(!0),t.document.head.removeChild(r)},r.onload=function(){clearTimeout(i),t.document.head.removeChild(r),n(!1)},r.onbeforeload=function(){i=setTimeout(function(){n(!0)},3e3)},t.document.head.appendChild(r)}function i(e){function t(e){if(r)return void i({detected:e});if(e)n&&n.localStorage&&n.localStorage.setItem("drizzle__usingAdblock",1),i({detected:e});else{var t=!1;if(n&&n.localStorage){var o=!!n.localStorage.getItem("drizzle__usingAdblock");n.localStorage.removeItem("drizzle__usingAdblock"),o&&n.localStorage.setItem("drizzle__disabledAdblock",1),t=!!n.localStorage.getItem("drizzle__disabledAdblock")}i({detected:e,disabled:t})}}var n=e.window,i=e.callback,r=e.onlyCheck,l="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",a="https://ads.rubiconproject.com/ad/12198.js";o({window:n,url:l,callback:function(e){return e?void t(!0):void o({window:n,url:a,callback:t})}})}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=i},{}],6:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e){var t=new XMLHttpRequest;t.open("GET",e,!0),t.send()}function r(e){var t=e.API_URL,n=e.detected,o=e.disabled,r=e.url,l=e.window;if(t){var a=(0,d["default"])({window:l}),c=t+"/api/v1/analytics?url="+r;c+="&using="+(n?1:0)+"&disabled="+(o?1:0)+"&unique="+(a?1:0),i(c)}}function l(e){var t=e.API_URL,n=e.url;if(t){var o=t+"/api/v1/extra-button-clicked?url="+n;i(o)}}Object.defineProperty(n,"__esModule",{value:!0}),n.sendAdblockAnalytic=r,n.extraButtonClicked=l;var a=e("./checkUniqueView"),d=o(a)},{"./checkUniqueView":8}],7:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e){var t=e.isEnabled,n=void 0!==t&&t,o=e.buttonText,i=void 0===o?"":o,r=e.buttonBackgroundColor,l=void 0===r?"":r,a=e.destinationURL,d=void 0===a?"":a,c=e.font,s=void 0===c?"Lato":c,u=e.className,m=void 0===u?"":u;return n&&i&&l&&d?'<a\n    class="drizzle--button drizzle--second-button '+m+'"\n    style="background-color: '+l+" !important;\n      font-family: '"+s+"', 'Helvetica Neue', Helvetica, sans-serif !important;\"\n    href=\""+d+'"\n    target="_blank"\n  >'+i+"</a>":""}function r(e,t,n,o){var r=e.buttonText,l=void 0===r?"OK, I turned off Adblock":r,a=e.callToActionText,d=void 0===a?"Ads help us create great content. Please turn off Adblock.":a,c=e.canClose,s=void 0!==c&&c,z=e.footerBackgroundColor,p=void 0===z?"#0095e8":z,f=e.buttonBackgroundColor,b=void 0===f?"#4cad41":f,v=e.font,g=void 0===v?"Lato":v,w=e.showDarkScreen,h=void 0!==w&&w,y=e.modalTitle,k=void 0===y?"How to turn off":y,x=e.mobileModalTitle,T=void 0===x?"How to turn off adblocking on":x,_="",A="";s&&(_='<span class="drizzle--close-button">&times;</span>'),h&&(A='<div class="drizzle--dark-screen" style="display: none !important;"></div>'),t.font=g,n.font=g,n.className="drizzle--second-button2";var S='\n  <div\n    class="drizzle--footer-bar"\n    style="display: none;background-color: '+p+' !important;"\n  >\n    <div class="drizzle--action-container">\n      <button\n        class="drizzle--button drizzle--check-adblock"\n        style="background-color: '+b+" !important;\n          font-family: '"+g+"', 'Helvetica Neue', Helvetica, sans-serif !important;\"\n      >"+l+"</button>\n      "+i(t)+"\n      "+i(n)+'\n    </div>\n\n    <div\n      class="drizzle--call-to-action-text"\n      style="font-family: \''+g+"', 'Helvetica Neue', Helvetica, sans-serif !important;\"\n    >\n      "+d+"\n    </div>\n\n    "+_+"\n\n    "+(0,u.getHTML)((0,m.getTabsHTML)({window:o,modalTitle:k,mobileModalTitle:T}))+"\n  </div>"+A;return S}function l(e,t,n,o){var i=document.createElement("div");o.document.body.appendChild(i),i.innerHTML=r(e,t,n,o)}function a(e){var t=window.document.body.scrollTop||window.document.documentElement.scrollTop,n=document.querySelector(".drizzle--footer-bar"),o=document.querySelector(".drizzle--dark-screen");return!!n&&(t>=e?(window.document.documentElement.classList.add("drizzle--block-scroll"),window.document.body.classList.add("drizzle--block-scroll"),n.style.display="flex",o&&(o.style.display=""),!0):(window.document.documentElement.classList.remove("drizzle--block-scroll"),window.document.documentElement.style.removeProperty("overflow"),window.document.body.classList.remove("drizzle--block-scroll"),window.document.body.style.removeProperty("overflow"),n.style.display="none",o&&(o.style.display="none"),!1))}function d(e){function t(){a(i)}function n(e){a(i)&&e.preventDefault()}var o=e.pixel,i=void 0===o?400:o,r=e.uiConfig,d=void 0===r?{}:r,c=e.extraButtonConfig,p=void 0===c?{}:c,f=e.extraButton2Config,b=void 0===f?{}:f,v=e.API_URL,g=e.url,w=e.window;l(d,p,b,w),a(i);var h=document.querySelector(".drizzle--footer-bar"),y=document.querySelector(".drizzle--dark-screen"),k=document.querySelector(".drizzle--check-adblock"),x=document.querySelector(".drizzle--second-button"),T=document.querySelector(".drizzle--second-button2"),_=document.querySelector(".drizzle--call-to-action-text");k&&(k.onclick=function(){(0,s["default"])({window:w,onlyCheck:!0,callback:function(e){var t=e.detected;t?((0,u.showModal)(),_&&(_.innerText=d.afterCheckText||"Your Adblock is still ON. Please see above instructions.")):w.location.reload()}})}),x&&(x.onclick=function(){(0,z.extraButtonClicked)({API_URL:v,url:g})}),T&&(T.onclick=function(){(0,z.extraButtonClicked)({API_URL:v,url:g})}),w.addEventListener("scroll",t,!1),w.addEventListener("touchmove",n,!1);var A=document.querySelector(".drizzle--close-button");A&&(A.onclick=function(){w.document.documentElement.classList.remove("drizzle--block-scroll"),w.document.documentElement.style.removeProperty("overflow"),w.document.body.classList.remove("drizzle--block-scroll"),w.document.body.style.removeProperty("overflow"),h&&(h.style.display="none"),y&&(y.style.display="none"),w.removeEventListener("scroll",t,!1),w.removeEventListener("touchmove",n,!1)}),(0,u.handleModalEvents)(w),(0,m.handleTabs)({window:w,modalTitle:d.modalTitle||"How to turn off",mobileModalTitle:d.mobileModalTitle||"How to turn off adblocking on"})}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=d;var c=e("./adblock"),s=o(c),u=e("./modal"),m=e("./tabs"),z=e("./api")},{"./adblock":5,"./api":6,"./modal":11,"./tabs":12}],8:[function(e,t,n){"use strict";function o(e){var t=-5,n=e.getTime()+6e4*e.getTimezoneOffset(),o=new Date(n+36e5*t),i="",r="",l=o.getMonth()+1;i+=l>9?l:"0"+l;var a=o.getDate();return r+=a>9?a:"0"+a,""+o.getFullYear()+i+r}function i(e){for(var t=window.localStorage.length-1;t>=0;t-=1){var n=window.localStorage.key(t);n.startsWith("drizzle__visited-")&&window.localStorage.getItem(n)!==e&&window.localStorage.removeItem(n)}}function r(e){var t=e.window,n=void 0,r=escape("drizzle__visited-"+t.location.pathname),l=t.localStorage.getItem(r),a=o(new Date);return l&&a===l?n=!1:(t.localStorage.setItem(r,a),n=!0),setTimeout(function(){i(a)},0),n}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r},{}],9:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t,n){var o=void 0,i=void 0;for(o=0;o<t.length;o+=1)if(i=t[o]){var r=new RegExp(i);if(r.test(n))return!1}for(o=0;o<e.length;o+=1)if(i=e[o]){var l=new RegExp(i);if(l.test(n))return!0}return!1}function r(e){var t=a["default"].urlRules,n=void 0===t?[]:t,o=a["default"].excludeUrlRules,r=void 0===o?[]:o;return!n||i(n,r,e)}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r;var l=e("../settings.json"),a=o(l)},{"../settings.json":4}],10:[function(e,t,n){"use strict";function o(e){var t=e.window,n=t.navigator;return!!n&&!!(n.userAgent.match(/Android/i)||n.userAgent.match(/BlackBerry/i)||n.userAgent.match(/iPhone|iPad|iPod/i)||n.userAgent.match(/Opera Mini/i)||n.userAgent.match(/IEMobile/i))}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=o},{}],11:[function(e,t,n){"use strict";function o(e){var t='<div class="drizzle--modal">\n    <div class="drizzle--modal-content">\n      <div style="text-align: right !important; margin: 5px -10px !important; height: 20px !important;">\n        <span class="drizzle--modal-close">&times;</span>\n      </div>\n      <div>\n        '+e+"\n      </div>\n    </div>\n  </div>";return t}function i(){var e=document.querySelector(".drizzle--modal");e&&(e.style.display="block")}function r(e){var t=document.querySelector(".drizzle--modal-close"),n=document.querySelector(".drizzle--modal");n&&t&&(t.onclick=function(){n.style.display="none"}),e.addEventListener("click",function(e){e.target===n&&(n.style.display="none")},!1)}Object.defineProperty(n,"__esModule",{value:!0}),n.getHTML=o,n.showModal=i,n.handleModalEvents=r},{}],12:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){var t=e.window,n=e.modalTitle,o=e.mobileModalTitle,r=[].concat(i(t.document.querySelectorAll(".drizzle--tab-list li"))),l=(0,d["default"])({window:t})?o:n;r.forEach(function(e,n){e.addEventListener("click",function(){r.forEach(function(e){return e.classList.remove("drizzle--tabs-active")}),e.classList.add("drizzle--tabs-active"),[].concat(i(document.querySelectorAll(".drizzle--tab-panels > li"))).forEach(function(e){e.style.display="none"}),t.document.querySelector(".drizzle--tab-panels > li:nth-child("+(n+1)+")").style.display="block";var o=document.querySelector(".drizzle--tab-title");o&&(o.innerText=l+" "+(e.title||""))})})}function l(e){var t=e.window,n=e.modalTitle,o=e.mobileModalTitle;return(0,d["default"])({window:t})?'<div class="drizzle--tabs">\n      <div class="drizzle--tab-title">'+o+' Adblock Plus Browser</div>\n      <ul class="drizzle--tab-list">\n        <li class="drizzle--tabs-active" title="Adblock Plus Browser">\n          <img src="https://s3-us-west-1.amazonaws.com/zenmarket/blockp.png">\n        </li>\n        <li title="UC Browser">\n          <img src="https://s3-us-west-1.amazonaws.com/zenmarket/ucbrowser.png">\n        </li>\n        <div style="clear: both;"></div>\n      </ul>\n\n      <ul class="drizzle--tab-panels">\n        <li>\n          <img src="https://s3-us-west-1.amazonaws.com/zenmarket/blockp-mobile.png">\n        </li>\n        <li style="display: none;">\n          <img src="https://s3-us-west-1.amazonaws.com/zenmarket/uc-mobile.png">\n        </li>\n      </ul>\n    </div>':'<div class="drizzle--tabs">\n    <div class="drizzle--tab-title">'+n+' Adblock</div>\n    <ul class="drizzle--tab-list">\n      <li class="drizzle--tabs-active" title="Adblock">\n        <img src="https://s3-us-west-1.amazonaws.com/zenmarket/block.png">\n      </li>\n      <li title="Adblock Plus">\n        <img src="https://s3-us-west-1.amazonaws.com/zenmarket/blockp.png">\n      </li>\n      <li title="Adguard">\n        <img src="https://s3-us-west-1.amazonaws.com/zenmarket/guard.png">\n      </li>\n      <li title="Ublock">\n        <img src="https://s3-us-west-1.amazonaws.com/zenmarket/ublock.png">\n      </li>\n      <li title="Ghostery">\n        <img src="https://s3-us-west-1.amazonaws.com/zenmarket/ghostery.png">\n      </li>\n      <div style="clear: both;"></div>\n    </ul>\n\n    <ul class="drizzle--tab-panels">\n      <li>\n        <img src="https://s3-us-west-1.amazonaws.com/zenmarket/block-drizzle.png">\n      </li>\n      <li style="display: none;">\n        <img src="https://s3-us-west-1.amazonaws.com/zenmarket/blockp-drizzle.png">\n      </li>\n      <li style="display: none;">\n        <img src="https://s3-us-west-1.amazonaws.com/zenmarket/guard-drizzle.png">\n      </li>\n      <li style="display: none;">\n        <img src="https://s3-us-west-1.amazonaws.com/zenmarket/ublock-drizzle.png">\n      </li>\n      <li style="display: none;">\n        <img src="https://s3-us-west-1.amazonaws.com/zenmarket/ghostery-drizzle.png">\n      </li>\n    </ul>\n  </div>'}Object.defineProperty(n,"__esModule",{value:!0}),n.handleTabs=r,n.getTabsHTML=l;var a=e("./detectDevice"),d=o(a)},{"./detectDevice":10}],13:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(){var e=window.location.href;window.location.hash&&(e=e.replace(window.location.hash,"")),(0,l["default"])(e)&&(0,s["default"])({window:window,callback:function(t){var n=t.detected,o=t.disabled;(0,u.sendAdblockAnalytic)({API_URL:z["default"].API_URL,url:e,detected:n,disabled:o,window:window}),n&&(0,d["default"])({pixel:z["default"].pixel,uiConfig:z["default"].uiConfig,extraButtonConfig:z["default"].extraButtonConfig,extraButton2Config:z["default"].extraButton2Config,API_URL:z["default"].API_URL,url:e,window:window})}})}e("../sass/style.scss");var r=e("./checkUrlRule"),l=o(r),a=e("./blockScroll"),d=o(a),c=e("./adblock"),s=o(c),u=e("./api"),m=e("../settings.json"),z=o(m);i()},{"../sass/style.scss":3,"../settings.json":4,"./adblock":5,"./api":6,"./blockScroll":7,"./checkUrlRule":9}]},{},[13]);