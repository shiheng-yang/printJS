(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11755f11"],{"46aa":function(e,t,n){"use strict";n("4d21")},"4d21":function(e,t,n){},add5:function(e,t,n){(function(t,n){e.exports=n()})(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);n(/*! ./sass/index.scss */"./src/sass/index.scss");var r=n(/*! ./js/init */"./src/js/init.js"),a=r["default"].init;"undefined"!==typeof window&&(window.printJS=a),t["default"]=a},"./src/js/browser.js":
/*!***************************!*\
  !*** ./src/js/browser.js ***!
  \***************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r={isFirefox:function(){return"undefined"!==typeof InstallTrigger},isIE:function(){return-1!==navigator.userAgent.indexOf("MSIE")||!!document.documentMode},isEdge:function(){return!r.isIE()&&!!window.StyleMedia},isChrome:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return!!e.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||-1!==navigator.userAgent.toLowerCase().indexOf("safari")},isIOSChrome:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("crios")}};t["default"]=r},"./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! exports provided: addWrapper, capitalizePrint, collectStyles, addHeader, cleanUp, isRawHTML */function(e,t,n){"use strict";n.r(t),n.d(t,"addWrapper",(function(){return o})),n.d(t,"capitalizePrint",(function(){return s})),n.d(t,"collectStyles",(function(){return l})),n.d(t,"addHeader",(function(){return d})),n.d(t,"cleanUp",(function(){return u})),n.d(t,"isRawHTML",(function(){return p}));var r=n(/*! ./modal */"./src/js/modal.js"),a=n(/*! ./browser */"./src/js/browser.js");function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){var n="font-family:"+t.font+" !important; font-size: "+t.font_size+" !important; width:100%;";return'<div style="'+n+'">'+e+"</div>"}function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}function l(e,t){for(var n=document.defaultView||window,r="",a=n.getComputedStyle(e,""),i=0;i<a.length;i++)(-1!==t.targetStyles.indexOf("*")||-1!==t.targetStyle.indexOf(a[i])||c(t.targetStyles,a[i]))&&a.getPropertyValue(a[i])&&(r+=a[i]+":"+a.getPropertyValue(a[i])+";");return r+="max-width: "+t.maxWidth+"px !important; font-size: "+t.font_size+" !important;",r}function c(e,t){for(var n=0;n<e.length;n++)if("object"===i(t)&&-1!==t.indexOf(e[n]))return!0;return!1}function d(e,t){var n=document.createElement("div");if(p(t.header))n.innerHTML=t.header;else{var r=document.createElement("h1"),a=document.createTextNode(t.header);r.appendChild(a),r.setAttribute("style",t.headerStyle),n.appendChild(r)}e.insertBefore(n,e.childNodes[0])}function u(e){e.showModal&&r["default"].close(),e.onLoadingEnd&&e.onLoadingEnd(),(e.showModal||e.onLoadingStart)&&window.URL.revokeObjectURL(e.printable);var t="mouseover";(a["default"].isChrome()||a["default"].isFirefox())&&(t="focus");var n=function n(){window.removeEventListener(t,n),e.onPrintDialogClose();var r=document.getElementById(e.frameId);r&&r.remove()};window.addEventListener(t,n)}function p(e){var t=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return t.test(e)}},"./src/js/html.js":
