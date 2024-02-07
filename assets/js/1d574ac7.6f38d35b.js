"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[80512],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>g});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(n),u=i,g=y["".concat(s,".").concat(u)]||y[u]||m[u]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(45072),i=(n(11504),n(95788));const a={id:"index",title:"Introduction to ZIO Telemetry",sidebar_label:"ZIO Telemetry"},o=void 0,l={unversionedId:"zio-telemetry/index",id:"zio-telemetry/index",title:"Introduction to ZIO Telemetry",description:"ZIO telemetry is purely-functional and type-safe. It provides clients for",source:"@site/docs/zio-telemetry/index.md",sourceDirName:"zio-telemetry",slug:"/zio-telemetry/",permalink:"/zio-telemetry/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-telemetry/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Telemetry",sidebar_label:"ZIO Telemetry"},sidebar:"ecosystem-sidebar",previous:{title:"Combining Different Encoders",permalink:"/zio-schema/examples/combining-different-encoders"},next:{title:"OpenTracing",permalink:"/zio-telemetry/opentracing"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Examples",id:"examples",level:2},{value:"Articles",id:"articles",level:2}],c={toc:p},y="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(y,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-telemetry"},"ZIO telemetry")," is purely-functional and type-safe. It provides clients for\n",(0,i.yg)("a",{parentName:"p",href:"https://opentracing.io/"},"OpenTracing"),", ",(0,i.yg)("a",{parentName:"p",href:"https://opencensus.io/"},"OpenCensus")," and ",(0,i.yg)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry"),"."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Production%20Ready-brightgreen.svg",alt:"Production Ready"}))," ",(0,i.yg)("img",{parentName:"p",src:"https://github.com/zio/zio-telemetry/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,i.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-opentracing_2.13/"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-opentracing_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,i.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-opentracing_2.13/"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-opentracing_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,i.yg)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-telemetry-docs_2.13"},(0,i.yg)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-telemetry-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-telemetry"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-telemetry?style=social",alt:"ZIO Telemetry"}))),(0,i.yg)("p",null,"ZIO Telemetry consists of the following projects:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/zio-telemetry/opentracing"},"OpenTracing")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/zio-telemetry/opencensus"},"OpenCensus")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/zio-telemetry/opentelemetry"},"OpenTelemetry"))),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"In monolithic architecture, everything is in one place, and we know when a request starts and then how it goes through\nthe components and when it finishes. We can obviously see what is happening with our request and where is it going.\nBut, in distributed systems like microservice architecture, we cannot find out the story of a request through various\nservices easily. This is where distributed tracing comes into play."),(0,i.yg)("p",null,"ZIO Telemetry is a purely functional client which helps up propagate context between services in a distributed environment."),(0,i.yg)("h2",{id:"installation"},"Installation"),(0,i.yg)("p",null,"In order to use this library, we need to add the following line in our ",(0,i.yg)("inlineCode",{parentName:"p"},"build.sbt")," file if we want to use ",(0,i.yg)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," client:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-opentelemetry" % "<version>"\n')),(0,i.yg)("p",null,"For using ",(0,i.yg)("a",{parentName:"p",href:"https://opentracing.io/"},"OpenTracing")," client we should add the following line in our ",(0,i.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-opentracing" % "<version>"\n')),(0,i.yg)("p",null,"And for using ",(0,i.yg)("a",{parentName:"p",href:"https://opencensus.io/"},"OpenCensus")," client we should add the following line in our ",(0,i.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-opencensus" % "<version>"\n')),(0,i.yg)("h2",{id:"examples"},"Examples"),(0,i.yg)("p",null,"You can find examples with full source code and instructions of how to run by following the links:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/zio-telemetry/opentelemetry-example"},"OpenTelemetry Example")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/zio-telemetry/opentelemetry-instrumentation-example"},"OpenTelemetry Instrumentation Example")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/zio-telemetry/opentracing-example"},"OpenTracing Example"))),(0,i.yg)("h2",{id:"articles"},"Articles"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://kadek-marek.medium.com/trace-your-microservices-with-zio-telemetry-5f88d69cb26b"},"Trace your microservices with ZIO")," by Marek Kadek (September 2021)")))}m.isMDXComponent=!0}}]);