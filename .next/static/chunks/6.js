(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./node_modules/@editorjs/quote/dist/bundle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@editorjs/quote/dist/bundle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n(1).toString();var a=function(){function t(e){var n=e.data,r=e.config,o=e.api,i=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var a=t.ALIGNMENTS,s=t.DEFAULT_ALIGNMENT;this.api=o,this.readOnly=i,this.quotePlaceholder=r.quotePlaceholder||t.DEFAULT_QUOTE_PLACEHOLDER,this.captionPlaceholder=r.captionPlaceholder||t.DEFAULT_CAPTION_PLACEHOLDER,this.data={text:n.text||"",caption:n.caption||"",alignment:Object.values(a).includes(n.alignment)&&n.alignment||r.defaultAlignment||s}}return i(t,[{key:"CSS",get:function(){return{baseClass:this.api.styles.block,wrapper:"cdx-quote",text:"cdx-quote__text",input:this.api.styles.input,caption:"cdx-quote__caption",settingsWrapper:"cdx-quote-settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}},{key:"settings",get:function(){return[{name:"left",icon:'<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm0 4.275H9.03a1.069 1.069 0 1 1 0 2.137H1.07a1.069 1.069 0 1 1 0-2.137zm0 4.275h9.812a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z" /></svg>'},{name:"center",icon:'<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm3.15 4.275h5.962a1.069 1.069 0 0 1 0 2.137H4.22a1.069 1.069 0 1 1 0-2.137zM1.069 8.55H13.33a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z"/></svg>'}]}}],[{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:'<svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><path d="M13.53 6.185l.027.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.569-1.568l4.838-4.837L6.396 2.23A1.125 1.125 0 1 1 7.986.64l5.52 5.518.025.027zm-5.815 0l.026.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.568-1.568l4.837-4.837L.58 2.23A1.125 1.125 0 0 1 2.171.64L7.69 6.158l.025.027z" /></svg>',title:"Quote"}}},{key:"contentless",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"DEFAULT_QUOTE_PLACEHOLDER",get:function(){return"Enter a quote"}},{key:"DEFAULT_CAPTION_PLACEHOLDER",get:function(){return"Enter a caption"}},{key:"ALIGNMENTS",get:function(){return{left:"left",center:"center"}}},{key:"DEFAULT_ALIGNMENT",get:function(){return t.ALIGNMENTS.left}},{key:"conversionConfig",get:function(){return{import:"text",export:function(t){return t.caption?"".concat(t.text," — ").concat(t.caption):t.text}}}}]),i(t,[{key:"render",value:function(){var t=this._make("blockquote",[this.CSS.baseClass,this.CSS.wrapper]),e=this._make("div",[this.CSS.input,this.CSS.text],{contentEditable:!this.readOnly,innerHTML:this.data.text}),n=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly,innerHTML:this.data.caption});return e.dataset.placeholder=this.quotePlaceholder,n.dataset.placeholder=this.captionPlaceholder,t.appendChild(e),t.appendChild(n),t}},{key:"save",value:function(t){var e=t.querySelector(".".concat(this.CSS.text)),n=t.querySelector(".".concat(this.CSS.caption));return Object.assign(this.data,{text:e.innerHTML,caption:n.innerHTML})}},{key:"renderSettings",value:function(){var t=this,e=this._make("div",[this.CSS.settingsWrapper],{});return this.settings.map(function(n){var r,o=t._make("div",t.CSS.settingsButton,{innerHTML:n.icon,title:"".concat((r=n.name,r[0].toUpperCase()+r.substr(1))," alignment")});return o.classList.toggle(t.CSS.settingsButtonActive,n.name===t.data.alignment),e.appendChild(o),o}).forEach(function(e,n,r){e.addEventListener("click",function(){t._toggleTune(t.settings[n].name),r.forEach(function(e,n){var r=t.settings[n].name;e.classList.toggle(t.CSS.settingsButtonActive,r===t.data.alignment)})})}),e}},{key:"_toggleTune",value:function(t){this.data.alignment=t}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);Array.isArray(n)?(e=i.classList).add.apply(e,r(n)):n&&i.classList.add(n);for(var a in o)i[a]=o[a];return i}}],[{key:"sanitize",get:function(){return{text:{br:!0},caption:{br:!0},alignment:{}}}}]),t}();t.exports=a},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-quote-icon svg {\n  transform: rotate(180deg);\n}\n\n.cdx-quote {\n  margin: 0;\n}\n\n.cdx-quote__text {\n  min-height: 158px;\n  margin-bottom: 10px;\n}\n\n.cdx-quote__caption {}\n\n.cdx-quote [contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-quote-settings {\n  display: flex;\n}\n\n.cdx-quote-settings .cdx-settings-button {\n  width: 50%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,u=0,l=[],f=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(m(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function v(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),h(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=c||(c=v(e)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){g(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,x=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlZGl0b3Jqcy9xdW90ZS9kaXN0L2J1bmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxlQUFlLEtBQWlELG9CQUFvQixTQUF5RyxDQUFDLG1CQUFtQixtQkFBbUIsU0FBUyxjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsdUNBQXVDLHFDQUFxQyxvQkFBb0IsRUFBRSxpQkFBaUIsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsRUFBRSxtQkFBbUIsOEJBQThCLHFEQUFxRCwwQkFBMEIsNkNBQTZDLHNCQUFzQiw2REFBNkQsWUFBWSxlQUFlLFNBQVMsaUJBQWlCLGlDQUFpQyxpQkFBaUIsWUFBWSxVQUFVLHNCQUFzQixtQkFBbUIsaURBQWlELGtCQUFrQixrQkFBa0IsY0FBYyxtQkFBbUIscUJBQXFCLGtDQUFrQyxXQUFXLGNBQWMsVUFBVSxpQkFBaUIsK0dBQStHLGdCQUFnQix1RUFBdUUsR0FBRyxnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csa0JBQWtCLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLGNBQWMsNkNBQTZDLGVBQWUsOEVBQThFLFNBQVMseUNBQXlDLHdMQUF3TCw0SEFBNEgsYUFBYSx5QkFBeUIsT0FBTyxtUkFBbVIsRUFBRSw4QkFBOEIsUUFBUSxrVkFBa1YsRUFBRSwwVkFBMFYsR0FBRyxJQUFJLHlDQUF5QyxVQUFVLEVBQUUsNkJBQTZCLE9BQU8sMGJBQTBiLEVBQUUsaUNBQWlDLFVBQVUsRUFBRSxzQ0FBc0MsVUFBVSxFQUFFLCtDQUErQyx1QkFBdUIsRUFBRSxpREFBaUQseUJBQXlCLEVBQUUsZ0NBQWdDLE9BQU8sOEJBQThCLEVBQUUsdUNBQXVDLDBCQUEwQixFQUFFLHNDQUFzQyxPQUFPLGlDQUFpQyxxRUFBcUUsU0FBUyw4QkFBOEIsd0hBQXdILHdEQUF3RCx3REFBd0QsMkRBQTJELEVBQUUsc0lBQXNJLEVBQUUsNkJBQTZCLGlHQUFpRyxnQ0FBZ0MscUNBQXFDLEdBQUcsRUFBRSxzQ0FBc0MsMkRBQTJELEVBQUUscUNBQXFDLDRDQUE0Qyx5RkFBeUYsRUFBRSxtR0FBbUcsMEJBQTBCLHNDQUFzQywwREFBMEQseUJBQXlCLG9FQUFvRSxFQUFFLEVBQUUsS0FBSyxFQUFFLG9DQUFvQyx1QkFBdUIsRUFBRSw4QkFBOEIsK0hBQStILDZCQUE2Qix5RUFBeUUseUJBQXlCLFVBQVUsSUFBSSw4QkFBOEIsT0FBTyxNQUFNLE1BQU0sVUFBVSxNQUFNLGdCQUFnQixLQUFLLEdBQUcsWUFBWSxpQkFBaUIsV0FBVyxxQ0FBcUMsT0FBTywyQ0FBMkMsVUFBVSwrQkFBK0IsaUJBQWlCLHFEQUFxRCw4QkFBOEIsR0FBRyxnQkFBZ0IsY0FBYyxHQUFHLHNCQUFzQixzQkFBc0Isd0JBQXdCLEdBQUcsMEJBQTBCLGdFQUFnRSx1QkFBdUIsb0NBQW9DLG1CQUFtQix3QkFBd0IsZUFBZSxHQUFHLHVFQUF1RSxlQUFlLEdBQUcsNkVBQTZFLGVBQWUsR0FBRywyQkFBMkIsa0JBQWtCLEdBQUcsOENBQThDLGVBQWUsR0FBRyxTQUFTLGVBQWUsc0JBQXNCLFNBQVMsNkJBQTZCLDRCQUE0QixvQkFBb0Isc0JBQXNCLGVBQWUsK0JBQStCLHVEQUF1RCxjQUFjLGtHQUFrRyw0Q0FBNEMsRUFBRSwyQ0FBMkMsTUFBTSxxQkFBcUIsTUFBTSw2QkFBNkIsTUFBTSxJQUFJLFdBQVcsbUJBQW1CLHNDQUFzQyxZQUFZLEtBQUssY0FBYyxLQUFLLGlCQUFpQiw4QkFBOEIsUUFBUSxXQUFXLEtBQUssV0FBVyxnR0FBZ0csSUFBSSxpQkFBaUIsWUFBWSxpQkFBaUIsb0RBQW9ELFlBQVksaURBQWlELGdCQUFnQixTQUFTLG1CQUFtQixtQ0FBbUMsa0JBQWtCLGtCQUFrQixpQ0FBaUMsY0FBYyx1RUFBdUUseUJBQXlCLFNBQVMsT0FBTyxPQUFPLGFBQWEsMEJBQTBCLGdCQUFnQixZQUFZLFdBQVcsS0FBSyxxQkFBcUIsTUFBTSxTQUFTLFlBQVksaUJBQWlCLDJCQUEyQixLQUFLLGlCQUFpQixrQ0FBa0MsS0FBSyxTQUFTLFFBQVEsaUJBQWlCLDRCQUE0QixTQUFTLDBCQUEwQixnQkFBZ0IsaUJBQWlCLEtBQUssV0FBVyxLQUFLLHdDQUF3QyxvQ0FBb0MscUNBQXFDLGVBQWUsRUFBRSxTQUFTLGdCQUFnQixzQkFBc0IscUlBQXFJLG9CQUFvQixnSUFBZ0ksK0NBQStDLEtBQUssaVFBQWlRLDRDQUE0QyxxQkFBcUIsY0FBYyxnQ0FBZ0MsNEJBQTRCLG1CQUFtQixvQkFBb0IsY0FBYyxzQ0FBc0MsOEVBQThFLGdCQUFnQixtQ0FBbUMsdUJBQXVCLEVBQUUsZ0JBQWdCLFlBQVksdUJBQXVCLCtDQUErQyxRQUFRLGdCQUFnQixVQUFVLDBEQUEwRCwwTEFBMEwscUNBQXFDLHVHQUF1RyxzQkFBc0IsZ0VBQWdFLHVDQUF1QyxxREFBcUQsc0VBQXNFLG9CQUFvQixnQkFBZ0IsV0FBVyx3REFBd0QsNkJBQTZCLHlDQUF5QywwQkFBMEIsc0JBQXNCLDZCQUE2Qix1Q0FBdUMsS0FBSyxLQUFLLGFBQWEsNkJBQTZCLDJDQUEyQywyQkFBMkIsS0FBSyxFQUFFLHdCQUF3QixNQUFNLHNFQUFzRSxPQUFPLFVBQVUsd0JBQXdCLCtJQUErSSxRQUFRLDJDQUEyQyxxSUFBcUksYUFBYSwwQkFBMEIsaUJBQWlCLFdBQVcsS0FBSyxXQUFXLDZCQUE2QixlQUFlLFFBQVEsV0FBVyxLQUFLLE1BQU0sc0JBQXNCLFlBQVksaUJBQWlCLGlCQUFpQixtQkFBbUIsNEJBQTRCLDJDQUEyQyxFQUFFLG9CQUFvQixpQkFBaUIsNENBQTRDLEtBQUssZ0RBQWdELDZFQUE2RSxlQUFlLHNCQUFzQixrREFBa0QsMERBQTBELG1DQUFtQyxxRUFBcUUscUZBQXFGLGtEQUFrRCxTQUFTLG1DQUFtQyxTQUFTLEVBQUUsMEtBQTBLLEdBQUcsR0FBRyxFIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuUXVvdGU9ZSgpOnQuUXVvdGU9ZSgpfSh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIG89ZVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxyKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KW4uZChyLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCIvXCIsbihuLnM9MCl9KFtmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gcih0KXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHZhciBlPTAsbj1uZXcgQXJyYXkodC5sZW5ndGgpO2U8dC5sZW5ndGg7ZSsrKW5bZV09dFtlXTtyZXR1cm4gbn19KHQpfHxmdW5jdGlvbih0KXtpZihTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHQpfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXJldHVybiBBcnJheS5mcm9tKHQpfSh0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIil9KCl9ZnVuY3Rpb24gbyh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19ZnVuY3Rpb24gaSh0LGUsbil7cmV0dXJuIGUmJm8odC5wcm90b3R5cGUsZSksbiYmbyh0LG4pLHR9bigxKS50b1N0cmluZygpO3ZhciBhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlKXt2YXIgbj1lLmRhdGEscj1lLmNvbmZpZyxvPWUuYXBpLGk9ZS5yZWFkT25seTshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpO3ZhciBhPXQuQUxJR05NRU5UUyxzPXQuREVGQVVMVF9BTElHTk1FTlQ7dGhpcy5hcGk9byx0aGlzLnJlYWRPbmx5PWksdGhpcy5xdW90ZVBsYWNlaG9sZGVyPXIucXVvdGVQbGFjZWhvbGRlcnx8dC5ERUZBVUxUX1FVT1RFX1BMQUNFSE9MREVSLHRoaXMuY2FwdGlvblBsYWNlaG9sZGVyPXIuY2FwdGlvblBsYWNlaG9sZGVyfHx0LkRFRkFVTFRfQ0FQVElPTl9QTEFDRUhPTERFUix0aGlzLmRhdGE9e3RleHQ6bi50ZXh0fHxcIlwiLGNhcHRpb246bi5jYXB0aW9ufHxcIlwiLGFsaWdubWVudDpPYmplY3QudmFsdWVzKGEpLmluY2x1ZGVzKG4uYWxpZ25tZW50KSYmbi5hbGlnbm1lbnR8fHIuZGVmYXVsdEFsaWdubWVudHx8c319cmV0dXJuIGkodCxbe2tleTpcIkNTU1wiLGdldDpmdW5jdGlvbigpe3JldHVybntiYXNlQ2xhc3M6dGhpcy5hcGkuc3R5bGVzLmJsb2NrLHdyYXBwZXI6XCJjZHgtcXVvdGVcIix0ZXh0OlwiY2R4LXF1b3RlX190ZXh0XCIsaW5wdXQ6dGhpcy5hcGkuc3R5bGVzLmlucHV0LGNhcHRpb246XCJjZHgtcXVvdGVfX2NhcHRpb25cIixzZXR0aW5nc1dyYXBwZXI6XCJjZHgtcXVvdGUtc2V0dGluZ3NcIixzZXR0aW5nc0J1dHRvbjp0aGlzLmFwaS5zdHlsZXMuc2V0dGluZ3NCdXR0b24sc2V0dGluZ3NCdXR0b25BY3RpdmU6dGhpcy5hcGkuc3R5bGVzLnNldHRpbmdzQnV0dG9uQWN0aXZlfX19LHtrZXk6XCJzZXR0aW5nc1wiLGdldDpmdW5jdGlvbigpe3JldHVyblt7bmFtZTpcImxlZnRcIixpY29uOic8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxMVwiIHZpZXdCb3g9XCIwIDAgMTYgMTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgPjxwYXRoIGQ9XCJNMS4wNjkgMEgxMy4zM2ExLjA2OSAxLjA2OSAwIDAgMSAwIDIuMTM4SDEuMDdhMS4wNjkgMS4wNjkgMCAxIDEgMC0yLjEzOHptMCA0LjI3NUg5LjAzYTEuMDY5IDEuMDY5IDAgMSAxIDAgMi4xMzdIMS4wN2ExLjA2OSAxLjA2OSAwIDEgMSAwLTIuMTM3em0wIDQuMjc1aDkuODEyYTEuMDY5IDEuMDY5IDAgMCAxIDAgMi4xMzdIMS4wN2ExLjA2OSAxLjA2OSAwIDAgMSAwLTIuMTM3elwiIC8+PC9zdmc+J30se25hbWU6XCJjZW50ZXJcIixpY29uOic8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxMVwiIHZpZXdCb3g9XCIwIDAgMTYgMTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgPjxwYXRoIGQ9XCJNMS4wNjkgMEgxMy4zM2ExLjA2OSAxLjA2OSAwIDAgMSAwIDIuMTM4SDEuMDdhMS4wNjkgMS4wNjkgMCAxIDEgMC0yLjEzOHptMy4xNSA0LjI3NWg1Ljk2MmExLjA2OSAxLjA2OSAwIDAgMSAwIDIuMTM3SDQuMjJhMS4wNjkgMS4wNjkgMCAxIDEgMC0yLjEzN3pNMS4wNjkgOC41NUgxMy4zM2ExLjA2OSAxLjA2OSAwIDAgMSAwIDIuMTM3SDEuMDdhMS4wNjkgMS4wNjkgMCAwIDEgMC0yLjEzN3pcIi8+PC9zdmc+J31dfX1dLFt7a2V5OlwiaXNSZWFkT25seVN1cHBvcnRlZFwiLGdldDpmdW5jdGlvbigpe3JldHVybiEwfX0se2tleTpcInRvb2xib3hcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57aWNvbjonPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE1IDE0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTMuNTMgNi4xODVsLjAyNy4wMjVhMS4xMDkgMS4xMDkgMCAwIDEgMCAxLjU2OGwtNS42NDQgNS42NDRhMS4xMDkgMS4xMDkgMCAxIDEtMS41NjktMS41NjhsNC44MzgtNC44MzdMNi4zOTYgMi4yM0ExLjEyNSAxLjEyNSAwIDEgMSA3Ljk4Ni42NGw1LjUyIDUuNTE4LjAyNS4wMjd6bS01LjgxNSAwbC4wMjYuMDI1YTEuMTA5IDEuMTA5IDAgMCAxIDAgMS41NjhsLTUuNjQ0IDUuNjQ0YTEuMTA5IDEuMTA5IDAgMSAxLTEuNTY4LTEuNTY4bDQuODM3LTQuODM3TC41OCAyLjIzQTEuMTI1IDEuMTI1IDAgMCAxIDIuMTcxLjY0TDcuNjkgNi4xNThsLjAyNS4wMjd6XCIgLz48L3N2Zz4nLHRpdGxlOlwiUXVvdGVcIn19fSx7a2V5OlwiY29udGVudGxlc3NcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4hMH19LHtrZXk6XCJlbmFibGVMaW5lQnJlYWtzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuITB9fSx7a2V5OlwiREVGQVVMVF9RVU9URV9QTEFDRUhPTERFUlwiLGdldDpmdW5jdGlvbigpe3JldHVyblwiRW50ZXIgYSBxdW90ZVwifX0se2tleTpcIkRFRkFVTFRfQ0FQVElPTl9QTEFDRUhPTERFUlwiLGdldDpmdW5jdGlvbigpe3JldHVyblwiRW50ZXIgYSBjYXB0aW9uXCJ9fSx7a2V5OlwiQUxJR05NRU5UU1wiLGdldDpmdW5jdGlvbigpe3JldHVybntsZWZ0OlwibGVmdFwiLGNlbnRlcjpcImNlbnRlclwifX19LHtrZXk6XCJERUZBVUxUX0FMSUdOTUVOVFwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0LkFMSUdOTUVOVFMubGVmdH19LHtrZXk6XCJjb252ZXJzaW9uQ29uZmlnXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJue2ltcG9ydDpcInRleHRcIixleHBvcnQ6ZnVuY3Rpb24odCl7cmV0dXJuIHQuY2FwdGlvbj9cIlwiLmNvbmNhdCh0LnRleHQsXCIg4oCUIFwiKS5jb25jYXQodC5jYXB0aW9uKTp0LnRleHR9fX19XSksaSh0LFt7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9tYWtlKFwiYmxvY2txdW90ZVwiLFt0aGlzLkNTUy5iYXNlQ2xhc3MsdGhpcy5DU1Mud3JhcHBlcl0pLGU9dGhpcy5fbWFrZShcImRpdlwiLFt0aGlzLkNTUy5pbnB1dCx0aGlzLkNTUy50ZXh0XSx7Y29udGVudEVkaXRhYmxlOiF0aGlzLnJlYWRPbmx5LGlubmVySFRNTDp0aGlzLmRhdGEudGV4dH0pLG49dGhpcy5fbWFrZShcImRpdlwiLFt0aGlzLkNTUy5pbnB1dCx0aGlzLkNTUy5jYXB0aW9uXSx7Y29udGVudEVkaXRhYmxlOiF0aGlzLnJlYWRPbmx5LGlubmVySFRNTDp0aGlzLmRhdGEuY2FwdGlvbn0pO3JldHVybiBlLmRhdGFzZXQucGxhY2Vob2xkZXI9dGhpcy5xdW90ZVBsYWNlaG9sZGVyLG4uZGF0YXNldC5wbGFjZWhvbGRlcj10aGlzLmNhcHRpb25QbGFjZWhvbGRlcix0LmFwcGVuZENoaWxkKGUpLHQuYXBwZW5kQ2hpbGQobiksdH19LHtrZXk6XCJzYXZlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdCh0aGlzLkNTUy50ZXh0KSksbj10LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHRoaXMuQ1NTLmNhcHRpb24pKTtyZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEse3RleHQ6ZS5pbm5lckhUTUwsY2FwdGlvbjpuLmlubmVySFRNTH0pfX0se2tleTpcInJlbmRlclNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dGhpcy5fbWFrZShcImRpdlwiLFt0aGlzLkNTUy5zZXR0aW5nc1dyYXBwZXJdLHt9KTtyZXR1cm4gdGhpcy5zZXR0aW5ncy5tYXAoZnVuY3Rpb24obil7dmFyIHIsbz10Ll9tYWtlKFwiZGl2XCIsdC5DU1Muc2V0dGluZ3NCdXR0b24se2lubmVySFRNTDpuLmljb24sdGl0bGU6XCJcIi5jb25jYXQoKHI9bi5uYW1lLHJbMF0udG9VcHBlckNhc2UoKStyLnN1YnN0cigxKSksXCIgYWxpZ25tZW50XCIpfSk7cmV0dXJuIG8uY2xhc3NMaXN0LnRvZ2dsZSh0LkNTUy5zZXR0aW5nc0J1dHRvbkFjdGl2ZSxuLm5hbWU9PT10LmRhdGEuYWxpZ25tZW50KSxlLmFwcGVuZENoaWxkKG8pLG99KS5mb3JFYWNoKGZ1bmN0aW9uKGUsbixyKXtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7dC5fdG9nZ2xlVHVuZSh0LnNldHRpbmdzW25dLm5hbWUpLHIuZm9yRWFjaChmdW5jdGlvbihlLG4pe3ZhciByPXQuc2V0dGluZ3Nbbl0ubmFtZTtlLmNsYXNzTGlzdC50b2dnbGUodC5DU1Muc2V0dGluZ3NCdXR0b25BY3RpdmUscj09PXQuZGF0YS5hbGlnbm1lbnQpfSl9KX0pLGV9fSx7a2V5OlwiX3RvZ2dsZVR1bmVcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLmRhdGEuYWxpZ25tZW50PXR9fSx7a2V5OlwiX21ha2VcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZSxuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpudWxsLG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnt9LGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtBcnJheS5pc0FycmF5KG4pPyhlPWkuY2xhc3NMaXN0KS5hZGQuYXBwbHkoZSxyKG4pKTpuJiZpLmNsYXNzTGlzdC5hZGQobik7Zm9yKHZhciBhIGluIG8paVthXT1vW2FdO3JldHVybiBpfX1dLFt7a2V5Olwic2FuaXRpemVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57dGV4dDp7YnI6ITB9LGNhcHRpb246e2JyOiEwfSxhbGlnbm1lbnQ6e319fX1dKSx0fSgpO3QuZXhwb3J0cz1hfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1t0LmkscixcIlwiXV0pO3ZhciBvPXtobXI6ITAsdHJhbnNmb3JtOnZvaWQgMCxpbnNlcnRJbnRvOnZvaWQgMH07big0KShyLG8pO3IubG9jYWxzJiYodC5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24odCxlLG4peyh0LmV4cG9ydHM9bigzKSghMSkpLnB1c2goW3QuaSxcIi5jZHgtcXVvdGUtaWNvbiBzdmcge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmNkeC1xdW90ZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jZHgtcXVvdGVfX3RleHQge1xcbiAgbWluLWhlaWdodDogMTU4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2R4LXF1b3RlX19jYXB0aW9uIHt9XFxuXFxuLmNkeC1xdW90ZSBbY29udGVudEVkaXRhYmxlPXRydWVdW2RhdGEtcGxhY2Vob2xkZXJdOjpiZWZvcmV7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xcbiAgY29sb3I6ICM3MDc2ODQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNkeC1xdW90ZSBbY29udGVudEVkaXRhYmxlPXRydWVdW2RhdGEtcGxhY2Vob2xkZXJdOmVtcHR5OjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNkeC1xdW90ZSBbY29udGVudEVkaXRhYmxlPXRydWVdW2RhdGEtcGxhY2Vob2xkZXJdOmVtcHR5OmZvY3VzOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuXFxuLmNkeC1xdW90ZS1zZXR0aW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2R4LXF1b3RlLXNldHRpbmdzIC5jZHgtc2V0dGluZ3MtYnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblwiLFwiXCJdKX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oZSl7dmFyIG49ZnVuY3Rpb24odCxlKXt2YXIgbj10WzFdfHxcIlwiLHI9dFszXTtpZighcilyZXR1cm4gbjtpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXt2YXIgbz0oYT1yLFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGEpKSkpK1wiICovXCIpLGk9ci5zb3VyY2VzLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIrci5zb3VyY2VSb290K3QrXCIgKi9cIn0pO3JldHVybltuXS5jb25jYXQoaSkuY29uY2F0KFtvXSkuam9pbihcIlxcblwiKX12YXIgYTtyZXR1cm5bbl0uam9pbihcIlxcblwiKX0oZSx0KTtyZXR1cm4gZVsyXT9cIkBtZWRpYSBcIitlWzJdK1wie1wiK24rXCJ9XCI6bn0pLmpvaW4oXCJcIil9LGUuaT1mdW5jdGlvbih0LG4pe1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1bW251bGwsdCxcIlwiXV0pO2Zvcih2YXIgcj17fSxvPTA7bzx0aGlzLmxlbmd0aDtvKyspe3ZhciBpPXRoaXNbb11bMF07XCJudW1iZXJcIj09dHlwZW9mIGkmJihyW2ldPSEwKX1mb3Iobz0wO288dC5sZW5ndGg7bysrKXt2YXIgYT10W29dO1wibnVtYmVyXCI9PXR5cGVvZiBhWzBdJiZyW2FbMF1dfHwobiYmIWFbMl0/YVsyXT1uOm4mJihhWzJdPVwiKFwiK2FbMl0rXCIpIGFuZCAoXCIrbitcIilcIiksZS5wdXNoKGEpKX19LGV9fSxmdW5jdGlvbih0LGUsbil7dmFyIHIsbyxpPXt9LGE9KHI9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2J9LGZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PW8mJihvPXIuYXBwbHkodGhpcyxhcmd1bWVudHMpKSxvfSkscz1mdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdClyZXR1cm4gdCgpO2lmKHZvaWQgMD09PWVbdF0pe3ZhciBuPWZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpfS5jYWxsKHRoaXMsdCk7aWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZuIGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXRyeXtuPW4uY29udGVudERvY3VtZW50LmhlYWR9Y2F0Y2godCl7bj1udWxsfWVbdF09bn1yZXR1cm4gZVt0XX19KCksYz1udWxsLHU9MCxsPVtdLGY9big1KTtmdW5jdGlvbiBwKHQsZSl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl0sbz1pW3IuaWRdO2lmKG8pe28ucmVmcysrO2Zvcih2YXIgYT0wO2E8by5wYXJ0cy5sZW5ndGg7YSsrKW8ucGFydHNbYV0oci5wYXJ0c1thXSk7Zm9yKDthPHIucGFydHMubGVuZ3RoO2ErKylvLnBhcnRzLnB1c2gobShyLnBhcnRzW2FdLGUpKX1lbHNle3ZhciBzPVtdO2ZvcihhPTA7YTxyLnBhcnRzLmxlbmd0aDthKyspcy5wdXNoKG0oci5wYXJ0c1thXSxlKSk7aVtyLmlkXT17aWQ6ci5pZCxyZWZzOjEscGFydHM6c319fX1mdW5jdGlvbiBkKHQsZSl7Zm9yKHZhciBuPVtdLHI9e30sbz0wO288dC5sZW5ndGg7bysrKXt2YXIgaT10W29dLGE9ZS5iYXNlP2lbMF0rZS5iYXNlOmlbMF0scz17Y3NzOmlbMV0sbWVkaWE6aVsyXSxzb3VyY2VNYXA6aVszXX07clthXT9yW2FdLnBhcnRzLnB1c2gocyk6bi5wdXNoKHJbYV09e2lkOmEscGFydHM6W3NdfSl9cmV0dXJuIG59ZnVuY3Rpb24gaCh0LGUpe3ZhciBuPXModC5pbnNlcnRJbnRvKTtpZighbil0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt2YXIgcj1sW2wubGVuZ3RoLTFdO2lmKFwidG9wXCI9PT10Lmluc2VydEF0KXI/ci5uZXh0U2libGluZz9uLmluc2VydEJlZm9yZShlLHIubmV4dFNpYmxpbmcpOm4uYXBwZW5kQ2hpbGQoZSk6bi5pbnNlcnRCZWZvcmUoZSxuLmZpcnN0Q2hpbGQpLGwucHVzaChlKTtlbHNlIGlmKFwiYm90dG9tXCI9PT10Lmluc2VydEF0KW4uYXBwZW5kQ2hpbGQoZSk7ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgdC5pbnNlcnRBdHx8IXQuaW5zZXJ0QXQuYmVmb3JlKXRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO3ZhciBvPXModC5pbnNlcnRJbnRvK1wiIFwiK3QuaW5zZXJ0QXQuYmVmb3JlKTtuLmluc2VydEJlZm9yZShlLG8pfX1mdW5jdGlvbiBnKHQpe2lmKG51bGw9PT10LnBhcmVudE5vZGUpcmV0dXJuITE7dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpO3ZhciBlPWwuaW5kZXhPZih0KTtlPj0wJiZsLnNwbGljZShlLDEpfWZ1bmN0aW9uIHYodCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiB2b2lkIDA9PT10LmF0dHJzLnR5cGUmJih0LmF0dHJzLnR5cGU9XCJ0ZXh0L2Nzc1wiKSx5KGUsdC5hdHRycyksaCh0LGUpLGV9ZnVuY3Rpb24geSh0LGUpe09iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24obil7dC5zZXRBdHRyaWJ1dGUobixlW25dKX0pfWZ1bmN0aW9uIG0odCxlKXt2YXIgbixyLG8saTtpZihlLnRyYW5zZm9ybSYmdC5jc3Mpe2lmKCEoaT1lLnRyYW5zZm9ybSh0LmNzcykpKXJldHVybiBmdW5jdGlvbigpe307dC5jc3M9aX1pZihlLnNpbmdsZXRvbil7dmFyIGE9dSsrO249Y3x8KGM9dihlKSkscj13LmJpbmQobnVsbCxuLGEsITEpLG89dy5iaW5kKG51bGwsbixhLCEwKX1lbHNlIHQuc291cmNlTWFwJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIEJsb2ImJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2E/KG49ZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7cmV0dXJuIHZvaWQgMD09PXQuYXR0cnMudHlwZSYmKHQuYXR0cnMudHlwZT1cInRleHQvY3NzXCIpLHQuYXR0cnMucmVsPVwic3R5bGVzaGVldFwiLHkoZSx0LmF0dHJzKSxoKHQsZSksZX0oZSkscj1mdW5jdGlvbih0LGUsbil7dmFyIHI9bi5jc3Msbz1uLnNvdXJjZU1hcCxpPXZvaWQgMD09PWUuY29udmVydFRvQWJzb2x1dGVVcmxzJiZvOyhlLmNvbnZlcnRUb0Fic29sdXRlVXJsc3x8aSkmJihyPWYocikpO28mJihyKz1cIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobykpKSkrXCIgKi9cIik7dmFyIGE9bmV3IEJsb2IoW3JdLHt0eXBlOlwidGV4dC9jc3NcIn0pLHM9dC5ocmVmO3QuaHJlZj1VUkwuY3JlYXRlT2JqZWN0VVJMKGEpLHMmJlVSTC5yZXZva2VPYmplY3RVUkwocyl9LmJpbmQobnVsbCxuLGUpLG89ZnVuY3Rpb24oKXtnKG4pLG4uaHJlZiYmVVJMLnJldm9rZU9iamVjdFVSTChuLmhyZWYpfSk6KG49dihlKSxyPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5jc3Mscj1lLm1lZGlhO3ImJnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIixyKTtpZih0LnN0eWxlU2hlZXQpdC5zdHlsZVNoZWV0LmNzc1RleHQ9bjtlbHNle2Zvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSl9fS5iaW5kKG51bGwsbiksbz1mdW5jdGlvbigpe2cobil9KTtyZXR1cm4gcih0KSxmdW5jdGlvbihlKXtpZihlKXtpZihlLmNzcz09PXQuY3NzJiZlLm1lZGlhPT09dC5tZWRpYSYmZS5zb3VyY2VNYXA9PT10LnNvdXJjZU1hcClyZXR1cm47cih0PWUpfWVsc2UgbygpfX10LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgREVCVUcmJkRFQlVHJiZcIm9iamVjdFwiIT10eXBlb2YgZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpOyhlPWV8fHt9KS5hdHRycz1cIm9iamVjdFwiPT10eXBlb2YgZS5hdHRycz9lLmF0dHJzOnt9LGUuc2luZ2xldG9ufHxcImJvb2xlYW5cIj09dHlwZW9mIGUuc2luZ2xldG9ufHwoZS5zaW5nbGV0b249YSgpKSxlLmluc2VydEludG98fChlLmluc2VydEludG89XCJoZWFkXCIpLGUuaW5zZXJ0QXR8fChlLmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciBuPWQodCxlKTtyZXR1cm4gcChuLGUpLGZ1bmN0aW9uKHQpe2Zvcih2YXIgcj1bXSxvPTA7bzxuLmxlbmd0aDtvKyspe3ZhciBhPW5bb107KHM9aVthLmlkXSkucmVmcy0tLHIucHVzaChzKX10JiZwKGQodCxlKSxlKTtmb3Iobz0wO288ci5sZW5ndGg7bysrKXt2YXIgcztpZigwPT09KHM9cltvXSkucmVmcyl7Zm9yKHZhciBjPTA7YzxzLnBhcnRzLmxlbmd0aDtjKyspcy5wYXJ0c1tjXSgpO2RlbGV0ZSBpW3MuaWRdfX19fTt2YXIgYix4PShiPVtdLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGJbdF09ZSxiLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfSk7ZnVuY3Rpb24gdyh0LGUsbixyKXt2YXIgbz1uP1wiXCI6ci5jc3M7aWYodC5zdHlsZVNoZWV0KXQuc3R5bGVTaGVldC5jc3NUZXh0PXgoZSxvKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG8pLGE9dC5jaGlsZE5vZGVzO2FbZV0mJnQucmVtb3ZlQ2hpbGQoYVtlXSksYS5sZW5ndGg/dC5pbnNlcnRCZWZvcmUoaSxhW2VdKTp0LmFwcGVuZENoaWxkKGkpfX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5sb2NhdGlvbjtpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtpZighdHx8XCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIHQ7dmFyIG49ZS5wcm90b2NvbCtcIi8vXCIrZS5ob3N0LHI9bitlLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLyxcIi9cIik7cmV0dXJuIHQucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksZnVuY3Rpb24odCxlKXt2YXIgbyxpPWUudHJpbSgpLnJlcGxhY2UoL15cIiguKilcIiQvLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV9KS5yZXBsYWNlKC9eJyguKiknJC8sZnVuY3Rpb24odCxlKXtyZXR1cm4gZX0pO3JldHVybi9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QoaSk/dDoobz0wPT09aS5pbmRleE9mKFwiLy9cIik/aTowPT09aS5pbmRleE9mKFwiL1wiKT9uK2k6citpLnJlcGxhY2UoL15cXC5cXC8vLFwiXCIpLFwidXJsKFwiK0pTT04uc3RyaW5naWZ5KG8pK1wiKVwiKX0pfX1dKX0pOyJdLCJzb3VyY2VSb290IjoiIn0=