/*!************************!*\
  !*** ./src/js/html.js ***!
  \************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./functions */"./src/js/functions.js"),a=n(/*! ./print */"./src/js/print.js");function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){for(var n=e.cloneNode(),a=Array.prototype.slice.call(e.childNodes),i=0;i<a.length;i++)if(-1===t.ignoreElements.indexOf(a[i].id)){var s=o(a[i],t);n.appendChild(s)}switch(t.scanStyles&&1===e.nodeType&&n.setAttribute("style",Object(r["collectStyles"])(e,t)),e.tagName){case"SELECT":n.value=e.value;break;case"CANVAS":n.getContext("2d").drawImage(e,0,0);break}return n}function s(e){return"object"===i(e)&&e&&(e instanceof HTMLElement||1===e.nodeType)}t["default"]={print:function(e,t){var n=s(e.printable)?e.printable:document.getElementById(e.printable);n?(e.printableElement=o(n,e),e.header&&Object(r["addHeader"])(e.printableElement,e),a["default"].send(e,t)):window.console.error("Invalid HTML element id: "+e.printable)}}},"./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./functions */"./src/js/functions.js"),a=n(/*! ./print */"./src/js/print.js"),i=n(/*! ./browser */"./src/js/browser.js");t["default"]={print:function(e,t){e.printable.constructor!==Array&&(e.printable=[e.printable]),e.printableElement=document.createElement("div"),e.printable.forEach((function(t){var n=document.createElement("img");if(n.setAttribute("style",e.imageStyle),n.src=t,i["default"].isFirefox()){var r=n.src;n.src=r}var a=document.createElement("div");a.appendChild(n),e.printableElement.appendChild(a)})),e.header&&Object(r["addHeader"])(e.printableElement,e),a["default"].send(e,t)}}},"./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./browser */"./src/js/browser.js"),a=n(/*! ./modal */"./src/js/modal.js"),i=n(/*! ./pdf */"./src/js/pdf.js"),o=n(/*! ./html */"./src/js/html.js"),s=n(/*! ./raw-html */"./src/js/raw-html.js"),l=n(/*! ./image */"./src/js/image.js"),c=n(/*! ./json */"./src/js/json.js");function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}var u=["pdf","html","image","json","raw-html"];t["default"]={init:function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(e){throw e},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},t=arguments[0];if(void 0===t)throw new Error("printJS expects at least 1 attribute.");switch(d(t)){case"string":e.printable=encodeURI(t),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":for(var n in e.printable=t.printable,e.fallbackPrintable="undefined"!==typeof t.fallbackPrintable?t.fallbackPrintable:e.printable,e.fallbackPrintable=e.base64?"data:application/pdf;base64,".concat(e.fallbackPrintable):e.fallbackPrintable,e)"printable"!==n&&"fallbackPrintable"!==n&&(e[n]="undefined"!==typeof t[n]?t[n]:e[n]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+d(t))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||"string"!==typeof e.type||-1===u.indexOf(e.type.toLowerCase()))throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&a["default"].show(e),e.onLoadingStart&&e.onLoadingStart();var p=document.getElementById(e.frameId);p&&p.parentNode.removeChild(p);var f=document.createElement("iframe");switch(r["default"].isFirefox()?f.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):f.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),f.setAttribute("id",e.frameId),"pdf"!==e.type&&(f.srcdoc="<html><head><title>"+e.documentTitle+"</title>",e.css&&(Array.isArray(e.css)||(e.css=[e.css]),e.css.forEach((function(e){f.srcdoc+='<link rel="stylesheet" href="'+e+'">'}))),f.srcdoc+="</head><body></body></html>"),e.type){case"pdf":if(r["default"].isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var m=window.open(e.fallbackPrintable,"_blank");m.focus(),e.onIncompatibleBrowser()}catch(b){e.onError(b)}finally{e.showModal&&a["default"].close(),e.onLoadingEnd&&e.onLoadingEnd()}else i["default"].print(e,f);break;case"image":l["default"].print(e,f);break;case"html":o["default"].print(e,f);break;case"raw-html":s["default"].print(e,f);break;case"json":c["default"].print(e,f);break}}}},"./src/js/json.js":
/*!************************!*\
  !*** ./src/js/json.js ***!
  \************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./functions */"./src/js/functions.js"),a=n(/*! ./print */"./src/js/print.js");function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e){var t=e.printable,n=e.properties,a='<table style="border-collapse: collapse; width: 100%;">';e.repeatTableHeader&&(a+="<thead>"),a+="<tr>";for(var i=0;i<n.length;i++)a+='<th style="width:'+n[i].columnSize+";"+e.gridHeaderStyle+'">'+Object(r["capitalizePrint"])(n[i].displayName)+"</th>";a+="</tr>",e.repeatTableHeader&&(a+="</thead>"),a+="<tbody>";for(var o=0;o<t.length;o++){a+="<tr>";for(var s=0;s<n.length;s++){var l=t[o],c=n[s].field.split(".");if(c.length>1)for(var d=0;d<c.length;d++)l=l[c[d]];else l=l[n[s].field];a+='<td style="width:'+n[s].columnSize+e.gridStyle+'">'+l+"</td>"}a+="</tr>"}return a+="</tbody></table>",a}t["default"]={print:function(e,t){if("object"!==i(e.printable))throw new Error("Invalid javascript data object (JSON).");if("boolean"!==typeof e.repeatTableHeader)throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!e.properties||!Array.isArray(e.properties))throw new Error("Invalid properties array for your JSON data.");e.properties=e.properties.map((function(t){return{field:"object"===i(t)?t.field:t,displayName:"object"===i(t)?t.displayName:t,columnSize:"object"===i(t)&&t.columnSize?t.columnSize+";":100/e.properties.length+"%;"}})),e.printableElement=document.createElement("div"),e.header&&Object(r["addHeader"])(e.printableElement,e),e.printableElement.innerHTML+=o(e),a["default"].send(e,t)}}},"./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r={show:function(e){var t="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",n=document.createElement("div");n.setAttribute("style",t),n.setAttribute("id","printJS-Modal");var a=document.createElement("div");a.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var i=document.createElement("div");i.setAttribute("class","printClose"),i.setAttribute("id","printClose"),a.appendChild(i);var o=document.createElement("span");o.setAttribute("class","printSpinner"),a.appendChild(o);var s=document.createTextNode(e.modalMessage);a.appendChild(s),n.appendChild(a),document.getElementsByTagName("body")[0].appendChild(n),document.getElementById("printClose").addEventListener("click",(function(){r.close()}))},close:function(){var e=document.getElementById("printJS-Modal");e&&e.parentNode.removeChild(e)}};t["default"]=r},"./src/js/pdf.js":
