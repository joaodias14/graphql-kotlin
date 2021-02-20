(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return s})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return c})),n.d(r,"default",(function(){return l}));var t=n(3),i=n(7),o=(n(0),n(234)),s={id:"server-subscriptions",title:"Subscriptions",original_id:"server-subscriptions"},a={unversionedId:"server/server-subscriptions",id:"version-4.x.x/server/server-subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"If you are using one of the official server implementations for GraphQL Kotlin, it will have subscription handling setup for you.",source:"@site/versioned_docs/version-4.x.x/server/server-subscriptions.md",slug:"/server/server-subscriptions",permalink:"/graphql-kotlin/docs/server/server-subscriptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/server-subscriptions.md",version:"4.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1613785270,sidebar:"version-4.x.x/docs",previous:{title:"Data Loaders",permalink:"/graphql-kotlin/docs/server/data-loaders"},next:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/server/spring-server/spring-overview"}},c=[],p={toc:c};function l(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you are using one of the official server implementations for GraphQL Kotlin, it will have subscription handling setup for you."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"See ",Object(o.b)("inlineCode",{parentName:"li"},"graphql-kotlin-spring-server")," ",Object(o.b)("a",{parentName:"li",href:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions"},"subscriptions"))),Object(o.b)("p",null,"Subscriptions require a more indepth knoweldge of how the specific server library handles protocols and streaming.\nSince we can only support ",Object(o.b)("inlineCode",{parentName:"p"},"Publisher")," from ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-java")," in this common library, we can not provide any common logic for subscriptions.\nTherefore you will still need to implement the route and request handling for subscriptions separately if you are not using a provided server implementation."))}l.isMDXComponent=!0},234:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return d}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var r=i.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=l(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},f=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=t,d=u["".concat(s,".").concat(f)]||u[f]||b[f]||o;return n?i.a.createElement(d,a(a({ref:r},p),{},{components:n})):i.a.createElement(d,a({ref:r},p))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:t,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);