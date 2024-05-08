"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[69696],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const i={id:"operations",title:"Operations"},s=void 0,a={unversionedId:"reference/test/assertions/operations",id:"reference/test/assertions/operations",title:"Operations",description:"Logical Operations",source:"@site/docs/reference/test/assertions/operations.md",sourceDirName:"reference/test/assertions",slug:"/reference/test/assertions/operations",permalink:"/reference/test/assertions/operations",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/assertions/operations.md",tags:[],version:"current",frontMatter:{id:"operations",title:"Operations"},sidebar:"reference-sidebar",previous:{title:"Classic Assertions",permalink:"/reference/test/assertions/classic-assertions"},next:{title:"Built-in Assertions",permalink:"/reference/test/assertions/built-in-assertions"}},l={},p=[{value:"Logical Operations",id:"logical-operations",level:2},{value:"Composable Nested Assertions",id:"composable-nested-assertions",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"logical-operations"},"Logical Operations"),(0,o.yg)("p",null,"What is really useful in assertions is that they behave like boolean values and can be composed with operators known from operating on boolean values like and (",(0,o.yg)("inlineCode",{parentName:"p"},"&&"),"), or (",(0,o.yg)("inlineCode",{parentName:"p"},"||"),"), negation (",(0,o.yg)("inlineCode",{parentName:"p"},"negate"),"):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.test.Assertion\n\nval assertionForString: Assertion[String] = \n  Assertion.containsString("Foo") && Assertion.endsWithString("Bar")\n')),(0,o.yg)("h2",{id:"composable-nested-assertions"},"Composable Nested Assertions"),(0,o.yg)("p",null,"Assertions also compose with each other allowing for doing rich diffs not only simple value to value comparison:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\nimport zio.test.Assertion.{isRight, isSome, equalTo, hasField}\n\ntest("Check assertions") {\n  assert(Right(Some(2)))(isRight(isSome(equalTo(2))))\n}\n')),(0,o.yg)("p",null,"Here we're checking deeply nested values inside an ",(0,o.yg)("inlineCode",{parentName:"p"},"Either")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Option"),". Because ",(0,o.yg)("inlineCode",{parentName:"p"},"Assertion"),"s compose this is not a problem. All layers are being peeled off tested for the condition until the final value is reached."),(0,o.yg)("p",null,"Here the expression ",(0,o.yg)("inlineCode",{parentName:"p"},"Right(Some(2))")," is of type ",(0,o.yg)("inlineCode",{parentName:"p"},"Either[Any, Option[Int]]")," and our assertion ",(0,o.yg)("inlineCode",{parentName:"p"},"isRight(isSome(equalTo(2)))")," is of type ",(0,o.yg)("inlineCode",{parentName:"p"},"Assertion[Either[Any, Option[Int]]]")))}d.isMDXComponent=!0}}]);