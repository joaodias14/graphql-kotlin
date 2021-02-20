(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{101:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(7),i=(r(0),r(234)),o={id:"spring-schema",title:"Writing Schemas with Spring"},s={unversionedId:"server/spring-server/spring-schema",id:"server/spring-server/spring-schema",isDocsHomePage:!1,title:"Writing Schemas with Spring",description:"In order to expose your queries, mutations and/or subscriptions in the GraphQL schema you simply need to create beans that",source:"@site/docs/server/spring-server/spring-schema.md",slug:"/server/spring-server/spring-schema",permalink:"/graphql-kotlin/docs/next/server/spring-server/spring-schema",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-schema.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1613785270,sidebar:"docs",previous:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/next/server/spring-server/spring-properties"},next:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/next/server/spring-server/spring-graphql-context"}},p=[{value:"Spring Query Beans",id:"spring-query-beans",children:[]},{value:"Spring Data Fetcher",id:"spring-data-fetcher",children:[]},{value:"Spring BeanFactoryAware",id:"spring-beanfactoryaware",children:[]}],c={toc:p};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to expose your queries, mutations and/or subscriptions in the GraphQL schema you simply need to create beans that\nimplement corresponding marker interface and they will be automatically picked up by ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),"\nauto-configuration library."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"\n@Component\nclass MyAwesomeQuery : Query {\n  fun myAwesomeQuery(): Widget { ... }\n}\n\n@Component\nclass MyAwesomeMutation : Mutation {\n  fun myAwesomeMutation(widget: Widget): Widget { ... }\n}\n\n@Component\nclass MyAwesomeSubscription : Subscription {\n  fun myAwesomeSubscription(): Publisher<Widget> { ... }\n}\n\ndata class Widget(val id: Int, val value: String)\n\n")),Object(i.b)("p",null,"will result in a Spring Boot reactive GraphQL web application with following schema."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n\ntype Query {\n  myAwesomeQuery: Widget!\n}\n\ntype Mutation {\n  myAwesomeMutation(widget: WidgetInput!): Widget!\n}\n\ntype Subscription {\n  myAwesomeSubscription: Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n\ninput WidgetInput {\n  id: Int!\n  value: String!\n}\n\n")),Object(i.b)("h2",{id:"spring-query-beans"},"Spring Query Beans"),Object(i.b)("p",null,"Spring will automatically autowire dependent beans to our Spring query beans. Refer to ",Object(i.b)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/"},"Spring Documentation")," for details."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"\n@Component\nclass WidgetQuery(private val repository: WidgetRepository) : Query {\n    fun getWidget(id: Int): Widget = repository.findWidget(id)\n}\n\n")),Object(i.b)("h2",{id:"spring-data-fetcher"},"Spring Data Fetcher"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides Spring aware data fetcher that automatically autowires Spring beans when they are\nspecified as function arguments. ",Object(i.b)("inlineCode",{parentName:"p"},"@Autowired")," arguments should be explicitly excluded from the GraphQL schema by also\nspecifying ",Object(i.b)("inlineCode",{parentName:"p"},"@GraphQLIgnore"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"\n@Component\nclass SpringQuery : Query {\n    fun getWidget(@GraphQLIgnore @Autowired repository: WidgetRepository, id: Int): Widget = repository.findWidget(id)\n}\n\n")),Object(i.b)("p",null,">"," NOTE: if you are using custom data fetcher make sure that you extend ",Object(i.b)("inlineCode",{parentName:"p"},"SpringDataFetcher")," instead of a base ",Object(i.b)("inlineCode",{parentName:"p"},"FunctionDataFetcher"),"."),Object(i.b)("h2",{id:"spring-beanfactoryaware"},"Spring BeanFactoryAware"),Object(i.b)("p",null,"You can use Spring beans to wire different objects together at runtime. Instead of autowiring specific beans as properties,\nyou can also dynamically resolve beans by using bean factories. There is an example of how to set this up in the example\napp in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/TopLevelBeanFactoryQuery.kt"},"TopLevelBeanFactoryQuery.kt"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\n@Component\nclass UsersQuery : Query, BeanFactoryAware {\n    private lateinit var beanFactory: BeanFactory\n\n    @GraphQLIgnore\n    override fun setBeanFactory(beanFactory: BeanFactory) {\n        this.beanFactory = beanFactory\n    }\n\n    fun findUser(id: String): SubQuery = beanFactory.getBean(User::class.java, id)\n}\n\n@Component\n@Scope("prototype")\nclass User @Autowired(required = false) constructor(private val userId: String) {\n\n    @Autowired\n    private lateinit var service: PhotoService\n\n    fun photos(numberOfPhotos: Int): List<Photo> = service.findPhotos(userId, numberOfPhotos)\n}\n\n')),Object(i.b)("hr",null),Object(i.b)("p",null,"We have examples of these techniques implemented in Spring boot in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/NestedQueries.kt"},"example\napp"),"."))}u.isMDXComponent=!0},234:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(r),g=t,b=l["".concat(o,".").concat(g)]||l[g]||d[g]||i;return r?a.a.createElement(b,s(s({ref:n},c),{},{components:r})):a.a.createElement(b,s({ref:n},c))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);