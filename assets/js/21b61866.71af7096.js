"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[87542],{95788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>d});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=c(n),f=a,d=y["".concat(l,".").concat(f)]||y[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[y]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const i={id:"io",title:"IO"},o=void 0,p={unversionedId:"reference/core/zio/io",id:"reference/core/zio/io",title:"IO",description:"IO[E, A] is a type alias for ZIO[Any, E, A], which represents an effect that has no requirements, and may fail with an E, or succeed with an A.",source:"@site/docs/reference/core/zio/io.md",sourceDirName:"reference/core/zio",slug:"/reference/core/zio/io",permalink:"/reference/core/zio/io",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/core/zio/io.md",tags:[],version:"current",frontMatter:{id:"io",title:"IO"},sidebar:"reference-sidebar",previous:{title:"RIO",permalink:"/reference/core/zio/rio"},next:{title:"ZIOApp",permalink:"/reference/core/zioapp"}},l={},c=[],s={toc:c},y="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"IO[E, A]")," is a type alias for ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO[Any, E, A]"),", which represents an effect that has no requirements, and may fail with an ",(0,a.yg)("inlineCode",{parentName:"p"},"E"),", or succeed with an ",(0,a.yg)("inlineCode",{parentName:"p"},"A"),"."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"In Scala, the ",(0,a.yg)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,a.yg)("p",null,"Let's see how the ",(0,a.yg)("inlineCode",{parentName:"p"},"IO")," type alias is defined:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"type IO[+E, +A] = ZIO[Any, E, A]\n")),(0,a.yg)("p",null,"So ",(0,a.yg)("inlineCode",{parentName:"p"},"IO")," is equal to a ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," that doesn't need any requirement."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," values of type ",(0,a.yg)("inlineCode",{parentName:"p"},"IO[E, Nothing]")," (where the value type is ",(0,a.yg)("inlineCode",{parentName:"p"},"Nothing"),") are considered ",(0,a.yg)("em",{parentName:"p"},"unproductive"),", because the ",(0,a.yg)("inlineCode",{parentName:"p"},"Nothing")," type is ",(0,a.yg)("em",{parentName:"p"},"uninhabitable"),", i.e. there can be no actual values of type ",(0,a.yg)("inlineCode",{parentName:"p"},"Nothing"),". Values of this type may fail with an ",(0,a.yg)("inlineCode",{parentName:"p"},"E"),", but will never produce a value."),(0,a.yg)("admonition",{title:"Principle of Least Power",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On the other hand, the type aliases are a way of specializing the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," type for less powerful workflows. "),(0,a.yg)("p",{parentName:"admonition"},"Often, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the appropriate specialized type alias."),(0,a.yg)("p",{parentName:"admonition"},"So there is no need to convert type aliases to the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," data type, and whenever the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}u.isMDXComponent=!0}}]);