"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1204],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,m=c["".concat(s,".").concat(g)]||c[g]||h[g]||l;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={id:"build-a-graphql-webservice",title:"Tutorial: How to Build a GraphQL Web Service",sidebar_label:"Building a GraphQL Web Service"},i=void 0,o={unversionedId:"guides/tutorials/build-a-graphql-webservice",id:"guides/tutorials/build-a-graphql-webservice",title:"Tutorial: How to Build a GraphQL Web Service",description:"Having GraphQL APIs enables the clients the ability to query the exact data they need. This powerful feature makes GraphQL more flexible than RESTful APIs.",source:"@site/docs/guides/tutorials/build-a-graphql-webservice.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/build-a-graphql-webservice",permalink:"/guides/tutorials/build-a-graphql-webservice",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/build-a-graphql-webservice.md",tags:[],version:"current",frontMatter:{id:"build-a-graphql-webservice",title:"Tutorial: How to Build a GraphQL Web Service",sidebar_label:"Building a GraphQL Web Service"},sidebar:"guides-sidebar",previous:{title:"Building a RESTful Web Service",permalink:"/guides/tutorials/build-a-restful-webservice"},next:{title:"Gracefully Shutdown ZIO Applications",permalink:"/guides/tutorials/gracefully-shutdown-zio-application"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Creating a GraphQL Schema",id:"creating-a-graphql-schema",level:2},{value:"Running the GraphQL Server",id:"running-the-graphql-server",level:2},{value:"Effectful Queries",id:"effectful-queries",level:2},{value:"Running the GraphQL Client",id:"running-the-graphql-client",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Having GraphQL APIs enables the clients the ability to query the exact data they need. This powerful feature makes GraphQL more flexible than RESTful APIs. "),(0,r.yg)("p",null,"Instead of having endpoints for our resources, the GraphQL API only provides a set of types and fields in terms of schemas. The client can ask for this schema, and that will help the client to know what kind of data they can expect from the server, and finally, the client can use the schema to build its queries."),(0,r.yg)("p",null,"GraphQL supports three types of operations: ",(0,r.yg)("strong",{parentName:"p"},"queries"),", ",(0,r.yg)("strong",{parentName:"p"},"mutations"),", and ",(0,r.yg)("strong",{parentName:"p"},"subscriptions"),". In this tutorial, we are going to learn the foundation of GraphQL using ",(0,r.yg)("em",{parentName:"p"},"queries"),". Once we learned that, we can easily write two other types of operations."),(0,r.yg)("p",null,"The corresponding source code for this tutorial is available on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-quickstarts"},"GitHub"),". If you haven't read the ",(0,r.yg)("a",{parentName:"p",href:"/guides/quickstarts/graphql-webservice"},"ZIO Quickstart: Building GraphQL Web Service")," yet, we recommend you to read it first and download and run the source code, before reading this tutorial."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"In this tutorial, we will build a GraphQL API using ",(0,r.yg)("em",{parentName:"p"},"Caliban"),", and in order to serve it, we will use the ",(0,r.yg)("em",{parentName:"p"},"ZIO HTTP")," library. So let's install the necessary dependencies by putting the following lines in the ",(0,r.yg)("em",{parentName:"p"},"build.sbt")," file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sbt"},'libraryDependencies ++= Seq(\n  "dev.zio"               %% "zio"              % "2.0.0",\n  "com.github.ghostdogpr" %% "caliban"          % "2.0.0",\n  "com.github.ghostdogpr" %% "caliban-zio-http" % "2.0.0",\n  "io.d11"                %% "zhttp"            % "2.0.0-RC10"\n)\n')),(0,r.yg)("p",null,"Now, we are ready to jump into the next section."),(0,r.yg)("h2",{id:"creating-a-graphql-schema"},"Creating a GraphQL Schema"),(0,r.yg)("p",null,"When working with GraphQL, we need to define a ",(0,r.yg)("em",{parentName:"p"},"schema"),", which defines what kind of data with which types we can query. In GraphQL, schemas are defined in their type system. For example, assume we have a data type called ",(0,r.yg)("em",{parentName:"p"},"Employee"),", which had defined in scala as the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"case class Employee(name: String, role: Role)\n\nsealed trait Role\nobject Role {\n  case object SoftwareDeveloper       extends Role\n  case object SiteReliabilityEngineer extends Role\n  case object DevOps                  extends Role\n}\n")),(0,r.yg)("p",null,"It has two fields, ",(0,r.yg)("em",{parentName:"p"},"name"),", and ",(0,r.yg)("em",{parentName:"p"},"role"),", and the ",(0,r.yg)("em",{parentName:"p"},"role")," field is a ",(0,r.yg)("em",{parentName:"p"},"sealed trait"),", which means that it can only be one of the three values, ",(0,r.yg)("em",{parentName:"p"},"SoftwareDeveloper"),", ",(0,r.yg)("em",{parentName:"p"},"SiteReliabilityEngineer"),", or ",(0,r.yg)("em",{parentName:"p"},"DevOps"),"."),(0,r.yg)("p",null,"If we want to define such a data type in GraphQL, we have something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"type Employee {\n  name: String!\n  role: Role!\n}\n\nenum Role {\n  SoftwareDeveloper\n  SiteReliabilityEngineer\n  DevOps\n}\n")),(0,r.yg)("p",null,"After defining the schema for our data types, the next step is to define queries that can be performed on the data. For example, if we want to query all the employees with a specific role, we can do that like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"type Queries {\n  employees(role: Role!): [Employee!]!\n}\n")),(0,r.yg)("p",null,"Similarly, if we want to query an employee by its name, we can define that like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"type Queries {\n  employee(name: String!): Employee\n}\n")),(0,r.yg)("p",null,"Fortunately, we are not required to define the schema in GraphQL manually. Instead, we can use the ",(0,r.yg)("em",{parentName:"p"},"Caliban")," library which has a built-in facility to generate the schema from our data types defined in Scala:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"case class EmployeesArgs(role: Role)\ncase class EmployeeArgs(name: String)\n\ncase class Queries(\n    employees: EmployeesArgs => List[Employee],\n    employee: EmployeeArgs => Option[Employee]\n)\n")),(0,r.yg)("h2",{id:"running-the-graphql-server"},"Running the GraphQL Server"),(0,r.yg)("p",null,"After defining all the queries, in order to serve the GraphQL API, we need to perform the following steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a ",(0,r.yg)("inlineCode",{parentName:"li"},"GraphQLInterpreter")," instance, which is a wrapper around the ",(0,r.yg)("em",{parentName:"li"},"GraphQL API"),". It allows us to add some middleware around the query execution."),(0,r.yg)("li",{parentName:"ol"},"Create an ",(0,r.yg)("inlineCode",{parentName:"li"},"HttpApp")," instance from the ",(0,r.yg)("inlineCode",{parentName:"li"},"GraphQLInterpreter")," instance. We can do this by using the ",(0,r.yg)("inlineCode",{parentName:"li"},"ZHttpAdapter.makeHttpService")," defined in the ",(0,r.yg)("inlineCode",{parentName:"li"},"caliban-zio-http")," module."),(0,r.yg)("li",{parentName:"ol"},"Serve the resulting ",(0,r.yg)("inlineCode",{parentName:"li"},"HttpApp")," instance using the ",(0,r.yg)("inlineCode",{parentName:"li"},"Server.start")," method of the ",(0,r.yg)("em",{parentName:"li"},"ZIO HTTP")," module.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import caliban.GraphQL.graphQL\nimport caliban.{RootResolver, ZHttpAdapter}\nimport zhttp.http._\nimport zhttp.service.Server\nimport zio.ZIOAppDefault\n\nimport scala.language.postfixOps\n\nobject MainApp extends ZIOAppDefault {\n\n  private val employees = List(\n    Employee("Alex", Role.DevOps),\n    Employee("Maria", Role.SoftwareDeveloper),\n    Employee("James", Role.SiteReliabilityEngineer),\n    Employee("Peter", Role.SoftwareDeveloper),\n    Employee("Julia", Role.SiteReliabilityEngineer),\n    Employee("Roberta", Role.DevOps)\n  )\n\n  override def run =\n    graphQL(\n      RootResolver(\n        Queries(\n          args => employees.filter(e => args.role == e.role),\n          args => employees.find(e => e.name == args.name)\n        )\n      )\n    ).interpreter.flatMap(interpreter =>\n      Server\n        .start(\n          port = 8088,\n          http = Http.collectHttp { case _ -> !! / "api" / "graphql" =>\n            ZHttpAdapter.makeHttpService(interpreter)\n          }\n        )\n    )\n\n}\n')),(0,r.yg)("h2",{id:"effectful-queries"},"Effectful Queries"),(0,r.yg)("p",null,"In the previous section, we used an in-memory data structure to store the data. But, in real-world applications we usually want to perform some kind of effectful queries to retrieve the data from the database. In such cases, we can use queries that return ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," values:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-diff"},"case class Queries(\n-    employees: EmployeesArgs => List[Employee],\n+    employees: EmployeesArgs => ZIO[UserRepo, Throwable, List[Employee]],\n-    employee: EmployeeArgs => Option[Employee]\n_    employee: EmployeeArgs => ZIO[UserRepo, Throwable, Option[Employee]]\n)\n")),(0,r.yg)("p",null,"As we see, each query is a function that takes some arguments and returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," workflow."),(0,r.yg)("h2",{id:"running-the-graphql-client"},"Running the GraphQL Client"),(0,r.yg)("p",null,"In this project, we have defined models of our employees with their names and roles. Then using GraphQL annotations, we asked Caliban to derive the GraphQL schema from these models."),(0,r.yg)("p",null,"So we can query all the employees that are software developers using the GraphQL query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"query{\n  employees(role: SoftwareDeveloper){\n    name\n    role\n  }\n}\n")),(0,r.yg)("p",null,"To run this query, we can use any of the GraphGL clients or use the following curl command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl 'http://localhost:8088/api/graphql' --data-binary '{\"query\":\"query{\\n employees(role: SoftwareDeveloper){\\n name\\n role\\n}\\n}\"}'\n")),(0,r.yg)("p",null,"The response will be as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data" : {\n    "employees" : [\n      {\n        "name" : "Maria",\n        "role" : "SoftwareDeveloper"\n      },\n      {\n        "name" : "Peter",\n        "role" : "SoftwareDeveloper"\n      }\n    ]\n  }\n}\n')),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"In this tutorial, we learned the basic elements of writing GraphQL web services, using the ",(0,r.yg)("em",{parentName:"p"},"Caliban")," library. Caliban has great documentation, which can be found ",(0,r.yg)("a",{parentName:"p",href:"https://ghostdogpr.github.io/caliban/"},"here"),". We can learn more about this project by visiting its website."),(0,r.yg)("p",null,"All the source code associated with this article is available on the ",(0,r.yg)("a",{parentName:"p",href:"http://github.com/zio/zio-quickstarts"},"ZIO Quickstart")," project."))}h.isMDXComponent=!0}}]);