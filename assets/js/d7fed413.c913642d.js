"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[32852],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(n),f=a,d=y["".concat(p,".").concat(f)]||y[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[y]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(45072),a=(n(11504),n(95788));const o={id:"task",title:"Task"},i=void 0,s={unversionedId:"reference/core/zio/task",id:"reference/core/zio/task",title:"Task",description:"Task[A] is a type alias for ZIO[Any, Throwable, A], which represents an effect that has no requirements, and may fail with a Throwable value, or succeed with an A.",source:"@site/docs/reference/core/zio/task.md",sourceDirName:"reference/core/zio",slug:"/reference/core/zio/task",permalink:"/reference/core/zio/task",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/core/zio/task.md",tags:[],version:"current",frontMatter:{id:"task",title:"Task"},sidebar:"reference-sidebar",previous:{title:"URIO",permalink:"/reference/core/zio/urio"},next:{title:"RIO",permalink:"/reference/core/zio/rio"}},p={},l=[],c={toc:l},y="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Task[A]")," is a type alias for ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO[Any, Throwable, A]"),", which represents an effect that has no requirements, and may fail with a ",(0,a.yg)("inlineCode",{parentName:"p"},"Throwable")," value, or succeed with an ",(0,a.yg)("inlineCode",{parentName:"p"},"A"),"."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"In Scala, a ",(0,a.yg)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect results of the type-checking process. It just helps us to have an expressive API design.")),(0,a.yg)("p",null,"Let's see how the ",(0,a.yg)("inlineCode",{parentName:"p"},"Task")," type alias is defined:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"type Task[+A] = ZIO[Any, Throwable, A]\n")),(0,a.yg)("p",null,"So a ",(0,a.yg)("inlineCode",{parentName:"p"},"Task")," is equivalent to a ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," that doesn't need any requirement, and may fail with a ",(0,a.yg)("inlineCode",{parentName:"p"},"Throwable"),", or succeed with an ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," value."),(0,a.yg)("p",null,"Sometimes we know that our effect may fail, but we don't care about the type of that exception. This is where we can use ",(0,a.yg)("inlineCode",{parentName:"p"},"Task"),". The signature of this type alias is similar to ",(0,a.yg)("inlineCode",{parentName:"p"},"Future[T]")," and Cats ",(0,a.yg)("inlineCode",{parentName:"p"},"IO"),"."),(0,a.yg)("p",null,"If we want to be less precise and eliminate the need to think about requirements and error types, we can use ",(0,a.yg)("inlineCode",{parentName:"p"},"Task"),". This type alias is a good starting point for anyone who wants to refactor an existing code base which is written with Cats ",(0,a.yg)("inlineCode",{parentName:"p"},"IO")," or Monix ",(0,a.yg)("inlineCode",{parentName:"p"},"Task"),". "),(0,a.yg)("admonition",{title:"Principle of Least Power",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On the other hand, the type aliases are a way of specializing the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," type for less powerful workflows. "),(0,a.yg)("p",{parentName:"admonition"},"Often, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the appropriate specialized type alias."),(0,a.yg)("p",{parentName:"admonition"},"So there is no need to convert type aliases to the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," data type, and whenever the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}u.isMDXComponent=!0}}]);