"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[33364],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>u});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=l(t),d=a,u=g["".concat(c,".").concat(d)]||g[d]||m[d]||i;return t?r.createElement(u,o(o({ref:n},s),{},{components:t})):r.createElement(u,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[g]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=t(45072),a=(t(11504),t(95788));const i={id:"opentracing",title:"OpenTracing"},o=void 0,p={unversionedId:"zio-telemetry/opentracing",id:"zio-telemetry/opentracing",title:"OpenTracing",description:"OpenTracing is a standard and API for distributed tracing, i.e. collecting timings,",source:"@site/docs/zio-telemetry/opentracing.md",sourceDirName:"zio-telemetry",slug:"/zio-telemetry/opentracing",permalink:"/zio-telemetry/opentracing",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-telemetry/opentracing.md",tags:[],version:"current",frontMatter:{id:"opentracing",title:"OpenTracing"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Telemetry",permalink:"/zio-telemetry/"},next:{title:"OpenTracing Example",permalink:"/zio-telemetry/opentracing-example"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],s={toc:l},g="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"OpenTracing is a standard and API for distributed tracing, i.e. collecting timings,\nand logs across process boundaries. Well known implementations are ",(0,a.yg)("a",{parentName:"p",href:"https://www.jaegertracing.io"},"Jaeger")," and ",(0,a.yg)("a",{parentName:"p",href:"https://www.zipkin.io"},"Zipkin"),"."),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)("p",null,"First, add the following dependency to your build.sbt:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'"dev.zio" %% "zio-opentracing" % "<version>"\n')),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"To use ZIO Telemetry, you will need an ",(0,a.yg)("inlineCode",{parentName:"p"},"OpenTracing")," service in your\nenvironment. You also need to provide a ",(0,a.yg)("inlineCode",{parentName:"p"},"tracer")," (for this example we use ",(0,a.yg)("inlineCode",{parentName:"p"},"JaegerTracer.live")," from ",(0,a.yg)("inlineCode",{parentName:"p"},"opentracing-example")," module) implementation:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.telemetry.opentracing.OpenTracing\nimport zio.telemetry.opentracing.example.JaegerTracer\nimport zio._\nimport io.opentracing.tag.Tags\n\nval app =\n  ZIO.serviceWithZIO[OpenTracing] { tracing =>\n    import tracing.aspects._\n\n    (for {\n      _       <- tracing.tag(Tags.SPAN_KIND.getKey, Tags.SPAN_KIND_CLIENT)\n      _       <- tracing.tag(Tags.HTTP_METHOD.getKey, "GET")\n      _       <- tracing.setBaggageItem("proxy-baggage-item-key", "proxy-baggage-item-value")\n      message <- Console.readline\n      _       <- tracing.log("Message has been read")\n    } yield message) @@ root("/app")\n  }.provide(OpenTracing.live, JaegerTracer.live("my-app"))\n')),(0,a.yg)("p",null,"After importing ",(0,a.yg)("inlineCode",{parentName:"p"},"import tracing.aspects._"),", additional ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIOAspect")," combinators\non ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO"),"s are available to support starting child spans, tagging, logging and\nmanaging baggage."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'ZIO.serviceWithZIO[OpenTracing] { tracing =>\n  import tracing.aspects._\n  \n  // start a new root span and set some baggage item\n  val zio1 = tracing.setBaggage("foo", "bar") @@ root("root span")\n\n  // start a child of the current span, set a tag and log a message\n  val zio2 = \n    (for {\n      _ <- tracing.tag("http.status_code", 200)\n      _ <- tracing.log("doing some serious work here!")\n    } yield ()) @@ span("child span")\n}\n')),(0,a.yg)("p",null,"To propagate contexts across process boundaries, extraction and injection can be\nused. The current span context is injected into a carrier, which is passed\nthrough some side channel to the next process. There it is injected back and a\nchild span of it is started. For the example we use the standardized ",(0,a.yg)("inlineCode",{parentName:"p"},"TextMap"),"\ncarrier. For details about extraction and injection, please refer to\n",(0,a.yg)("a",{parentName:"p",href:"https://opentracing.io/docs/overview/inject-extract/"},"OpenTracing Documentation"),". "),(0,a.yg)("p",null,"Due to the use of the (mutable) OpenTracing carrier APIs, injection and extraction\nare not referentially transparent."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'ZIO.serviceWithZIO[OpenTracing] { tracing =>\n  import tracing.aspects._\n  \n  val buffer = new TextMapAdapter(mutable.Map.empty.asJava)\n  for {\n    _ <- tracing.inject(Format.Builtin.TEXT_MAP, buffer)\n    _ <- ZIO.unit @@ spanFrom(Format.Builtin.TEXT_MAP, buffer, "child of remote span")\n  } yield buffer\n}\n')))}m.isMDXComponent=!0}}]);