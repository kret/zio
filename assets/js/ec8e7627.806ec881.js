"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[77860],{95788:(e,n,r)=>{r.d(n,{Iu:()=>p,yg:()=>g});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),y=a,g=m["".concat(l,".").concat(y)]||m[y]||u[y]||o;return r?t.createElement(g,i(i({ref:n},p),{},{components:r})):t.createElement(g,i({ref:n},p))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},21056:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=r(45072),a=(r(11504),r(95788));const o={id:"index",title:"Introduction"},i=void 0,c={unversionedId:"reference/concurrency/index",id:"version-1.0.18/reference/concurrency/index",title:"Introduction",description:"Overview",source:"@site/versioned_docs/version-1.0.18/reference/concurrency/index.md",sourceDirName:"reference/concurrency",slug:"/reference/concurrency/",permalink:"/1.0.18/reference/concurrency/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/reference/concurrency/index.md",tags:[],version:"1.0.18",frontMatter:{id:"index",title:"Introduction"},sidebar:"overview_sidebar",previous:{title:"Fiber.Status",permalink:"/1.0.18/reference/fiber/fiberstatus"},next:{title:"ZRef",permalink:"/1.0.18/reference/concurrency/zref"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Implication of Locking Mechanism",id:"implication-of-locking-mechanism",level:2},{value:"Lock-free Concurrency Model",id:"lock-free-concurrency-model",level:2},{value:"Advantage of Using ZIO Concurrency",id:"advantage-of-using-zio-concurrency",level:2},{value:"Concurrent Primitives",id:"concurrent-primitives",level:2},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Others",id:"others",level:3}],p={toc:s},m="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(m,(0,t.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"Most of the time, in concurrent programming we have a single state that we need to read and update that concurrently. When we have multiple fibers reading or writing to the same memory location we encounter the race condition. The main goal in every concurrent program is to have a consistent view of states among all threads."),(0,a.yg)("p",null,"There is two major concurrency model which tries to solve this problem:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Shared State")," \u2014 In this model, all threads communicate with each other by sharing the same memory location.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Message Passing (Distributed State)")," \u2014 This model provides primitives for sending and receiving messages, and the state is distributed. Each thread of execution has its own state. "))),(0,a.yg)("p",null,"The ",(0,a.yg)("em",{parentName:"p"},"Shared Memory")," model has two main solutions:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Lock-Based")," \u2014 In the locking model, the general primitives for synchronization are \u0640locks\u0640, that control access to critical sections. When a thread wants to modify the critical section, it acquires the lock and says I'm the only thread that is allowed to modify the state right now, after it's work finished it unlocks the critical section and says I'm done, all other threads can modify this memory section.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Non-blocking")," \u2014 Non-blocking algorithms usually use hardware-intrinsic atomic operations like ",(0,a.yg)("inlineCode",{parentName:"p"},"compare-and-swap")," (CAS), without using any locks. This method follows an optimistic design with a transactional memory mechanism to roll back in conflict situations."))),(0,a.yg)("h2",{id:"implication-of-locking-mechanism"},"Implication of Locking Mechanism"),(0,a.yg)("p",null,"There are lots of drawback with lock-based concurrency:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Incorrect use of locks can lead to deadlock. We need to care about the locking orders. If we don't place the locks in the right order, we may encounter a deadlock situation.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Identifying the critical section of a code that is vulnerable to race conditions is overwhelming. We should always care about them and remember to lock everywhere it's required.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"It makes our software design very sophisticated to become scalable and reliable. It doesn't scale with program size and complexity.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"To prevent missing the releasing of the acquired locks, we should always care about exceptions and error handling inside locking sections. ")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The locking mechanism violates the encapsulation property of our pieces of programs. So systems that build with locking mechanism are difficult to compose without knowing about their internals."))),(0,a.yg)("h2",{id:"lock-free-concurrency-model"},"Lock-free Concurrency Model"),(0,a.yg)("p",null,"As the lock-oriented programming does not compose and has lots of drawbacks, ZIO uses a ",(0,a.yg)("em",{parentName:"p"},"lock-free concurrency model")," which is a variation of non-blocking algorithms. The magic behind all of ZIO concurrency primitives is that they use CAS (",(0,a.yg)("em",{parentName:"p"},"compare-and-set"),") operation. "),(0,a.yg)("p",null,"Let's see how the ",(0,a.yg)("inlineCode",{parentName:"p"},"modify")," function of ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref")," is implemented without any locking mechanism:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"  final case class Ref[A](value: AtomicReference[A]) { self =>\n    def modify[B](f: A => (B, A)): UIO[B] = UIO.effectTotal {\n      var loop = true\n      var b: B = null.asInstanceOf[B]\n      while (loop) {\n        val current = value.get\n        val tuple   = f(current)\n        b = tuple._1\n        loop = !value.compareAndSet(current, tuple._2)\n      }\n      b\n    }\n }\n")),(0,a.yg)("p",null,"The idea behind the ",(0,a.yg)("inlineCode",{parentName:"p"},"modify")," is that a variable is only updated if it still has the same value as the time we had read the value from the original memory location. If the value has changed, it retries in the while loop until it succeeds. "),(0,a.yg)("h2",{id:"advantage-of-using-zio-concurrency"},"Advantage of Using ZIO Concurrency"),(0,a.yg)("p",null,"Here we are going to enumerate some points that why the ZIO concurrency model helps us to do our job well:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Composable")," \u2014 Due to the use of the lock-free concurrency model, ZIO brings us a composable concurrent primitive and lots of great combinators in a declarative style.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise")," and subsequently all other ZIO concurrent primitives that are on top of these two basic primitives ",(0,a.yg)("strong",{parentName:"p"},"are not transactionally composable"),"."),(0,a.yg)("p",{parentName:"blockquote"},"We cannot do transactional changes across two or more such concurrent primitives. They are susceptible to race conditions and deadlocks. ",(0,a.yg)("strong",{parentName:"p"},"So don't use them if you need to perform an atomic operation on top of a composed sequence of multiple state-changing operations. use ",(0,a.yg)("a",{parentName:"strong",href:"/1.0.18/reference/stm/"},(0,a.yg)("inlineCode",{parentName:"a"},"STM"))," instead"),". ")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Non-blocking")," \u2014 All of the ZIO primitives are a hundred percent asynchronous and nonblocking.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Resource Safety")," \u2014 ZIO concurrency model comes with strong guarantees of resource safety. If any interruption occurs in between concurrent operations, it won't leak any resource. So it allows us to write compositional operators like timeout and racing without worrying about any leaks."))),(0,a.yg)("h2",{id:"concurrent-primitives"},"Concurrent Primitives"),(0,a.yg)("p",null,"Let's take a quick look at ZIO concurrent primitives, what are they and why they exist."),(0,a.yg)("h3",{id:"basic-operations"},"Basic Operations"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Ref")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise")," are the two simple concurrency primitives which provide an orthogonal basis for building concurrency structures. They are assembly language of other concurrent data structures:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/1.0.18/reference/concurrency/ref"},"Ref"))," \u2014 ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref")," and all its variant like ",(0,a.yg)("a",{parentName:"p",href:"/1.0.18/reference/concurrency/zref"},(0,a.yg)("inlineCode",{parentName:"a"},"ZRef")),", ",(0,a.yg)("a",{parentName:"p",href:"/1.0.18/reference/concurrency/zrefm"},(0,a.yg)("inlineCode",{parentName:"a"},"ZRefM"))," and ",(0,a.yg)("a",{parentName:"p",href:"/1.0.18/reference/concurrency/refm"},(0,a.yg)("inlineCode",{parentName:"a"},"RefM"))," are building blocks for writing concurrent stateful applications. Anytime we need to share information between multiple fibers, and those fibers have to update the same information, they need to communicate through something that provides the guarantee of atomicity. So all of these ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref")," primitives are atomic and thread-safe. They provide us a reliable foundation for synchronizing concurrent programs.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/1.0.18/reference/concurrency/promise"},"Promise"))," \u2014 A ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise")," is a model of a variable that may be set a single time, and awaited on by many fibers. This primitive is very useful when we need some point of synchronization between two or multiple fibers."))),(0,a.yg)("p",null,"By using these two simple primitives, we can build lots of other asynchronous concurrent data structures like ",(0,a.yg)("inlineCode",{parentName:"p"},"Semaphore"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Queue")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Hub"),"."),(0,a.yg)("h3",{id:"others"},"Others"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/1.0.18/reference/concurrency/semaphore"},"Semaphore"))," \u2014 A ",(0,a.yg)("inlineCode",{parentName:"p"},"Semaphore")," is an asynchronous (non-blocking) semaphore that plays well with ZIO's interruption. ",(0,a.yg)("inlineCode",{parentName:"p"},"Semaphore")," is a generalization of a mutex. It has a certain number of permits, which can be held and released concurrently by different parties. Attempts to acquire more permits than available result in the acquiring fiber being suspended until the specified number of permits become available.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/1.0.18/reference/concurrency/queue"},"Queue"))," \u2014 A ",(0,a.yg)("inlineCode",{parentName:"p"},"Queue")," is an asynchronous queue that never blocks, which is safe for multiple concurrent producers and consumers.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/1.0.18/reference/concurrency/hub"},"Hub"))," - A ",(0,a.yg)("inlineCode",{parentName:"p"},"Hub")," is an asynchronous message hub that allows publishers to efficiently broadcast values to many subscribers."))))}u.isMDXComponent=!0}}]);