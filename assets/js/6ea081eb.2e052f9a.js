"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[32017],{3905:(e,o,n)=>{n.d(o,{Zo:()=>p,kt:()=>u});var t=n(67294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function l(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?l(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function g(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=t.createContext({}),s=function(e){var o=t.useContext(a),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},p=function(e){var o=s(e.components);return t.createElement(a.Provider,{value:o},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},c=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,u=d["".concat(a,".").concat(c)]||d[c]||m[c]||l;return n?t.createElement(u,i(i({ref:o},p),{},{components:n})):t.createElement(u,i({ref:o},p))}));function u(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var g={};for(var a in o)hasOwnProperty.call(o,a)&&(g[a]=o[a]);g.originalType=e,g[d]="string"==typeof e?e:r,i[1]=g;for(var s=2;s<l;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61119:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>g,toc:()=>s});var t=n(87462),r=(n(67294),n(3905));const l={id:"slf4j2-bridge",title:"SLF4J v2 bridge"},i=void 0,g={unversionedId:"zio-logging/slf4j2-bridge",id:"zio-logging/slf4j2-bridge",title:"SLF4J v2 bridge",description:"It is possible to use zio-logging for SLF4J loggers, usually third-party non-ZIO libraries. To do so, import  the zio-logging-slf4j2-bridge module for SLF4J v2 (using JDK9+ module system (JPMS))",source:"@site/docs/zio-logging/slf4j2-bridge.md",sourceDirName:"zio-logging",slug:"/zio-logging/slf4j2-bridge",permalink:"/zio-logging/slf4j2-bridge",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-logging/slf4j2-bridge.md",tags:[],version:"current",frontMatter:{id:"slf4j2-bridge",title:"SLF4J v2 bridge"},sidebar:"ecosystem-sidebar",previous:{title:"SLF4J v1",permalink:"/zio-logging/slf4j1"},next:{title:"SLF4J v1 bridge",permalink:"/zio-logging/slf4j1-bridge"}},a={},s=[{value:"Examples",id:"examples",level:2},{value:"SLF4J bridge with JSON console logger",id:"slf4j-bridge-with-json-console-logger",level:3}],p={toc:s},d="wrapper";function m(e){let{components:o,...n}=e;return(0,r.kt)(d,(0,t.Z)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is possible to use ",(0,r.kt)("inlineCode",{parentName:"p"},"zio-logging")," for SLF4J loggers, usually third-party non-ZIO libraries. To do so, import  the ",(0,r.kt)("inlineCode",{parentName:"p"},"zio-logging-slf4j2-bridge")," module for ",(0,r.kt)("a",{parentName:"p",href:"https://www.slf4j.org/faq.html#changesInVersion200"},"SLF4J v2")," (using JDK9+ module system (",(0,r.kt)("a",{parentName:"p",href:"http://openjdk.java.net/projects/jigsaw/spec/"},"JPMS"),"))"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-logging-slf4j2-bridge" % "2.2.0"\n')),(0,r.kt)("p",null,"and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Slf4jBridge.initialize")," layer when setting up logging:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.slf4j.Slf4jBridge\n\nprogram.provideCustom(Slf4jBridge.initialize)\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"SLF4J logger name is stored in log annotation with key ",(0,r.kt)("inlineCode",{parentName:"p"},"logger_name")," (",(0,r.kt)("inlineCode",{parentName:"p"},"zio.logging.loggerNameAnnotationKey"),"), following log format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.slf4j.Slf4jBridge\nimport zio.logging.LoggerNameExtractor\n\nval loggerName = LoggerNameExtractor.loggerNameAnnotationOrTrace\nval loggerNameFormat = loggerName.toLogFormat()\n")),(0,r.kt)("p",null,"may be used to get logger name from log annotation or ZIO Trace. "),(0,r.kt)("p",null,"This logger name extractor is used by default in log filter, which applying log filtering by defined logger name and level:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val logFilterConfig = LogFilter.LogLevelByNameConfig(\n  LogLevel.Info,\n  "zio.logging.slf4j" -> LogLevel.Debug,\n  "SLF4J-LOGGER"      -> LogLevel.Warning\n)\n\nval logFilter: LogFilter[String] = logFilterConfig.toFilter\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"SLF4J bridge with custom logger can be setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.slf4j.Slf4jBridge\nimport zio.logging.consoleJsonLogger\n\nval logger = Runtime.removeDefaultLoggers >>> consoleJsonLogger() >+> Slf4jBridge.initialize\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," You should either use ",(0,r.kt)("inlineCode",{parentName:"p"},"zio-logging-slf4j")," to send all ZIO logs to an SLF4j provider (such as logback, log4j etc) OR ",(0,r.kt)("inlineCode",{parentName:"p"},"zio-logging-slf4j-bridge")," to send all SLF4j logs to\nZIO logging. Enabling both causes circular logging and makes no sense."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"You can find the source code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-logging/tree/master/examples"},"here")),(0,r.kt)("h3",{id:"slf4j-bridge-with-json-console-logger"},"SLF4J bridge with JSON console logger"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.slf4j.bridge.Slf4jBridge\nimport zio.logging.{ ConsoleLoggerConfig, LogAnnotation, LogFilter, LogFormat, LoggerNameExtractor, consoleJsonLogger }\nimport zio.{ ExitCode, LogLevel, Runtime, Scope, ZIO, ZIOAppArgs, ZIOAppDefault, ZLayer }\n\nimport java.util.UUID\n\nobject Slf4jBridgeExampleApp extends ZIOAppDefault {\n\n  private val slf4jLogger = org.slf4j.LoggerFactory.getLogger("SLF4J-LOGGER")\n\n  private val logFilterConfig = LogFilter.LogLevelByNameConfig(\n    LogLevel.Info,\n    "zio.logging.slf4j" -> LogLevel.Debug,\n    "SLF4J-LOGGER"      -> LogLevel.Warning\n  )\n\n  private val logFormat = LogFormat.label(\n    "name",\n    LoggerNameExtractor.loggerNameAnnotationOrTrace.toLogFormat()\n  ) + LogFormat.logAnnotation(LogAnnotation.UserId) + LogFormat.logAnnotation(\n    LogAnnotation.TraceId\n  ) + LogFormat.default\n\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] =\n    Runtime.removeDefaultLoggers >>> consoleJsonLogger(\n      ConsoleLoggerConfig(logFormat, logFilterConfig)\n    ) >+> Slf4jBridge.initialize\n\n  private val uuids = List.fill(2)(UUID.randomUUID())\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    for {\n      _ <- ZIO.logInfo("Start")\n      _ <- ZIO.foreachPar(uuids) { u =>\n        ZIO.succeed(slf4jLogger.warn("Test {}!", "WARNING")) @@ LogAnnotation.UserId(\n          u.toString\n        )\n      } @@ LogAnnotation.TraceId(UUID.randomUUID())\n      _ <- ZIO.logDebug("Done")\n    } yield ExitCode.success\n\n}\n')),(0,r.kt)("p",null,"Expected Console Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"name":"zio.logging.slf4j.bridge.Slf4jBridgeExampleApp","timestamp":"2023-05-15T20:14:20.712983+02:00","level":"INFO","thread":"zio-fiber-6","message":"Start"}\n{"name":"SLF4J-LOGGER","user_id":"81e517bb-c69b-4187-a6e9-9911c427994c","trace_id":"bd317853-2b88-43d3-84dc-109e7e0eba70","timestamp":"2023-05-15T20:14:20.76863+02:00 ","level":"WARN","thread":"zio-fiber-9","message":"Test WARNING!"}\n{"name":"SLF4J-LOGGER","user_id":"844f97ef-7f09-469b-9f4b-765887beea9a","trace_id":"bd317853-2b88-43d3-84dc-109e7e0eba70","timestamp":"2023-05-15T20:14:20.768628+02:00","level":"WARN","thread":"zio-fiber-10","message":"Test WARNING!"}\n{"name":"zio.logging.slf4j.bridge.Slf4jBridgeExampleApp","timestamp":"2023-05-15T20:14:20.777529+02:00","level":"DEBUG","thread":"zio-fiber-6","message":"Done"}\n')))}m.isMDXComponent=!0}}]);