"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[21853],{15680:(e,t,r)=>{r.d(t,{xA:()=>f,yg:()=>b});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,b=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return r?a.createElement(b,i(i({ref:t},f),{},{components:r})):a.createElement(b,i({ref:t},f))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},34846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(58168),n=(r(96540),r(15680));const o={id:"fiber-local-state",title:"Fiber-local State"},i=void 0,c={unversionedId:"reference/state-management/fiber-local-state",id:"reference/state-management/fiber-local-state",title:"Fiber-local State",description:"Both the FiberRef and ZState data types are state management tools that are scoped to a certain fiber. Their values are only accessible within the fiber that runs them.",source:"@site/docs/reference/state-management/fiber-local-state.md",sourceDirName:"reference/state-management",slug:"/reference/state-management/fiber-local-state",permalink:"/reference/state-management/fiber-local-state",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/state-management/fiber-local-state.md",tags:[],version:"current",frontMatter:{id:"fiber-local-state",title:"Fiber-local State"},sidebar:"reference-sidebar",previous:{title:"Global Shared State",permalink:"/reference/state-management/global-shared-state"},next:{title:"FiberRef",permalink:"/reference/state-management/fiberref"}},l={},s=[],f={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Both the ",(0,n.yg)("inlineCode",{parentName:"p"},"FiberRef")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"ZState")," data types are state management tools that are scoped to a certain fiber. Their values are only accessible within the fiber that runs them."),(0,n.yg)("p",null,"We have a separate page for the ",(0,n.yg)("a",{parentName:"p",href:"/reference/state-management/fiberref"},(0,n.yg)("inlineCode",{parentName:"a"},"FiberRef"))," and ",(0,n.yg)("a",{parentName:"p",href:"/reference/state-management/zstate"},(0,n.yg)("inlineCode",{parentName:"a"},"ZState"))," data types which explain how to use them."))}m.isMDXComponent=!0}}]);