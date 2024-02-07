"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[53332],{95788:(e,t,a)=>{a.d(t,{Iu:()=>d,yg:()=>s});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),p=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=p(a),m=r,s=y["".concat(g,".").concat(m)]||y[m]||u[m]||l;return a?n.createElement(s,i(i({ref:t},d),{},{components:a})):n.createElement(s,i({ref:t},d))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(45072),r=(a(11504),a(95788));const l={id:"configuration",title:"Configuration"},i="Configuration",o={unversionedId:"zio-aws/configuration",id:"zio-aws/configuration",title:"Configuration",description:"Common configuration",source:"@site/docs/zio-aws/configuration.md",sourceDirName:"zio-aws",slug:"/zio-aws/configuration",permalink:"/zio-aws/configuration",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-aws/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"ecosystem-sidebar",previous:{title:"Wrappers",permalink:"/zio-aws/wrappers"},next:{title:"HTTP",permalink:"/zio-aws/http"}},g={},p=[{value:"Common configuration",id:"common-configuration",level:2},{value:"Default",id:"default",level:4},{value:"Fully customized",id:"fully-customized",level:4},{value:"Configured",id:"configured",level:4},{value:"Configuration Details",id:"configuration-details",level:2},{value:"Field Descriptions",id:"field-descriptions",level:3},{value:"credentials",id:"credentials",level:3},{value:"Field Descriptions",id:"field-descriptions-1",level:3},{value:"client",id:"client",level:3},{value:"extraHeaders",id:"extraheaders",level:3},{value:"Field Descriptions",id:"field-descriptions-2",level:3},{value:"Service layer",id:"service-layer",level:2}],d={toc:p},y="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.c)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"configuration"},"Configuration"),(0,r.yg)("h2",{id:"common-configuration"},"Common configuration"),(0,r.yg)("p",null,"Each ",(0,r.yg)("em",{parentName:"p"},"service module")," depends on the ",(0,r.yg)("inlineCode",{parentName:"p"},"AwsConfig")," layer. This layer is responsible for setting up the\nAWS Java SDK's async client, by setting the ",(0,r.yg)("a",{parentName:"p",href:"/zio-aws/http"},"underlying HTTP engine")," and all the common\nsettings. You can use the following layers to provide ",(0,r.yg)("inlineCode",{parentName:"p"},"AwsConfig"),":"),(0,r.yg)("h4",{id:"default"},"Default"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"AwsConfig.default")," requires a ",(0,r.yg)("inlineCode",{parentName:"p"},"HttpClient")," as dependency, but does not customize any other setting of the client"),(0,r.yg)("h4",{id:"fully-customized"},"Fully customized"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"AwsConfig.customized(customization)")," gives the freedom to customize the creation of the AWS async client directly by modifying it's ",(0,r.yg)("inlineCode",{parentName:"p"},"Builder")),(0,r.yg)("h4",{id:"configured"},"Configured"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"AwsConfig.configured()")," is the ",(0,r.yg)("em",{parentName:"p"},"recommended")," way to construct an ",(0,r.yg)("inlineCode",{parentName:"p"},"AwsConfig"),". Beside requiring a ",(0,r.yg)("inlineCode",{parentName:"p"},"HttpClient")," it also has ",(0,r.yg)("inlineCode",{parentName:"p"},"ZConfig[CommonAwsConfig]")," as dependency.\nThe ",(0,r.yg)("inlineCode",{parentName:"p"},"CommonAwsConfig")," value can be either provided from code for example by ",(0,r.yg)("inlineCode",{parentName:"p"},"ZLayer.succeed(CommonAwsConfig(...))")," or it can\nbe read from any of the supported config sources by ",(0,r.yg)("a",{parentName:"p",href:"https://zio.dev/zio-config/"},"zio-config"),"."),(0,r.yg)("p",null,"Note that ",(0,r.yg)("strong",{parentName:"p"},"AWS level retries are disabled")," by the configuration layer and it is not exposed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"CommonAwsConfig")," data structure either. The reason for this is that the recommended way to handle retries is to use ",(0,r.yg)("a",{parentName:"p",href:"/zio-aws/aspects"},"aspects on the service layers"),"."),(0,r.yg)("p",null,"See the following table about the possible configuration values. Please note that the underlying HTTP engine also has its own\nspecific configuration which is described ",(0,r.yg)("a",{parentName:"p",href:"/zio-aws/http"},"on the page about the HTTP engines"),". "),(0,r.yg)("h2",{id:"configuration-details"},"Configuration Details"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"FieldName"),(0,r.yg)("th",{parentName:"tr",align:null},"Format"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Sources"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"fielddescriptions"},"all-of")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"field-descriptions"},"Field Descriptions"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"FieldName"),(0,r.yg)("th",{parentName:"tr",align:null},"Format"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Sources"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"region"),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type string, optional value, AWS region to connect to"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"credentials"},"credentials")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"credentials"},"any-one-of")),(0,r.yg)("td",{parentName:"tr",align:null},"default value: DefaultCredentialsProvider(providerChain=LazyAwsCredentialsProvider(delegate=Lazy(value=Uninitialized))), AWS credentials provider"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"endpointOverride"),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type uri, optional value, Overrides the AWS service endpoint"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"client"},"client")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"client"},"all-of")),(0,r.yg)("td",{parentName:"tr",align:null},"optional value, Common settings for AWS service clients"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"credentials"},"credentials"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"FieldName"),(0,r.yg)("th",{parentName:"tr",align:null},"Format"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Sources"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type string"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type string"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type string"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"fielddescriptions-1"},"all-of")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"field-descriptions-1"},"Field Descriptions"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"FieldName"),(0,r.yg)("th",{parentName:"tr",align:null},"Format"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Sources"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"accessKeyId"),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type string, AWS access key ID"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"secretAccessKey"),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type string, AWS secret access key"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"client"},"client"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"FieldName"),(0,r.yg)("th",{parentName:"tr",align:null},"Format"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Sources"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"extraheaders"},"extraHeaders")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"extraheaders"},"list")),(0,r.yg)("td",{parentName:"tr",align:null},"Extra headers to be sent with each request"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apiCallTimeout"),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type duration, optional value, Amount of time to allow the client to complete the execution of an API call"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apiCallAttemptTimeout"),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type duration, optional value, Amount of time to wait for the HTTP request to complete before giving up"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"defaultProfileName"),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type string, optional value, Default profile name"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"extraheaders"},"extraHeaders"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"FieldName"),(0,r.yg)("th",{parentName:"tr",align:null},"Format"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Sources"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type string, Header name"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"fielddescriptions-1"},"any-one-of")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"field-descriptions-2"},"Field Descriptions"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"FieldName"),(0,r.yg)("th",{parentName:"tr",align:null},"Format"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Sources"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type string, Header value"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"primitive"),(0,r.yg)("td",{parentName:"tr",align:null},"value of type string, Header value"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"service-layer"},"Service layer"),(0,r.yg)("p",null,"Each AWS service's generated client has it own layer that depends on ",(0,r.yg)("inlineCode",{parentName:"p"},"AwsConfig"),". It is possible to reuse the same ",(0,r.yg)("inlineCode",{parentName:"p"},"AwsConfig")," layer\nfor multiple AWS service clients, sharing a common configuration. Usually the service client does not require any additional configuration,\nin this case the ",(0,r.yg)("inlineCode",{parentName:"p"},"live")," layer can be used, for example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"program.provide(\n    awsConfig,\n    Ec2.live,\n    ElasticBeanstalk.live\n)\n")))}u.isMDXComponent=!0}}]);