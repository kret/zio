"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[80560],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>f});var a=r(11504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),c=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=t,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return r?a.createElement(f,i(i({ref:n},u),{},{components:r})):a.createElement(f,i({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:t,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},34020:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(45072),t=(r(11504),r(95788));const o={id:"index",title:"Introduction to Resource Management in ZIO"},i=void 0,s={unversionedId:"reference/resource/index",id:"reference/resource/index",title:"Introduction to Resource Management in ZIO",description:"When we are writing a long-lived application, resource management is very important. Proper resource management is vital to any large-scale application. We need to make sure that our application is resource-safe, and it doesn't leak any resource.",source:"@site/docs/reference/resource/index.md",sourceDirName:"reference/resource",slug:"/reference/resource/",permalink:"/reference/resource/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/resource/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to Resource Management in ZIO"},sidebar:"reference-sidebar",previous:{title:"THub",permalink:"/reference/stm/thub"},next:{title:"Scope",permalink:"/reference/resource/scope"}},l={},c=[{value:"Try / Finally",id:"try--finally",level:2},{value:"ZIO Solution",id:"zio-solution",level:2},{value:"Acquire Release",id:"acquire-release",level:3},{value:"Scope",id:"scope",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...r}=e;return(0,t.yg)(p,(0,a.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"When we are writing a long-lived application, resource management is very important. Proper resource management is vital to any large-scale application. We need to make sure that our application is resource-safe, and it doesn't leak any resource."),(0,t.yg)("p",null,"Leaking socket connections, database connections or file descriptors is not acceptable in a web application. ZIO provides some good construct to make sure about this concern."),(0,t.yg)("p",null,"To write a resource-safe application, we need to make sure whenever we are opening a resource, we have a mechanism to close that resource whether we use that resource completely or not, for example, an exception occurred during resource usage."),(0,t.yg)("h2",{id:"try--finally"},"Try / Finally"),(0,t.yg)("p",null,"Before we dive into the ZIO solution, it's better to review the ",(0,t.yg)("inlineCode",{parentName:"p"},"try")," / ",(0,t.yg)("inlineCode",{parentName:"p"},"finally")," which is the standard approach in the Scala language to manage resources."),(0,t.yg)("p",null,"Scala has a ",(0,t.yg)("inlineCode",{parentName:"p"},"try")," / ",(0,t.yg)("inlineCode",{parentName:"p"},"finally")," construct which helps us to make sure we don't leak resources because no matter what happens in the try, the ",(0,t.yg)("inlineCode",{parentName:"p"},"finally")," block will be executed. So we can open files in the try block, and then we can close them in the ",(0,t.yg)("inlineCode",{parentName:"p"},"finally")," block, and that gives us the guarantee that we will not leak resources."),(0,t.yg)("p",null,"Assume we want to read a file and return the number of its lines:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'def lines(file: String): Task[Long] = ZIO.attempt {\n  def countLines(br: BufferedReader): Long = br.lines().count()\n  val bufferedReader = new BufferedReader(\n    new InputStreamReader(new FileInputStream("file.txt")),\n    2048\n  )\n  val count = countLines(bufferedReader)\n  bufferedReader.close()\n  count\n}\n')),(0,t.yg)("p",null,"What happens if after opening the file and before closing the file, an exception occurs? So, the ",(0,t.yg)("inlineCode",{parentName:"p"},"bufferedReader.close()")," line, doesn't have a chance to close the resource. This creates a resource leakage. The Scala language has ",(0,t.yg)("inlineCode",{parentName:"p"},"try...finally")," construct, which helps up to prevent these situations."),(0,t.yg)("p",null,"Let's rewrite the above example with ",(0,t.yg)("inlineCode",{parentName:"p"},"try..finally"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'def lines(file: String): Task[Long] = ZIO.attempt {\n  def countLines(br: BufferedReader): Long = br.lines().count()\n  val bufferedReader = new BufferedReader(\n    new InputStreamReader(new FileInputStream("file.txt")),\n    2048\n  )\n  try countLines(bufferedReader)\n  finally bufferedReader.close()\n}\n')),(0,t.yg)("p",null,"Now, we are sure that if our program is interrupted during the process of a file, the ",(0,t.yg)("inlineCode",{parentName:"p"},"finally")," block will be executed."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"try")," / ",(0,t.yg)("inlineCode",{parentName:"p"},"finally")," solve simple problems, but it has some drawbacks:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"It's not composable; We can't compose multiple resources together.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"When we have multiple resources, we end up with messy and ugly code, hard to reason about, and refactoring.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"We don't have any control over the order of resource clean-up")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"It only helps us to handle resources sequentially. It can't compose multiple resources, concurrently.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"It doesn't support asynchronous workflows.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"It's a manual way of resource management, not automatic. To have a resource-safe application we need to manually check that all resources are managed correctly. This way of resource management is error-prone in case of forgetting to manage resources, correctly."))),(0,t.yg)("h2",{id:"zio-solution"},"ZIO Solution"),(0,t.yg)("p",null,"ZIO's resource management features work across synchronous, asynchronous, concurrent, and other effect types, and provide strong guarantees even in the presence of failure, interruption, or defects in the application."),(0,t.yg)("p",null,"ZIO has two major mechanisms to manage resources."),(0,t.yg)("h3",{id:"acquire-release"},"Acquire Release"),(0,t.yg)("p",null,"ZIO generalized the pattern of ",(0,t.yg)("inlineCode",{parentName:"p"},"try")," / ",(0,t.yg)("inlineCode",{parentName:"p"},"finally")," and encoded it in ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO.acquireRelease")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO#acquireRelease")," operations. "),(0,t.yg)("p",null,"Every acquire release requires three actions:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"Acquiring Resource"),"\u2014 An effect describing the acquisition of resource. For example, opening a file."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"Using Resource"),"\u2014 An effect describing the actual process to produce a result. For example, counting the number of lines in a file."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"Releasing Resource"),"\u2014 An effect describing the final step of releasing or cleaning up the resource. For example, closing a file.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"def use(resource: Resource): Task[Any] = ZIO.attempt(???)\ndef release(resource: Resource): UIO[Unit] = ZIO.succeed(???)\ndef acquire: Task[Resource]                = ZIO.attempt(???)\n\nval result: Task[Any] = ZIO.acquireReleaseWith(acquire)(release)(use)\n")),(0,t.yg)("p",null,"The acquire release guarantees us that the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquiring")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"releasing")," of a resource will not be interrupted. These two guarantees ensure us that the resource will always be released."),(0,t.yg)("p",null,"Let's try a real example. We are going to write a function which count line number of given file. As we are working with file resource, we should separate our logic into three part. At the first part, we create a ",(0,t.yg)("inlineCode",{parentName:"p"},"BufferedReader"),". At the second, we count the file lines with given ",(0,t.yg)("inlineCode",{parentName:"p"},"BufferedReader")," resource, and at the end we close that resource:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"def lines(file: String): Task[Long] = {\n  def countLines(reader: BufferedReader): Task[Long]    = ZIO.attempt(reader.lines().count())\n  def releaseReader(reader: BufferedReader): UIO[Unit]  = ZIO.succeed(reader.close())\n  def acquireReader(file: String): Task[BufferedReader] = ZIO.attempt(new BufferedReader(new FileReader(file), 2048))\n\n  ZIO.acquireReleaseWith(acquireReader(file))(releaseReader)(countLines)\n}\n")),(0,t.yg)("p",null,"Let's write another function which copy a file from source to destination file. We can do that by nesting two acquire releases one for the ",(0,t.yg)("inlineCode",{parentName:"p"},"FileInputStream")," and the other for ",(0,t.yg)("inlineCode",{parentName:"p"},"FileOutputStream"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"def is(file: String): Task[FileInputStream]  = ZIO.attempt(???)\ndef os(file: String): Task[FileOutputStream] = ZIO.attempt(???)\n\ndef close(resource: Closeable): UIO[Unit] = ZIO.succeed(???)\ndef copy(from: FileInputStream, to: FileOutputStream): Task[Unit] = ???\n\ndef transfer(src: String, dst: String): ZIO[Any, Throwable, Unit] = {\n  ZIO.acquireReleaseWith(is(src))(close) { in =>\n    ZIO.acquireReleaseWith(os(dst))(close) { out =>\n      copy(in, out)\n    }\n  }\n}\n")),(0,t.yg)("p",null,"As there isn't any dependency between our two resources (",(0,t.yg)("inlineCode",{parentName:"p"},"is")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"os"),"), it doesn't make sense to use nested acquire releases, so let's ",(0,t.yg)("inlineCode",{parentName:"p"},"zip")," these two acquisition into one effect, and then use one acquire release on them:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"def transfer(src: String, dst: String): ZIO[Any, Throwable, Unit] =\n  ZIO.acquireReleaseWith {\n    is(src).zipPar(os(dst))\n  } { case (in, out) =>\n    ZIO.succeed(in.close()).zipPar(ZIO.succeed(out.close()))\n  } { case (in, out) =>\n    copy(in, out)\n  }\n")),(0,t.yg)("p",null,"While using acquire release is a nice and simple way of managing resources, but there are some cases where an acquire release is not the best choice:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Acquire release is not composable\u2014 When we have multiple resources, composing them with an acquire release is not straightforward.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Messy nested acquire releases \u2014 In the case of multiple resources, nested acquire releases remind us of callback hell awkwardness. The acquire release is designed with nested resource acquisition. In the case of multiple resources, we encounter inefficient nested acquire release calls, and it causes refactoring a complicated process."))),(0,t.yg)("p",null,"Using acquire releases is simple and straightforward, but in the case of multiple resources, it isn't a good player. This is where we need another abstraction to cover these issues."),(0,t.yg)("h3",{id:"scope"},"Scope"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," is a composable data type for resource management, which wraps the acquisition and release action of a resource. We can think of ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," as a handle with built-in acquisition and release logic."),(0,t.yg)("p",null,"To create a scoped resource, we need to provide ",(0,t.yg)("inlineCode",{parentName:"p"},"acquire")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"release")," action of that resource to the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquireRelease")," constructor:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val scoped = ZIO.acquireRelease(acquire)(release)\n")),(0,t.yg)("p",null,"We can use scoped resources by calling ",(0,t.yg)("inlineCode",{parentName:"p"},"scoped")," on that. A scoped resource is meant to be used only inside of the ",(0,t.yg)("inlineCode",{parentName:"p"},"scoped")," block. So that resource is not available outside of the ",(0,t.yg)("inlineCode",{parentName:"p"},"scoped")," block. "),(0,t.yg)("p",null,"Let's try to rewrite a ",(0,t.yg)("inlineCode",{parentName:"p"},"transfer")," example with ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"def transfer(from: String, to: String): ZIO[Any, Throwable, Unit] = {\n  val resource = for {\n    from <- ZIO.acquireRelease(is(from))(close)\n    to   <- ZIO.acquireRelease(os(to))(close)\n  } yield (from, to)\n\n  ZIO.scoped {\n    resource.flatMap { case (in, out) =>\n      copy(in, out)\n    }\n  }\n}\n")))}d.isMDXComponent=!0}}]);