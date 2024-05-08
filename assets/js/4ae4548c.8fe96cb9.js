"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[95105],{15680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>u});var r=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),d=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},y=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,u=c["".concat(p,".").concat(m)]||c[m]||s[m]||t;return a?r.createElement(u,o(o({ref:n},y),{},{components:a})):r.createElement(u,o({ref:n},y))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,o=new Array(t);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<t;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63370:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=a(58168),i=(a(96540),a(15680));const t={id:"dependency-memoization",title:"Layers Are Shared by Default",sidebar_label:"Dependency Memoization"},o=void 0,l={unversionedId:"reference/di/dependency-memoization",id:"reference/di/dependency-memoization",title:"Layers Are Shared by Default",description:"Layer memoization allows a layer to be created once and used multiple times in the dependency graph. So if we use the same layer twice, e.g. (a >>> b) ++ (a >>> c), then the a layer will be allocated only once.",source:"@site/docs/reference/di/dependency-memoization.md",sourceDirName:"reference/di",slug:"/reference/di/dependency-memoization",permalink:"/reference/di/dependency-memoization",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/di/dependency-memoization.md",tags:[],version:"current",frontMatter:{id:"dependency-memoization",title:"Layers Are Shared by Default",sidebar_label:"Dependency Memoization"},sidebar:"reference-sidebar",previous:{title:"Multiple Implementations",permalink:"/reference/di/providing-different-implementation-of-a-service"},next:{title:"Overriding Dependency Graph",permalink:"/reference/di/overriding-dependency-graph"}},p={},d=[{value:"Layers are Memoized by Default When Providing Globally",id:"layers-are-memoized-by-default-when-providing-globally",level:2},{value:"Acquiring a Fresh Version",id:"acquiring-a-fresh-version",level:2},{value:"Layers Are Not Memoized When Providing Locally",id:"layers-are-not-memoized-when-providing-locally",level:2},{value:"Manual Memoization",id:"manual-memoization",level:2}],y={toc:d},c="wrapper";function s(e){let{components:n,...a}=e;return(0,i.yg)(c,(0,r.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Layer memoization allows a layer to be created once and used multiple times in the dependency graph. So if we use the same layer twice, e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"(a >>> b) ++ (a >>> c)"),", then the ",(0,i.yg)("inlineCode",{parentName:"p"},"a")," layer will be allocated only once."),(0,i.yg)("h2",{id:"layers-are-memoized-by-default-when-providing-globally"},"Layers are Memoized by Default When Providing Globally"),(0,i.yg)("p",null,"One important feature of a ZIO application is that layers are shared by default, meaning that if the same layer is used twice, and if we provide the layer ",(0,i.yg)("a",{parentName:"p",href:"/reference/di/overriding-dependency-graph#global-environment"},"globally")," the layer will only be allocated a single time. For every layer in our dependency graph, there is only one instance of it that is shared between all the layers that depend on it."),(0,i.yg)("p",null,"For example, assume we have the three ",(0,i.yg)("inlineCode",{parentName:"p"},"A"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"B"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"C")," services. The implementation of both ",(0,i.yg)("inlineCode",{parentName:"p"},"B")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"C")," are dependent on the ",(0,i.yg)("inlineCode",{parentName:"p"},"A")," service:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ntrait A\ntrait B\ntrait C\n\ncase class BLive(a: A) extends B\ncase class CLive(a: A) extends C\n\nval a: ZLayer[Any, Nothing, A] =\n  ZLayer(ZIO.succeed(new A {}).debug("initialized"))\n\nval b: ZLayer[A, Nothing, B] =\n  ZLayer {\n    for {\n      a <- ZIO.service[A]\n    } yield BLive(a)\n  }\n\nval c: ZLayer[A, Nothing, C] =\n  ZLayer {\n    for {\n      a <- ZIO.service[A]\n    } yield CLive(a)\n  }\n')),(0,i.yg)("p",null,"Although both ",(0,i.yg)("inlineCode",{parentName:"p"},"b")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"c")," layers require the ",(0,i.yg)("inlineCode",{parentName:"p"},"a")," layer, the ",(0,i.yg)("inlineCode",{parentName:"p"},"a")," layer is instantiated only once. It is shared with both ",(0,i.yg)("inlineCode",{parentName:"p"},"b")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"c"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject MainApp extends ZIOAppDefault {\n\n  val myApp: ZIO[B & C, Nothing, Unit] =\n    for {\n      _ <- ZIO.service[B]\n      _ <- ZIO.service[C]\n    } yield ()\n    \n  // alternative: myApp.provideLayer((a >>> b) ++ (a >>> c))\n  def run = myApp.provide(a, b, c) \n}\n// Output:\n// initialized: MainApp3$$anon$32@62c8b8d3\n")),(0,i.yg)("h2",{id:"acquiring-a-fresh-version"},"Acquiring a Fresh Version"),(0,i.yg)("p",null,"If we don't want to share a module, we should create a fresh, non-shared version of it through ",(0,i.yg)("inlineCode",{parentName:"p"},"ZLayer#fresh"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject MainApp extends ZIOAppDefault {\n\n  val myApp: ZIO[B & C, Nothing, Unit] =\n    for {\n      _ <- ZIO.service[B]\n      _ <- ZIO.service[C]\n    } yield ()\n\n  def run = myApp.provideLayer((a.fresh >>> b) ++ (a.fresh >>> c))\n}\n// Output:\n// initialized: MainApp$$anon$22@7eb282da\n// initialized: MainApp$$anon$22@6397a26a\n")),(0,i.yg)("h2",{id:"layers-are-not-memoized-when-providing-locally"},"Layers Are Not Memoized When Providing Locally"),(0,i.yg)("p",null,"If we don't provide a layer globally but instead provide them ",(0,i.yg)("a",{parentName:"p",href:"/reference/di/overriding-dependency-graph#local-environment"},"locally"),", that layer doesn't support memoization by default."),(0,i.yg)("p",null,"In the following example, we provided the ",(0,i.yg)("inlineCode",{parentName:"p"},"A")," layer two times locally and the ZIO doesn't memoize the construction of the ",(0,i.yg)("inlineCode",{parentName:"p"},"A")," layer. So, it will be initialized two times:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject MainApp extends ZIOAppDefault {\n\n  val myApp: ZIO[Any, Nothing, Unit] =\n    for {\n      _ <- ZIO.service[A].provide(a) // providing locally\n      _ <- ZIO.service[A].provide(a) // providing locally\n    } yield ()\n\n  def run = myApp\n}\n// The output:\n// initialized: MainApp$$anon$1@cd60bde\n// initialized: MainApp$$anon$1@a984546\n")),(0,i.yg)("h2",{id:"manual-memoization"},"Manual Memoization"),(0,i.yg)("p",null,"We can memoize the ",(0,i.yg)("inlineCode",{parentName:"p"},"A")," layer manually using the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZLayer#memoize")," operator. It will return a scoped effect that, if evaluated, will return the lazily computed result of this layer:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject MainApp extends ZIOAppDefault {\n\n  val myApp: ZIO[Any, Nothing, Unit] =\n    ZIO.scoped {\n      a.memoize.flatMap { aLayer =>\n        for {\n          _ <- ZIO.service[A].provide(aLayer)\n          _ <- ZIO.service[A].provide(aLayer)\n        } yield ()\n      }\n    }\n    \n  def run = myApp\n}\n// The output:\n// initialized: MainApp$$anon$1@2bfc2bcc\n")))}s.isMDXComponent=!0}}]);