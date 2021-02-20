(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{222:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return c}));var n=t(3),a=t(7),o=(t(0),t(234)),s={id:"graphql-request-parser",title:"GraphQLRequestParser",original_id:"graphql-request-parser"},i={unversionedId:"server/graphql-request-parser",id:"version-4.x.x/server/graphql-request-parser",isDocsHomePage:!1,title:"GraphQLRequestParser",description:"The GraphQLRequestParser interface is requrired to parse the library-specific HTTP request object into the common GraphQLRequest class from graphql-kotlin-types.",source:"@site/versioned_docs/version-4.x.x/server/graphql-request-parser.md",slug:"/server/graphql-request-parser",permalink:"/graphql-kotlin/docs/server/graphql-request-parser",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/graphql-request-parser.md",version:"4.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1613785270,sidebar:"version-4.x.x/docs",previous:{title:"GraphQLServer",permalink:"/graphql-kotlin/docs/server/graphql-server"},next:{title:"GraphQLContextFactory",permalink:"/graphql-kotlin/docs/server/graphql-context-factory"}},l=[],p={toc:l};function c(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLRequestParser")," interface is requrired to parse the library-specific HTTP request object into the common ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLRequest")," class from ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-types"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\ninterface GraphQLRequestParser<Request> {\n    suspend fun parseRequest(request: Request): GraphQLServerRequest<*>?\n}\n\n")),Object(o.b)("p",null,"While not officially part of the spec, there is a standard format used by most GraphQL clients and servers for ",Object(o.b)("a",{parentName:"p",href:"https://graphql.org/learn/serving-over-http/"},"serving GraphQL over HTTP"),".\nFollowing the above convention, GraphQL clients should generally use HTTP POST requests with the following body structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'\n{\n  "query": "...",\n  "operationName": "...",\n  "variables": { "myVariable": "someValue" }\n}\n\n')),Object(o.b)("p",null,"where"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"query")," is a required field and contains operation (query, mutation or subscription) that specify their selection set to be executed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"operationName")," is an optional operation name, only required if multiple operations are specified in ",Object(o.b)("inlineCode",{parentName:"li"},"query")," string"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"variables")," is an optional field that holds an arbitrary JSON objects that are referenced as input arguments from ",Object(o.b)("inlineCode",{parentName:"li"},"query")," string")),Object(o.b)("p",null,"GraphQL Kotlin server supports both single and batch GraphQL requests. Batch requests are represented as a list of individual\nGraphQL requests. When processing batch requests, same context will be used for processing all requests and server will respond\nwith a list of GraphQL responses."),Object(o.b)("p",null,"If the request is not a valid GraphQL format, the interface should return ",Object(o.b)("inlineCode",{parentName:"p"},"null")," and let the server specific code return a bad request status to the client.\nThis is not the same as a GraphQL error or an exception thrown by the schema.\nThose types of errors should still parse the request and return a valid response with errors set via the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-request-handler"},"GraphQLRequestHandler"),"."),Object(o.b)("p",null,"This interface should only be concerned with parsing the request, not about forwarding info to the context or execution.\nThat is handled by the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-context-factory"},"GraphQLContextFactory"),"."))}c.isMDXComponent=!0},234:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),c=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},h=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=n,d=u["".concat(s,".").concat(h)]||u[h]||b[h]||o;return t?a.a.createElement(d,i(i({ref:r},p),{},{components:t})):a.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=h;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);