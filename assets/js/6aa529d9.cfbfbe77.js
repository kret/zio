"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[32324],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>m});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=a,m=u["".concat(c,".").concat(h)]||u[h]||f[h]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},25292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(45072),a=(t(11504),t(95788));const i={id:"channel-interruption",title:"Channel Interruption"},o=void 0,l={unversionedId:"reference/stream/zchannel/channel-interruption",id:"reference/stream/zchannel/channel-interruption",title:"Channel Interruption",description:"We can interrupt a channel using the ZChannel.interruptWhen operator. It takes a ZIO effect that will be evaluated, if it finishes before the channel is closed, it will interrupt the channel, and the terminal value of the returned channel will be the success value of the effect:",source:"@site/docs/reference/stream/zchannel/channel-interruption.md",sourceDirName:"reference/stream/zchannel",slug:"/reference/stream/zchannel/channel-interruption",permalink:"/reference/stream/zchannel/channel-interruption",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zchannel/channel-interruption.md",tags:[],version:"current",frontMatter:{id:"channel-interruption",title:"Channel Interruption"},sidebar:"reference-sidebar",previous:{title:"Channel Operations",permalink:"/reference/stream/zchannel/channel-operations"},next:{title:"SubscriptionRef",permalink:"/reference/stream/subscription-ref"}},c={},p=[],s={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"We can interrupt a channel using the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZChannel.interruptWhen")," operator. It takes a ZIO effect that will be evaluated, if it finishes before the channel is closed, it will interrupt the channel, and the terminal value of the returned channel will be the success value of the effect:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\n\ndef randomNumbers: ZChannel[Any, Any, Any, Any, Nothing, Int, Nothing] =\n  ZChannel\n    .fromZIO(Random.nextIntBounded(100))\n    .flatMap(ZChannel.write) *>\n    ZChannel.fromZIO(ZIO.sleep(1.second)) *> randomNumbers\n\nrandomNumbers.interruptWhen(ZIO.sleep(3.seconds).as("Done!")).runCollect.debug\n// One output: (Chunk(84,57,70),Done!)\n')),(0,a.yg)("p",null,"Another version of ",(0,a.yg)("inlineCode",{parentName:"p"},"interruptWhen")," takes a ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise")," as an argument. It will interrupt the channel when the promise is fulfilled:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\nfor {\n  p <- Promise.make[Nothing, Unit]\n  f <- randomNumbers\n    .interruptWhen(p)\n    .mapOutZIO(e => Console.printLine(e))\n    .runDrain\n    .fork\n  _ <- p.succeed(()).delay(5.seconds)\n  _ <- f.join\n} yield ()\n")))}f.isMDXComponent=!0}}]);