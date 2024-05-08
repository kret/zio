"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[70917],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,h=d["".concat(l,".").concat(g)]||d[g]||m[g]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},74526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={id:"the-three-laws-of-zio-environment",title:"The Three Laws of ZIO Environment",sidebar_label:"Three Laws of ZIO Environment"},i=void 0,s={unversionedId:"reference/service-pattern/the-three-laws-of-zio-environment",id:"reference/service-pattern/the-three-laws-of-zio-environment",title:"The Three Laws of ZIO Environment",description:'When we are working with the ZIO environment, one question might arise: "When should we use environment and when do we need to use constructors?".',source:"@site/docs/reference/service-pattern/the-three-laws-of-zio-environment.md",sourceDirName:"reference/service-pattern",slug:"/reference/service-pattern/the-three-laws-of-zio-environment",permalink:"/reference/service-pattern/the-three-laws-of-zio-environment",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/service-pattern/the-three-laws-of-zio-environment.md",tags:[],version:"current",frontMatter:{id:"the-three-laws-of-zio-environment",title:"The Three Laws of ZIO Environment",sidebar_label:"Three Laws of ZIO Environment"},sidebar:"reference-sidebar",previous:{title:"Generating Accessor Methods",permalink:"/reference/service-pattern/generating-accessor-methods-using-macros"},next:{title:"Reloadable Services",permalink:"/reference/service-pattern/reloadable-services"}},l={},p=[{value:"1. Service Interface (Trait)",id:"1-service-interface-trait",level:2},{value:"2. Service Implementation (Class)",id:"2-service-implementation-class",level:2},{value:"3. Business Logic",id:"3-business-logic",level:2}],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,'When we are working with the ZIO environment, one question might arise: "When should we use environment and when do we need to use constructors?".'),(0,r.yg)("p",null,"Using ZIO environment follows three laws:"),(0,r.yg)("h2",{id:"1-service-interface-trait"},"1. Service Interface (Trait)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"When we are defining service interfaces we should ",(0,r.yg)("em",{parentName:"strong"},"never")," use the environment for dependencies of the service itself.")),(0,r.yg)("p",null,"For example, if the implementation of service ",(0,r.yg)("inlineCode",{parentName:"p"},"X")," depends on service ",(0,r.yg)("inlineCode",{parentName:"p"},"Y")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Z")," then these should never be reflected in the trait that defines service ",(0,r.yg)("inlineCode",{parentName:"p"},"X"),". It's leaking implementation details."),(0,r.yg)("p",null,"So the following service definition is wrong because the ",(0,r.yg)("inlineCode",{parentName:"p"},"BlobStorage")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"MetadataRepo")," services are dependencies of the  ",(0,r.yg)("inlineCode",{parentName:"p"},"DocRepo")," service's implementation, not the ",(0,r.yg)("inlineCode",{parentName:"p"},"DocRepo")," interface itself:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ntrait DocRepo {\n  def save(document: Doc): ZIO[BlobStorage & MetadataRepo, Throwable, String]\n}\n")),(0,r.yg)("h2",{id:"2-service-implementation-class"},"2. Service Implementation (Class)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"When implementing service interfaces, we should accept all dependencies in the class constructor.")),(0,r.yg)("p",null,"Again, let's see how ",(0,r.yg)("inlineCode",{parentName:"p"},"DocRepoImpl")," accepts ",(0,r.yg)("inlineCode",{parentName:"p"},"BlobStorage")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"MetadataRepo")," dependencies from the class constructor:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"case class DocRepoImpl(\n    metadataRepo: MetadataRepo,\n    blobStorage: BlobStorage\n) extends DocRepo {\n  override def delete(id: String): ZIO[Any, Throwable, Unit] =\n    for {\n      _ <- blobStorage.delete(id)\n      _ <- metadataRepo.delete(id)\n    } yield ()\n\n  override def get(id: String): ZIO[Any, Throwable, Doc] = ???\n\n  override def save(document: Doc): ZIO[Any, Throwable, String] = ???\n\n  override def findByTitle(title: String): ZIO[Any, Throwable, List[Doc]] = ???\n}\n\nobject DocRepoImpl {\n  val layer: ZLayer[BlobStorage with MetadataRepo, Nothing, DocRepo] =\n    ZLayer {\n      for {\n        metadataRepo <- ZIO.service[MetadataRepo]\n        blobStorage  <- ZIO.service[BlobStorage]\n      } yield DocRepoImpl(metadataRepo, blobStorage)\n    }\n}\n")),(0,r.yg)("p",null,"So keep in mind, we can't do something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"case class DocRepoImpl() extends DocRepo {\n  override def delete(id: String): ZIO[Any, Throwable, Unit] =\n    for {\n      blobStorage  <- ZIO.service[BlobStorage]\n      metadataRepo <- ZIO.service[MetadataRepo]\n      _            <- blobStorage.delete(id)\n      _            <- metadataRepo.delete(id)\n    } yield ()\n\n  override def get(id: String): ZIO[Any, Throwable, Doc] = ???\n\n  override def save(document: Doc): ZIO[Any, Throwable, String] = ???\n\n  override def findByTitle(title: String): ZIO[Any, Throwable, List[Doc]] = ???\n}\n")),(0,r.yg)("h2",{id:"3-business-logic"},"3. Business Logic"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Finally, in the business logic we should use the ZIO environment to consume services.")),(0,r.yg)("p",null,"Therefore, in the last example, if we inline all accessor methods whenever we are using services, we are using the ZIO environment:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport java.io.IOException\n\nobject MainApp extends ZIOAppDefault {\n  val app =\n    for {\n      id <-\n        ZIO.serviceWithZIO[DocRepo](_.save(\n          Doc(\n              "How to write a ZIO application?",\n              "In this tutorial we will learn how to write a ZIO application.",\n              "en",\n              "text/plain",\n              "content".getBytes()\n            )\n          )\n        )\n      doc <- ZIO.serviceWithZIO[DocRepo](_.get(id))\n      _ <- Console.printLine(\n        s"""\n          |Downloaded the document with $id id:\n          |  title: ${doc.title}\n          |  description: ${doc.description}\n          |  language: ${doc.language}\n          |  format: ${doc.format}\n          |""".stripMargin\n      )\n      _ <- ZIO.serviceWithZIO[DocRepo](_.delete(id))\n      _ <- Console.printLine(s"Deleted the document with $id id")\n    } yield ()\n\n  def run =\n    app.provide(\n      DocRepoImpl.layer,\n      InmemoryBlobStorage.layer,\n      InmemoryMetadataRepo.layer\n    )\n}\n')),(0,r.yg)("p",null,"That's it! These are the most important rules we need to know about the ZIO environment."),(0,r.yg)("hr",null),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The remaining part of this section can be skipped if you are not an advanced ZIO user.")),(0,r.yg)("p",null,"Now let's elaborate more on the first rule. On rare occasions, all of which involve local context that is independent of implementation, it's ",(0,r.yg)("em",{parentName:"p"},"acceptable")," to use the environment in the definition of a service."),(0,r.yg)("p",null,"Here are two examples:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"In a web application, a service may be defined only to operate in the context of an HTTP request. In such a case, the request itself could be stored in the environment: ",(0,r.yg)("inlineCode",{parentName:"li"},"ZIO[HttpRequest, ...]"),". This is acceptable because this use of the environment is part of the semantics of the trait itself, rather than leaking an implementation detail of some particular class that implements the service trait:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\nimport java.net.URI\nimport java.nio.charset.StandardCharsets\n\ntype HttpApp = ZIO[HttpRequest, Throwable, HttpResponse]\ntype HttpRoute = Map[String, HttpApp]\n\ncase class HttpRequest(method: Int,\n                       uri: URI,\n                       headers: Map[String, String],\n                       body: UStream[Byte])\n\ncase class HttpResponse(status: Int,\n                        headers: Map[String, String],\n                        body: UStream[Byte])\n\nobject HttpResponse {\n  def apply(status: Int, message: String): HttpResponse =\n    HttpResponse(\n      status = status,\n      headers = Map.empty,\n      body = ZStream.fromChunk(\n        Chunk.fromArray(message.getBytes(StandardCharsets.UTF_8))\n      )\n    )\n\n  def ok(msg: String): HttpResponse = HttpResponse(200, msg)\n\n  def error(msg: String): HttpResponse = HttpResponse(500, msg)\n}\n\ntrait HttpServer {\n  def serve(map: HttpRoute, host: String, port: Int): ZIO[Any, Throwable, Unit]\n}\n\nobject HttpServer {\n  def serve(map: HttpRoute, host: String, port: Int): ZIO[HttpServer, Throwable, Unit] =\n    ZIO.serviceWithZIO(_.serve(map, host, port))\n}\n\ncase class HttpServerLive() extends HttpServer {\n  override def serve(map: HttpRoute, host: String, port: Int): ZIO[Any, Throwable, Unit] = ???\n}\n\nobject HttpServerLive {\n  val layer: URLayer[Any, HttpServer] = ZLayer.succeed(HttpServerLive())\n}\n\nobject MainWebApp extends ZIOAppDefault {\n\n  val myApp: ZIO[HttpServer, Throwable, Unit] = for {\n    _ <- ZIO.unit\n    healthcheck: HttpApp = ZIO.service[HttpRequest].map { _ =>\n      HttpResponse.ok("up")\n    }\n\n    pingpong = ZIO.service[HttpRequest].flatMap { req =>\n      ZIO.ifZIO(\n        req.body.via(ZPipeline.utf8Decode).runHead.map(_.contains("ping"))\n      )(\n        onTrue = ZIO.attempt(HttpResponse.ok("pong")),\n        onFalse = ZIO.attempt(HttpResponse.error("bad request"))\n      )\n    }\n\n    map = Map(\n      "/healthcheck" -> healthcheck,\n      "/pingpong" -> pingpong\n    )\n    _ <- HttpServer.serve(map, "localhost", 8080)\n  } yield ()\n\n  def run = myApp.provideLayer(HttpServerLive.layer)\n\n}\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"In a database application, a service may be defined only to operate in the context of a larger database transaction. In such a case, the transaction could be stored in the environment: ",(0,r.yg)("inlineCode",{parentName:"li"},"ZIO[DatabaseTransaction, ...]"),". As in the previous example, because this is part of the semantics of the trait itself (whose functionality all operates within a transaction), this is not leaking implementation details, and therefore it is valid:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'trait DatabaseTransaction {\n  def get(key: String): Task[Int]\n  def put(key: String, value: Int): Task[Unit]\n}\n\nobject DatabaseTransaction {\n  def get(key: String): ZIO[DatabaseTransaction, Throwable, Int] =\n    ZIO.serviceWithZIO(_.get(key))\n\n  def put(key: String, value: Int): ZIO[DatabaseTransaction, Throwable, Unit] =\n    ZIO.serviceWithZIO(_.put(key, value))\n}\n\ntrait Database {\n  def atomically[E, A](zio: ZIO[DatabaseTransaction, E, A]): ZIO[Any, E, A]\n}\n\nobject Database {\n  def atomically[E, A](zio: ZIO[DatabaseTransaction, E, A]): ZIO[Database, E, A] =\n    ZIO.serviceWithZIO(_.atomically(zio))\n}\n\ncase class DatabaseLive() extends Database {\n  override def atomically[E, A](zio: ZIO[DatabaseTransaction, E, A]): ZIO[Any, E, A] = ???\n}\n\nobject DatabaseLive {\n  val layer = ZLayer.succeed(DatabaseLive())\n}\n\nobject MainDatabaseApp extends ZIOAppDefault {\n  val myApp: ZIO[Database, Throwable, Unit] =\n    for {\n      _ <- Database.atomically(DatabaseTransaction.put("counter", 0))\n      _ <- ZIO.foreachPar(List(1 to 10)) { _ =>\n        Database.atomically(\n          for {\n            value <- DatabaseTransaction.get("counter")\n            _ <- DatabaseTransaction.put("counter", value + 1)\n          } yield ()\n        )\n      }\n    } yield ()\n\n  def run = myApp.provideLayer(DatabaseLive.layer)\n\n}\n')),(0,r.yg)("p",null,"So while it's better to err on the side of \"don't put things into the environment of service interface\", there are cases where it's acceptable."))}m.isMDXComponent=!0}}]);