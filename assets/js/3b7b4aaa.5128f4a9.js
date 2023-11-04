"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[98719],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const l={id:"extending-quill",title:"Extending Quill"},o=void 0,r={unversionedId:"zio-quill/extending-quill",id:"zio-quill/extending-quill",title:"Extending Quill",description:"Infix",source:"@site/docs/zio-quill/extending-quill.md",sourceDirName:"zio-quill",slug:"/zio-quill/extending-quill",permalink:"/zio-quill/extending-quill",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-quill/extending-quill.md",tags:[],version:"current",frontMatter:{id:"extending-quill",title:"Extending Quill"},sidebar:"ecosystem-sidebar",previous:{title:"Writing Queries",permalink:"/zio-quill/writing-queries"},next:{title:"Contexts",permalink:"/zio-quill/contexts"}},s={},u=[{value:"Infix",id:"infix",level:2},{value:"Infixes With Conditions",id:"infixes-with-conditions",level:3},{value:"Summary",id:"summary",level:4},{value:"Explanation",id:"explanation",level:4},{value:"Dynamic infix",id:"dynamic-infix",level:3},{value:"Implicit Extensions",id:"implicit-extensions",level:3},{value:"Standard quoted extension:",id:"standard-quoted-extension",level:5},{value:"Higher-order quoted extension:",id:"higher-order-quoted-extension",level:5},{value:"Scalar quoted extension:",id:"scalar-quoted-extension",level:5},{value:"Extensions in ProtoQuill/Scala3:",id:"extensions-in-protoquillscala3",level:5},{value:"Raw SQL queries",id:"raw-sql-queries",level:3},{value:"Database functions",id:"database-functions",level:3},{value:"Comparison operators",id:"comparison-operators",level:3},{value:"Using Ordered",id:"using-ordered",level:4},{value:"Using Implicit Classes",id:"using-implicit-classes",level:4},{value:"batch with infix",id:"batch-with-infix",level:3},{value:"Custom encoding",id:"custom-encoding",level:2},{value:"Mapped Encoding",id:"mapped-encoding",level:3},{value:"Raw Encoding",id:"raw-encoding",level:3},{value:"<code>AnyVal</code>",id:"anyval",level:2},{value:"Table/Column Customizations",id:"tablecolumn-customizations",level:2},{value:"Changing Table and Column Names",id:"changing-table-and-column-names",level:3},{value:"Excluding Columns from Insert",id:"excluding-columns-from-insert",level:3},{value:"Excluding Columns from Update",id:"excluding-columns-from-update",level:3},{value:"Mapped Records",id:"mapped-records",level:2}],p={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"infix"},"Infix"),(0,i.kt)("p",null,"Infix is a very flexible mechanism to use non-supported features without having to use plain queries in the target language. It allows the insertion of arbitrary strings within quotations."),(0,i.kt)("p",null,"For instance, quill doesn't support the ",(0,i.kt)("inlineCode",{parentName:"p"},"FOR UPDATE")," SQL feature. It can still be used through infix and implicit classes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'implicit final class ForUpdate[T](private val q: Query[T]) extends AnyVal {\n  def forUpdate = quote(sql"$q FOR UPDATE".as[Query[T]])\n}\n\nval a = quote {\n  query[Person].filter(p => p.age < 18).forUpdate\n}\n\nctx.run(a)\n// SELECT p.name, p.age FROM person p WHERE p.age < 18 FOR UPDATE\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"forUpdate")," quotation can be reused for multiple queries."),(0,i.kt)("p",null,"Queries that contain ",(0,i.kt)("inlineCode",{parentName:"p"},"infix")," will generally not be flattened since it is not assumed that the contents\nof the infix are a pure function."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since SQL is typically less performant when there are many nested queries,\nbe careful with the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"infix")," in queries that have multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," clauses.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'final case class Data(id: Int)\nfinal case class DataAndRandom(id: Int, value: Int)\n\n// This should be alright:\nval q = quote {\n  query[Data].map(e => DataAndRandom(e.id, sql"RAND()".as[Int])).filter(r => r.value <= 10)\n}\nrun(q)\n// SELECT e.id, e.value FROM (SELECT RAND() AS value, e.id AS id FROM Data e) AS e WHERE e.value <= 10\n\n// This might not be:\nval q = quote {\n  query[Data]\n    .map(e => DataAndRandom(e.id, sql"SOME_UDF(${e.id})".as[Int]))\n    .filter(r => r.value <= 10)\n    .map(e => DataAndRandom(e.id, sql"SOME_OTHER_UDF(${e.value})".as[Int]))\n    .filter(r => r.value <= 100)\n}\n// Produces too many layers of nesting!\nrun(q)\n// SELECT e.id, e.value FROM (\n//   SELECT SOME_OTHER_UDF(e.value) AS value, e.id AS id FROM (\n//     SELECT SOME_UDF(e.id) AS value, e.id AS id FROM Data e\n//   ) AS e WHERE e.value <= 10\n// ) AS e WHERE e.value <= 100\n')),(0,i.kt)("p",null,"If you are sure that the content of your infix is a pure function, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pure")," method\nin order to indicate to Quill that the infix clause can be copied in the query. This gives Quill much\nmore leeway to flatten your query, possibly improving performance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val q = quote {\n  query[Data]\n    .map(e => DataAndRandom(e.id, sql"SOME_UDF(${e.id})".pure.as[Int]))\n    .filter(r => r.value <= 10)\n    .map(e => DataAndRandom(e.id, sql"SOME_OTHER_UDF(${e.value})".pure.as[Int]))\n    .filter(r => r.value <= 100)\n}\n// Copying SOME_UDF and SOME_OTHER_UDF allows the query to be completely flattened.\nrun(q)\n// SELECT e.id, SOME_OTHER_UDF(SOME_UDF(e.id)) FROM Data e\n// WHERE SOME_UDF(e.id) <= 10 AND SOME_OTHER_UDF(SOME_UDF(e.id)) <= 100\n')),(0,i.kt)("h3",{id:"infixes-with-conditions"},"Infixes With Conditions"),(0,i.kt)("h4",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},'sql"...".asCondition')," to express an infix that represents a conditional expression."),(0,i.kt)("h4",{id:"explanation"},"Explanation"),(0,i.kt)("p",null,"When synthesizing queries for databases which do not have proper boolean-type support (e.g. SQL Server,\nOracle etc...) boolean infix clauses inside projections must become values.\nTypically this requires a ",(0,i.kt)("inlineCode",{parentName:"p"},"CASE WHERE ... END"),"."),(0,i.kt)("p",null,"Take the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Node(name: String, isUp: Boolean, uptime:Long)\nfinal case class Status(name: String, allowed: Boolean)\nval allowedStatus:Boolean = getState\n\nquote {\n  query[Node].map(n => Status(n.name, n.isUp == lift(allowedStatus)))\n}\nrun(q)\n// This is invalid in most databases:\n//   SELECT n.name, n.isUp = ?, uptime FROM Node n\n// It will be converted to this:\n//   SELECT n.name, CASE WHEN (n.isUp = ?) THEN 1 ELSE 0, uptime FROM Node n\n")),(0,i.kt)("p",null,"However, in certain cases, infix clauses that express conditionals should actually represent\nboolean expressions for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'final case class Node(name: String, isUp: Boolean)\nval maxUptime:Boolean = getState\n\nquote {\n  query[Node].filter(n => sql"${n.uptime} > ${lift(maxUptime)}".as[Boolean])\n}\nrun(q)\n// Should be this:\n//  SELECT n.name, n.isUp, n.uptime WHERE n.uptime > ?\n// However since sql"...".as[Boolean] is treated as a Boolean Value (as opposed to an expression) it will be converted to this:\n//  SELECT n.name, n.isUp, n.uptime WHERE 1 == n.uptime > ?\n')),(0,i.kt)("p",null,'In order to avoid this problem, use sql"...".asCondition so that Quill understands that the boolean is an expression:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'quote {\n  query[Node].filter(n => sql"${n.uptime} > ${lift(maxUptime)}".asCondition)\n}\nrun(q) // SELECT n.name, n.isUp, n.uptime WHERE n.uptime > ?\n')),(0,i.kt)("h3",{id:"dynamic-infix"},"Dynamic infix"),(0,i.kt)("p",null,"Infix supports runtime string values through the ",(0,i.kt)("inlineCode",{parentName:"p"},"#$")," prefix. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def test(functionName: String) =\n  ctx.run(query[Person].map(p => sql"#$functionName(${p.name})".as[Int]))\n')),(0,i.kt)("h3",{id:"implicit-extensions"},"Implicit Extensions"),(0,i.kt)("p",null,"You can use implicit extensions in quill in several ways."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE. In ProtoQuill extensions must be written using the Scala 3 ",(0,i.kt)("inlineCode",{parentName:"p"},"extension")," syntax and implicit class extensions are not supported. Please see ",(0,i.kt)("a",{parentName:"p",href:"#extensions-in-protoquillscala3"},"Extensions in ProtoQuill/Scala3")," below for more info.")),(0,i.kt)("h5",{id:"standard-quoted-extension"},"Standard quoted extension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"implicit final class Ext(private val q: Query[Person]) extends AnyVal {\n  def olderThan(age: Int) = quote {\n    query[Person].filter(p => p.age > lift(age))\n  }\n}\nrun(query[Person].olderThan(44))\n// SELECT p.name, p.age FROM Person p WHERE p.age > ?\n")),(0,i.kt)("h5",{id:"higher-order-quoted-extension"},"Higher-order quoted extension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"implicit final class Ext(private val q: Query[Person]) extends AnyVal {\n  def olderThan = quote {\n    (age: Int) =>\n      query[Person].filter(p => p.age > lift(age))\n  }\n}\nrun(query[Person].olderThan(44))\n// SELECT p.name, p.age FROM Person p WHERE p.age > 44\n\nrun(query[Person].olderThan(lift(44)))\n// SELECT p.name, p.age FROM Person p WHERE p.age > ?\n")),(0,i.kt)("p",null,"The advantage of this approach is that you can choose to either lift or use a constant."),(0,i.kt)("h5",{id:"scalar-quoted-extension"},"Scalar quoted extension:"),(0,i.kt)("p",null,"Just as ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," can be extended, scalar values can be similarly extended."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"implicit final class Ext(private val i: Int) extends AnyVal {\n  def between = quote {\n    (a: Int, b:Int) =>\n      i > a && i < b\n  }\n}\nrun(query[Person].filter(p => p.age.between(33, 44)))\n// SELECT p.name, p.age FROM Person p WHERE p.age > 33 AND p.age < 44\n")),(0,i.kt)("h5",{id:"extensions-in-protoquillscala3"},"Extensions in ProtoQuill/Scala3:"),(0,i.kt)("p",null,"In ProtoQuill, the implicit class pattern for extensions is not supported. Please switch to using Scala 3 extension methods combined with inline definitions to achieve the same functionality."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",3:!0,className:"language-scala",metastring:"3"},"extension (q: Query[Person]) {\n  inline def olderThan(inline age: Int) = quote {\n    query[Person].filter(p => p.age > lift(age))\n  }\n}\nrun(query[Person].olderThan(44))\n// SELECT p.name, p.age FROM Person p WHERE p.age > ?\n")),(0,i.kt)("h3",{id:"raw-sql-queries"},"Raw SQL queries"),(0,i.kt)("p",null,"You can also use infix to port raw SQL queries to Quill and map it to regular Scala tuples."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val rawQuery = quote {\n  (id: Int) => sql"""SELECT id, name FROM my_entity WHERE id = $id""".as[Query[(Int, String)]]\n}\nctx.run(rawQuery(1))\n//SELECT x._1, x._2 FROM (SELECT id AS "_1", name AS "_2" FROM my_entity WHERE id = 1) x\n')),(0,i.kt)("p",null,"Note that in this case the result query is nested.\nIt's required since Quill is not aware of a query tree and cannot safely unnest it.\nThis is different from the example above because infix starts with the query ",(0,i.kt)("inlineCode",{parentName:"p"},'sql"$q...')," where its tree is already compiled"),(0,i.kt)("h3",{id:"database-functions"},"Database functions"),(0,i.kt)("p",null,"A custom database function can also be used through infix:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val myFunction = quote {\n  (i: Int) => sql"MY_FUNCTION($i)".as[Int]\n}\n\nval q = quote {\n  query[Person].map(p => myFunction(p.age))\n}\n\nctx.run(q)\n// SELECT MY_FUNCTION(p.age) FROM Person p\n')),(0,i.kt)("h3",{id:"comparison-operators"},"Comparison operators"),(0,i.kt)("p",null,"The easiest way to use comparison operators with dates is to import them from the ",(0,i.kt)("inlineCode",{parentName:"p"},"extras")," module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Person(name: String, bornOn: java.util.Date)\n\nval ctx = new SqlMirrorContext(PostgresDialect, Literal)\nimport ctx._\nimport extras._ /* importing the > operator among other things */\n\nrun(query[Person].filter(p => p.bornOn > lift(myDate)))\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that in ProtoQuill you should import ",(0,i.kt)("inlineCode",{parentName:"p"},"io.getquill.extras._")," since they are now global.")),(0,i.kt)("h4",{id:"using-ordered"},"Using Ordered"),(0,i.kt)("p",null,"You can also define an implicit-class that converts your Date/Numeric type to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Ordered[YourType]"),"\nwhich will also give it ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," etc... comparison operators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"implicit final class LocalDateTimeOps(val value: MyCustomNumber) extends Ordered[MyCustomNumber] {\n  def compare(that: MyCustomNumber): Int = value.compareTo(that)\n}\n")),(0,i.kt)("p",null,"Note that Quill will not actually use this ",(0,i.kt)("inlineCode",{parentName:"p"},"compare")," method, that is strictly for your own\ndata needs. You can technically define it as ",(0,i.kt)("inlineCode",{parentName:"p"},"def compare(that: MyCustomNumber): Int = ???"),"\nbecause Quill will never actually invoke this function. It uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalDateTimeOps"),"\nmerely as a sort of marker to know that the ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," operators etc... can be transpiled to SQL."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that although in ProtoQuill implicit-class based approaches are generally not supported,\nthis particular pattern will work as well.")),(0,i.kt)("h4",{id:"using-implicit-classes"},"Using Implicit Classes"),(0,i.kt)("p",null,"Finally, can implement comparison operators (or any other kinds of operators) by defining\nimplicit conversion and using infix."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'implicit final class DateQuotes(private val left: MyCustomDate) extends AnyVal {\n  def >(right: MyCustomDate) = quote(sql"$left > $right".as[Boolean])\n  def <(right: MyCustomDate) = quote(sql"$left < $right".as[Boolean])\n}\n')),(0,i.kt)("h3",{id:"batch-with-infix"},"batch with infix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'implicit final class OnDuplicateKeyIgnore[T](private val q: Insert[T]) extends AnyVal {\n  def ignoreDuplicate = quote(sql"$q ON DUPLICATE KEY UPDATE id=id".as[Insert[T]])\n}\n\nctx.run(\n  liftQuery(List(\n    Person(1, "Test1", 30),\n    Person(2, "Test2", 31)\n  )).foreach(row => query[Person].insertValue(row).ignoreDuplicate)\n)\n')),(0,i.kt)("h2",{id:"custom-encoding"},"Custom encoding"),(0,i.kt)("p",null,"Quill uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Encoder"),"s to encode query inputs and ",(0,i.kt)("inlineCode",{parentName:"p"},"Decoder"),"s to read values returned by queries. The library provides a few built-in encodings and two mechanisms to define custom encodings: mapped encoding and raw encoding."),(0,i.kt)("h3",{id:"mapped-encoding"},"Mapped Encoding"),(0,i.kt)("p",null,"If the correspondent database type is already supported, use ",(0,i.kt)("inlineCode",{parentName:"p"},"MappedEncoding"),". In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," is already supported by Quill and the ",(0,i.kt)("inlineCode",{parentName:"p"},"UUID")," encoding from/to ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," is defined through mapped encoding:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import ctx._\nimport java.util.UUID\n\nimplicit val encodeUUID = MappedEncoding[UUID, String](_.toString)\nimplicit val decodeUUID = MappedEncoding[String, UUID](UUID.fromString(_))\n")),(0,i.kt)("p",null,"A mapped encoding also can be defined without a context instance by importing ",(0,i.kt)("inlineCode",{parentName:"p"},"io.getquill.MappedEncoding"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import io.getquill.MappedEncoding\nimport java.util.UUID\n\nimplicit val encodeUUID = MappedEncoding[UUID, String](_.toString)\nimplicit val decodeUUID = MappedEncoding[String, UUID](UUID.fromString(_))\n")),(0,i.kt)("p",null,"Note that can it be also used to provide mapping for element types of collection (SQL Arrays or Cassandra Collections)."),(0,i.kt)("h3",{id:"raw-encoding"},"Raw Encoding"),(0,i.kt)("p",null,'If the database type is not supported by Quill, it is possible to provide "raw" encoders and decoders:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'trait UUIDEncodingExample {\n  val jdbcContext: PostgresJdbcContext[Literal] // your context should go here\n\n  import jdbcContext._\n\n  implicit val uuidDecoder: Decoder[UUID] =\n    decoder((index, row) =>\n      UUID.fromString(row.getObject(index).toString)) // database-specific implementation\n\n  implicit val uuidEncoder: Encoder[UUID] =\n    encoder(java.sql.Types.OTHER, (index, value, row) =>\n        row.setObject(index, value, java.sql.Types.OTHER)) // database-specific implementation\n\n  // Only for postgres\n  implicit def arrayUUIDEncoder[Col <: Seq[UUID]]: Encoder[Col] = arrayRawEncoder[UUID, Col]("uuid")\n  implicit def arrayUUIDDecoder[Col <: Seq[UUID]](implicit bf: CBF[UUID, Col]): Decoder[Col] =\n    arrayRawDecoder[UUID, Col]\n}\n')),(0,i.kt)("h2",{id:"anyval"},(0,i.kt)("inlineCode",{parentName:"h2"},"AnyVal")),(0,i.kt)("p",null,"Quill automatically encodes ",(0,i.kt)("inlineCode",{parentName:"p"},"AnyVal"),"s (value classes):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"final case class UserId(value: Int) extends AnyVal\nfinal case class User(id: UserId, name: String)\n\nval q = quote {\n  for {\n    u <- query[User] if u.id == lift(UserId(1))\n  } yield u\n}\n\nctx.run(q)\n// SELECT u.id, u.name FROM User u WHERE (u.id = 1)\n")),(0,i.kt)("h2",{id:"tablecolumn-customizations"},"Table/Column Customizations"),(0,i.kt)("p",null,"The meta DSL allows the user to customize how Quill handles column/table naming and behavior."),(0,i.kt)("h3",{id:"changing-table-and-column-names"},"Changing Table and Column Names"),(0,i.kt)("p",null,"You can change how Quill queries handle table and column names for a record case class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def example = {\n  implicit val personSchemaMeta = schemaMeta[Person]("people", _.id -> "person_id")\n\n  ctx.run(query[Person])\n  // SELECT x.person_id, x.name, x.age FROM people x\n}\n')),(0,i.kt)("p",null,"By default, quill expands ",(0,i.kt)("inlineCode",{parentName:"p"},"query[Person]")," to ",(0,i.kt)("inlineCode",{parentName:"p"},'querySchema[Person]("Person")'),". It's possible to customize this behavior using an implicit instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaMeta"),":"),(0,i.kt)("h3",{id:"excluding-columns-from-insert"},"Excluding Columns from Insert"),(0,i.kt)("p",null,"You can exclude columns (e.g. Auto-Generated ones) from insertion in ",(0,i.kt)("inlineCode",{parentName:"p"},"q.insertValue(...)")," by using an ",(0,i.kt)("inlineCode",{parentName:"p"},"InsertMeta"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'implicit val personInsertMeta = insertMeta[Person](_.id)\n\nctx.run(query[Person].insertValue(lift(Person(-1, "John", 22))))\n// INSERT INTO Person (name,age) VALUES (?, ?)\n')),(0,i.kt)("p",null,"Note that the parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"insertMeta")," is called ",(0,i.kt)("inlineCode",{parentName:"p"},"exclude"),", but it isn't possible to use named parameters for macro invocations."),(0,i.kt)("h3",{id:"excluding-columns-from-update"},"Excluding Columns from Update"),(0,i.kt)("p",null,"You can exclude columns (e.g. Auto-Generated ones) from updates in ",(0,i.kt)("inlineCode",{parentName:"p"},"q.insertValue(...)")," by using an ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateMeta"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'implicit val personUpdateMeta = updateMeta[Person](_.id)\n\nctx.run(query[Person].filter(_.id == 1).updateValue(lift(Person(1, "John", 22))))\n// UPDATE Person SET name = ?, age = ? WHERE id = 1\n')),(0,i.kt)("p",null,"Note that the parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"updateMeta")," is called ",(0,i.kt)("inlineCode",{parentName:"p"},"exclude"),", but it isn't possible to use named parameters for macro invocations."),(0,i.kt)("h2",{id:"mapped-records"},"Mapped Records"),(0,i.kt)("p",null,"The QueryMeta customizes the expansion of query types and extraction of the final value. For instance, it's possible to use this feature to normalize values before reading them from the database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'implicit val personQueryMeta =\n  queryMeta(\n    (q: Query[Person]) =>\n      q.map(p => (p.id, sql"CONVERT(${p.name} USING utf8)".as[String], p.age))\n  ) {\n    case (id, name, age) =>\n      Person(id, name, age)\n  }\n')),(0,i.kt)("p",null,"The query meta definition is open and allows the user to even join values from other tables before reading the final value. This kind of usage is not encouraged."))}c.isMDXComponent=!0}}]);