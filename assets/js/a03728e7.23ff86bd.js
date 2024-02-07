"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[39456],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>N});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),g=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(d.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=g(n),u=r,N=y["".concat(d,".").concat(u)]||y[u]||m[u]||i;return n?a.createElement(N,l(l({ref:t},p),{},{components:n})):a.createElement(N,l({ref:t},p))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[y]="string"==typeof e?e:r,l[1]=o;for(var g=2;g<i;g++)l[g]=n[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var a=n(45072),r=(n(11504),n(95788));const i={id:"can_fail",title:"Compile Time Errors for Handling Combinators",slug:"can_fail"},l=void 0,o={unversionedId:"can_fail",id:"can_fail",title:"Compile Time Errors for Handling Combinators",description:"ZIO provides a variety of combinators to handle errors such as orElse, catchAll, catchSome, option, either, and retry. However, these combinators only make sense for effects that can fail (i.e. where the error type is not Nothing). To help you identify code that doesn't make sense, error handling combinators require implicit evidence CanFail[E], which is automatically available for all types except Nothing. The table below includes a list of combinators that only make sense for effects that can fail along with value preserving rewrites.",source:"@site/docs/canfail.md",sourceDirName:".",slug:"/can_fail",permalink:"/can_fail",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/canfail.md",tags:[],version:"current",frontMatter:{id:"can_fail",title:"Compile Time Errors for Handling Combinators",slug:"can_fail"}},d={},g=[{value:"ZIO",id:"zio",level:2},{value:"ZStream",id:"zstream",level:2},{value:"ZStreamChunk",id:"zstreamchunk",level:2},{value:"(*) Notes:",id:"-notes",level:2}],p={toc:g},y="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"ZIO provides a variety of combinators to handle errors such as ",(0,r.yg)("inlineCode",{parentName:"p"},"orElse"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"catchAll"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"catchSome"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"option"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"either"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"retry"),". However, these combinators only make sense for effects that can fail (i.e. where the error type is not ",(0,r.yg)("inlineCode",{parentName:"p"},"Nothing"),"). To help you identify code that doesn't make sense, error handling combinators require implicit evidence ",(0,r.yg)("inlineCode",{parentName:"p"},"CanFail[E]"),", which is automatically available for all types except ",(0,r.yg)("inlineCode",{parentName:"p"},"Nothing"),". The table below includes a list of combinators that only make sense for effects that can fail along with value preserving rewrites."),(0,r.yg)("h2",{id:"zio"},"ZIO"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Code"),(0,r.yg)("th",{parentName:"tr",align:null},"Rewrite"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio <> zio")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.catchAll(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.catchSome(pf)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.either")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"),"*")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.eventually")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.flatMapError(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.fold(f, g)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.map(g)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.foldZIO(f, g)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.flatMap(g)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.mapBoth(f, g)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.map(g)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.mapError(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.option")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"),"*")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.orDie")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.orDieWith(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.orElse(zio)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.orElseEither(zio)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"),"*")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.orElseFail(e)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.asElseSucceed(a)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.refineOrDie(pf)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.refineOrDieWith(pf)(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.refineToOrDie")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.retry(s)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.retryOrElse(s, f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.retryOrElseEither(s, f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"),"*")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.tapBoth(f, g)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.tap(g)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio.tapError(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uio"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZIO.partitionZIO(in)(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZIO.foreach(in)(f)"),"*")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZIO.partitionZIOPar(in)(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZIO.foreachPar(in)(f)"),"*")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZIO.validateZIO(in)(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZIO.foreach(in)(f)"),"*")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZIO.validateFirstZIO(in)(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZIO.foreach(in)(f)"),"*")))),(0,r.yg)("h2",{id:"zstream"},"ZStream"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Code"),(0,r.yg)("th",{parentName:"tr",align:null},"Rewrite"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream.catchAll(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream.either")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream"),"*")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream.mapBoth(f, g)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream.map(g)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream.mapError(f)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream.orElse(zstream)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream"))))),(0,r.yg)("h2",{id:"zstreamchunk"},"ZStreamChunk"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Code"),(0,r.yg)("th",{parentName:"tr",align:null},"Rewrite"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream.either")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream.orElse(zstream)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ustream"))))),(0,r.yg)("h2",{id:"-notes"},"(*) Notes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"either"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"option"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"orElseEither"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"retryOrElseEither")," wrap their results in ",(0,r.yg)("inlineCode",{parentName:"p"},"Some")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Right")," so after rewriting, code calling these methods can be simplified to accept an ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," rather than an ",(0,r.yg)("inlineCode",{parentName:"p"},"Option[A]")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Either[E, A]"),". ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"partitionZIO"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"partitionZIOPar"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"validateZIO")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"validateFirstZIO")," have error accumulating semantics on either error channel or success channel. After rewrite the error type can be simplified to ",(0,r.yg)("inlineCode",{parentName:"p"},"E")," rather than ",(0,r.yg)("inlineCode",{parentName:"p"},"List[E]")," or the success type ",(0,r.yg)("inlineCode",{parentName:"p"},"List[B]")," instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"(List[E], List[B])"),"."))))}m.isMDXComponent=!0}}]);