"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5708],{95788:(e,n,o)=>{o.d(n,{Iu:()=>c,yg:()=>y});var a=o(11504);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=a.createContext({}),p=function(e){var n=a.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),g=t,y=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return o?a.createElement(y,i(i({ref:n},c),{},{components:o})):a.createElement(y,i({ref:n},c))}));function y(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:t,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}g.displayName="MDXCreateElement"},19812:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=o(45072),t=(o(11504),o(95788));const r={id:"index",title:"Getting Started with ZIO Bson",sidebar_label:"ZIO Bson"},i=void 0,s={unversionedId:"zio-bson/index",id:"zio-bson/index",title:"Getting Started with ZIO Bson",description:"ZIO Bson is BSON library with tight ZIO integration.",source:"@site/docs/zio-bson/index.md",sourceDirName:"zio-bson",slug:"/zio-bson/",permalink:"/zio-bson/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-bson/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Getting Started with ZIO Bson",sidebar_label:"ZIO Bson"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Akka Cluster",permalink:"/zio-akka-cluster/"},next:{title:"ZIO CLI",permalink:"/zio-cli/"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"zio-schema support",id:"zio-schema-support",level:2},{value:"Example",id:"example",level:2},{value:"Declaring codecs",id:"declaring-codecs",level:3},{value:"Converting to BsonValue",id:"converting-to-bsonvalue",level:3},{value:"Creating CodecProvider",id:"creating-codecprovider",level:3},{value:"Parsing BsonValue",id:"parsing-bsonvalue",level:3},{value:"Errors",id:"errors",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...o}=e;return(0,t.yg)(d,(0,a.c)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-bson"},"ZIO Bson")," is BSON library with tight ZIO integration."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,t.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Development-green.svg",alt:"Development"}))," ",(0,t.yg)("img",{parentName:"p",src:"https://github.com/zio/zio-bson/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,t.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-bson_2.13/"},(0,t.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-bson_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,t.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-bson_2.13/"},(0,t.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-bson_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,t.yg)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-bson-docs_2.13"},(0,t.yg)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-bson-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-bson"},(0,t.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-bson?style=social",alt:"ZIO Bson"}))),(0,t.yg)("h2",{id:"introduction"},"Introduction"),(0,t.yg)("p",null,"The goal of this project is to create the best all-round BSON library for Scala:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Native BSON support")," to avoid intermediate JSON conversions and support BSON types."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Future-Proof"),", prepared for Scala 3 and next-generation Java."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Simple")," small codebase, concise documentation that covers everything."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Helpful errors")," are readable by humans and machines."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"ZIO Integration")," so nothing more is required.")),(0,t.yg)("h2",{id:"installation"},"Installation"),(0,t.yg)("p",null,"In order to use this library, we need to add the following lines in our ",(0,t.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-bson" % "1.0.6"\nlibraryDependencies += "dev.zio" %% "zio-bson-magnolia" % "1.0.6"\n')),(0,t.yg)("h2",{id:"zio-schema-support"},"zio-schema support"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"zio-bson-magnolia")," projects provides typeclass derivation only for ",(0,t.yg)("inlineCode",{parentName:"p"},"scala")," ",(0,t.yg)("inlineCode",{parentName:"p"},"2.13"),".\nYou can use ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-schema/"},"zio-schema-bson")," instead to get typeclass derivation on ",(0,t.yg)("inlineCode",{parentName:"p"},"scala")," ",(0,t.yg)("inlineCode",{parentName:"p"},"2.12"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"2.13")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"3.2"),"."),(0,t.yg)("h2",{id:"example"},"Example"),(0,t.yg)("p",null,"All the following code snippets assume that the following imports have been declared"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.bson._\nimport zio.bson.BsonBuilder._\n")),(0,t.yg)("h3",{id:"declaring-codecs"},"Declaring codecs"),(0,t.yg)("p",null,"Use ",(0,t.yg)("inlineCode",{parentName:"p"},"DeriveBsonCodec.derive")," to get a codec for your case class or sealed trait:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.bson.magnolia._\n\ncase class Banana(curvature: Double)\n\nobject Banana {\n  implicit val codec: BsonCodec[Banana] = DeriveBsonCodec.derive\n}\n")),(0,t.yg)("h3",{id:"converting-to-bsonvalue"},"Converting to BsonValue"),(0,t.yg)("p",null,"To use values in ",(0,t.yg)("inlineCode",{parentName:"p"},"Filter")," of ",(0,t.yg)("inlineCode",{parentName:"p"},"Update")," expressions you can convert them to ",(0,t.yg)("inlineCode",{parentName:"p"},"BsonValue")," this way:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'"str".toBsonValue\n\nBanana(0.2).toBsonValue\n\nimport org.bson._\n\ndef method[T: BsonEncoder](value: T): BsonDocument = doc("key" -> value.toBsonValue)\n')),(0,t.yg)("h3",{id:"creating-codecprovider"},"Creating CodecProvider"),(0,t.yg)("p",null,"To get ",(0,t.yg)("inlineCode",{parentName:"p"},"CodecProvider")," for your ",(0,t.yg)("inlineCode",{parentName:"p"},"BsonCodec")," use ",(0,t.yg)("inlineCode",{parentName:"p"},"zioBsonCodecProvider"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val codecProvider = zioBsonCodecProvider[Banana]\n")),(0,t.yg)("h3",{id:"parsing-bsonvalue"},"Parsing BsonValue"),(0,t.yg)("p",null,"In general ",(0,t.yg)("inlineCode",{parentName:"p"},"CodecProvider")," should parse your case class without intermediate ",(0,t.yg)("inlineCode",{parentName:"p"},"BsonValue")," representation.\nBut you can parse ",(0,t.yg)("inlineCode",{parentName:"p"},"BsonValue")," any way:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import BsonBuilder._\n\nval bsonVal: BsonValue = doc("curvature" -> double(0.2))\n\nbsonVal.as[Banana]\n')),(0,t.yg)("h2",{id:"errors"},"Errors"),(0,t.yg)("p",null,"Bad BSON will produce an error with path and contextual information"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'scala> doc("curvature" -> Array[Byte](1, 2, 3).toBsonValue).as[Banana]\nval res: Either[String,Banana] = Left(.curvature: Expected BSON type Double, but got BINARY.)\n')),(0,t.yg)("h2",{id:"configuration"},"Configuration"),(0,t.yg)("p",null,"You can configure typeclass derivation with annotations."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.bson._\nimport zio.bson.BsonBuilder._\nimport zio.bson.magnolia._\n\nsealed trait Fruit\n\nobject Fruit {\n  case class Banana(curvature: Double) extends Fruit\n  case class Apple(poison: Boolean) extends Fruit\n  \n  implicit val codec: BsonCodec[Fruit] = DeriveBsonCodec.derive\n}\n\nval bsonFruit = doc( "Banana" -> doc( "curvature" -> double(0.5) ))\n\nbsonFruit.as[Fruit]\n//Right(Banana(0.5))\n\n@bsonDiscriminator("$type")\nsealed trait FruitConfigured\n\nobject FruitConfigured {\n  case class Banana(curvature: Double) extends FruitConfigured\n  @bsonHint("custom_type_name")\n  case class Apple(@bsonField("is_poisoned") poison: Boolean) extends FruitConfigured\n\n  implicit val codec: BsonCodec[FruitConfigured] = DeriveBsonCodec.derive\n}\n\nval bsonFruitConfigured = doc(\n  "$type" -> str("custom_type_name"),\n  "is_poisoned" -> bool(true)\n)\n\nbsonFruitConfigured.as[FruitConfigured]\n')))}u.isMDXComponent=!0}}]);