"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[28040],{95788:(e,n,a)=>{a.d(n,{Iu:()=>c,yg:()=>d});var t=a(11504);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),s=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),g=r,d=p["".concat(u,".").concat(g)]||p[g]||h[g]||l;return a?t.createElement(d,i(i({ref:n},c),{},{components:a})):t.createElement(d,i({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},44616:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=a(45072),r=(a(11504),a(95788));const l={id:"chunk",title:"Chunk"},i=void 0,o={unversionedId:"reference/stream/chunk",id:"reference/stream/chunk",title:"Chunk",description:"A Chunk[A] represents a chunk of values of type A. Chunks are usually backed by arrays, but expose a purely functional, safe interface to the underlying elements, and they become lazy on operations that would be costly with arrays, such as repeated concatenation. Like lists and arrays, Chunk is an ordered collection.",source:"@site/docs/reference/stream/chunk.md",sourceDirName:"reference/stream",slug:"/reference/stream/chunk",permalink:"/reference/stream/chunk",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/chunk.md",tags:[],version:"current",frontMatter:{id:"chunk",title:"Chunk"},sidebar:"reference-sidebar",previous:{title:"Installation",permalink:"/reference/stream/installation"},next:{title:"Introduction to ZStream",permalink:"/reference/stream/zstream/"}},u={},s=[{value:"Why Chunk?",id:"why-chunk",level:2},{value:"Immutability",id:"immutability",level:3},{value:"Ergonomic Design",id:"ergonomic-design",level:3},{value:"High Performance",id:"high-performance",level:3},{value:"Operations",id:"operations",level:2},{value:"Creating a Chunk",id:"creating-a-chunk",level:3},{value:"Concatenating chunk",id:"concatenating-chunk",level:3},{value:"Collecting chunk",id:"collecting-chunk",level:3},{value:"Dropping chunk",id:"dropping-chunk",level:3},{value:"Comparing chunks",id:"comparing-chunks",level:3},{value:"Converting chunks",id:"converting-chunks",level:3}],c={toc:s},p="wrapper";function h(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.c)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk[A]")," represents a chunk of values of type ",(0,r.yg)("inlineCode",{parentName:"p"},"A"),". Chunks are usually backed by arrays, but expose a purely functional, safe interface to the underlying elements, and they become lazy on operations that would be costly with arrays, such as repeated concatenation. Like lists and arrays, Chunk is an ordered collection. "),(0,r.yg)("h2",{id:"why-chunk"},"Why Chunk?"),(0,r.yg)("p",null,"Arrays are fast and don\u2019t box primitive values but due to ",(0,r.yg)("inlineCode",{parentName:"p"},"ClassTag")," requirements and mutability they are painful to use and don't integrate well info functional code. ZIO chunks are backed by arrays so they also have zero boxing for primitives while providing an immutable interface and avoiding ",(0,r.yg)("inlineCode",{parentName:"p"},"ClassTag")," requirements."),(0,r.yg)("p",null,"Lets to get more details behind why Chunk invented:"),(0,r.yg)("h3",{id:"immutability"},"Immutability"),(0,r.yg)("p",null,"In Scala, there is no immutable data type that can efficiently represent primitive data types. There is Array, but Array is a mutable interface. The Array data type can efficiently represent primitives without boxing but only by exposing some unsafe mutable methods like ",(0,r.yg)("inlineCode",{parentName:"p"},"update"),"."),(0,r.yg)("h3",{id:"ergonomic-design"},"Ergonomic Design"),(0,r.yg)("p",null,"Every time, when we create an array of generic types in Scala, we need a ",(0,r.yg)("a",{parentName:"p",href:"https://www.scala-lang.org/api/current/scala/reflect/ClassTag.html"},"ClassTag")," to provide runtime information about that generic type, which is very inconvenient and isn't ergonomic. It leads us to a very cumbersome API."),(0,r.yg)("p",null,"Chunk does not have the inconvenience of Array in Scala. ",(0,r.yg)("strong",{parentName:"p"},"Chunk dispenses with the need to have ClassTags"),". It utilizes a different approach to solve that problem. "),(0,r.yg)("h3",{id:"high-performance"},"High Performance"),(0,r.yg)("p",null,"In addition to being an immutable array and zero boxing of Chunks that leads us to a high performant data type, Chunk has specialized operations for things like appending a single element or concatenating two Chunks together which have significantly higher performance than doing these same operations on the Array. Many Chunk methods have been handwritten to achieve better performance than their corresponding Array implementations in the Scala standard library."),(0,r.yg)("p",null,"Although Chunk is a common data type in ZIO, it exists primarily to support streaming use cases. "),(0,r.yg)("p",null,"When we are doing data streaming, a lot of times the source stream is a stream of bytes. Hence, internally we use a Chunk of bytes to represent that, so we don't have to box the bytes. Of course, it can be utilized for Chunks of Ints and many other types. Using Chunk is especially common when we are encoding and decoding at the level of streams. It is a very efficient, high-performance data type. "),(0,r.yg)("h2",{id:"operations"},"Operations"),(0,r.yg)("h3",{id:"creating-a-chunk"},"Creating a Chunk"),(0,r.yg)("p",null,"Creating empty ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"val emptyChunk = Chunk.empty\n")),(0,r.yg)("p",null,"Creating a ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk")," with specified values:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val specifiedValuesChunk = Chunk(1,2,3)\n// specifiedValuesChunk: Chunk[Int] = IndexedSeq(1, 2, 3)\n")),(0,r.yg)("p",null,"Alternatively, we can create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk")," by providing a collection of values:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val fromIterableChunk: Chunk[Int] = Chunk.fromIterable(List(1, 2, 3))\n// fromIterableChunk: Chunk[Int] = IndexedSeq(1, 2, 3)\nval fromArrayChunk: Chunk[Int] = Chunk.fromArray(Array(1, 2, 3))\n// fromArrayChunk: Chunk[Int] = IndexedSeq(1, 2, 3)\n")),(0,r.yg)("p",null,"Creating a ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk")," using filling same n element into it:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val chunk: Chunk[Int] = Chunk.fill(3)(0)\n// chunk: Chunk[Int] = IndexedSeq(0, 0, 0)\n")),(0,r.yg)("p",null,"Creating a ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk")," using unfold method by repeatedly applying the given function, as long as it returns Some:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val unfolded = Chunk.unfold(0)(n => if (n < 8) Some((n*2, n+2)) else None)\n// unfolded: Chunk[Int] = IndexedSeq(0, 4, 8, 12)\n")),(0,r.yg)("h3",{id:"concatenating-chunk"},"Concatenating chunk"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"++")," Returns the concatenation of this chunk with the specified chunk. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"Chunk(1,2,3) ++ Chunk(4,5,6)\n// res0: Chunk[Int] = IndexedSeq(1, 2, 3, 4, 5, 6)\n")),(0,r.yg)("h3",{id:"collecting-chunk"},"Collecting chunk"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"collect")," Returns a filtered, mapped subset of the elements of this chunk.\nHow to use ",(0,r.yg)("inlineCode",{parentName:"p"},"collect")," function to cherry-pick all strings from Chunk","[A]",":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val collectChunk = Chunk("Hello ZIO", 1.5, "Hello ZIO NIO", 2.0, "Some string", 2.5)\n// collectChunk: Chunk[Any] = IndexedSeq(\n//   "Hello ZIO",\n//   1.5,\n//   "Hello ZIO NIO",\n//   2.0,\n//   "Some string",\n//   2.5\n// )\n\ncollectChunk.collect { case string: String => string }\n// res1: Chunk[String] = IndexedSeq(\n//   "Hello ZIO",\n//   "Hello ZIO NIO",\n//   "Some string"\n// )\n')),(0,r.yg)("p",null,"How to use ",(0,r.yg)("inlineCode",{parentName:"p"},"collect")," function to cherry-pick all the digits from Chunk","[A]",":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"collectChunk.collect { case digit: Double => digit }\n// res2: Chunk[Double] = IndexedSeq(1.5, 2.0, 2.5)\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"collectWhile"),' collects the elements (from left to right) until the predicate returns "false" for the first time:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Chunk("Sarah", "Bob", "Jane").collectWhile { case element if element != "Bob" => true }\n// res3: Chunk[Boolean] = IndexedSeq(true)\n')),(0,r.yg)("p",null,"or another example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"Chunk(9, 2, 5, 1, 6).collectWhile { case element if element >= 2 => true }\n// res4: Chunk[Boolean] = IndexedSeq(true, true, true)\n")),(0,r.yg)("h3",{id:"dropping-chunk"},"Dropping chunk"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"drop")," drops the first ",(0,r.yg)("inlineCode",{parentName:"p"},"n")," elements of the chunk:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Chunk("Sarah", "Bob", "Jane").drop(1)\n// res5: Chunk[String] = IndexedSeq("Bob", "Jane")\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"dropWhile")," drops all elements so long as the predicate returns true:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"Chunk(9, 2, 5, 1, 6).dropWhile(_ >= 2)\n// res6: Chunk[Int] = IndexedSeq(1, 6)\n")),(0,r.yg)("h3",{id:"comparing-chunks"},"Comparing chunks"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Chunk("A","B") == Chunk("A", "C")\n// res7: Boolean = false\n')),(0,r.yg)("h3",{id:"converting-chunks"},"Converting chunks"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"toArray")," converts the chunk into an Array."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"Chunk(1,2,3).toArray\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"toSeq"),"converts the chunk into ",(0,r.yg)("inlineCode",{parentName:"p"},"Seq"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala",metastring:"mdoc",mdoc:!0},"Chunk(1,2,3).toSeq\n")))}h.isMDXComponent=!0}}]);