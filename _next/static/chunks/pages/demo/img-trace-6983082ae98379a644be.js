_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"0skS":function(t,n,e){"use strict";e.r(n);var r=e("lEbO");var o=e("HO86");function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=e("VtSi"),s=e.n(i);function h(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n,e,r,o,a,i){try{var s=t[a](i),h=s.value}catch(c){return void e(c)}s.done?n(h):Promise.resolve(h).then(r,o)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){c(a,r,o,i,s,"next",t)}function s(t){c(a,r,o,i,s,"throw",t)}i(void 0)}))}}var l=e("ERkP"),p=e.n(l),f=e("rh/l"),d=e("c7sy"),g=e("S95l"),b=e("p6XQ"),v=e("apO0"),m=e("Skfd"),y=p.a.createElement;function w(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?w(Object(e),!0).forEach((function(n){h(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var O=["/img_trace/cat.jpg","/img_trace/harinezumi.jpg","/img_trace/kuma.jpg","/img_trace/panda.png","/img_trace/risu.jpg","/img_trace/tanuki.jpg"].map((function(t){return"".concat(m.a).concat(t)})),_=[{r:0,g:0,b:0,a:255},{r:50,g:50,b:50,a:255},{r:100,g:100,b:100,a:255},{r:150,g:150,b:150,a:255},{r:200,g:200,b:200,a:255}];n.default=function(){var t=Object(l.useState)(O),n=t[0],e=t[1],r=Object(l.useState)(_),o=r[0],i=r[1],h=Object(l.useState)(),c=h[0],p=h[1],m=Object(l.useState)({numberOfColors:8,colorQuantCycles:3})[0],w=Object(l.useState)({})[0],j=Object(l.useState)(O[0]),M=j[0],C=j[1],k=Object(l.useState)(""),P=k[0],S=k[1],I=Object(l.useState)(),E=I[0],A=I[1],B=Object(l.useRef)(null),q=Object(l.useRef)(null),D=Object(l.useCallback)((function(t){S(t.target.value)}),[S]),L=Object(l.useCallback)((function(){c&&i(b.Palette.imageData(c,m))}),[m,i,c]),z=Object(l.useCallback)((function(){i(_)}),[i]),Q=Object(l.useCallback)((function(t){return function(){var n=o.filter((function(n,e){return e!==t}));i(n)}}),[i,o]),T=Object(l.useCallback)(u(s.a.mark((function t(){var n,e,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,t.t0=c,t.t0){t.next=6;break}return t.next=5,new b.ImgLoader({corsenabled:!0}).fromUrl(M);case 5:t.t0=t.sent;case 6:if(n=t.t0,!c&&n&&p(n),n){t.next=10;break}return t.abrupt("return");case 10:e=new b.ImgTrace(x(x({},w),{},{palettes:o})),r=e.load(n),A(r),e.palettes&&i(e.palettes),t.next=18;break;case 16:t.prev=16,t.t1=t.catch(0);case 18:case"end":return t.stop()}}),t,null,[[0,16]])}))),[M,c,o,w]);Object(l.useEffect)((function(){if(q.current){var t=function(){if(q.current&&E){var t=new g.Renderer(q.current),n=q.current.getBoundingClientRect(),e=n.width,r=n.height;E.resize({width:e,height:r}),t.update(E.toJson())}};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}),[E]);var U=Object(l.useCallback)((function(t){return function(){C(t),n.includes(t)||e([].concat(a(n),[t]))}}),[C,n]),N=Object(l.useCallback)((function(){E&&Object(g.download)(E)}),[E]);return Object(l.useEffect)((function(){B.current&&(B.current.onload=function(){B.current&&new b.ImgLoader({corsenabled:!0}).fromImageElement(B.current,p)})}),[p]),y(v.a,null,y(f.Flex,{justifyContent:"start",flexWrap:"wrap"},y(f.Box,{mb:3},y(f.Button,{mr:2,mb:2,onClick:L},"Load Image Palette!"),y(f.Button,{mr:2,mb:2,onClick:z},"GrayScale Palette!"),y(f.Flex,{justifyContent:"start",py:"2px",px:"0"},o.sort((function(t,n){return t.r+t.g+t.b>n.r+n.g+n.b?-1:1})).map((function(t,n){return y("div",{key:n,style:{width:30,height:30,margin:2,position:"relative",backgroundColor:"rgba(".concat(t.r,", ").concat(t.g,", ").concat(t.b,", ").concat(t.a/255,")")}},y("div",{style:{position:"absolute",background:"#fff",bottom:2,left:2,width:8,lineHeight:"8px",textAlign:"center",fontSize:3,cursor:"pointer"},onMouseUp:Q(n)},"x"))})))),y(f.Box,{mb:3},y(f.Button,{mr:2,mb:2,variant:"secondary",onClick:T},"Image Trace!"),E&&y(f.Button,{mr:2,mb:2,onClick:N},"Download"),y(f.Flex,{justifyContent:"start",flexWrap:"wrap"},y(f.Box,{width:["80vw","80vw","30vw"],height:["80vw","80vw","30vw"]},y(f.Image,{width:"100%",ref:B,crossOrigin:"anonymous",src:M,alt:""})),y(f.Box,{width:["80vw","80vw","30vw"],height:["80vw","80vw","30vw"]},y("div",{style:{width:"100%",height:"100%"},ref:q}))))),y(f.Box,{as:"fieldset"},y(f.Heading,null,"Select Image"),y(f.Box,null,y(d.Input,{type:"text",placeholder:"input image url",value:P,onChange:D}),y(f.Button,{onClick:U(P)},"Load image url")),y(f.Flex,{flexWrap:"wrap"},n.map((function(t,n){return y(f.Card,{key:n,width:"256px"},y(f.Image,{src:t,alt:t,onClick:U(t)}))})))))}},VtSi:function(t,n,e){t.exports=e("3yYM")},p6XQ:function(t,n,e){!function(t,n){"use strict";function e(){return r=e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},e.apply(this,arguments)}var r=e,o=r,a=function(t){var n=t.width*t.height;if(!(t.data.length<4*n))return t;for(var e=new Uint8ClampedArray(4*n),r=0;r<n;r++)e[4*r]=t.data[3*r],e[4*r+1]=t.data[3*r+1],e[4*r+2]=t.data[3*r+2],e[4*r+3]=255;return o({},t,{data:e})},i=[[.27901,.44198,.27901],[.135336,.228569,.272192,.228569,.135336],[.086776,.136394,.178908,.195843,.178908,.136394,.086776],[.063327,.093095,.122589,.144599,.152781,.144599,.122589,.093095,.063327],[.049692,.069304,.089767,.107988,.120651,.125194,.120651,.107988,.089767,.069304,.049692]],s=function(){function t(t){var n=t.radius,e=t.delta;this.radius=null!=n?n:0,this.delta=null!=e?e:20}return t.prototype.apply=function(t){var n=a(t),e=new Uint8ClampedArray(n.data),r=Math.floor(this.radius);if(r<1)return n;r>i.length&&(r=i.length);var o=Math.abs(this.delta);o>1024&&(o=1024);for(var s=i[r-1],h=0;h<n.height;h++)for(var c=0;c<n.width;c++){for(var u=0,l=0,p=0,f=0,d=0,g=-r;g<r+1;g++)if(c+g>0&&c+g<n.width){var b=4*(h*n.width+c+g);u+=n.data[b]*s[g+r],l+=n.data[b+1]*s[g+r],p+=n.data[b+2]*s[g+r],f+=n.data[b+3]*s[g+r],d+=s[g+r]}var v=4*(h*n.width+c);e[v]=Math.floor(u/d),e[v+1]=Math.floor(l/d),e[v+2]=Math.floor(p/d),e[v+3]=Math.floor(f/d)}for(var m=new Uint8ClampedArray(e),y=0;y<n.height;y++)for(var w=0;w<n.width;w++){for(var x=0,O=0,_=0,j=0,M=0,C=-r;C<r+1;C++)if(y+C>0&&y+C<n.height){var k=4*((y+C)*n.width+w);x+=m[k]*s[C+r],O+=m[k+1]*s[C+r],_+=m[k+2]*s[C+r],j+=m[k+3]*s[C+r],M+=s[C+r]}var P=4*(y*n.width+w);e[P]=Math.floor(x/M),e[P+1]=Math.floor(O/M),e[P+2]=Math.floor(_/M),e[P+3]=Math.floor(j/M)}for(var S=0;S<n.height;S++)for(var I=0;I<n.width;I++){var E=4*(S*n.width+I);Math.abs(e[E]-n.data[E])+Math.abs(e[E+1]-n.data[E+1])+Math.abs(e[E+2]-n.data[E+2])+Math.abs(e[E+3]-n.data[E+3])>o&&(e[E]=n.data[E],e[E+1]=n.data[E+1],e[E+2]=n.data[E+2],e[E+3]=n.data[E+3])}return new ImageData(e,n.width,n.height)},t}(),h=function(){function t(t){var n;this.corsenabled=null==(n=t.corsenabled)||n}var n=t.prototype;return n.fromUrl=function(t,n){var e=this,r=function(n,r){var o=new Image;e.corsenabled&&(o.crossOrigin="Anonymous"),o.onload=function(){e.fromImageElement(o,n)},o.onerror=function(t){r?r(t):console.error(t)},o.src=t};if(!n)return new Promise(r);r(n)},n.fromImageElement=function(t,n){var e=function(n,e){var r=document.createElement("canvas");r.width=t.naturalWidth||t.width,r.height=t.naturalHeight||t.height;var o=r.getContext("2d");null==o||o.drawImage(t,0,0);var a=null==o?void 0:o.getImageData(0,0,r.width,r.height);if(!a){if(e)return void e("error canvas context.");throw"error canvas context."}n(a)};if(!n)return new Promise(e);e(n)},t}(),c=function(){function t(){}return t.imageData=function(t,n){for(var e=void 0===n?{}:n,r=e.numberOfColors||16,o=e.colorQuantCycles||3,i=a(t),s=this._deterministic(i,r),h=[],c=0;c<o;c++){if(c>0)for(var u=0;u<s.length;u++)h[u].n>0&&(s[u]={r:Math.floor(h[u].r/h[u].n),g:Math.floor(h[u].g/h[u].n),b:Math.floor(h[u].b/h[u].n),a:Math.floor(h[u].a/h[u].n)});h=Array.from({length:s.length},(function(){return{r:0,g:0,b:0,a:0,n:0}}));for(var l=0;l<i.height;l++)for(var p=function(t){var n=4*(l*i.width+t),e=1024,r=s.reduce((function(t,r,o){var a=Math.abs(r.r-i.data[n])+Math.abs(r.g-i.data[n+1])+Math.abs(r.b-i.data[n+2])+Math.abs(r.a-i.data[n+3]);return a<e?(e=a,o):t}),0);h[r].r+=i.data[n],h[r].g+=i.data[n+1],h[r].b+=i.data[n+2],h[r].a+=i.data[n+3],h[r].n+=1},f=0;f<i.width;f++)p(f)}return s},t._deterministic=function(t,n){for(var e=[],r=Math.ceil(Math.sqrt(n)),o=Math.ceil(n/r),a=t.width/(r+1),i=t.height/(o+1),s=0;s<o;s++)for(var h=0;h<r&&e.length!==n;h++){var c=4*Math.floor((s+1)*i*t.width+(h+1)*a);e.push({r:t.data[c],g:t.data[c+1],b:t.data[c+2],a:t.data[c+3]})}return e},t.number=function(t){if(void 0===t&&(t=16),t<8)return this.grey(t);for(var n=[],e=Math.floor(Math.pow(t,1/3)),r=Math.floor(255/(e-1)),o=0;o<e;o+=1)for(var a=0;a<e;a+=1)for(var i=0;i<e;i+=1)n.push({r:o*r,g:a*r,b:i*r,a:255});for(var s=t-e*e*e,h=0;h<s;h++)n.push({r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random()),a:Math.floor(255*Math.random())});return n},t.grey=function(t){void 0===t&&(t=16);for(var n=[],e=Math.floor(255/(t-1)),r=0;r<t;r++)n.push({r:r*e,g:r*e,b:r*e,a:255});return n},t}(),u=0,l=1,p=2,f=3,d=4,g=5,b=6,v=7,m=8,y=-1,w=[[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[0,1,0,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[0,2,-1,0]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[0,1,0,-1],[0,0,1,0]],[[0,0,1,0],[-1,-1,-1,-1],[0,2,-1,0],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[0,0,1,0],[0,3,0,1],[-1,-1,-1,-1]],[[13,3,0,1],[13,2,-1,0],[7,1,0,-1],[7,0,1,0]],[[-1,-1,-1,-1],[0,1,0,-1],[-1,-1,-1,-1],[0,3,0,1]],[[0,3,0,1],[0,2,-1,0],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[0,3,0,1],[0,2,-1,0],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[0,1,0,-1],[-1,-1,-1,-1],[0,3,0,1]],[[11,1,0,-1],[14,0,1,0],[14,3,0,1],[11,2,-1,0]],[[-1,-1,-1,-1],[0,0,1,0],[0,3,0,1],[-1,-1,-1,-1]],[[0,0,1,0],[-1,-1,-1,-1],[0,2,-1,0],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[0,1,0,-1],[0,0,1,0]],[[0,1,0,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[0,2,-1,0]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]]],x=[{r:0,g:0,b:0,a:255},{r:50,g:50,b:50,a:255},{r:100,g:100,b:100,a:255},{r:150,g:150,b:150,a:255},{r:200,g:200,b:200,a:255}],O=function(){function t(t){var n,e,r,a,i;void 0===t&&(t={}),this.ltres=null!=(n=t.ltres)?n:1,this.qtres=null!=(e=t.qtres)?e:1,this.rightangleenhance=null==(r=t.rightangleenhance)||r,this.pathOmit=null!=(a=t.pathOmit)?a:8,this.commandOmit=null!=(i=t.commandOmit)?i:0,this.pathAttrs=o({strokeWidth:"1"},t.pathAttrs||{}),this.palettes=t.palettes||x}var e=t.prototype;return e.load=function(t){for(var e=a(t),r=this._colorQuantization(e),o=[],i=0;i<this.palettes.length;i++){var s=this._edgeDetection(r,i),h=this._pathScan(s),c=this._interpolation(h).map(this._tracePath.bind(this));o.push(c)}var u=this._createPaths(o);return new n.Svg({width:r[0].length-2,height:r.length-2}).addPath(u)},e._colorQuantization=function(t){var n=this;return Array.from({length:t.height+2},(function(e,r){return Array.from({length:t.width+2},(function(e,o){if(0===o||o===t.width+1||0===r||r===t.height+1)return-1;var a=o-1,i=4*((r-1)*t.width+a);return n._findPaletteIndex({r:t.data[i],g:t.data[i+1],b:t.data[i+2],a:t.data[i+3]})}))}))},e._findPaletteIndex=function(t){var n=t.r,e=t.g,r=t.b,o=t.a,a=1024;return this.palettes.reduce((function(t,i,s){var h=Math.abs(i.r-n)+Math.abs(i.g-e)+Math.abs(i.b-r)+Math.abs(i.a-o);return h<a?(a=h,s):t}),0)},e._edgeDetection=function(t,n){for(var e=[],r=t.length,o=t[0].length,a=0;a<r;a++){e[a]=[];for(var i=0;i<o;i++)e[a][i]=0===a||0===i?0:(t[a-1][i-1]===n?1:0)+(t[a-1][i]===n?2:0)+(t[a][i-1]===n?8:0)+(t[a][i]===n?4:0)}return e},e._pointpoly=function(t,n){for(var e=!1,r=0,o=n.length-1;r<n.length;o=r++)e=n[r].y>t.y!=n[o].y>t.y&&t.x<(n[o].x-n[r].x)*(t.y-n[r].y)/(n[o].y-n[r].y)+n[r].x?!e:e;return e},e._pathScan=function(t){for(var n=t[0].length,e=t.length,r=[],o=0,a=0;a<e;a++)for(var i=0;i<n;i++){var s=t[a][i];if(4===s||11===s){var h=i,c=a,u=1,l=0,p=!1;for(r[o]={points:[],boundingbox:[h,c,h,c],holechildren:[],isholepath:!1};!p;){r[o].points[l]={x:h-1,y:c-1,direction:y},h-1<r[o].boundingbox[0]&&(r[o].boundingbox[0]=h-1),h-1>r[o].boundingbox[2]&&(r[o].boundingbox[2]=h-1),c-1<r[o].boundingbox[1]&&(r[o].boundingbox[1]=c-1),c-1>r[o].boundingbox[3]&&(r[o].boundingbox[3]=c-1);var f=w[t[c][h]][u];if(t[c][h]=f[0],u=f[1],h+=f[2],c+=f[3],h-1===r[o].points[0].x&&c-1===r[o].points[0].y)if(p=!0,r[o].points.length<this.pathOmit)r.pop();else{if(11===s){r[o].isholepath=!0;for(var d=0,g=[-1,-1,n+1,e+1],b=0;b<o;b++)!r[b].isholepath&&this._boundingboxincludes(r[b].boundingbox,r[o].boundingbox)&&this._boundingboxincludes(g,r[b].boundingbox)&&this._pointpoly(r[o].points[0],r[b].points)&&(d=b,g=r[b].boundingbox);r[d].holechildren.push(o)}o++}l++}}}return r},e._boundingboxincludes=function(t,n){return t[0]<n[0]&&t[1]<n[1]&&t[2]>n[2]&&t[3]>n[3]},e._interpolation=function(t){for(var n=[],e=0,r=0,o=0,a=0,i=0;i<t.length;i++){n[i]={points:[],boundingbox:t[i].boundingbox,holechildren:t[i].holechildren,isholepath:t[i].isholepath};for(var s=t[i].points.length,h=0;h<s;h++)e=(h+1)%s,r=(h+2)%s,o=(h-1+s)%s,a=(h-2+s)%s,this.rightangleenhance&&this._testrightangle(t[i],a,o,h,e,r)&&(n[i].points.length>0&&(n[i].points[n[i].points.length-1].direction=this._getdirection(n[i].points[n[i].points.length-1].x,n[i].points[n[i].points.length-1].y,t[i].points[h].x,t[i].points[h].y)),n[i].points.push({x:t[i].points[h].x,y:t[i].points[h].y,direction:this._getdirection(t[i].points[h].x,t[i].points[h].y,(t[i].points[h].x+t[i].points[e].x)/2,(t[i].points[h].y+t[i].points[e].y)/2)})),n[i].points.push({x:(t[i].points[h].x+t[i].points[e].x)/2,y:(t[i].points[h].y+t[i].points[e].y)/2,direction:this._getdirection(t[i].points[h].x+t[i].points[e].x,t[i].points[h].y+t[i].points[e].y,t[i].points[e].x+t[i].points[r].x,t[i].points[e].y+t[i].points[r].y)})}return n},e._testrightangle=function(t,n,e,r,o,a){return t.points[r].x===t.points[n].x&&t.points[r].x===t.points[e].x&&t.points[r].y===t.points[o].y&&t.points[r].y===t.points[a].y||t.points[r].y===t.points[n].y&&t.points[r].y===t.points[e].y&&t.points[r].x===t.points[o].x&&t.points[r].x===t.points[a].x},e._getdirection=function(t,n,e,r){return t<e?n<r?l:v:t>e?n<r?f:n>r?g:d:n<r?p:n>r?b:m},e._tracePath=function(t){for(var e=0,r=[],o=[];e<t.points.length;){for(var a=t.points[e].direction,i=y,s=e+1;(t.points[s].direction===a||t.points[s].direction===i||-1===i)&&s<t.points.length-1;)t.points[s].direction!==a&&i===y&&(i=t.points[s].direction||u),s++;s===t.points.length-1?(r.push.apply(r,this._fitseq(t,e,0)),o.push.apply(o,this._fitseq(t,e,0,!0)),e=t.points.length):(r.push.apply(r,this._fitseq(t,e,s)),o.push.apply(o,this._fitseq(t,e,s,!0)),e=s)}var h=[new n.Command("M",[t.points[0].x,t.points[0].y])].concat(r,[new n.Command("Z")]);return o.reverse(),{commands:h,holeCommands:[new n.Command("M",o[o.length-1].value.slice(0,2))].concat(o,[new n.Command("Z")]),holechildren:t.holechildren,isholepath:t.isholepath}},e._fitseq=function(t,e,r,o){var a=this.ltres,i=this.qtres;if(r>t.points.length||r<0)return[];var s,h,c,u=e,l=0,p=!0,f=r-e;f<0&&(f+=t.points.length);for(var d=(t.points[r].x-t.points[e].x)/f,g=(t.points[r].y-t.points[e].y)/f,b=(e+1)%t.points.length;b!=r;){var v=b-e;v<0&&(v+=t.points.length),s=t.points[e].x+d*v,h=t.points[e].y+g*v,(c=(t.points[b].x-s)*(t.points[b].x-s)+(t.points[b].y-h)*(t.points[b].y-h))>a&&(p=!1),c>l&&(u=b,l=c),b=(b+1)%t.points.length}if(p)return[new n.Command("L",o?[t.points[e].x,t.points[e].y]:[t.points[r].x,t.points[r].y])];var m=u;p=!0,l=0;var y=(m-e)/f,w=(1-y)*(1-y),x=2*(1-y)*y,O=y*y,_=(w*t.points[e].x+O*t.points[r].x-t.points[m].x)/-x,j=(w*t.points[e].y+O*t.points[r].y-t.points[m].y)/-x;for(b=e+1;b!=r;)x=2*(1-(y=(b-e)/f))*y,O=y*y,s=(w=(1-y)*(1-y))*t.points[e].x+x*_+O*t.points[r].x,h=w*t.points[e].y+x*j+O*t.points[r].y,(c=(t.points[b].x-s)*(t.points[b].x-s)+(t.points[b].y-h)*(t.points[b].y-h))>i&&(p=!1),c>l&&(u=b,l=c),b=(b+1)%t.points.length;if(p)return[new n.Command("Q",[_,j,t.points[r].x,t.points[r].y])];var M=m;return this._fitseq(t,e,M,o).concat(this._fitseq(t,M,r,o))},e._complementCommand=function(t,n){for(var e=t[n],r=[],o=0;o<e.holechildren.length;o++)r.push.apply(r,t[e.holechildren[o]].holeCommands);return r},e._createPaths=function(t){for(var e=[],r=0;r<t.length;r++)for(var a=0;a<t[r].length;a++){var i=t[r],s=i[a];if(!(s.isholepath||s.commands.length<this.commandOmit)){var h=this.palettes[r],c="rgb("+h.r+", "+h.g+", "+h.b+")",u=new n.Path(o({},this.pathAttrs,{stroke:c,fill:c,opacity:String(h.a/255)}));u.addCommand([].concat(s.commands,this._complementCommand(i,a))),e.push(u)}}return e},t}();t.Blur=s,t.ImgLoader=h,t.ImgTrace=O,t.Palette=c,Object.defineProperty(t,"__esModule",{value:!0})}(n,e("S95l"))},yrxl:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/img-trace",function(){return e("0skS")}])}},[["yrxl",0,2,1,3,4,5]]]);