"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[62256],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>m});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(45072),o=(n(11504),n(95788));const a={id:"scalaz-7x",title:"Scalaz 7.x Interop"},i=void 0,l={unversionedId:"zio-json/interop/scalaz-7x",id:"zio-json/interop/scalaz-7x",title:"Scalaz 7.x Interop",description:"Installation",source:"@site/docs/zio-json/interop/scalaz-7x.md",sourceDirName:"zio-json/interop",slug:"/zio-json/interop/scalaz-7x",permalink:"/zio-json/interop/scalaz-7x",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-json/interop/scalaz-7x.md",tags:[],version:"current",frontMatter:{id:"scalaz-7x",title:"Scalaz 7.x Interop"},sidebar:"ecosystem-sidebar",previous:{title:"Refined Interop",permalink:"/zio-json/interop/refined"},next:{title:"Getting Started",permalink:"/zio-kafka/"}},c={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "dev.zio" % "zio-json-interop-scalaz" % "0.6.2"\n)\n')),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.json._\nimport zio.json.interop.scalaz7x._\n\nimport scalaz._\n\nIList(1, 2, 3).toJson\n// res0: String = "[1,2,3]"\n')))}f.isMDXComponent=!0}}]);