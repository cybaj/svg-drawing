_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"1lKD":function(t,e,n){!function(t,e){"use strict";function n(){return r=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}var r=n,i=r,a="http://www.w3.org/2000/svg",o=function(t,e){var n=document.createElementNS(a,t);return Object.keys(e).sort().map((function(t){n.setAttribute(t,e[t])})),n},s=function(t){var e=Object.entries(t).reduce((function(t,e,n){var r,i,a=e[0],o=e[1];return o?Object.assign(Object.assign({},t),((r={})[(i=a,i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())]=o,r)):t}),{});return o("path",e)},u=function(t){var e,n,r,i=t.width,u=t.height,c=t.background,l=t.paths,h={width:String(i),height:String(u)},d=c?[o("rect",Object.assign(Object.assign({},h),{fill:c}))]:[];return e=h,n=[].concat(d,l.map(s)),(r=document.createElementNS(a,"svg")).setAttributeNS(null,"version","1.1"),r.setAttribute("xmlns",a),r.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),Object.keys(e).sort().map((function(t){r.setAttribute(t,e[t])})),n.map((function(t){r.appendChild(t)})),r},c=function(){function t(t,e){var n=(void 0===e?{}:e).background;this.el=t;var r=t.getBoundingClientRect(),i=r.width,a=r.height;t.appendChild(u({background:n,width:i,height:a,paths:[]}))}return t.prototype.update=function(t){this.el.replaceChild(u(t),this.el.childNodes[0])},t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t},d=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},f=function(){function t(t,e){this.x=t,this.y=e}var e=t.prototype;return e.toVector=function(){var t=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)),e=Math.atan2(this.y,this.x);return new m(t,e)},e.scale=function(e){return new t(this.x*e,this.y*e)},e.add=function(e){return new t(this.x+e.x,this.y+e.y)},e.sub=function(e){return new t(this.x-e.x,this.y-e.y)},e.eql=function(t){return this.x===t.x&&this.y===t.y},e.clone=function(){return new t(this.x,this.y)},t}(),p={MOVE:"M",MOVE_RELATIVE:"m",LINE:"L",LINE_RELATIVE:"l",CURVE:"C",CURVE_RELATIVE:"c",CLOSE:"Z",HORIZONTAL:"H",HORIZONTAL_RELATIVE:"h",VERTICAL:"V",VERTICAL_RELATIVE:"v",ARC_CURVE:"A",ARC_CURVE_RELATIVE:"a",QUADRATIC_CURVE:"Q",QUADRATIC_CURVE_RELATIVE:"q"},v=function(){function t(t,e){void 0===e&&(e=[]),this.value=e,this.type=t}var e=t.prototype;return e.toString=function(){return this.type===p.CLOSE?p.CLOSE:this.type+" "+this.value.map((function(t){return void 0===e&&(e=2),+t.toFixed(e);var e})).join(" ")},e.scale=function(e){return new t(this.type,this.value.map((function(t){return t*e})))},e.clone=function(){return new t(this.type,this.value.slice())},h(t,[{key:"cr",set:function(t){t&&("C"!==this.type&&"c"!==this.type||6!==this.value.length||(this.value.splice(2,1,t.x),this.value.splice(3,1,t.y)))},get:function(){if(("C"===this.type||"c"===this.type)&&6===this.value.length){var t=this.value.slice(2,4),e=t[0],n=t[1];return new f(e,n)}}},{key:"cl",set:function(t){t&&("C"!==this.type&&"c"!==this.type||6!==this.value.length||(this.value.splice(0,1,t.x),this.value.splice(1,1,t.y)))},get:function(){if(("C"===this.type||"c"===this.type)&&6===this.value.length){var t=this.value.slice(0,2),e=t[0],n=t[1];return new f(e,n)}}},{key:"point",set:function(t){t&&(this.value.splice(this.value.length-2,1,t.x),this.value.splice(this.value.length-1,1,t.y))},get:function(){var t=this.value.slice(this.value.length-2);return 2===t.length?new f(t[0],t[1]):void 0}}]),t}(),m=function(){function t(t,e){this.value=t,this.angle=e}var e=t.prototype;return e.toPoint=function(){var t=Math.cos(this.angle)*this.value,e=Math.sin(this.angle)*this.value;return new f(t,e)},e.scale=function(e){return new t(this.value*e,this.angle)},t}(),g=function(){function t(t){void 0===t&&(t={});var e=t.d,n=d(t,["d"]);this.attrs=n,this.commands=[],e&&this.parseCommandString(e)}var e=t.prototype;return e.scale=function(t){return this.commands=this.commands.map((function(e){return e.scale(t)})),this.attrs.strokeWidth=String(t*+(this.attrs.strokeWidth||0)),this},e.addCommand=function(t){var e;return Array.isArray(t)?(e=this.commands).push.apply(e,t):this.commands.push(t),this},e.getCommandString=function(){return 0===this.commands.length?"":this.commands.map((function(t,e){return t.toString()})).join(" ").trim()},e.parseCommandString=function(t){this.commands=[];for(var e,n=null,r=[],i=t.split(" "),a=function(t){return Object.values(p).includes(t)?t:null},o=0;o<i.length;o+=1){var s=a(i[o]);if(s){if(!n){n=s;continue}this.commands.push(new v(n,r)),n=s,r=[]}else{if((e=+i[o])!=e)return;r.push(+i[o])}}null!==n&&this.commands.push(new v(n,r))},e.parsePathElement=function(t){for(var e=0;e<t.attributes.length;e+=1){var n,r=t.attributes.item(e);r&&r.value&&("d"!==r.name?this.attrs=Object.assign(Object.assign({},this.attrs),((n={})[(i=r.name,i.replace(/-([a-z])/g,(function(t,e){return e.toUpperCase()})))]=r.value,n)):this.parseCommandString(r.value))}var i;return this},e.toJson=function(){return Object.assign(Object.assign({},this.attrs),{d:this.getCommandString()})},e.clone=function(){var e=new t(this.attrs);return this.commands.map((function(t){e.commands.push(t.clone())})),e},t}(),b=function(){function t(t){var e=t.width,n=t.height,r=t.background;this.paths=[],this.width=e,this.height=n,this.background=r}var e=t.prototype;return e.resize=function(t){var e=t.width,n=t.height;this.scalePath(e/this.width),this.width=e,this.height=n},e.scalePath=function(t){if(1!==t)for(var e=0;e<this.paths.length;e+=1)this.paths[e].scale(t);return this},e.addPath=function(t){var e;return Array.isArray(t)?(e=this.paths).push.apply(e,t):this.paths.push(t),this},e.clonePaths=function(){return this.paths.map((function(t){return t.clone()}))},e.updatePath=function(t,e){var n=e||this.paths.length-1;return n<0&&this.paths.push(t),this.paths[n]=t,this},e.toJson=function(){return{width:this.width,height:this.height,background:this.background,paths:this.paths.map((function(t){return t.toJson()}))}},e.copy=function(t){return this.paths=t.clonePaths(),t.width&&this.width&&this.scalePath(this.width/t.width),this},e.parseSVGString=function(t){var e=(new DOMParser).parseFromString(t,"image/svg+xml").querySelector("svg");return e?this.parseSVGElement(e):(this.paths=[],this)},e.parseSVGElement=function(t){var e=[];t.querySelectorAll("path").forEach((function(t){var n=(new g).parsePathElement(t);0!==n.commands.length&&e.push(n)})),this.paths=e;var n=Number(t.getAttribute("width"));return n&&this.width&&this.scalePath(this.width/n),this},t}(),w=function(){function t(t){var e=(void 0===t?{}:t).ratio;this.ratio=null!=e?e:.2}var e=t.prototype;return e._controlPoint=function(t,e,n){var r=new f(t.x,t.y),i=new f(e.x,e.y),a=new f(n.x,n.y).sub(r).toVector().scale(this.ratio).toPoint(),o=i.add(a);return[o.x,o.y]},e.bezierCurve=function(t,e,n,r){var i=[].concat(this._controlPoint(t,e,n),this._controlPoint(r,n,e),[n.x,n.y]);return new v(p.CURVE,i)},e.lineCommands=function(t){return t.map((function(t,e){return new v(0===e?p.MOVE:p.LINE,[t.x,t.y])}))},e.bezierCurveCommands=function(t){var e=[];if(t.length<3)return this.lineCommands(t);for(var n=0;n<t.length;n+=1)0!==n?e.push(this.bezierCurve(t[n-2<0?0:n-2],t[n-1],t[n],n<t.length-1?t[n+1]:t[n])):e.push(new v(p.MOVE,[t[n].x,t[n].y]));return e},t}();function y(t,e,n){var r,i,a;void 0===n&&(n={});var o=null,s=0,u=function(){s=!1===n.leading?0:Date.now(),o=null,a=t.apply(r,i),o||(r=null,i=null)},c=function(){o&&(clearTimeout(o),o=null)};return function(){var l=Date.now();s||!1!==n.leading||(s=l);var h=e-(l-s);r=this;for(var d=arguments.length,f=new Array(d),p=0;p<d;p++)f[p]=arguments[p];return i=f,h<=0||h>e?(c(),s=l,a=t.apply(r,i),o||(r=null,i=null)):o||!1===n.trailing||(o=setTimeout(u,h)),a}}var x={pointer:{start:["pointerdown"],move:["pointermove"],end:["pointerleave","pointercancel"],frameout:["pointerup"]},touch:{start:["touchstart"],move:["touchmove"],end:["touchend"],frameout:["touchcancel"]},mouse:{start:["mousedown"],move:["mousemove"],end:["mouseleave","mouseout"],frameout:["mouseup"]}},_=function(){function t(t,e){var n=e.end,r=e.start,i=e.move;this._el=t,this.end=n,this.start=r,this.move=i,this._clearEventList=[],this._listenerOption=function(t){void 0===t&&(t=!0);try{var e=function(){return null};return addEventListener("testPassive",e,{passive:t}),removeEventListener("testPassive",e),{passive:t}}catch(t){return!1}}(!1);var a=t.getBoundingClientRect(),o=a.left,s=a.top;this._left=o,this._top=s,this._handleStart=this._handleStart.bind(this),this._handleMove=this._handleMove.bind(this),this._handleEnd=this._handleEnd.bind(this)}var e=t.prototype;return e.off=function(){this._clearEventList.map((function(t){return t()})),this._clearEventList=[]},e.on=function(){this.off(),this._setupCoordinatesListener(),window.PointerEvent?this._setupDrawListener("pointer"):this._setupDrawListener("mouse"),"ontouchstart"in window&&this._setupDrawListener("touch")},e._handleStart=function(t){t.preventDefault(),this.start()},e._handleEnd=function(t){t.preventDefault(),this.end()},e._handleMove=function(t){var e;if(t.preventDefault(),t instanceof TouchEvent){var n=t.touches[0];this.move({x:n.clientX-this._left,y:n.clientY-this._top,pressure:n.force})}else t instanceof PointerEvent?this.move({x:t.clientX-this._left,y:t.clientY-this._top,pressure:t.pressure}):t instanceof MouseEvent&&this.move({x:t.clientX-this._left,y:t.clientY-this._top,pressure:null===(e=t)||void 0===e?void 0:e.pressure})},e._setupDrawListener=function(t){var e,n=this,r=x[t],i=r.start,a=r.move,o=r.end,s=r.frameout,u=i.map((function(t){return n._el.addEventListener(t,n._handleStart,n._listenerOption),function(){return n._el.removeEventListener(t,n._handleStart)}})),c=a.map((function(t){return n._el.addEventListener(t,n._handleMove,n._listenerOption),function(){return n._el.removeEventListener(t,n._handleMove)}})),l=o.map((function(t){return n._el.addEventListener(t,n._handleEnd,n._listenerOption),function(){return n._el.removeEventListener(t,n._handleEnd)}})),h=s.map((function(t){return addEventListener(t,n._handleEnd,n._listenerOption),function(){return removeEventListener(t,n._handleEnd)}}));(e=this._clearEventList).push.apply(e,u.concat(c,l,h))},e._setupCoordinatesListener=function(){var t=this,e=function(e){var n=t._el.getBoundingClientRect(),r=n.left,i=n.top;t._left=r,t._top=i};addEventListener("scroll",e),this._el.addEventListener("resize",e),this._clearEventList.push((function(){removeEventListener("scroll",e),t._el.removeEventListener("resize",e)}))},t}(),E=function(){function t(t,e){var n=e.resize;this._el=t,this.resize=n,this._clearEventList=[]}var e=t.prototype;return e.off=function(){this._clearEventList.map((function(t){return t()})),this._clearEventList=[]},e.on=function(){this.off(),this._setupListerner()},e._setupListerner=function(){var t=this;if(window.ResizeObserver){var e=new window.ResizeObserver((function(e){var n=e[0];t.resize(n.contentRect)}));e.observe(this._el),this._clearEventList.push((function(){return e.disconnect()}))}else{var n=function(){t.resize(t._el.getBoundingClientRect())};addEventListener("resize",n),this._clearEventList.push((function(){return removeEventListener("resize",n)}))}},t}(),C=function(t){return"data:image/svg+xml;base64,"+btoa(t)},O={png:"image/png",jpg:"image/jpeg",svg:"image/svg+xml"},k=function(t){for(var e=t.data,n=t.extension,r=t.filename,i=atob(e.replace(/^.*,/,"")),a=new Uint8Array(i.length),o=0;o<i.length;o+=1)a[o]=i.charCodeAt(o);var s=r||Date.now()+"."+n,u=new Blob([a.buffer],{type:O[n]});if(window.navigator.msSaveBlob)window.navigator.msSaveBlob(u,s);else if(window.URL&&window.URL.createObjectURL){var c=document.createElement("a");c.download=s,c.href=window.URL.createObjectURL(u),document.body.appendChild(c),c.click(),document.body.removeChild(c)}else window.open(e,"_blank")},S={extension:"svg"},j=function(t,e,n){void 0===e&&(e=S),void 0===n&&(n=k);var r,i=Object.assign(Object.assign({},S),e),a=i.filename,o=i.extension,s=(r=t.toJson(),C(u(r).outerHTML));if("svg"!==o){var c=t.width,l=t.height,h=t.background,d=new Image;d.addEventListener("load",(function(){var t=document.createElement("canvas");t.setAttribute("width",String(c)),t.setAttribute("height",String(l));var e=t.getContext("2d");e&&((h||"jpg"===o)&&(e.fillStyle=h||"#fff",e.fillRect(0,0,c,l)),e.drawImage(d,0,0),n("png"===o?{data:t.toDataURL("image/png"),extension:"png"}:{data:t.toDataURL("image/jpeg"),extension:"jpg"}))}),!1),d.src=s}else n({data:s,extension:"svg",filename:a})},L=function(){function t(t,e){var n=void 0===e?{}:e,r=n.penColor,i=n.penWidth,a=n.curve,o=n.close,s=n.delay,u=n.fill,l=n.background;this.el=t,this.penColor=null!=r?r:"#000",this.penWidth=null!=i?i:1,this.curve=null==a||a,this.close=null!=o&&o,this.delay=null!=s?s:0,this.fill=null!=u?u:"none";var h=t.getBoundingClientRect(),d=h.width,f=h.height;this._drawPath=null,this._drawPoints=[],this.svg=new b({width:d,height:f,background:l}),this.renderer=new c(t,{background:l}),this.convert=new w,this._resize=this._resize.bind(this),this.resizeHandler=new E(t,{resize:this._resize}),this.drawStart=this.drawStart.bind(this),this.drawMove=this.drawMove.bind(this),this._drawMoveThrottle=y(this.drawMove,this.delay),this.drawEnd=this.drawEnd.bind(this),this.drawHandler=new _(t,{start:this.drawStart,move:this._drawMoveThrottle,end:this.drawEnd}),this.on()}var e=t.prototype;return e.update=function(){this.renderer.update(this.svg.toJson())},e.clear=function(){var t=this.svg.paths;return this.svg.paths=[],this.update(),t},e.undo=function(){var t=this.svg.paths.pop();return this.update(),t},e.changeDelay=function(t){this.delay=t,this.drawHandler.move=y(this.drawMove,this.delay),this.drawHandler.on()},e.on=function(){this.drawHandler.on(),this.resizeHandler.on()},e.off=function(){this.drawHandler.off(),this.resizeHandler.off()},e.drawStart=function(){this._drawPath||(this._drawPath=this._createDrawPath(),this.svg.addPath(this._drawPath))},e.drawMove=function(t){this._drawPath&&(this._addDrawPoint(t),(this._drawPath.attrs.strokeWidth&&+this._drawPath.attrs.strokeWidth!==this.penWidth||this._drawPath.attrs.stroke!==this.penColor)&&(this._drawPath=this._createDrawPath(),this._addDrawPoint(t),this.svg.addPath(this._drawPath)),this.update())},e.drawEnd=function(){this._drawPath=null,this.update()},e._createCommand=function(){this._drawPath&&(this.curve?this._drawPath.commands=this.convert.bezierCurveCommands(this._drawPoints):this._drawPath.commands=this.convert.lineCommands(this._drawPoints),this.close&&this._drawPath.commands.push(new v(p.CLOSE)))},e._addDrawPoint=function(t){this._drawPoints.push(t),this._createCommand()},e._createDrawPath=function(){return this._resize(this.el.getBoundingClientRect()),this._drawPoints=[],new g({stroke:this.penColor,strokeWidth:String(this.penWidth),fill:this.fill,strokeLinecap:this.curve?"round":"mitter",strokeLinejoin:this.curve?"round":"square"})},e._resize=function(t){var e,n,r=t.width,i=t.height;e=this.svg.width,n=r,Math.trunc(e)!==Math.trunc(n)&&(this.svg.resize({width:r,height:i}),this.update())},e.download=function(t){j(this.svg,t)},t}();t.useSvgDrawing=function(t){var n=e.useRef(null),r=e.useRef(null),a=e.useCallback((function(){return r.current?u(r.current.svg.toJson()).outerHTML:null}),[]),o=e.useCallback((function(t){r.current&&r.current.download(t)}),[]),s=e.useCallback((function(t){r.current&&t&&(r.current.penColor=t)}),[]),c=e.useCallback((function(t){r.current&&t&&(r.current.fill=t)}),[]),l=e.useCallback((function(t){r.current&&t&&r.current.changeDelay(t)}),[]),h=e.useCallback((function(t){r.current&&(r.current.penWidth=Number(t))}),[]),d=e.useCallback((function(t){r.current&&(r.current.close=null!=t&&t)}),[]),f=e.useCallback((function(t){r.current&&(r.current.curve=null==t||t)}),[]),p=e.useCallback((function(){r.current&&r.current.clear()}),[]),v=e.useCallback((function(){r.current&&r.current.undo()}),[]);return e.useEffect((function(){r.current||n.current&&(r.current=new L(n.current,i({},t)))})),[n,{ref:r,changePenWidth:h,changePenColor:s,changeFill:c,changeDelay:l,changeClose:d,changeCurve:f,clear:p,undo:v,getSvgXML:a,download:o}]},Object.defineProperty(t,"__esModule",{value:!0})}(e,n("ERkP"))},HO86:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("lEbO");function i(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},KKW1:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/drawing",function(){return n("e86e")}])},c7sy:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Switch=e.Slider=e.Checkbox=e.Radio=e.Textarea=e.Select=e.Input=e.Label=void 0;var r=function(t){if(t&&t.__esModule)return t;var e=o();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=r?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=t[i]}}n.default=t,e&&e.set(t,n);return n}(n("ERkP")),i=n("F1O6"),a=n("FP0G");function o(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c,l=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(c=a.props)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),["sx","variant"]),h=new RegExp("^(".concat(l.join("|"),")$")),d=/^m[trblxy]?$/,f=function(t){return function(e){var n={};for(var r in e)t(r||"")&&(n[r]=e[r]);return n}},p=f((function(t){return h.test(t)})),v=f((function(t){return d.test(t)})),m=f((function(t){return!d.test(t)})),g=function(t){t.size;var e=u(t,["size"]);return r.default.createElement(i.Box,s({as:"svg",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentcolor"},e))},b=(0,r.forwardRef)((function(t,e){return r.default.createElement(i.Flex,s({ref:e,as:"label",tx:"forms",variant:"label"},t,{__css:{width:"100%"}}))}));e.Label=b;var w=(0,r.forwardRef)((function(t,e){return r.default.createElement(i.Box,s({ref:e,as:"input",type:"text",tx:"forms",variant:"input"},t,{__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:"default",color:"inherit",bg:"transparent"}}))}));e.Input=w;var y=function(t){return r.default.createElement(g,t,r.default.createElement("path",{d:"M7 10l5 5 5-5z"}))},x=(0,r.forwardRef)((function(t,e){return r.default.createElement(i.Flex,v(t),r.default.createElement(i.Box,s({ref:e,as:"select",tx:"forms",variant:"select"},m(t),{__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:"default",color:"inherit",bg:"transparent"}})),r.default.createElement(y,{sx:{ml:-28,alignSelf:"center",pointerEvents:"none"}}))}));e.Select=x;var _=(0,r.forwardRef)((function(t,e){return r.default.createElement(i.Box,s({ref:e,as:"textarea",tx:"forms",variant:"textarea"},t,{__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:"default",color:"inherit",bg:"transparent"}}))}));e.Textarea=_;var E=function(t){return r.default.createElement(g,t,r.default.createElement("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))},C=function(t){return r.default.createElement(g,t,r.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))},O=function(t){return r.default.createElement(r.default.Fragment,null,r.default.createElement(E,s({},t,{__css:{display:"none","input:checked ~ &":{display:"block"}}})),r.default.createElement(C,s({},t,{__css:{display:"block","input:checked ~ &":{display:"none"}}})))},k=(0,r.forwardRef)((function(t,e){var n=t.className,a=t.sx,o=t.variant,c=void 0===o?"radio":o,l=u(t,["className","sx","variant"]);return r.default.createElement(i.Box,null,r.default.createElement(i.Box,s({ref:e,as:"input",type:"radio"},l,{sx:{position:"absolute",opacity:0,zIndex:-1,width:1,height:1,overflow:"hidden"}})),r.default.createElement(i.Box,s({as:O,"aria-hidden":"true",tx:"forms",variant:c,className:n,sx:a},p(l),{__css:{mr:2,borderRadius:9999,color:"gray","input:checked ~ &":{color:"primary"},"input:focus ~ &":{bg:"highlight"}}})))}));e.Radio=k;var S=function(t){return r.default.createElement(g,t,r.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))},j=function(t){return r.default.createElement(g,t,r.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))},L=function(t){return r.default.createElement(r.default.Fragment,null,r.default.createElement(S,s({},t,{__css:{display:"none","input:checked ~ &":{display:"block"}}})),r.default.createElement(j,s({},t,{__css:{display:"block","input:checked ~ &":{display:"none"}}})))},P=(0,r.forwardRef)((function(t,e){var n=t.className,a=t.sx,o=t.variant,c=void 0===o?"checkbox":o,l=u(t,["className","sx","variant"]);return r.default.createElement(i.Box,null,r.default.createElement(i.Box,s({ref:e,as:"input",type:"checkbox"},l,{sx:{position:"absolute",opacity:0,zIndex:-1,width:1,height:1,overflow:"hidden"}})),r.default.createElement(i.Box,s({as:L,"aria-hidden":"true",tx:"forms",variant:c,className:n,sx:a},p(l),{__css:{mr:2,borderRadius:4,color:"gray","input:checked ~ &":{color:"primary"},"input:focus ~ &":{color:"primary",bg:"highlight"}}})))}));e.Checkbox=P;var R=(0,r.forwardRef)((function(t,e){var n=s({},t);return r.default.createElement(i.Box,s({ref:e,as:"input",type:"range",tx:"forms",variant:"slider"},n,{__css:{display:"block",width:"100%",height:4,my:2,cursor:"pointer",appearance:"none",borderRadius:9999,color:"inherit",bg:"gray",":focus":{outline:"none",color:"primary"},"&::-webkit-slider-thumb":{appearance:"none",width:16,height:16,bg:"currentcolor",border:0,borderRadius:9999,variant:"forms.slider.thumb"}}}))}));e.Slider=R;var A=(0,r.forwardRef)((function(t,e){var n=t.checked,a=u(t,["checked"]);return r.default.createElement(i.Box,s({ref:e,as:"button",type:"button",role:"switch",tx:"forms",variant:"switch","aria-checked":n},a,{__css:{appearance:"none",m:0,p:0,width:40,height:24,color:"primary",bg:"transparent",border:"1px solid",borderColor:"primary",borderRadius:9999,"&[aria-checked=true]":{bg:"primary"},":focus":{outline:"none",boxShadow:"0 0 0 2px"}}}),r.default.createElement(i.Box,{"aria-hidden":!0,style:{transform:n?"translateX(16px)":"translateX(0)"},sx:{mt:"-1px",ml:"-1px",width:24,height:24,borderRadius:9999,border:"1px solid",borderColor:"primary",bg:"background",transitionProperty:"transform",transitionTimingFunction:"ease-out",transitionDuration:"0.1s",variant:"forms.switch.thumb"}}))}));e.Switch=A},e86e:function(t,e,n){"use strict";n.r(e);var r=n("zygG"),i=n("ERkP"),a=n.n(i),o=n("1lKD"),s=n("rh/l"),u=n("c7sy"),c=n("apO0"),l=a.a.createElement,h=["none","#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#ddd","#9E9E9E","#444","black"],d=function(){return"#".concat(Array.from({length:3},(function(){return String((t=255,Math.floor(Math.random()*Math.floor(t))).toString(16)).padStart(2,"0");var t})).join(""))},f=function(t){var e=t.isSp,n=Object(i.useState)(!1),a=n[0],f=n[1],p=Object(i.useState)(!0),v=p[0],m=p[1],g=Object(i.useState)(!1),b=g[0],w=g[1],y=Object(i.useState)("none"),x=y[0],_=y[1],E=Object(i.useState)("black"),C=E[0],O=E[1],k=Object(i.useState)(20),S=k[0],j=k[1],L=Object(i.useState)(5),P=L[0],R=L[1],A=Object(o.useSvgDrawing)({curve:v,close:b,delay:S,penWidth:P,fill:x}),z=Object(r.a)(A,2),M=z[0],B=z[1],D=Object(i.useCallback)((function(t){return function(e){B.download({extension:t})}}),[B]),I=Object(i.useCallback)((function(t){B.changeFill("none"),B.changeClose(!1),f(t.target.checked)}),[B]),F=Object(i.useCallback)((function(){B.changeCurve(!v),m(!v)}),[v,B]),T=Object(i.useCallback)((function(){B.changeClose(!b),w(!b)}),[b,B]),N=Object(i.useCallback)((function(t){var e=Number(t.target.value);Number.isNaN(e)||(B.changePenWidth(e),R(e))}),[B]),V=Object(i.useCallback)((function(t){var e=Number(t.target.value);Number.isNaN(e)||(B.changeDelay(e),j(e))}),[B]),W=Object(i.useCallback)((function(t){B.changePenColor(t),O(t)}),[B]),H=Object(i.useCallback)((function(t){W(t.target.value)}),[W]),U=Object(i.useCallback)((function(t){return function(){W(t)}}),[W]),G=Object(i.useCallback)((function(t){B.changeFill(t),_(t)}),[B]),J=Object(i.useCallback)((function(t){G(t.target.value)}),[G]),X=Object(i.useCallback)((function(t){return function(){G(t)}}),[G]),q=Object(i.useCallback)((function(){B.clear()}),[B]),K=Object(i.useCallback)((function(){B.undo()}),[B]);Object(i.useEffect)((function(){var t=setInterval((function(){if(a){var t=d();B.changePenColor(t),O(t)}}),4*S);return function(){return clearInterval(t)}}),[S,a,B]);var $,Y=Object(i.useCallback)((function(t){var e,n=new FileReader;n.onload=function(t){if(t.target&&"string"===typeof t.target.result){var e=t.target.result.split(","),n=Object(r.a)(e,2),i=n[0],a=n[1];if("data:image/svg+xml;base64"===i){var o=atob(a);if(!B.ref.current)return;B.ref.current.svg.parseSVGString(o),B.ref.current.update()}}},(null===(e=t.target)||void 0===e?void 0:e.files)&&n.readAsDataURL(t.target.files[0])}),[B.ref]);return l(c.a,null,l(s.Box,{as:"fieldset"},l(s.Flex,{flexWrap:"wrap"},l(s.Box,{width:[1,.5,.5],pr:3},l(s.Flex,{alignItems:"center"},l(u.Label,{fontSize:[2,1,1],width:.3,htmlFor:"strokeWidth"},"STROKE WIDTH:"),l(u.Slider,{width:.5,min:"1",max:"20",step:"1",value:P,onChange:N}),l(u.Input,{width:"auto",id:"strokeWidth",type:"number",min:"1",max:"20",step:"1",value:P,onChange:N})),l(s.Flex,{alignItems:"center"},l(u.Label,{width:.3,fontSize:[2,1,1],htmlFor:"throttleDelay"},"THROTTLE DELAY:"),l(u.Slider,{width:.5,type:"range",min:"0",max:"300",step:"5",value:S,onChange:V}),l(u.Input,{width:"auto",id:"throttleDelay",type:"number",min:"0",max:"300",step:"5",value:S,onChange:V})),l(s.Flex,{pt:3,justifyContent:"start"},l(u.Label,{htmlFor:"curve"},l(u.Checkbox,{id:"curve",checked:v,onChange:F}),"Curve"),!a&&l(u.Label,{htmlFor:"close"},l(u.Checkbox,{id:"close",checked:b,onChange:T}),"Close"),l(u.Label,{htmlFor:"rainbow"},l(u.Checkbox,{id:"rainbow",checked:a,onChange:I}),"Rainbow pen"))),!a&&l(s.Box,{width:[1,.5,.5]},l(u.Label,{fontSize:0,htmlFor:"fill"},"FILL:",l(u.Input,{p:1,fontSize:0,id:"fill",type:"text",placeholder:"#000 or black or rgba(0,0,0,1)",value:x,onChange:J})),l(s.Flex,{flexWrap:"wrap"},h.map((function(t){return l(s.Box,{key:t,width:["24px","24px","20px"],height:["24px","24px","20px"],style:{display:"inline-block",backgroundColor:t,border:t===x?"2px solid #000":"2px solid #999"},onClick:X(t)})}))),l(u.Label,{fontSize:0,htmlFor:"penColor",style:{whiteSpace:"nowrap"}},"PEN COLOR:",l(u.Input,{fontSize:0,p:1,id:"penColor",type:"text",placeholder:"#000 or black or rgba(0,0,0,1)",value:C,onChange:H})),l(s.Flex,{flexWrap:"wrap"},h.map((function(t){return l(s.Box,{key:t,width:["24px","24px","20px"],height:["24px","24px","20px"],bg:t,style:{border:t===C?"2px solid #000":"2px solid #999"},onClick:U(t)})})))))),l(s.Box,{as:"fieldset"},l(s.Flex,{flexWrap:"wrap",justifyContent:"start"},l(s.Box,{mr:2},l(s.Button,{mr:1,mb:1,onClick:q},"Clear"),l(s.Button,{mr:1,mb:1,onClick:K},"Undo"),l(s.Button,{variant:"secondary",mr:1,mb:1,onClick:D("png")},"Download PNG"),l(s.Button,{variant:"secondary",mr:1,mb:1,onClick:D("jpg")},"Download JPG"),l(s.Button,{variant:"secondary",mr:1,mb:1,onClick:D("svg")},"Download SVG")),!e&&l(s.Box,{width:"auto"},l(s.Text,{fontSize:0},"Svg exported by this library can be read."),l(u.Input,{type:"file",onChange:Y,multiple:!0,accept:"image/*"})))),l(s.Box,{width:["96vw","96vw","40vw"],height:["96vw","96vw","40vw"]},l("div",{ref:M,style:{backgroundImage:($=30,"\n  repeating-linear-gradient(\n    90deg,\n    #ddd ,\n    #ddd 1px,\n    transparent 1px,\n    transparent ".concat(String($),"px\n  ),\n  repeating-linear-gradient(\n    0deg,\n    #ddd ,\n    #ddd 1px,\n    transparent 1px,\n    transparent ").concat(String($),"px\n  )\n")),backgroundSize:"".concat(30,"px ").concat(30,"px"),border:"1px solid #333",margin:"0 auto 0 0",width:"100%",height:"100%",touchAction:"none"}})))};f.getInitialProps=function(t){var e=t.req,n=e?e.headers["user-agent"]:navigator.userAgent;return{isSp:!n||/iPhone|Android.+Mobile/.test(n)}},e.default=f},lEbO:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},zygG:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("HO86");function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["KKW1",0,2,1,3,4]]]);