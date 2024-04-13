"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[724],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,y=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(y,a(a({ref:r},u),{},{components:t})):n.createElement(y,a({ref:r},u))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98904:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(58168),i=(t(96540),t(15680));const o={id:"exit",title:"Exit"},a=void 0,c={unversionedId:"reference/core/exit",id:"version-1.0.18/reference/core/exit",title:"Exit",description:"An Exit[E, A] value describes how fibers end life. It has two possible values:",source:"@site/versioned_docs/version-1.0.18/reference/core/exit.md",sourceDirName:"reference/core",slug:"/reference/core/exit",permalink:"/1.0.18/reference/core/exit",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/reference/core/exit.md",tags:[],version:"1.0.18",frontMatter:{id:"exit",title:"Exit"},sidebar:"overview_sidebar",previous:{title:"IO",permalink:"/1.0.18/reference/core/io"},next:{title:"Cause",permalink:"/1.0.18/reference/core/cause"}},l={},s=[],u={toc:s},p="wrapper";function f(e){let{components:r,...t}=e;return(0,i.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"An ",(0,i.yg)("inlineCode",{parentName:"p"},"Exit[E, A]")," value describes how fibers end life. It has two possible values:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Exit.Success")," contain a success value of type ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),". "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Exit.Failure")," contains a failure ",(0,i.yg)("a",{parentName:"li",href:"/1.0.18/reference/core/cause"},"Cause")," of type ",(0,i.yg)("inlineCode",{parentName:"li"},"E"),".")),(0,i.yg)("p",null,"We can call ",(0,i.yg)("inlineCode",{parentName:"p"},"run")," on our effect to determine the Success or Failure of our fiber:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.console._\nfor {\n  successExit <- ZIO.succeed(1).run\n  _ <- successExit match {\n    case Exit.Success(value) =>\n      putStrLn(s"exited with success value: ${value}")\n    case Exit.Failure(cause) =>\n      putStrLn(s"exited with failure state: $cause")\n  }\n} yield ()\n')))}f.isMDXComponent=!0}}]);