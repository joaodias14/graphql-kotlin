(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(234)),c={id:"contextual-data",title:"Contextual Data",original_id:"contextual-data"},i={unversionedId:"schema-generator/execution/contextual-data",id:"version-4.x.x/schema-generator/execution/contextual-data",isDocsHomePage:!1,title:"Contextual Data",description:'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL',source:"@site/versioned_docs/version-4.x.x/schema-generator/execution/contextual-data.md",slug:"/schema-generator/execution/contextual-data",permalink:"/graphql-kotlin/docs/schema-generator/execution/contextual-data",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/execution/contextual-data.md",version:"4.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1613785270,sidebar:"version-4.x.x/docs",previous:{title:"Data Fetching Environment",permalink:"/graphql-kotlin/docs/schema-generator/execution/data-fetching-environment"},next:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/schema-generator/execution/optional-undefined-arguments"}},s=[{value:"GraphQLContext Interface",id:"graphqlcontext-interface",children:[]},{value:"Injection Customization",id:"injection-customization",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL\nserver, but shouldn\'t necessarily be part of the GraphQL schema. A prime example of something that is appropriate\nfor the GraphQL context would be trace headers for an OpenTracing system such as\n',Object(o.b)("a",{parentName:"p",href:"https://expediadotcom.github.io/haystack"},"Haystack"),". The GraphQL query does not need the information to perform\nits function, but the server needs the information to ensure observability."),Object(o.b)("p",null,"The contents of the GraphQL context vary across applications and it is up to the GraphQL server developers to decide\nwhat it should contain. ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," provides a simple mechanism to\nbuild context per query execution through\n",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-context-factory"},"GraphQLContextFactory"),".\nOnce a context factory is available it will then be used to populate GraphQL context based on the incoming request and make it available during query execution."),Object(o.b)("h2",{id:"graphqlcontext-interface"},"GraphQLContext Interface"),Object(o.b)("p",null,"The easiest way to specify a context class is to use the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLContext")," marker interface. This interface does not require any implementations,\nit is just used to inform the schema generator that this is the class that should be used as the context for every request."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass MyGraphQLContext(val customValue: String) : GraphQLContext\n\n")),Object(o.b)("p",null,"Then you can just use the class as an argument and it will be automatically injected during execution time."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nclass ContextualQuery {\n    fun contextualQuery(\n        context: MyGraphQLContext,\n        value: Int\n    ): String = "The custom value was ${context.customValue} and the value was $value"\n}\n\n')),Object(o.b)("p",null,"The above query would produce the following GraphQL schema:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n  query: Query\n}\n\ntype Query {\n  contextualQuery(value: Int!): String!\n}\n\n")),Object(o.b)("p",null,"Note that the argument that implements ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLContext")," is not reflected in the GraphQL schema."),Object(o.b)("h2",{id:"injection-customization"},"Injection Customization"),Object(o.b)("p",null,"The context is injected into the execution through the ",Object(o.b)("inlineCode",{parentName:"p"},"FunctionDataFetcher")," class.\nIf you want to customize the logic on how the context is determined, that is possible to override.\nSee more details on the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/fetching-data"},"Fetching Data documentation")))}u.isMDXComponent=!0},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);