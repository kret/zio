"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[66912],{95788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>f});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(f,c(c({ref:r},u),{},{components:t})):n.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83948:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(45072),a=(t(11504),t(95788));const o={id:"scheduling",title:"Scheduling"},c=void 0,i={unversionedId:"reference/stream/zstream/scheduling",id:"reference/stream/zstream/scheduling",title:"Scheduling",description:"To schedule the output of a stream we use ZStream#schedule combinator.",source:"@site/docs/reference/stream/zstream/scheduling.md",sourceDirName:"reference/stream/zstream",slug:"/reference/stream/zstream/scheduling",permalink:"/reference/stream/zstream/scheduling",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zstream/scheduling.md",tags:[],version:"current",frontMatter:{id:"scheduling",title:"Scheduling"},sidebar:"reference-sidebar",previous:{title:"Error Handling",permalink:"/reference/stream/zstream/error-handling"},next:{title:"ZPipeline",permalink:"/reference/stream/zpipeline"}},s={},l=[],u={toc:l},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"To schedule the output of a stream we use ",(0,a.yg)("inlineCode",{parentName:"p"},"ZStream#schedule")," combinator."),(0,a.yg)("p",null,"Let's space between each emission of the given stream:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stream._\n\nval stream = ZStream(1, 2, 3, 4, 5).schedule(Schedule.spaced(1.second))\n")))}m.isMDXComponent=!0}}]);