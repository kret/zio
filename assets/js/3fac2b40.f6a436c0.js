"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[668],{95788:(e,t,n)=>{n.d(t,{Iu:()=>f,yg:()=>m});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(45072),a=(n(11504),n(95788));const o={id:"refm",title:"RefM"},i=void 0,l={unversionedId:"reference/concurrency/refm",id:"version-1.0.18/reference/concurrency/refm",title:"RefM",description:"RefM[A] models a mutable reference to a value of type A in which we can store immutable data, and update it atomically and effectfully.",source:"@site/versioned_docs/version-1.0.18/reference/concurrency/refm.md",sourceDirName:"reference/concurrency",slug:"/reference/concurrency/refm",permalink:"/1.0.18/reference/concurrency/refm",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/reference/concurrency/refm.md",tags:[],version:"1.0.18",frontMatter:{id:"refm",title:"RefM"},sidebar:"overview_sidebar",previous:{title:"ZRefM",permalink:"/1.0.18/reference/concurrency/zrefm"},next:{title:"Promise",permalink:"/1.0.18/reference/concurrency/promise"}},c={},p=[],f={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.c)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"RefM[A]")," models a ",(0,a.yg)("strong",{parentName:"p"},"mutable reference")," to a value of type ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," in which we can store ",(0,a.yg)("strong",{parentName:"p"},"immutable")," data, and update it atomically ",(0,a.yg)("strong",{parentName:"p"},"and")," effectfully."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("em",{parentName:"p"},(0,a.yg)("strong",{parentName:"em"},"Note:"))),(0,a.yg)("p",{parentName:"blockquote"},"Almost all of ",(0,a.yg)("inlineCode",{parentName:"p"},"RefM")," operations are the same as ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref"),". We suggest reading ",(0,a.yg)("a",{parentName:"p",href:"/1.0.18/reference/concurrency/ref"},(0,a.yg)("inlineCode",{parentName:"a"},"Ref"))," at first if you are not familiar with ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref"),".")),(0,a.yg)("p",null,"Let's explain how we can update a shared state effectfully with ",(0,a.yg)("inlineCode",{parentName:"p"},"RefM"),". The ",(0,a.yg)("inlineCode",{parentName:"p"},"update")," method and all other related methods get an effectful operation and then run they run these effects to change the shared state. This is the main difference between ",(0,a.yg)("inlineCode",{parentName:"p"},"RefM")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref"),". "),(0,a.yg)("p",null,"In the following example, we should pass in ",(0,a.yg)("inlineCode",{parentName:"p"},"updateEffect")," to it which is the description of an update operation. So ",(0,a.yg)("inlineCode",{parentName:"p"},"RefM")," is going to update the ",(0,a.yg)("inlineCode",{parentName:"p"},"refM")," by running the ",(0,a.yg)("inlineCode",{parentName:"p"},"updateEffect"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nfor {\n  refM   <- RefM.make("current")\n  updateEffect = IO.effectTotal("update")\n  _ <- refM.update(_ => updateEffect)\n  value <- refM.get\n} yield assert(value == "update")\n')),(0,a.yg)("p",null,"In real-world applications, there are cases where we want to run an effect, e.g. query a database, and then update the shared state. This is where ",(0,a.yg)("inlineCode",{parentName:"p"},"RefM")," can help us to update the shared state in a more actor model fashion. We have a shared mutable state but for every different command or message, and we want execute our effect and update the state. "),(0,a.yg)("p",null,"We can pass in an effectful program into every single update. All of them will be done parallel, but the result will be sequenced in such a fashion that they only touched the state at different times, and we end up with a consistent state at the end."),(0,a.yg)("p",null,"In the following example, we are going to send ",(0,a.yg)("inlineCode",{parentName:"p"},"getAge")," request to usersApi for each user and updating the state respectively:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"val meanAge =\n  for {\n    ref <- RefM.make(0)\n    _ <- IO.foreachPar(users) { user =>\n      ref.update(sumOfAges =>\n        api.getAge(user).map(_ + sumOfAges)\n      )\n    }\n    v <- ref.get\n  } yield (v / users.length)\n")))}u.isMDXComponent=!0}}]);