!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=4)}([function(n,r,t){var e=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},i=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),a=[];function c(n){for(var r=-1,t=0;t<a.length;t++)if(a[t].identifier===n){r=t;break}return r}function u(n,r){for(var t={},e=[],o=0;o<n.length;o++){var i=n[o],u=r.base?i[0]+r.base:i[0],l=t[u]||0,d="".concat(u," ").concat(l);t[u]=l+1;var s=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(f)):a.push({identifier:d,updater:b(f,r),references:1}),e.push(d)}return e}function l(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var d,s=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function f(n,r,t,e){var o=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=s(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var h=null,g=0;function b(n,r){var t,e,o;if(r.singleton){var i=g++;t=h||(h=l(r)),e=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=l(r),e=p.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var t=u(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var o=c(t[e]);a[o].references--}for(var i=u(n,r),l=0;l<t.length;l++){var d=c(t[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=i}}}},function(n,r,t){(r=t(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap);"]),r.push([n.i,"/*Design by Gora Asep S*/\r\nhtml{\r\n    background-image: url('https://lh3.googleusercontent.com/T9UKhxhnhcm9vvOQwJtA61KM--O4iQxj8SHw_ZzBrA7Za07FUJ0wFneMT0WOdNYH55fSpCS_ROTcSkAHHI0ADfG0JeSYyghr8Terspf7sKa6s-K9WK0bBbgGhM-n7FLcBe_j8ak7CQ=w1186-h667-no');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\nnav a{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    color: white;\r\n    padding: 5px 50px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 0 2pt black;\r\n}\r\nnav ul{\r\n    \r\n    padding-left: 0;\r\n}\r\n.hijau{\r\n    background-color: rgb(69, 196, 30);\r\n}\r\n.ungu{\r\n    background-color: rgb(134, 2, 134);\r\n}\r\n.biru{\r\n    background-color: rgb(14, 89, 250);\r\n}\r\n.orange{\r\n    background-color: rgb(204, 135, 7);\r\n}\r\n.header1{\r\n    padding: 10px;\r\n    margin: 0;\r\n    display: inline;\r\n    opacity: 90%;\r\n    border-radius: 20px;\r\n    font-size: 300%;\r\n\r\n}\r\nnav a:hover{\r\n    font-size: 19px;\r\n    font-weight: bolder;\r\n}\r\n\r\nbody{\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 16px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\np{\r\n    text-align: justify;\r\n}\r\nh1{\r\n    font-size: 150%;\r\n}\r\nh2,h3{\r\n    color: #00a2c6;\r\n}\r\naside h2{\r\n    display: inline-block;\r\n    object-position: center;\r\n    width: 150px;\r\n    background-color: rgb(69, 196, 30);\r\n    border-radius: 10px;\r\n    color: white;\r\n}\r\n#content h2{\r\n    width: 200px;\r\n    background-color: rgb(134, 2, 134);\r\n    border-radius: 10px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.profile header{\r\n    text-align: center;\r\n}\r\nfooter{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    padding: 2px;\r\n    color: white;\r\n    background-color: #00a2c6;\r\n    /*position: sticky;*/\r\n    bottom: 0;\r\n}\r\nfooter p{\r\n    text-align: center;\r\n}\r\n.featured-image {\r\n    width: auto;\r\n    max-height: 250px;\r\n    object-fit: cover;\r\n    object-position: center;\r\n    margin: 10px;\r\n}\r\n.kiri{\r\n    float: left;\r\n}\r\n.kanan{\r\n    float: right;\r\n}\r\n.clear{\r\n    clear: both;\r\n}\r\n.profile img{\r\n    width: 100%;\r\n    \r\n}\r\n.card{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n    background-color: white;\r\n    opacity: 90%;\r\n}\r\n.card:hover{\r\n    opacity: 90%;\r\n    background-color: rgb(217, 219, 219);\r\n}\r\n.jumbotron{\r\n    font-size: 200%;\r\n    padding: 30px;\r\n    background-image: url(https://lh3.googleusercontent.com/F2eZHSoqrnemXBVh5QdKsUc3x4TGMYLpVEx-10vfmLhxSjSxPeF4SXmdo6kKwSx967O2ObppY2tLqGo0T2EC6iAC5FgklQxpABNmJBNWwQ1GWIb94cY5dMp9wgwTrAr42il4iREwdg=w1318-h387-no);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-color: #00c8eb;\r\n    text-align: center;\r\n    color: white;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    -webkit-text-stroke-width: 1px;\r\n    -webkit-text-stroke-color: black;\r\n}\r\nnav li{\r\n    display: inline;\r\n    list-style-type: none;\r\n    margin-right: 20px;\r\n    margin-left: 20px;\r\n}\r\nnav{\r\n    background-color: #00a2c6;\r\n    padding: 1px;\r\n    position: sticky;\r\n    top: 0;\r\n    opacity: 90%;\r\n    z-index: 1;\r\n    text-align: center;\r\n}\r\n/*nav:hover{\r\n    opacity: 100%;\r\n    background-color: #00a2c6;\r\n    background-color: #63ddf8;\r\n}*/\r\nmain{\r\n    padding: 20px;\r\n    overflow: auto;\r\n}\r\n#content{\r\n    float: left;\r\n    width: 75%;\r\n}\r\naside{\r\n    float: right;\r\n    width: 25%;\r\n    padding-left: 20px;\r\n    text-align: center;\r\n}\r\n*{\r\n    box-sizing: border-box;\r\n}\r\n@media screen and (max-width: 1000px){\r\n    #content,\r\n    aside{\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    .featured-image{\r\n        max-height: 300px;\r\n        width: auto;\r\n    }\r\n    nav a{\r\n        padding: 5px 5px;\r\n    }\r\n    .header1{\r\n        font-size: 150%;\r\n    }\r\n    iframe{\r\n        max-height: 100%;\r\n        width: 100%;\r\n    }\r\n}\r\n@media screen and (max-width: 600px){\r\n    #content,\r\n    aside{\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    .featured-image{\r\n        max-height: 180px;\r\n        width: auto;\r\n    }\r\n}\r\n@media screen and (max-width: 400px){\r\n    #content,\r\n    aside{\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    .featured-image{\r\n        max-height: 100%;\r\n        width: 100%;\r\n    }\r\n    nav a{\r\n        font-size: 70%;\r\n    }\r\n}\r\nheader{\r\n    display: inline;\r\n}\r\naside p{\r\n    text-align: center;\r\n}\r\ntr{\r\n    text-align: center;\r\n}\r\nfigcaption{\r\n    font-size: 50%;\r\n}\r\n\r\n\r\n\r\n#myBtn {\r\n    display: none; \r\n    position: fixed; \r\n    bottom: 20px; \r\n    right: 30px; \r\n    z-index: 99; \r\n    border: none; \r\n    outline: none; \r\n    background-color: #00a2c6; \r\n    color: white; \r\n    cursor: pointer; \r\n    padding: 15px; \r\n    border-radius: 10px; \r\n    font-size: 18px; \r\n    box-shadow: 0 0 0 2pt black;\r\n  }\r\n  \r\n  #myBtn:hover {\r\n    background-color: #555; \r\n  }\r\n  /* width */\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n  }\r\n  \r\n  /* Track */\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  /* Handle */\r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  /* Handle on hover */\r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n\r\n\r\n\r\n.flex-container-profile{\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 300px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    /*background-color: white;*/\r\n\r\n}\r\n.profileButton{\r\n    display: flex;\r\n    flex-direction: row;\r\n    text-align: center;\r\n    /*background-color: white;*/\r\n    margin: 0 auto;\r\n    width: 80%;\r\n\r\n}\r\n.button1{\r\n    margin-right:5px;\r\n}\r\n.button2{\r\n    margin-left: 5px;\r\n}\r\n.button{\r\n    cursor: pointer;\r\n    flex-basis: 50%;\r\n\r\n    /*font-size: 18px;\r\n    font-weight: 900;\r\n    text-decoration: none;*/\r\n\r\n    color: white;\r\n    padding: 5px auto;\r\n    border-radius: 5px;\r\n    \r\n}\r\n.button:hover{\r\n    font-weight: bold;\r\n    box-shadow: 0 0 0 1pt black;\r\n}",""]),n.exports=r},function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(a=e,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);e&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),r.push(u))}},r}},function(n,r,t){"use strict";t.r(r);t(0);function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function i(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function a(n,r){return!r||"object"!==e(r)&&"function"!=typeof r?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):r}function c(n){var r="function"==typeof Map?new Map:void 0;return(c=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(n))return r.get(n);r.set(n,e)}function e(){return u(n,arguments,s(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),d(e,n)})(n)}function u(n,r,t){return(u=l()?Reflect.construct:function(n,r,t){var e=[null];e.push.apply(e,r);var o=new(Function.bind.apply(n,e));return t&&d(o,t.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function d(n,r){return(d=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,r)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&d(n,r)}(p,n);var r,t,e,c,u,f=(r=p,t=l(),function(){var n,e=s(r);if(t){var o=s(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return a(this,n)});function p(){return o(this,p),f.apply(this,arguments)}return e=p,(c=[{key:"connectedCallback",value:function(){this.src=this.getAttribute("src")||null,this.alt=this.getAttribute("alt")||null,this.caption=this.getAttribute("caption")||null,this.innerHTML='\n    <figure>\n      <img src="'.concat(this.src,'"\n          alt="').concat(this.alt,'">\n      <figcaption>').concat(this.caption,"</figcaption>\n    </figure>\n    ")}}])&&i(e.prototype,c),u&&i(e,u),p}(c(HTMLElement));customElements.define("image-figure",f);function p(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=function(n,r){if(!n)return;if("string"==typeof n)return h(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(n,r)}(n))){var r=0,t=function(){};return{s:t,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,o,i=!0,a=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return i=n.done,n},e:function(n){a=!0,o=n},f:function(){try{i||null==e.return||e.return()}finally{if(a)throw o}}}}function h(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}var g=document.querySelector("image-figure");g||(g=document.createElement("image-figure"),document.body.appendChild(g));var b=document.getElementById("myBtn");window.onscroll=function(){y()};var m,y=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?b.style.display="block":b.style.display="none"},v=p(document.querySelectorAll("#myBtn"));try{for(v.s();!(m=v.n()).done;){m.value.addEventListener("click",(function(n){if(n.target.classList.contains("myBtn"))return document.body.scrollTop=0,void(document.documentElement.scrollTop=0)}))}}catch(n){v.e(n)}finally{v.f()}var x,w=p(document.querySelectorAll(".button"));try{for(w.s();!(x=w.n()).done;){x.value.addEventListener("click",(function(n){var r=n.target;r.classList.contains("button2")?k():r.classList.contains("button1")&&S()}))}}catch(n){w.e(n)}finally{w.f()}var k=function(){var n=document.getElementById("flexProfileContent");n.parentNode.removeChild(n);var r=document.createElement("div");r.setAttribute("class","profileContent"),r.setAttribute("id","newDetail"),r.innerHTML='\n      <h3>Informasi Lainnya</h3>\n      <table align="center" border="1">\n        <tr>\n          <th>Tanggal lahir</th>\n          <td>19 Juli 1997</td>\n        </tr>\n        <tr>\n          <th>Lulusan</th>\n          <td>Universitas Telkom</td>\n        </tr>\n        <tr>\n          <th>Jurusan</th>\n          <td>S1 Teknik Elektro</td>\n        </tr>\n        <tr>\n          <th>Nomor Telepon</th>\n          <td>+62-822-1832-8615</td>\n        </tr>\n      </table>',document.getElementById("flexProfile").appendChild(r)},S=function(){var n=document.getElementById("newDetail");n.parentNode.removeChild(n);var r=document.createElement("div");r.setAttribute("class","profileContent"),r.setAttribute("id","flexProfileContent"),r.innerHTML='\n      <p>Gora Asep Setiana</p>\n      <image-figure src="https://lh3.googleusercontent.com/pw/ACtC-3eusuacnORUUxcf5zfcWfHceneCa1bmIn0RN7XhDUPiJrUSicjCwxQ9HpW6fnt8XA-K91zRueVWYrF3l_DIlPCzGZW4Ni5QWAzPfqG4oy5kO4-BinAESLo-6O4VGchxpbPgzN1__duszwtZJeq6mxmg=w439-h667-no?authuser=0" caption="Lokasi: Alun-alun Kota Bandung">\n      </image-figure>',document.getElementById("flexProfile").appendChild(r)};document.getElementById("findLyrics").onclick=function(){var n=new XMLHttpRequest,r=document.getElementById("title").value,t=document.getElementById("artist").value;n.onload=function(){var n=JSON.parse(this.responseText);console.log(n.lyrics),document.getElementById("bottle").innerHTML=n.lyrics},n.onerror=function(){console.log("Ups something error")},n.open("GET","https://api.lyrics.ovh/v1/"+t+"/"+r),n.send()}}]);
