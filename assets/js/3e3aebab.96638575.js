"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9795],{15680:(e,i,t)=>{t.d(i,{xA:()=>u,yg:()=>m});var n=t(96540);function l(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){l(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function r(e,i){if(null==e)return{};var t,n,l=function(e,i){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||(l[t]=e[t]);return l}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),p=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},u=function(e){var i=p(e.components);return n.createElement(s.Provider,{value:i},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},d=n.forwardRef((function(e,i){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(t),d=l,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||a;return t?n.createElement(m,o(o({ref:i},u),{},{components:t})):n.createElement(m,o({ref:i},u))}));function m(e,i){var t=arguments,l=i&&i.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var r={};for(var s in i)hasOwnProperty.call(i,s)&&(r[s]=i[s]);r.originalType=e,r[c]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23963:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var n=t(58168),l=(t(96540),t(15680));const a={id:"sbt-plugin",title:"ZIO CLI SBT Plugin",sidebar_label:"SBT Plugin"},o=void 0,r={unversionedId:"zio-cli/sbt-plugin",id:"zio-cli/sbt-plugin",title:"ZIO CLI SBT Plugin",description:"Overview",source:"@site/docs/zio-cli/sbt-plugin.md",sourceDirName:"zio-cli",slug:"/zio-cli/sbt-plugin",permalink:"/zio-cli/sbt-plugin",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-cli/sbt-plugin.md",tags:[],version:"current",frontMatter:{id:"sbt-plugin",title:"ZIO CLI SBT Plugin",sidebar_label:"SBT Plugin"},sidebar:"ecosystem-sidebar",previous:{title:"Bash and Zsh Completion",permalink:"/zio-cli/bash-and-zsh-completion"},next:{title:"ZIO Cache",permalink:"/zio-cache/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Current State",id:"current-state",level:2},{value:"Native Images",id:"native-images",level:3},{value:"Outstanding Action Items",id:"outstanding-action-items",level:2},{value:"Plugin Settings",id:"plugin-settings",level:2},{value:"zioCliMainClass: Option[String]",id:"zioclimainclass-optionstring",level:3},{value:"zioCliNativeImageOptions: Seq[String]",id:"zioclinativeimageoptions-seqstring",level:3},{value:"zioCliNativeImageReady: () =&gt; Unit",id:"zioclinativeimageready---unit",level:3},{value:"Plugin Tasks",id:"plugin-tasks",level:2},{value:"zioCliBuildNative: Unit",id:"zioclibuildnative-unit",level:3},{value:"zioCliGenerateBashCompletion: Unit",id:"ziocligeneratebashcompletion-unit",level:3},{value:"zioCliGenerateZshCompletion: Unit",id:"ziocligeneratezshcompletion-unit",level:3},{value:"zioCliInstallCli: Unit",id:"ziocliinstallcli-unit",level:3},{value:"End User Project Setup",id:"end-user-project-setup",level:2},{value:"Locally Publishing the Plugin",id:"locally-publishing-the-plugin",level:3},{value:"End User Project",id:"end-user-project",level:3}],u={toc:p},c="wrapper";function g(e){let{components:i,...t}=e;return(0,l.yg)(c,(0,n.A)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"overview"},"Overview"),(0,l.yg)("p",null,"ZIO CLI offers an SBT plugin to provide some tasks to make generation and deployment of\napplications simple."),(0,l.yg)("h2",{id:"current-state"},"Current State"),(0,l.yg)("p",null,"The current functionality of the plugin offers:"),(0,l.yg)("h3",{id:"native-images"},"Native Images"),(0,l.yg)("p",null,"This SBT plugin depends on and utilizes the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/scalameta/sbt-native-image"},"sbt-native-image")," plugin. Tasks and settings\nrelated to building a native image map 1:1 to the upstream plugin."),(0,l.yg)("h2",{id:"outstanding-action-items"},"Outstanding Action Items"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Investigate if any cross versions are needed for different versions of SBT"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add remaining corresponding upstream configuration options to pass into the ",(0,l.yg)("inlineCode",{parentName:"li"},"sbt-native-image")," plugin."),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement ",(0,l.yg)("inlineCode",{parentName:"li"},"zioCliGenerateBashCompletion"),", when ready."),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement ",(0,l.yg)("inlineCode",{parentName:"li"},"zioCliGenerateZshCompletion"),", when ready."),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement ",(0,l.yg)("inlineCode",{parentName:"li"},"zioCliInstallCli"),", when ready.")),(0,l.yg)("h2",{id:"plugin-settings"},"Plugin Settings"),(0,l.yg)("h3",{id:"zioclimainclass-optionstring"},"zioCliMainClass: Option","[","String","]"),(0,l.yg)("p",null,"The mainClass of the CLI App in the ",(0,l.yg)("inlineCode",{parentName:"p"},"Compile")," scope. Defaults to ",(0,l.yg)("inlineCode",{parentName:"p"},"None"),", and will need to be set."),(0,l.yg)("h3",{id:"zioclinativeimageoptions-seqstring"},"zioCliNativeImageOptions: Seq","[","String","]"),(0,l.yg)("p",null,"A collection of arguments to pass the native-image builder to customize native image generation. Defaults to"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'List(\n      "--allow-incomplete-classpath",\n      "--report-unsupported-elements-at-runtime",\n      "--initialize-at-build-time",\n      "--no-fallback"\n    )\n')),(0,l.yg)("h3",{id:"zioclinativeimageready---unit"},"zioCliNativeImageReady: ","(",")"," => Unit"),(0,l.yg)("p",null,"A side-effecting callback that is called the native image is ready. Defaults to"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'() => {\n        println("ZIO CLI App Native Image Ready!")\n      } \n')),(0,l.yg)("h2",{id:"plugin-tasks"},"Plugin Tasks"),(0,l.yg)("h3",{id:"zioclibuildnative-unit"},"zioCliBuildNative: Unit"),(0,l.yg)("p",null,"Sets mainClass in Compile, and attempts to run ",(0,l.yg)("inlineCode",{parentName:"p"},"nativeImage")," with any applied ",(0,l.yg)("inlineCode",{parentName:"p"},"nativeImageOptions"),".\nFires ",(0,l.yg)("inlineCode",{parentName:"p"},"zioCliNativeImageReady")," on success."),(0,l.yg)("h3",{id:"ziocligeneratebashcompletion-unit"},"zioCliGenerateBashCompletion: Unit"),(0,l.yg)("p",null,"Not currently implemented; prints ",(0,l.yg)("inlineCode",{parentName:"p"},'"TODO: Not Implemented!"')),(0,l.yg)("h3",{id:"ziocligeneratezshcompletion-unit"},"zioCliGenerateZshCompletion: Unit"),(0,l.yg)("p",null,"Not currently implemented; prints ",(0,l.yg)("inlineCode",{parentName:"p"},'"TODO: Not Implemented!"')),(0,l.yg)("h3",{id:"ziocliinstallcli-unit"},"zioCliInstallCli: Unit"),(0,l.yg)("p",null,"Not currently implemented; prints ",(0,l.yg)("inlineCode",{parentName:"p"},'"TODO: Not Implemented!"')),(0,l.yg)("h2",{id:"end-user-project-setup"},"End User Project Setup"),(0,l.yg)("p",null,"There are several steps that are needed to use this in an end user project:"),(0,l.yg)("h3",{id:"locally-publishing-the-plugin"},"Locally Publishing the Plugin"),(0,l.yg)("p",null,"To compile and locally publish a copy of the SBT plugin, simply call  ",(0,l.yg)("inlineCode",{parentName:"p"},"publishLocal")," on the ",(0,l.yg)("inlineCode",{parentName:"p"},"sbtZioCli")," project. Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"sbt> project sbtZioCli\nsbt> publishLocal\n")),(0,l.yg)("p",null,"This will locally publish an artifact: ",(0,l.yg)("inlineCode",{parentName:"p"},'"zio.cli.sbt" % "sbt-zio-cli" % "0.0.0-SNAPSHOT"')),(0,l.yg)("h3",{id:"end-user-project"},"End User Project"),(0,l.yg)("p",null,"In your project, configure SBT to use the plugin by adding to ",(0,l.yg)("inlineCode",{parentName:"p"},"project/plugins.sbt"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'addSbtPlugin("zio.cli.sbt" % "sbt-zio-cli" % "0.0.0-SNAPSHOT")\n')),(0,l.yg)("p",null,"Then, enable the plugin for your project in your ",(0,l.yg)("inlineCode",{parentName:"p"},"build.sbt")," file. Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'lazy val root = project\n  .in(file("."))\n  .enablePlugins(ZIOCLIPlugin)\n  .settings(\n    CLIPlugin.zioCliMainClass := Some("zio.cli.YourApp")\n  )\n')),(0,l.yg)("p",null,"At this point, you should be able to build a native image of your application with the task:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"sbt> zioCliBuildNative\n")))}g.isMDXComponent=!0}}]);