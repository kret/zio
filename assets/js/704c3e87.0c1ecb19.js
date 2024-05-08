"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[70018],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var i=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=n,u=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return a?i.createElement(u,r(r({ref:t},m),{},{components:a})):i.createElement(u,r({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78082:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=a(58168),n=(a(96540),a(15680));const o={id:"schema-serialization",title:"Serialization of the Schema Itself",sidebar_label:"Schema Serialization"},r=void 0,s={unversionedId:"zio-schema/operations/schema-serialization",id:"zio-schema/operations/schema-serialization",title:"Serialization of the Schema Itself",description:"In distributed systems, we often need to move computations to data instead of moving data to computations. The data is big and the network is slow, so moving it is expensive and sometimes impossible due to the volume of data. So in distributed systems, we would like to move our functions to the data and apply the data to the functions and gather the results back.",source:"@site/docs/zio-schema/operations/serialization-of-the-schema-itself.md",sourceDirName:"zio-schema/operations",slug:"/zio-schema/operations/schema-serialization",permalink:"/zio-schema/operations/schema-serialization",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/operations/serialization-of-the-schema-itself.md",tags:[],version:"current",frontMatter:{id:"schema-serialization",title:"Serialization of the Schema Itself",sidebar_label:"Schema Serialization"},sidebar:"ecosystem-sidebar",previous:{title:"Schema Migration",permalink:"/zio-schema/operations/schema-migration"},next:{title:"Dynamic Data Representation",permalink:"/zio-schema/operations/dynamic-data-representation"}},c={},l=[],m={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,i.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In distributed systems, we often need to move computations to data instead of moving data to computations. The data is big and the network is slow, so moving it is expensive and sometimes impossible due to the volume of data. So in distributed systems, we would like to move our functions to the data and apply the data to the functions and gather the results back."),(0,n.yg)("p",null,"So we need a way to serialize our computations and send them through the network. In ZIO Schema, each schema itself has a schema, so we can treat the structure as pure data! we can serialize our schemas by calling the ",(0,n.yg)("inlineCode",{parentName:"p"},"serializable")," method:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait Schema[A] {\n  def serializable: Schema[Schema[A]]\n}\n")),(0,n.yg)("p",null,"By calling this method, we can get the schema of a schema. So we can serialize it and send it across the wire, and it can be deserialized on the other side. After deserializing it, we have a schema that is isomorphic to the original schema. So all the operations that we can perform on the original type ",(0,n.yg)("inlineCode",{parentName:"p"},"A"),", we can perform on any value that is isomorphic to ",(0,n.yg)("inlineCode",{parentName:"p"},"A")," on the other side."))}d.isMDXComponent=!0}}]);