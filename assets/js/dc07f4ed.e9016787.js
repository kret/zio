"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[37996],{95788:(e,r,a)=>{a.d(r,{Iu:()=>u,yg:()=>g});var t=a(11504);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),c=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),y=n,g=p["".concat(s,".").concat(y)]||p[y]||m[y]||i;return a?t.createElement(g,o(o({ref:r},u),{},{components:a})):t.createElement(g,o({ref:r},u))}));function g(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},96460:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=a(45072),n=(a(11504),a(95788));const i={id:"use-cases",title:"ZIO Schema Use cases",sidebar_label:"Use cases"},o=void 0,l={unversionedId:"zio-schema/use-cases",id:"zio-schema/use-cases",title:"ZIO Schema Use cases",description:"ZIO Schema allows us to create representations of our data types as values.",source:"@site/docs/zio-schema/use-cases.md",sourceDirName:"zio-schema",slug:"/zio-schema/use-cases",permalink:"/zio-schema/use-cases",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/use-cases.md",tags:[],version:"current",frontMatter:{id:"use-cases",title:"ZIO Schema Use cases",sidebar_label:"Use cases"},sidebar:"ecosystem-sidebar",previous:{title:"Motivation",permalink:"/zio-schema/motivation"},next:{title:"Basic Building Blocks",permalink:"/zio-schema/basic-building-blocks"}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:r,...a}=e;return(0,n.yg)(p,(0,t.c)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"ZIO Schema allows us to create representations of our data types as values."),(0,n.yg)("p",null,"Once we have a representation of our data types, we can use it to"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Serialize and deserialize our types"),(0,n.yg)("li",{parentName:"ul"},"Validate our types"),(0,n.yg)("li",{parentName:"ul"},"Transform our types"),(0,n.yg)("li",{parentName:"ul"},"Create instances of your types")),(0,n.yg)("p",null,"We can then use one of the various codecs (or create our own) to serialize and deserialize your types."),(0,n.yg)("p",null,"Example of possible codecs are:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"CSV Codec"),(0,n.yg)("li",{parentName:"ul"},"JSON Codec (already available)"),(0,n.yg)("li",{parentName:"ul"},"Apache Avro Codec (in progress)"),(0,n.yg)("li",{parentName:"ul"},"Apache Thrift Codec (in progress)"),(0,n.yg)("li",{parentName:"ul"},"XML Codec"),(0,n.yg)("li",{parentName:"ul"},"YAML Codec"),(0,n.yg)("li",{parentName:"ul"},"Protobuf Codec (already available)"),(0,n.yg)("li",{parentName:"ul"},"QueryString Codec"),(0,n.yg)("li",{parentName:"ul"},"etc.")),(0,n.yg)("p",null,"Example use cases that are possible:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Serializing and deserializing JSON"),(0,n.yg)("li",{parentName:"ul"},"Serializing and deserializing XML"),(0,n.yg)("li",{parentName:"ul"},"Validating JSON"),(0,n.yg)("li",{parentName:"ul"},"Validating XML"),(0,n.yg)("li",{parentName:"ul"},"Transforming JSON"),(0,n.yg)("li",{parentName:"ul"},"Transforming XML"),(0,n.yg)("li",{parentName:"ul"},"Transforming JSON to XML"),(0,n.yg)("li",{parentName:"ul"},"Transforming XML to JSON"),(0,n.yg)("li",{parentName:"ul"},"Creating diffs from arbitrary data structures"),(0,n.yg)("li",{parentName:"ul"},"Creating migrations / evolutions e.g. of Events used in Event-Sourcing"),(0,n.yg)("li",{parentName:"ul"},"Transformation pipelines, e.g.",(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"Convert from protobuf to object, e.g. ",(0,n.yg)("inlineCode",{parentName:"li"},"PersonDTO"),","),(0,n.yg)("li",{parentName:"ol"},"Transform to another representation, e.g. ",(0,n.yg)("inlineCode",{parentName:"li"},"Person"),","),(0,n.yg)("li",{parentName:"ol"},"Validate"),(0,n.yg)("li",{parentName:"ol"},"Transform to JSON ",(0,n.yg)("inlineCode",{parentName:"li"},"JsonObject")),(0,n.yg)("li",{parentName:"ol"},"Serialize to ",(0,n.yg)("inlineCode",{parentName:"li"},"String"))))))}m.isMDXComponent=!0}}]);