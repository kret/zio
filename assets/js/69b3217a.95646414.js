"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[98014],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(m,o(o({ref:t},g),{},{components:n})):r.createElement(m,o({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={id:"index",title:"Introduction to ZIO Http",sidebar_label:"ZIO Http"},o=void 0,s={unversionedId:"zio-http/index",id:"zio-http/index",title:"Introduction to ZIO Http",description:"ZIO HTTP is a scala library for building http apps. It is powered by ZIO and Netty and aims at being the defacto solution for writing, highly scalable and performant web applications using idiomatic Scala.",source:"@site/docs/zio-http/index.md",sourceDirName:"zio-http",slug:"/zio-http/",permalink:"/zio-http/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Http",sidebar_label:"ZIO Http"},sidebar:"ecosystem-sidebar",previous:{title:"Internals",permalink:"/zio-flow/internals"},next:{title:"Installation",permalink:"/zio-http/installation"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Greeting Server",id:"greeting-server",level:3},{value:"Greeting Client",id:"greeting-client",level:3}],g={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"ZIO HTTP is a scala library for building http apps. It is powered by ZIO and ",(0,a.yg)("a",{parentName:"p",href:"https://netty.io/"},"Netty")," and aims at being the defacto solution for writing, highly scalable and performant web applications using idiomatic Scala."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Development-green.svg",alt:"Development"}))," ",(0,a.yg)("img",{parentName:"p",src:"https://github.com/zio/zio-http/workflows/Continuous%20Integration/badge.svg",alt:"CI Badge"})," ",(0,a.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-http_2.13/"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-http_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,a.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-http_2.13/"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-http_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,a.yg)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-http-docs_2.13"},(0,a.yg)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-http-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-http"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-http?style=social",alt:"ZIO Http"}))),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)("p",null,"Setup via ",(0,a.yg)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-http" % "3.0.0-RC7"\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"NOTES ON VERSIONING:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Older library versions ",(0,a.yg)("inlineCode",{parentName:"li"},"1.x")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"2.x")," with organization ",(0,a.yg)("inlineCode",{parentName:"li"},"io.d11")," of ZIO Http are derived from Dream11, the organization that donated ZIO Http to the ZIO organization in 2022."),(0,a.yg)("li",{parentName:"ul"},"Newer library versions, starting in 2023 and resulting from the ",(0,a.yg)("a",{parentName:"li",href:"https://dev.zio"},"ZIO organization")," started with ",(0,a.yg)("inlineCode",{parentName:"li"},"0.0.x"),", reaching ",(0,a.yg)("inlineCode",{parentName:"li"},"1.0.0")," release candidates in April of 2023")),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,"ZIO HTTP provides a simple and expressive API for building HTTP applications. It supports both server and client-side APIs. "),(0,a.yg)("p",null,"ZIO HTTP is designed in terms of ",(0,a.yg)("strong",{parentName:"p"},"HTTP as function"),", where both server and client are a function from ",(0,a.yg)("inlineCode",{parentName:"p"},"Request")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"Response"),"."),(0,a.yg)("h3",{id:"greeting-server"},"Greeting Server"),(0,a.yg)("p",null,"The following example demonstrates how to build a simple greeting server. It contains 2 routes: one on the root\npath, it responds with a fixed string, and one route on the path ",(0,a.yg)("inlineCode",{parentName:"p"},"/greet")," that responds with a greeting message\nbased on the query parameter ",(0,a.yg)("inlineCode",{parentName:"p"},"name"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nobject GreetingServer extends ZIOAppDefault {\n  val routes =\n    Routes(\n      Method.GET / Root -> handler(Response.text("Greetings at your service")),\n      Method.GET / "greet" -> handler { (req: Request) =>\n        val name = req.queryParamToOrElse("name", "World")\n        Response.text(s"Hello $name!")\n      }\n    )\n\n  def run = Server.serve(routes).provide(Server.default)\n}\n')),(0,a.yg)("h3",{id:"greeting-client"},"Greeting Client"),(0,a.yg)("p",null,"The following example demonstrates how to call the greeting server using the ZIO HTTP client:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nobject GreetingClient extends ZIOAppDefault {\n\n  val app =\n    for {\n      client   <- ZIO.serviceWith[Client](_.host("localhost").port(8080))\n      request  =  Request.get("greet").addQueryParam("name", "John")\n      response <- client.request(request)\n      _        <- response.body.asString.debug("Response")\n    } yield ()\n\n  def run = app.provide(Client.default, Scope.default)\n}\n')))}c.isMDXComponent=!0}}]);