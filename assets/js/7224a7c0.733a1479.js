"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[58284],{95788:(e,n,r)=>{r.d(n,{Iu:()=>d,yg:()=>f});var o=r(11504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var a=o.createContext({}),p=function(e){var n=o.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d=function(e){var n=p(e.components);return o.createElement(a.Provider,{value:n},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=t,f=m["".concat(a,".").concat(u)]||m[u]||l[u]||i;return r?o.createElement(f,c(c({ref:n},d),{},{components:r})):o.createElement(f,c({ref:n},d))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,c=new Array(i);c[0]=u;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[m]="string"==typeof e?e:t,c[1]=s;for(var p=2;p<i;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2188:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(45072),t=(r(11504),r(95788));const i={id:"combining-different-encoders",title:"Combining Different Encoders"},c=void 0,s={unversionedId:"zio-schema/examples/combining-different-encoders",id:"zio-schema/examples/combining-different-encoders",title:"Combining Different Encoders",description:"Let's take a look at a round-trip converting an object to JSON and back, then converting it to a protobuf and back. This is a simple example, but it shows how to combine different encoders to achieve a round-trip.",source:"@site/docs/zio-schema/examples/combining-different-encoders.md",sourceDirName:"zio-schema/examples",slug:"/zio-schema/examples/combining-different-encoders",permalink:"/zio-schema/examples/combining-different-encoders",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/examples/combining-different-encoders.md",tags:[],version:"current",frontMatter:{id:"combining-different-encoders",title:"Combining Different Encoders"},sidebar:"ecosystem-sidebar",previous:{title:"Mapping DTO to Domain Object",permalink:"/zio-schema/examples/mapping-dto-to-domain-object"},next:{title:"ZIO Telemetry",permalink:"/zio-telemetry/"}},a={},p=[],d={toc:p},m="wrapper";function l(e){let{components:n,...r}=e;return(0,t.yg)(m,(0,o.c)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Let's take a look at a round-trip converting an object to JSON and back, then converting it to a protobuf and back. This is a simple example, but it shows how to combine different encoders to achieve a round-trip."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'object CombiningExample extends zio.App {\n  import zio.schema.codec.JsonCodec\n  import zio.schema.codec.ProtobufCodec\n  import ManualConstruction._\n  import zio.stream.ZStream\n\n  override def run(args: List[String]): UIO[ExitCode] = for {\n    _ <- ZIO.unit\n    _ <- ZIO.debug("combining roundtrip")\n    person = Person("Michelle", 32)\n\n    personToJson = JsonCodec.encoder[Person](schemaPerson)\n    jsonToPerson = JsonCodec.decoder[Person](schemaPerson)\n\n    personToProto = ProtobufCodec.encoder[Person](schemaPerson)\n    protoToPerson = ProtobufCodec.decoder[Person](schemaPerson)\n\n    newPerson <- ZStream(person)\n      .tap(v => ZIO.debug("input object is: " + v))\n      .transduce(personToJson)\n      .transduce(jsonToPerson)\n      .tap(v => ZIO.debug("object after json roundtrip: " + v))\n      .transduce(personToProto)\n      .transduce(protoToPerson)\n      .tap(v => ZIO.debug("person after protobuf roundtrip: " + v))\n      .runHead\n      .some\n      .catchAll(error => ZIO.debug(error))\n    _ <- ZIO.debug("is old person the new person? " + (person == newPerson).toString)\n    _ <- ZIO.debug("old person: " + person)\n    _ <- ZIO.debug("new person: " + newPerson)\n  } yield ExitCode.success\n}\n')))}l.isMDXComponent=!0}}]);