/*!***********************!*\
  !*** ./src/js/pdf.js ***!
  \***********************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./print */"./src/js/print.js"),a=n(/*! ./functions */"./src/js/functions.js");function i(e,t,n){var a=new window.Blob([n],{type:"application/pdf"});a=window.URL.createObjectURL(a),t.setAttribute("src",a),r["default"].send(e,t)}t["default"]={print:function(e,t){if(e.base64){var n=Uint8Array.from(atob(e.printable),(function(e){return e.charCodeAt(0)}));i(e,t,n)}else{e.printable=/^(blob|http|\/\/)/i.test(e.printable)?e.printable:window.location.origin+("/"!==e.printable.charAt(0)?"/"+e.printable:e.printable);var r=new window.XMLHttpRequest;r.responseType="arraybuffer",r.addEventListener("error",(function(){Object(a["cleanUp"])(e),e.onError(r.statusText,r)})),r.addEventListener("load",(function(){if(-1===[200,201].indexOf(r.status))return Object(a["cleanUp"])(e),void e.onError(r.statusText,r);i(e,t,r.response)})),r.open("GET",e.printable,!0),r.send()}}}},"./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./browser */"./src/js/browser.js"),a=n(/*! ./functions */"./src/js/functions.js"),i={send:function(e,t){document.getElementsByTagName("body")[0].appendChild(t);var n=document.getElementById(e.frameId);n.onload=function(){if("pdf"!==e.type){var t=n.contentWindow||n.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),"pdf"!==e.type&&e.style){var a=document.createElement("style");a.innerHTML=e.style,t.head.appendChild(a)}var i=t.getElementsByTagName("img");i.length>0?s(Array.from(i)).then((function(){return o(n,e)})):o(n,e)}else r["default"].isFirefox()?setTimeout((function(){return o(n,e)}),1e3):o(n,e)}}};function o(e,t){try{if(e.focus(),r["default"].isEdge()||r["default"].isIE())try{e.contentWindow.document.execCommand("print",!1,null)}catch(n){e.contentWindow.print()}else e.contentWindow.print()}catch(i){t.onError(i)}finally{r["default"].isFirefox()&&(e.style.visibility="hidden",e.style.left="-1px"),Object(a["cleanUp"])(t)}}function s(e){var t=e.map((function(e){if(e.src&&e.src!==window.location.href)return l(e)}));return Promise.all(t)}function l(e){return new Promise((function(t){var n=function n(){e&&"undefined"!==typeof e.naturalWidth&&0!==e.naturalWidth&&e.complete?t():setTimeout(n,500)};n()}))}t["default"]=i},"./src/js/raw-html.js":
