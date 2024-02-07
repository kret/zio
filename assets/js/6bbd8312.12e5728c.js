"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[23456],{95788:(e,r,n)=>{n.d(r,{Iu:()=>u,yg:()=>d});var i=n(11504);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,i,t=function(e,r){if(null==e)return{};var n,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=i.createContext({}),p=function(e){var r=i.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return i.createElement(l.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},v=i.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),v=t,d=c["".concat(l,".").concat(v)]||c[v]||f[v]||o;return n?i.createElement(d,a(a({ref:r},u),{},{components:n})):i.createElement(d,a({ref:r},u))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,a=new Array(o);a[0]=v;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:t,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},33728:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(45072),t=(n(11504),n(95788));const o={id:"supervisor",title:"Supervisor"},a=void 0,s={unversionedId:"reference/observability/supervisor",id:"reference/observability/supervisor",title:"Supervisor",description:"A Supervisor[A] is allowed to supervise the launching and termination of fibers, producing some visible value of type A from the supervision.",source:"@site/docs/reference/observability/supervisor.md",sourceDirName:"reference/observability",slug:"/reference/observability/supervisor",permalink:"/reference/observability/supervisor",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/observability/supervisor.md",tags:[],version:"current",frontMatter:{id:"supervisor",title:"Supervisor"},sidebar:"reference-sidebar",previous:{title:"Tracing",permalink:"/reference/observability/tracing"},next:{title:"Introduction to Configuration in ZIO",permalink:"/reference/configuration/"}},l={},p=[{value:"Creation",id:"creation",level:2},{value:"track",id:"track",level:3},{value:"fibersIn",id:"fibersin",level:3},{value:"Supervising",id:"supervising",level:2},{value:"Example",id:"example",level:2}],u={toc:p},c="wrapper";function f(e){let{components:r,...n}=e;return(0,t.yg)(c,(0,i.c)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"A ",(0,t.yg)("inlineCode",{parentName:"p"},"Supervisor[A]")," is allowed to supervise the launching and termination of fibers, producing some visible value of type ",(0,t.yg)("inlineCode",{parentName:"p"},"A")," from the supervision."),(0,t.yg)("h2",{id:"creation"},"Creation"),(0,t.yg)("h3",{id:"track"},"track"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"track")," creates a new supervisor that tracks children in a set. It takes a boolean ",(0,t.yg)("inlineCode",{parentName:"p"},"weak")," parameter as input, which indicates whether track children in a ",(0,t.yg)("inlineCode",{parentName:"p"},"Weakset")," or not."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val supervisor = Supervisor.track(true)\n// supervisor: zio.package.UIO[Supervisor[zio.Chunk[zio.Fiber.Runtime[Any, Any]]]] = Sync(\n//   trace = "repl.MdocSession.MdocApp.supervisor(supervisor.md:14)",\n//   eval = zio.Supervisor$$$Lambda$18378/0x00007f533ed5ee68@dee3318\n// )\n')),(0,t.yg)("p",null,"We can periodically, report the status of the fibers of our program with the help of the Supervisor."),(0,t.yg)("h3",{id:"fibersin"},"fibersIn"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"fibersIn")," creates a new supervisor with an initial sorted set of fibers."),(0,t.yg)("p",null,"In the following example we are creating a new supervisor from an initial set of fibers:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"def fiberListSupervisor = for { \n  ref <- ZIO.succeed(new AtomicReference(SortedSet.from(fibers)))\n  s <- Supervisor.fibersIn(ref)\n} yield (s)\n")),(0,t.yg)("h2",{id:"supervising"},"Supervising"),(0,t.yg)("p",null,"Whenever we need to supervise a ZIO effect, we can call ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO#supervised")," function, ",(0,t.yg)("inlineCode",{parentName:"p"},"supervised")," takes a supervisor and return another effect. The behavior of children fibers is reported to the provided supervisor:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val supervised = supervisor.flatMap(s => fib(20).supervised(s))\n")),(0,t.yg)("p",null,"Now we can access all information of children fibers through the supervisor."),(0,t.yg)("h2",{id:"example"},"Example"),(0,t.yg)("p",null,"In the following example we are going to periodically monitor the number of fibers throughout our application life cycle:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.Fiber.Status\n\nobject SupervisorExample extends ZIOAppDefault {\n\n  def run = for {\n    supervisor <- Supervisor.track(true)\n    fiber <- fib(20).supervised(supervisor).fork\n    policy = Schedule\n      .spaced(500.milliseconds)\n      .whileInputZIO[Any, Unit](_ => fiber.status.map(_ != Status.Done))\n    logger <- monitorFibers(supervisor)\n      .repeat(policy).fork\n    _ <- logger.join\n    result <- fiber.join\n    _ <- Console.printLine(s"fibonacci result: $result")\n  } yield ()\n\n  def monitorFibers(supervisor: Supervisor[Chunk[Fiber.Runtime[Any, Any]]]) = for {\n    length <- supervisor.value.map(_.length)\n    _ <- Console.printLine(s"number of fibers: $length")\n  } yield ()\n\n  def fib(n: Int): ZIO[Any, Nothing, Int] =\n    if (n <= 1) {\n      ZIO.succeed(1)\n    } else {\n      for {\n        _ <- ZIO.sleep(500.milliseconds)\n        fiber1 <- fib(n - 2).fork\n        fiber2 <- fib(n - 1).fork\n        v2 <- fiber2.join\n        v1 <- fiber1.join\n      } yield v1 + v2\n    }\n\n}\n')))}f.isMDXComponent=!0}}]);