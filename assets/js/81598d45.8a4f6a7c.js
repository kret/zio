"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[78193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"uio",title:"UIO"},o=void 0,p={unversionedId:"reference/core/uio",id:"version-1.0.18/reference/core/uio",title:"UIO",description:"UIO[A] is a type alias for ZIO[Any, Nothing, A], which represents an Unexceptional effect that doesn't require any specific environment, and cannot fail, but can succeed with an A.",source:"@site/versioned_docs/version-1.0.18/reference/core/uio.md",sourceDirName:"reference/core",slug:"/reference/core/uio",permalink:"/1.0.18/reference/core/uio",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/reference/core/uio.md",tags:[],version:"1.0.18",frontMatter:{id:"uio",title:"UIO"},sidebar:"overview_sidebar",previous:{title:"ZIO",permalink:"/1.0.18/reference/core/zio"},next:{title:"URIO",permalink:"/1.0.18/reference/core/urio"}},l={},c=[],s={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UIO[A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[Any, Nothing, A]"),", which represents an ",(0,a.kt)("strong",{parentName:"p"},"Unexceptional")," effect that doesn't require any specific environment, and cannot fail, but can succeed with an ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Note:"))),(0,a.kt)("p",{parentName:"blockquote"},"In Scala, the ",(0,a.kt)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,a.kt)("p",null,"Let's see how the ",(0,a.kt)("inlineCode",{parentName:"p"},"UIO")," type alias is defined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"type UIO[+A] = ZIO[Any, Nothing, A]\n")),(0,a.kt)("p",null,"So the ",(0,a.kt)("inlineCode",{parentName:"p"},"UIO")," just equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," which doesn't need any requirement and cannot fail because in the Scala the ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing")," type has no inhabitant, we can't create an instance of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"UIO[A]")," (where the error type is ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing"),") are considered ",(0,a.kt)("em",{parentName:"p"},"infallible"),",\nbecause the ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing")," type is ",(0,a.kt)("em",{parentName:"p"},"uninhabitable"),", i.e. there can be no actual values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing"),". Values of this type may produce an ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),", but will never fail with an ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),"."),(0,a.kt)("p",null,"Let's write a fibonacci function. As we don't expect any failure, it is an unexceptional effect:"),(0,a.kt)("p",null,"In the following example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"fib"),", doesn't have any requirement, as it is an unexceptional effect, we don't except any failure, and it succeeds with value of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Int"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.UIO\ndef fib(n: Int): UIO[Int] =\n  if (n <= 1) {\n    UIO.succeed(1)\n  } else {\n    for {\n      fiber1 <- fib(n - 2).fork\n      fiber2 <- fib(n - 1).fork\n      v2     <- fiber2.join\n      v1     <- fiber1.join\n    } yield v1 + v2\n  }\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," ",(0,a.kt)("em",{parentName:"p"},"Principle of The Least Power")),(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On other hand, the type aliases are a way of subtyping and specializing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," type, specific for a less powerful workflow. "),(0,a.kt)("p",{parentName:"blockquote"},"Lot of the time, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the proper specialized type alias."),(0,a.kt)("p",{parentName:"blockquote"},"So there is no need to convert type aliases to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, whenever the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}f.isMDXComponent=!0}}]);