/*!****************************!*\
  !*** ./src/js/raw-html.js ***!
  \****************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./print */"./src/js/print.js");t["default"]={print:function(e,t){e.printableElement=document.createElement("div"),e.printableElement.setAttribute("style","width:100%"),e.printableElement.innerHTML=e.printable,r["default"].send(e,t)}}},"./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */function(e,t,n){},0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */function(e,t,n){e.exports=n(/*! ./src/index.js */"./src/index.js")}})["default"]}))},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("div",{staticClass:"cont"},[t("el-table",{attrs:{data:e.tableData,height:"calc(100% - 40px)"}},[t("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别"}}),t("el-table-column",{attrs:{prop:"age",label:"年龄"}}),t("el-table-column",{attrs:{prop:"cs1",label:"测量结果1"}}),t("el-table-column",{attrs:{prop:"cs2",label:"测量结果2"}}),t("el-table-column",{attrs:{prop:"date",label:"产生时间"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function({row:n}){return[t("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-printer"},on:{click:function(t){return e.openDialog(n)}}},[e._v("打 印")])]}}])})],1),t("el-dialog",{attrs:{title:"打印预览",visible:e.dialogVisible,width:"700px",top:"3vh",modal:!0,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.dialogVisible=t},close:e.cancles}},[t("div",{staticClass:"dialogsC"},[t("div",{staticClass:"measureSty",attrs:{id:"printMeasure"}},[t("div",{staticClass:"personSty"},[t("div",[e._v(" "+e._s(e.printInfo.cap)+" "),t("div",[e._v("xxx剂量检测报告")])]),t("div",{staticClass:"personInfoSty"},e._l(e.personInfo,(function(n){return t("div",{key:n.index},[t("span",[e._v(e._s(n.name))]),t("span",[e._v(e._s(e.printInfo[n.val]))])])})),0)]),t("div",{staticClass:"tableSty"},[t("span",{staticClass:"titNav"},[e._v("xx数据")]),t("el-table",{attrs:{border:"",data:e.printList}},[t("el-table-column",{attrs:{prop:"treatmentNum",label:"序 号",width:"114"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.index)+" ")]}}])}),t("el-table-column",{attrs:{prop:"cs1",label:"测量结果1"}}),t("el-table-column",{attrs:{prop:"cs2",label:"测量结果2"}}),t("el-table-column",{attrs:{prop:"date",label:"测量时间"}})],1),t("span",{staticClass:"tip"},[e._v("*只展示最近5次测量数据")])],1),t("div",{staticClass:"resSty"},[t("span",{staticClass:"titNav"},[e._v("检测意见")]),t("span",[e._v("正常正常正常正常正常")])]),t("div",{staticClass:"docSty"},[t("span",[e._v("xx人：")]),t("span",[e._v("xx人：")]),t("span",[e._v("报告时间："+e._s(e.printInfo.date))])])])]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancles}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.printClk}},[e._v("打 印")])],1)])],1)])},a=[],i=n("add5"),o=n.n(i),s=function(){return"\n  @page {\n    margin: 0 10mm;\n  }\n  .measureSty {\n    margin-top: 10mm;\n  }\n  .personSty {\n    height: 65mm;\n    > :first-child {\n      margin: 15mm 0 !important;\n    }\n  }\n  .tableSty {\n    height: 70mm;\n    margin-top: 5mm;\n    .tip {\n      font-size: 3mm !important;\n    }\n  }\n  /*最后一列*/\n  .el-table th.el-table__cell > .cell,.el-table td.el-table__cell div {\n    width: 49.3mm;\n  }\n  /* 第一列  */ \n  .el-table--border .el-table__cell:first-child .cell {\n    width: 31.5mm;\n  }\n  /* 检测意见 */ \n  .resSty {\n    height: 60mm;\n    justify-content: center;\n  }\n  /* 检测意见标题 */ \n  .titNav {\n    font-size: 5mm !important;\n  }\n  /* 最后一行 */ \n  .docSty {\n    height: 14mm;\n    font-size: 3mm;\n  }\n  "},l={directives:{print:o.a},data(){return{name:"",tableData:[],dialogVisible:!1,printList:[],personInfo:[{name:"姓 名",val:"name"},{name:"性 别",val:"sex"},{name:"产生时间",val:"date"},{name:"年 龄",val:"age"}],printInfo:{}}},methods:{searchs(){const e=[{cap:"xxx测试公司1",name:"张三",sex:"男",age:"22",cs1:"0.7",cs2:"1.1",date:"2024-09-21 12:33:23"},{cap:"xxx测试公司2",name:"李四",sex:"女",age:"28",cs1:"1.5",cs2:"0.6",date:"2024-08-20 12:33:23"},{cap:"xxx测试公司3",name:"王五",sex:"男",age:"34",cs1:"0.3",cs2:"1.9",date:"2024-09-24 12:33:23"},{cap:"xxx测试公司4",name:"赵六",sex:"女",age:"18",cs1:"1.2",cs2:"1.3",date:"2023-09-20 12:33:23"},{cap:"xxx测试公司5",name:"钱七",sex:"男",age:"47",cs1:"0.8",cs2:"0.9",date:"2024-03-20 12:33:23"},{cap:"xxx测试公司6",name:"孙八",sex:"女",age:"19",cs1:"1.7",cs2:"0.4",date:"2024-09-12 12:33:23"},{cap:"xxx测试公司7",name:"周九",sex:"男",age:"29",cs1:"0.9",cs2:"1.5",date:"2024-09-3 12:33:23"},{cap:"xxx测试公司8",name:"吴十",sex:"女",age:"33",cs1:"1.1",cs2:"1.4",date:"2024-09-4 12:33:23"},{cap:"xxx测试公司9",name:"郑十一",sex:"男",age:"41",cs1:"0.4",cs2:"1.7",date:"2024-09-23 12:33:23"},{cap:"xxx测试公司10",name:"冯十二",sex:"女",age:"25",cs1:"0.5",cs2:"1.0",date:"2024-09-31 12:33:23"}];this.tableData=e},reserts(){},cancles(){this.dialogVisible=!1},openDialog(e){this.cjQuery(e),this.dialogVisible=!0},printClk(){const e=document.styleSheets;let t="";Array.from(e).forEach(e=>{const n=e.cssRules||e.rules;Array.from(n).forEach(e=>{e.cssText&&e.cssText.startsWith(".measureSty")&&(t+=e.cssText)})}),t+=s(),this.$nextTick(()=>{o()({printable:"printMeasure",type:"html",style:t,scanStyles:!1})})},cjQuery(e){this.printInfo=e,this.printList=this.tableData.slice(-5).map((e,t)=>({...e,index:t+1}))}},mounted(){this.searchs()}},c=l,d=(n("46aa"),n("db85"),n("2877")),u=Object(d["a"])(c,r,a,!1,null,"37883265",null);t["default"]=u.exports},cb09:function(e,t,n){},db85:function(e,t,n){"use strict";n("cb09")}}]);
//# sourceMappingURL=chunk-11755f11.e39a6ede.js.map