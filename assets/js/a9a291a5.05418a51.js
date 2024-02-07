"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[98032],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>d});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),y=a,d=f["".concat(l,".").concat(y)]||f[y]||u[y]||s;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const s={id:"flaky-and-non-flaky-tests",title:"Flaky and Non-flaky Tests"},o=void 0,i={unversionedId:"reference/test/aspects/flaky-and-non-flaky-tests",id:"reference/test/aspects/flaky-and-non-flaky-tests",title:"Flaky and Non-flaky Tests",description:"Whenever we deal with concurrency issues or race conditions, we should ensure that our tests pass consistently. The nonFlaky is a test aspect to do that.",source:"@site/docs/reference/test/aspects/flaky-and-non-flaky-tests.md",sourceDirName:"reference/test/aspects",slug:"/reference/test/aspects/flaky-and-non-flaky-tests",permalink:"/reference/test/aspects/flaky-and-non-flaky-tests",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/aspects/flaky-and-non-flaky-tests.md",tags:[],version:"current",frontMatter:{id:"flaky-and-non-flaky-tests",title:"Flaky and Non-flaky Tests"},sidebar:"reference-sidebar",previous:{title:"Execution Strategy",permalink:"/reference/test/aspects/execution-strategy"},next:{title:"Ignoring Tests",permalink:"/reference/test/aspects/ignoring-tests"}},l={},c=[],p={toc:c},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(f,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Whenever we deal with concurrency issues or race conditions, we should ensure that our tests pass consistently. The ",(0,a.yg)("inlineCode",{parentName:"p"},"nonFlaky")," is a test aspect to do that."),(0,a.yg)("p",null,"It will run a test several times, by default 100 times, and if all those times pass, it will pass, otherwise, it will fail:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.TestAspect._\n\ntest("random value is always greater than zero") {\n  for {\n    random <- Random.nextIntBounded(100)\n  } yield assertTrue(random > 0)\n} @@ nonFlaky\n')),(0,a.yg)("p",null,"Additionally, there is a ",(0,a.yg)("inlineCode",{parentName:"p"},"TestAspect.flaky")," test aspect which retries a test until it succeeds."))}u.isMDXComponent=!0}}]);