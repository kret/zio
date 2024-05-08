"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[68655],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>m});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||g[f]||o;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60540:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(58168),a=(r(96540),r(15680));const o={id:"converting-defects-to-failures",title:"Converting Defects to Failures"},i=void 0,l={unversionedId:"reference/error-management/operations/converting-defects-to-failures",id:"reference/error-management/operations/converting-defects-to-failures",title:"Converting Defects to Failures",description:"Both ZIO#resurrect and ZIO#absorb are symmetrical opposite of the ZIO#orDie operator. The ZIO#orDie takes failures from the error channel and converts them into defects, whereas the ZIO#absorb and ZIO#resurrect take defects and convert them into failures:",source:"@site/docs/reference/error-management/operations/converting-defects-to-failures.md",sourceDirName:"reference/error-management/operations",slug:"/reference/error-management/operations/converting-defects-to-failures",permalink:"/reference/error-management/operations/converting-defects-to-failures",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/operations/converting-defects-to-failures.md",tags:[],version:"current",frontMatter:{id:"converting-defects-to-failures",title:"Converting Defects to Failures"},sidebar:"reference-sidebar",previous:{title:"Exposing the Cause in The Success Channel",permalink:"/reference/error-management/operations/exposing-the-cause-in-the-success-channel"},next:{title:"Error Refinement",permalink:"/reference/error-management/operations/error-refinement"}},p={},c=[],s={toc:c},u="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Both ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#resurrect")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#absorb")," are symmetrical opposite of the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#orDie")," operator. The ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#orDie")," takes failures from the error channel and converts them into defects, whereas the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#absorb")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#resurrect")," take defects and convert them into failures:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def absorb(implicit ev: E IsSubtypeOfError Throwable): ZIO[R, Throwable, A]\n  def absorbWith(f: E => Throwable): ZIO[R, Throwable, A]\n  def resurrect(implicit ev1: E IsSubtypeOfError Throwable): ZIO[R, Throwable, A]\n}\n")),(0,a.yg)("p",null,"Below are examples of the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#absorb")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#resurrect")," operators:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval effect1 =\n  ZIO.fail(new IllegalArgumentException("wrong argument"))  // ZIO[Any, IllegalArgumentException, Nothing]\n    .orDie                                                  // ZIO[Any, Nothing, Nothing]\n    .absorb                                                 // ZIO[Any, Throwable, Nothing]\n    .refineToOrDie[IllegalArgumentException]                // ZIO[Any, IllegalArgumentException, Nothing]\n\nval effect2 =\n  ZIO.fail(new IllegalArgumentException("wrong argument"))  // ZIO[Any, IllegalArgumentException , Nothing]\n    .orDie                                                  // ZIO[Any, Nothing, Nothing]\n    .resurrect                                              // ZIO[Any, Throwable, Nothing]\n    .refineToOrDie[IllegalArgumentException]                // ZIO[Any, IllegalArgumentException, Nothing]\n')),(0,a.yg)("p",null,"So what is the difference between ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#absorb")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#resurrect")," operators?"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#absorb")," can recover from both ",(0,a.yg)("inlineCode",{parentName:"p"},"Die")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Interruption")," causes. Using this operator we can absorb failures, defects and interruptions using ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#absorb")," operation. It attempts to convert all causes into a failure, throwing away all information about the cause of the error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val effect1 =\n    ZIO.dieMessage("Boom!") // ZIO[Any, Nothing, Nothing]\n      .absorb               // ZIO[Any, Throwable, Nothing]\n      .ignore\n  val effect2 =\n    ZIO.interrupt           // ZIO[Any, Nothing, Nothing]\n      .absorb               // ZIO[Any, Throwable, Nothing]\n      .ignore\n\n  def run =\n    (effect1 <*> effect2)\n      .debug("application exited successfully")\n}\n')),(0,a.yg)("p",null,"The output would be as below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"application exited successfully: ()\n")),(0,a.yg)("p",null,"Whereas, the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#resurrect")," will only recover from ",(0,a.yg)("inlineCode",{parentName:"p"},"Die")," causes:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val effect1 =\n    ZIO\n      .dieMessage("Boom!") // ZIO[Any, Nothing, Nothing]\n      .resurrect           // ZIO[Any, Throwable, Nothing]\n      .ignore\n  val effect2 =\n    ZIO.interrupt          // ZIO[Any, Nothing, Nothing]\n      .resurrect           // ZIO[Any, Throwable, Nothing]\n      .ignore\n\n  def run =\n    (effect1 <*> effect2)\n      .debug("couldn\'t recover from fiber interruption")\n}\n')),(0,a.yg)("p",null,"And, here is the output:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-02-18T14:21:52.559872464Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" java.lang.InterruptedException: Interrupted by thread "zio-fiber-"\n    at <empty>.MainApp.effect2(MainApp.scala:10)\n    at <empty>.MainApp.effect2(MainApp.scala:11)\n    at <empty>.MainApp.effect2(MainApp.scala:12)\n    at <empty>.MainApp.run(MainApp.scala:15)\n    at <empty>.MainApp.run(MainApp.scala:16)"\n')))}g.isMDXComponent=!0}}]);