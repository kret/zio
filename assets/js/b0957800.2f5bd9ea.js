"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[11711],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"before-after-around",title:"Before, After, and Around Test Aspects",sidebar_label:"Before, After, and Around"},i=void 0,s={unversionedId:"reference/test/aspects/before-after-around",id:"reference/test/aspects/before-after-around",title:"Before, After, and Around Test Aspects",description:"1. We can run an effect before, after, or around every test:",source:"@site/docs/reference/test/aspects/before-after-around.md",sourceDirName:"reference/test/aspects",slug:"/reference/test/aspects/before-after-around",permalink:"/reference/test/aspects/before-after-around",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/aspects/before-after-around.md",tags:[],version:"current",frontMatter:{id:"before-after-around",title:"Before, After, and Around Test Aspects",sidebar_label:"Before, After, and Around"},sidebar:"reference-sidebar",previous:{title:"Test Aspects",permalink:"/reference/test/aspects/"},next:{title:"Conditional Aspects",permalink:"/reference/test/aspects/conditional"}},l={},p=[],c={toc:p},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We can run an effect ",(0,a.kt)("em",{parentName:"li"},"before"),", ",(0,a.kt)("em",{parentName:"li"},"after"),", or ",(0,a.kt)("em",{parentName:"li"},"around")," every test:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.before")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.after")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.afterFailure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.afterSuccess")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.around"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\ntest("before and after") {\n  for {\n    tmp <- System.env("TEMP_DIR")\n  } yield assertTrue(tmp.contains("/tmp/test"))\n} @@ TestAspect.before(\n  TestSystem.putEnv("TEMP_DIR", s"/tmp/test")\n) @@ TestAspect.after(\n  System.env("TEMP_DIR").flatMap(deleteDir)\n)\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.aroundTest")," takes a scoped resource and evaluates every test within the context of the scoped function.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"There are also ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.beforeAll"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.afterAll"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"afterAllFailure"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"afterAllSuccess"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.aroundAll")," variants.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.aroundWith")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.aroundAllWith")," we can evaluate every test or all test between two given effects, ",(0,a.kt)("inlineCode",{parentName:"p"},"before")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"after"),", where the result of the ",(0,a.kt)("inlineCode",{parentName:"p"},"before")," effect can be used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"after")," effect."))))}u.isMDXComponent=!0}}]);