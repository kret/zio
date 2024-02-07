"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[34678],{95788:(e,r,n)=>{n.d(r,{Iu:()=>s,yg:()=>m});var t=n(11504);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?t.createElement(m,i(i({ref:r},s),{},{components:n})):t.createElement(m,i({ref:r},s))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2920:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=n(45072),a=(n(11504),n(95788));const o={id:"typed-errors-guarantees",title:"Typed Errors Guarantees",sidebar_label:"Typed Errors Guarantees"},i=void 0,p={unversionedId:"reference/error-management/typed-errors-guarantees",id:"reference/error-management/typed-errors-guarantees",title:"Typed Errors Guarantees",description:"Typed errors don't guarantee the absence of defects and interruptions. Having an effect of type ZIO[R, E, A], means it can fail because of some failure of type E, but it doesn't mean it can't die or be interrupted. So the error channel is only for failure errors.",source:"@site/docs/reference/error-management/typed-errors-guarantees.md",sourceDirName:"reference/error-management",slug:"/reference/error-management/typed-errors-guarantees",permalink:"/reference/error-management/typed-errors-guarantees",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/typed-errors-guarantees.md",tags:[],version:"current",frontMatter:{id:"typed-errors-guarantees",title:"Typed Errors Guarantees",sidebar_label:"Typed Errors Guarantees"},sidebar:"reference-sidebar",previous:{title:"Exceptional and Unexceptional Effects",permalink:"/reference/error-management/exceptional-and-unexceptional-effects"},next:{title:"Sequential and Parallel Errors",permalink:"/reference/error-management/sequential-and-parallel-errors"}},l={},c=[],s={toc:c},u="wrapper";function f(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.c)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Typed errors don't guarantee the absence of defects and interruptions.")," Having an effect of type ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO[R, E, A]"),", means it can fail because of some failure of type ",(0,a.yg)("inlineCode",{parentName:"p"},"E"),", but it doesn't mean it can't die or be interrupted. So the error channel is only for ",(0,a.yg)("inlineCode",{parentName:"p"},"failure")," errors."),(0,a.yg)("p",null,"In the following example, the type of the ",(0,a.yg)("inlineCode",{parentName:"p"},"validateNonNegativeNumber")," function is ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO[Any, String, Int]")," which denotes it is a typed exceptional effect. It can fail of type ",(0,a.yg)("inlineCode",{parentName:"p"},"String")," but it still can die with the type of ",(0,a.yg)("inlineCode",{parentName:"p"},"NumberFormatException")," defect:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ndef validateNonNegativeNumber(input: String): ZIO[Any, String, Int] =\n  input.toIntOption match {\n    case Some(value) if value >= 0 =>\n      ZIO.succeed(value)\n    case Some(other) =>\n      ZIO.fail(s"the entered number is negative: $other")\n    case None =>\n      ZIO.die(\n        new NumberFormatException(\n          s"the entered input is not in the correct number format: $input"\n        )\n      )\n  }\n')),(0,a.yg)("p",null,"Also, its underlying fiber can be interrupted without affecting the type of the error channel:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval myApp: ZIO[Any, String, Int] =\n  for {\n    f <- validateNonNegativeNumber("5").fork\n    _ <- f.interrupt\n    r <- f.join\n  } yield r\n')),(0,a.yg)("p",null,"Therefore, if we run the ",(0,a.yg)("inlineCode",{parentName:"p"},"myApp")," effect, it will be interrupted before it gets the chance to finish."))}f.isMDXComponent=!0}}]);