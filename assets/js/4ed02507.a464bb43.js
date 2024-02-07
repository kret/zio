"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[73112],{95788:(e,n,o)=>{o.d(n,{Iu:()=>p,yg:()=>u});var r=o(11504);function g(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){g(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function t(e,n){if(null==e)return{};var o,r,g=function(e,n){if(null==e)return{};var o,r,g={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],n.indexOf(o)>=0||(g[o]=e[o]);return g}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(g[o]=e[o])}return g}var a=r.createContext({}),s=function(e){var n=r.useContext(a),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},p=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var o=e.components,g=e.mdxType,i=e.originalType,a=e.parentName,p=t(e,["components","mdxType","originalType","parentName"]),m=s(o),c=g,u=m["".concat(a,".").concat(c)]||m[c]||d[c]||i;return o?r.createElement(u,l(l({ref:n},p),{},{components:o})):r.createElement(u,l({ref:n},p))}));function u(e,n){var o=arguments,g=n&&n.mdxType;if("string"==typeof e||g){var i=o.length,l=new Array(i);l[0]=c;var t={};for(var a in n)hasOwnProperty.call(n,a)&&(t[a]=n[a]);t.originalType=e,t[m]="string"==typeof e?e:g,l[1]=t;for(var s=2;s<i;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},8908:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>s});var r=o(45072),g=(o(11504),o(95788));const i={id:"slf4j1-bridge",title:"SLF4J v1 bridge"},l=void 0,t={unversionedId:"zio-logging/slf4j1-bridge",id:"zio-logging/slf4j1-bridge",title:"SLF4J v1 bridge",description:"It is possible to use zio-logging for SLF4J loggers, usually third-party non-ZIO libraries. To do so, import the zio-logging-slf4j-bridge module for SLF4J v1 (working with JDK8):",source:"@site/docs/zio-logging/slf4j1-bridge.md",sourceDirName:"zio-logging",slug:"/zio-logging/slf4j1-bridge",permalink:"/zio-logging/slf4j1-bridge",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-logging/slf4j1-bridge.md",tags:[],version:"current",frontMatter:{id:"slf4j1-bridge",title:"SLF4J v1 bridge"},sidebar:"ecosystem-sidebar",previous:{title:"SLF4J v2 bridge",permalink:"/zio-logging/slf4j2-bridge"},next:{title:"Log Metrics",permalink:"/zio-logging/metrics"}},a={},s=[{value:"Examples",id:"examples",level:2},{value:"SLF4J bridge with JSON console logger",id:"slf4j-bridge-with-json-console-logger",level:3},{value:"Feature changes",id:"feature-changes",level:2},{value:"Version 2.1.9",id:"version-219",level:3},{value:"Version 2.2.0",id:"version-220",level:3}],p={toc:s},m="wrapper";function d(e){let{components:n,...o}=e;return(0,g.yg)(m,(0,r.c)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,g.yg)("p",null,"It is possible to use ",(0,g.yg)("inlineCode",{parentName:"p"},"zio-logging")," for SLF4J loggers, usually third-party non-ZIO libraries. To do so, import the ",(0,g.yg)("inlineCode",{parentName:"p"},"zio-logging-slf4j-bridge")," module for SLF4J v1 (working with JDK8):"),(0,g.yg)("pre",null,(0,g.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-logging-slf4j-bridge" % "2.2.0"\n')),(0,g.yg)("p",null,"and use the ",(0,g.yg)("inlineCode",{parentName:"p"},"Slf4jBridge.initialize")," layer when setting up logging:"),(0,g.yg)("pre",null,(0,g.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.slf4j.Slf4jBridge\n\nprogram.provideCustom(Slf4jBridge.initialize)\n")),(0,g.yg)("br",null),(0,g.yg)("p",null,"SLF4J logger name is stored in log annotation with key ",(0,g.yg)("inlineCode",{parentName:"p"},"logger_name")," (",(0,g.yg)("inlineCode",{parentName:"p"},"zio.logging.loggerNameAnnotationKey"),"), following log format"),(0,g.yg)("pre",null,(0,g.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.slf4j.Slf4jBridge\nimport zio.logging.LoggerNameExtractor\n\nval loggerName = LoggerNameExtractor.loggerNameAnnotationOrTrace\nval loggerNameFormat = loggerName.toLogFormat()\n")),(0,g.yg)("p",null,"may be used to get logger name from log annotation or ZIO Trace."),(0,g.yg)("br",null),(0,g.yg)("p",null,"SLF4J bridge with custom logger can be setup:"),(0,g.yg)("pre",null,(0,g.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.slf4j.Slf4jBridge\nimport zio.logging.consoleJsonLogger\n\nval logger = Runtime.removeDefaultLoggers >>> consoleJsonLogger() >+> Slf4jBridge.initialize\n")),(0,g.yg)("br",null),(0,g.yg)("p",null,(0,g.yg)("strong",{parentName:"p"},"NOTE:")," You should either use ",(0,g.yg)("inlineCode",{parentName:"p"},"zio-logging-slf4j")," to send all ZIO logs to an SLF4j provider (such as logback, log4j etc) OR ",(0,g.yg)("inlineCode",{parentName:"p"},"zio-logging-slf4j-bridge")," to send all SLF4j logs to\nZIO logging. Enabling both causes circular logging and makes no sense."),(0,g.yg)("h2",{id:"examples"},"Examples"),(0,g.yg)("h3",{id:"slf4j-bridge-with-json-console-logger"},"SLF4J bridge with JSON console logger"),(0,g.yg)("pre",null,(0,g.yg)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.slf4j.bridge.Slf4jBridge\nimport zio.logging.{ ConsoleLoggerConfig, LogAnnotation, LogFilter, LogFormat, LoggerNameExtractor, consoleJsonLogger }\nimport zio.{ ExitCode, LogLevel, Runtime, Scope, ZIO, ZIOAppArgs, ZIOAppDefault, ZLayer }\n\nimport java.util.UUID\n\nobject Slf4jBridgeExampleApp extends ZIOAppDefault {\n\n  private val slf4jLogger = org.slf4j.LoggerFactory.getLogger("SLF4J-LOGGER")\n\n  private val logFormat = LogFormat.label(\n    "name",\n    LoggerNameExtractor.loggerNameAnnotationOrTrace.toLogFormat()\n  ) + LogFormat.logAnnotation(LogAnnotation.UserId) + LogFormat.logAnnotation(\n    LogAnnotation.TraceId\n  ) + LogFormat.default\n\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] =\n    Runtime.removeDefaultLoggers >>> consoleJsonLogger(\n      ConsoleLoggerConfig(logFormat, logFilterConfig)\n    ) >+> Slf4jBridge.initialize\n\n  private val uuids = List.fill(2)(UUID.randomUUID())\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    for {\n      _ <- ZIO.logInfo("Start")\n      _ <- ZIO.foreachPar(uuids) { u =>\n        ZIO.succeed(slf4jLogger.warn("Test {}!", "WARNING")) @@ LogAnnotation.UserId(\n          u.toString\n        )\n      } @@ LogAnnotation.TraceId(UUID.randomUUID())\n      _ <- ZIO.logDebug("Done")\n    } yield ExitCode.success\n\n}\n')),(0,g.yg)("p",null,"Expected Console Output:"),(0,g.yg)("pre",null,(0,g.yg)("code",{parentName:"pre"},'{"name":"zio.logging.slf4j.bridge.Slf4jBridgeExampleApp","timestamp":"2023-05-15T20:14:20.712983+02:00","level":"INFO","thread":"zio-fiber-6","message":"Start"}\n{"name":"SLF4J-LOGGER","user_id":"81e517bb-c69b-4187-a6e9-9911c427994c","trace_id":"bd317853-2b88-43d3-84dc-109e7e0eba70","timestamp":"2023-05-15T20:14:20.76863+02:00 ","level":"WARN","thread":"zio-fiber-9","message":"Test WARNING!"}\n{"name":"SLF4J-LOGGER","user_id":"844f97ef-7f09-469b-9f4b-765887beea9a","trace_id":"bd317853-2b88-43d3-84dc-109e7e0eba70","timestamp":"2023-05-15T20:14:20.768628+02:00","level":"WARN","thread":"zio-fiber-10","message":"Test WARNING!"}\n{"name":"zio.logging.slf4j.bridge.Slf4jBridgeExampleApp","timestamp":"2023-05-15T20:14:20.777529+02:00","level":"DEBUG","thread":"zio-fiber-6","message":"Done"}\n')),(0,g.yg)("h2",{id:"feature-changes"},"Feature changes"),(0,g.yg)("h3",{id:"version-219"},"Version 2.1.9"),(0,g.yg)("p",null,"SLF4J logger name is stored in log annotation with key ",(0,g.yg)("inlineCode",{parentName:"p"},"logger_name")," (",(0,g.yg)("inlineCode",{parentName:"p"},"zio.logging.loggerNameAnnotationKey"),"),\nin previous versions, logger name was stored in log annotation with key ",(0,g.yg)("inlineCode",{parentName:"p"},"slf4j_logger_name")," (",(0,g.yg)("inlineCode",{parentName:"p"},"Slf4jBridge.loggerNameAnnotationKey"),"),\nfor backward compatibility, if there is need to use legacy annotation key, it can be done with following initialisation"),(0,g.yg)("pre",null,(0,g.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.slf4j.Slf4jBridge\n\nprogram.provideCustom(Slf4jBridge.initialize(Slf4jBridge.loggerNameAnnotationKey))\n")),(0,g.yg)("p",null,"NOTE: this feature may be removed in future versions"),(0,g.yg)("p",null,"Following log format"),(0,g.yg)("pre",null,(0,g.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.slf4j.Slf4jBridge\nimport zio.logging.LoggerNameExtractor\n\nval loggerName = LoggerNameExtractor.annotationOrTrace(Slf4jBridge.loggerNameAnnotationKey)\nval loggerNameFormat = loggerName.toLogFormat()\n")),(0,g.yg)("p",null,"may be used to get logger name from log annotation or ZIO Trace."),(0,g.yg)("p",null,"This logger name extractor can be used also in log filter, which applying log filtering by defined logger name and level:"),(0,g.yg)("pre",null,(0,g.yg)("code",{parentName:"pre",className:"language-scala"},'val logFilter: LogFilter[String] = LogFilter.logLevelByGroup(\n  LogLevel.Info,\n  loggerName.toLogGroup(),\n  "zio.logging.slf4j" -> LogLevel.Debug,\n  "SLF4J-LOGGER"      -> LogLevel.Warning\n)\n')),(0,g.yg)("h3",{id:"version-220"},"Version 2.2.0"),(0,g.yg)("p",null,"Deprecated log annotation with key ",(0,g.yg)("inlineCode",{parentName:"p"},"slf4j_logger_name")," (",(0,g.yg)("inlineCode",{parentName:"p"},"Slf4jBridge.loggerNameAnnotationKey"),") removed,\nonly common log annotation with key ",(0,g.yg)("inlineCode",{parentName:"p"},"logger_name")," (",(0,g.yg)("inlineCode",{parentName:"p"},"zio.logging.loggerNameAnnotationKey"),") for logger name is supported now."))}d.isMDXComponent=!0}}]);