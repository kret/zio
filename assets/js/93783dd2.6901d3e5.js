"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[59793],{15680:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>y});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?t.createElement(y,i(i({ref:r},l),{},{components:n})):t.createElement(y,i({ref:r},l))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59456:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var t=n(58168),o=(n(96540),n(15680));const a={id:"secure-random",title:"Secure Random"},i=void 0,c={unversionedId:"zio-crypto/secure-random",id:"zio-crypto/secure-random",title:"Secure Random",description:"The implementation wraps java.crypto.SecureRandom with ZIO bindings.",source:"@site/docs/zio-crypto/secure-random.md",sourceDirName:"zio-crypto",slug:"/zio-crypto/secure-random",permalink:"/zio-crypto/secure-random",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-crypto/secure-random.md",tags:[],version:"current",frontMatter:{id:"secure-random",title:"Secure Random"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Crypto",permalink:"/zio-crypto/"},next:{title:"Hash",permalink:"/zio-crypto/hash"}},p={},s=[{value:"Random Strings",id:"random-strings",level:2},{value:"Random Bytes",id:"random-bytes",level:2},{value:"Runnable Example",id:"runnable-example",level:2}],l={toc:s},d="wrapper";function m(e){let{components:r,...n}=e;return(0,o.yg)(d,(0,t.A)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The implementation wraps ",(0,o.yg)("inlineCode",{parentName:"p"},"java.crypto.SecureRandom")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO")," bindings.\nWe choose the system-default security Provider."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"SecureRandom")," generates random bytes, and random base64-encoded strings."),(0,o.yg)("h2",{id:"random-strings"},"Random Strings"),(0,o.yg)("p",null,"Strings generated from ",(0,o.yg)("inlineCode",{parentName:"p"},"SecureRandom")," are base-64 encoded.\nThis encoding means that generated strings are longer than\nthe supplied ",(0,o.yg)("inlineCode",{parentName:"p"},"entropyBytes"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.crypto.random.SecureRandom\nSecureRandom.nextString(entropyBytes = 8)\n")),(0,o.yg)("h2",{id:"random-bytes"},"Random Bytes"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.crypto.random.SecureRandom\nSecureRandom.nextBytes(5)\n")),(0,o.yg)("h2",{id:"runnable-example"},"Runnable Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.crypto.random.SecureRandom\n\nobject Example extends zio.App {\n    override def run(args: List[String]) = (for {\n        randBytes <- SecureRandom.nextBytes(5)\n        randString <- SecureRandom.nextString(5)\n    } yield ExitCode.success)\n      .provideCustomLayer(SecureRandom.live.orDie)\n    \n}\n")))}m.isMDXComponent=!0}}]);