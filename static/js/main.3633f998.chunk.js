(this["webpackJsonparistek-template-v1"]=this["webpackJsonparistek-template-v1"]||[]).push([[0],{130:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"deleteAlbum"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteAlbum"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[]}]}}],loc:{start:0,end:58}};i.loc.source={body:"mutation deleteAlbum($id: ID!) {\n  deleteAlbum(id: $id)\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.deleteAlbum=function(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,r=new Set,d=new Set;for(t.forEach((function(e){d.add(e)}));d.size>0;){var c=d;d=new Set,c.forEach((function(e){r.has(e)||(r.add(e),(a[e]||new Set).forEach((function(e){d.add(e)})))}))}return r.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}(i,"deleteAlbum")},131:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAlbums"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"page"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albums"},arguments:[{kind:"Argument",name:{kind:"Name",value:"options"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"paginate"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"page"},value:{kind:"Variable",name:{kind:"Name",value:"page"}}},{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"photos"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"meta"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:297}};i.loc.source={body:"query getAlbums($page: Int, $limit: Int) {\n  albums(options: { paginate: { page: $page, limit: $limit } }) {\n    data {\n      id\n      title\n      user {\n        id\n        username\n      }\n      photos {\n        data {\n          id\n        }\n      }\n    }\n    meta {\n      totalCount\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.getAlbums=function(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,r=new Set,d=new Set;for(t.forEach((function(e){d.add(e)}));d.size>0;){var c=d;d=new Set,c.forEach((function(e){r.has(e)||(r.add(e),(a[e]||new Set).forEach((function(e){d.add(e)})))}))}return r.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}(i,"getAlbums")},153:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getUsers"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"users"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:74}};i.loc.source={body:"query getUsers {\n  users {\n    data {\n      id\n      username\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.getUsers=function(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,r=new Set,d=new Set;for(t.forEach((function(e){d.add(e)}));d.size>0;){var c=d;d=new Set,c.forEach((function(e){r.has(e)||(r.add(e),(a[e]||new Set).forEach((function(e){d.add(e)})))}))}return r.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}(i,"getUsers")},154:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createAlbum"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createAlbum"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"ObjectField",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:162}};i.loc.source={body:"mutation createAlbum($title: String!, $userId: ID!) {\n  createAlbum(input: { title: $title, userId: $userId }) {\n    id\n    title\n    user {\n      id\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.createAlbum=function(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,r=new Set,d=new Set;for(t.forEach((function(e){d.add(e)}));d.size>0;){var c=d;d=new Set,c.forEach((function(e){r.has(e)||(r.add(e),(a[e]||new Set).forEach((function(e){d.add(e)})))}))}return r.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}(i,"createAlbum")},155:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"updateAlbum"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateAlbum"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"ObjectField",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}]}},{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAlbum"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:277}};i.loc.source={body:"mutation updateAlbum($id: ID!, $userId: ID!, $title: String!) {\n  updateAlbum(input: { title: $title, userId: $userId }, id: $id) {\n    id\n    title\n    user {\n      id\n    }\n  }\n}\n\nquery getAlbum($id: ID!) {\n  album(id: $id) {\n    id\n    title\n    user {\n      id\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function r(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,r=new Set,d=new Set;for(t.forEach((function(e){d.add(e)}));d.size>0;){var c=d;d=new Set,c.forEach((function(e){r.has(e)||(r.add(e),(a[e]||new Set).forEach((function(e){d.add(e)})))}))}return r.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.updateAlbum=r(i,"updateAlbum"),e.exports.getAlbum=r(i,"getAlbum")},308:function(e,n,i){"use strict";i.r(n);var t=i(1),a=i.n(t),l=i(19),r=i(76),d=i(17),c=i(310),s=i(322),o=i(321),u=i(8),m=i(12),b=i(5),v=Object(t.createContext)(null),f=function(){return!!localStorage.getItem("fake-token")},j=function(e){var n=e.children,i=Object(t.useState)(f),a=Object(m.a)(i,2),l=a[0],r=a[1],d=Object(u.h)(),c={user:l,signIn:function(){localStorage.setItem("fake-token",(new Date).toString()),r(!0),d("/admin_panel/albums",{replace:!0})},signOut:function(){localStorage.removeItem("fake-token"),r(!1)}};return Object(b.jsx)(v.Provider,{value:c,children:n})},k=function(){return Object(t.useContext)(v)},h=function(e){var n=e.children;return k().user?n:Object(b.jsx)(u.a,{to:"/admin_panel/login"})},O=function(){return Object(b.jsx)("h1",{children:"Album"})},p=i(320),g=i(127),x=i(128),S=i(78),N=i(165),y=i(21),w=function(e){var n=e.onSubmit,i=e.validationSchema,t=e.defaultValues,l=e.children,r=Object(y.f)({resolver:Object(N.a)(i),defaultValues:t});return a.a.useEffect((function(){var e=r.getValues(),n=Object.keys(e)[0];r.setFocus(n)}),[r]),Object(b.jsx)(y.a,Object(S.a)(Object(S.a)({},r),{},{children:Object(b.jsx)("form",{onSubmit:r.handleSubmit(n),children:l})}))},D=i(157),E=i(125),A=i(58),F=function(e){var n,i=e.children,t=e.name,a=e.label,l=Object(y.g)().formState.errors;return Object(b.jsxs)(A.a,{isInvalid:!!l[t],children:[Object(b.jsx)(A.c,{htmlFor:t,children:a}),i,Object(b.jsx)(A.b,{children:l[t]&&(null===(n=l[t])||void 0===n?void 0:n.message)})]})},V=["name","label","rules"],C=function(e){var n=e.name,i=e.label,t=e.rules,a=Object(D.a)(e,V),l=Object(y.g)().control,r=Object(y.e)({control:l,name:n,rules:t}).field,d=r.onChange,c=r.onBlur,s=r.value,o=r.ref;return Object(b.jsx)(F,{name:n,label:i,children:Object(b.jsx)(E.a,Object(S.a)({ref:o,value:s,name:n,onChange:d,onBlur:c},a))})},I=i(126),T=i(159),q=function(e){var n=e.data,i=e.children;return Object(b.jsx)(I.b,{children:Object(b.jsxs)(I.a,{children:[Object(b.jsx)(I.f,{children:Object(b.jsx)(I.g,{children:a.a.Children.map(i,(function(e){return Object(b.jsx)(I.e,{children:e.props.label})}))})}),Object(b.jsx)(I.c,{children:n.map((function(e){return Object(b.jsx)(I.g,{children:a.a.Children.map(i,(function(n){if(n.props.isActions)return a.a.cloneElement(n,{record:e});var i=Object(T.get)(e,n.props.dataKey);return Object(b.jsx)(I.d,{children:i})}))},e.id)}))})]})})},z=function(){return null},$=i(73),P=i(48),_=i(160),L=function(){var e=k().signOut;return Object(b.jsx)(g.a,{bg:Object($.c)("white","gray.900"),borderRight:"1px",borderRightColor:Object($.c)("gray.200","gray.700"),w:{base:40,md:60},pos:"fixed",px:"4",children:Object(b.jsxs)(g.c,{direction:"column",justifyContent:"space-between",h:"100vh",children:[Object(b.jsxs)(g.a,{mt:"4",children:[Object(b.jsx)(g.d,{mb:"4",size:"md",children:"Admin Panel"}),Object(b.jsx)(d.b,{to:"/admin_panel/albums",children:Object(b.jsx)(x.a,{colorScheme:"teal",variant:"ghost",w:"full",justifyContent:"flex-start",leftIcon:Object(b.jsx)(P.a,{as:_.a}),role:"group",_hover:{bg:"teal",color:"white"},children:"Albums"})})]}),Object(b.jsx)(x.a,{w:"full",mb:4,colorScheme:"teal",onClick:e,children:"Log Out"})]})})},K=i(129),R=i(115),U=function(e){var n=e.albumsCount,i=e.setParams,a=e.currentPage,l=e.setCurrentPage,r=e.pageSize,d=e.setPageSize,c=Object(t.useState)([]),s=Object(m.a)(c,2),o=s[0],u=s[1];Object(t.useEffect)((function(){u(Array(n/r).fill("").map((function(e,n){return 1+n})))}),[n,r]);return Object(b.jsxs)(g.c,{gap:"1",justifyContent:"center",wrap:"wrap",children:[Object(b.jsxs)(K.a,{size:"sm",fontWeight:"semibold",bg:"white",borderRadius:"md",w:"15",value:r,onChange:function(e){var n=Number(e.target.value);d(n),l(1),i({page:"1",limit:String(n)})},children:[Object(b.jsx)("option",{value:"10",children:"10"}),Object(b.jsx)("option",{value:"20",children:"20"}),Object(b.jsx)("option",{value:"50",children:"50"})]}),Object(b.jsx)(x.b,{bg:"none",size:"sm",borderRadius:"50%","aria-label":"Previous page",icon:Object(b.jsx)(R.a,{}),_hover:{bg:"teal.600",color:"white"},disabled:1===a,onClick:function(){return l(a-1),void i({page:a-1,limit:String(r)})}}),o.map((function(e){return Object(b.jsx)(x.a,{size:"sm",borderRadius:"full",bg:e===a?void 0:"none",colorScheme:e===a?"teal":void 0,_hover:{bg:"teal.600",color:"white"},onClick:function(){return l(n=e),void i({page:String(n),limit:String(r)});var n},children:e},e)})),Object(b.jsx)(x.b,{bg:"none",size:"sm",borderRadius:"50%","aria-label":"Next page",icon:Object(b.jsx)(R.b,{}),_hover:{bg:"teal.600",color:"white"},disabled:a===o.length,onClick:function(){return l(a+1),void i({page:a+1,limit:String(r)})}})]})},G=function(e){var n=e.name,i=e.label,t=e.dataValueKey,a=e.dataLabelKey,l=e.data,r=Object(y.g)().control,d=Object(y.e)({control:r,name:n}).field,c=d.onChange,s=d.onBlur,o=d.value,u=d.ref;return Object(b.jsx)(F,{name:n,label:i,children:Object(b.jsx)(K.a,{name:n,value:o,ref:u,onChange:c,onBlur:s,placeholder:"-",children:l.map((function(e){return Object(b.jsx)("option",{value:e[t],children:e[a]},e[t])}))})})},B=i(90),Q=function(){return Object(b.jsx)(g.a,{h:"100vh",display:"flex",alignItems:"center",justifyContent:"center",children:Object(b.jsx)(B.a,{color:"teal.500",size:"xl"})})},W=function(e){var n=e.record,i=e.children;return Object(b.jsx)(I.d,{children:a.a.Children.map(i,(function(e){return a.a.cloneElement(e,{record:n})}))})};W.defaultProps={isActions:!0};var Z=W,J=i(96),M=function(e){var n=e.record;return Object(b.jsx)(d.b,{to:"../albums/".concat(null===n||void 0===n?void 0:n.id,"/edit"),children:Object(b.jsx)(P.a,{as:J.b,title:"Edit album",mx:"1"})})},H=i(315),Y=i(20),X=i(156),ee=i(130),ne=function(e){var n=e.record,i=Object(Y.c)(),a=i.isOpen,l=i.onOpen,r=i.onClose,d=Object(t.useRef)(null),c=Object(H.a)(ee.deleteAlbum,{variables:{id:String(null===n||void 0===n?void 0:n.id)}}),s=Object(m.a)(c,2),o=s[0],u=s[1],v=u.loading,f=u.data;return Object(t.useEffect)((function(){r()}),[null===f||void 0===f?void 0:f.deleteAlbum,r]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(P.a,{mx:"1",as:J.a,title:"Delete album",onClick:l,_hover:{cursor:"pointer"}}),Object(b.jsx)(X.a,{isOpen:a,leastDestructiveRef:d,onClose:r,children:Object(b.jsx)(X.f,{children:Object(b.jsxs)(X.c,{children:[Object(b.jsx)(X.e,{fontSize:"lg",fontWeight:"bold",children:"Delete album"}),Object(b.jsx)(X.b,{children:"Are you sure? You can't undo this action afterwards."}),Object(b.jsxs)(X.d,{children:[Object(b.jsx)(x.a,{ref:d,onClick:r,children:"Cancel"}),Object(b.jsx)(x.a,{colorScheme:"red",ml:3,isLoading:v,onClick:function(){return o()},children:"Delete"})]})]})})})]})},ie=i(131),te=function(){var e,n=Object(d.c)(),i=Object(m.a)(n,2),a=i[0],l=i[1],r=Object(t.useState)(Number(a.get("page"))||1),c=Object(m.a)(r,2),s=c[0],o=c[1],u=Object(t.useState)(Number(a.get("limit"))||10),v=Object(m.a)(u,2),f=v[0],j=v[1],k=Object(p.a)(ie.getAlbums,{variables:{page:s,limit:f}}),h=k.loading,O=k.data;if(!O||h)return Object(b.jsx)(Q,{});if(null!==O&&void 0!==O&&null!==(e=O.albums)&&void 0!==e&&e.data){var S,N=O.albums.data.map((function(e){var n,i,t;return{id:null===e||void 0===e?void 0:e.id,title:null===e||void 0===e?void 0:e.title,username:null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.username,pagesCount:null===e||void 0===e||null===(i=e.photos)||void 0===i||null===(t=i.data)||void 0===t?void 0:t.length}}));return Object(b.jsxs)(g.a,{py:"4",children:[Object(b.jsxs)(q,{data:N,children:[Object(b.jsx)(z,{label:"ID",dataKey:"id"}),Object(b.jsx)(z,{label:"Title",dataKey:"title"}),Object(b.jsx)(z,{label:"Username",dataKey:"username"}),Object(b.jsx)(z,{label:"Number of photos",dataKey:"pagesCount"}),Object(b.jsxs)(Z,{children:[Object(b.jsx)(M,{}),Object(b.jsx)(ne,{})]})]}),Object(b.jsx)(d.b,{to:"../albums/create",children:Object(b.jsx)(x.a,{colorScheme:"teal",my:"2",children:"Create album"})}),Object(b.jsx)(U,{albumsCount:(null===(S=O.albums.meta)||void 0===S?void 0:S.totalCount)||0,setParams:l,currentPage:s,setCurrentPage:o,pageSize:f,setPageSize:j})]})}return Object(b.jsx)("p",{children:"Error"})},ae=i(30),le=i(153),re=i(154),de=ae.a({title:ae.b().required("This is required").min(3).max(64),user:ae.b().required("This is required")}).required(),ce=function(){var e,n=Object(u.h)(),i=Object(p.a)(le.getUsers),a=i.loading,l=i.data,r=Object(H.a)(re.createAlbum),c=Object(m.a)(r,2),s=c[0],o=c[1],v=o.data,f=o.loading;return Object(t.useEffect)((function(){null!==v&&void 0!==v&&v.createAlbum&&n("/admin_panel/albums")}),[null===v||void 0===v?void 0:v.createAlbum,n]),!l||a?Object(b.jsx)(Q,{}):null!==(e=l.users)&&void 0!==e&&e.data?Object(b.jsx)(g.c,{h:"100vh",align:"center",justify:"center",children:Object(b.jsxs)(g.a,{p:"10",w:"500px",bgColor:"white",borderRadius:"lg",children:[Object(b.jsx)(g.d,{mb:"6",size:"md",children:"Create album"}),Object(b.jsxs)(w,{onSubmit:function(e){s({variables:{title:e.title,userId:e.user}})},validationSchema:de,children:[Object(b.jsx)(C,{name:"title",label:"Title"}),Object(b.jsx)(G,{name:"user",label:"User",data:l.users.data,dataValueKey:"id",dataLabelKey:"username"}),Object(b.jsxs)(g.c,{mt:"6",justify:"end",children:[Object(b.jsx)(d.b,{to:"/admin_panel/albums",children:Object(b.jsx)(x.a,{children:"Cancel"})}),Object(b.jsx)(x.a,{isLoading:f,ml:"3",colorScheme:"teal",type:"submit",children:"Submit"})]})]})]})}):Object(b.jsx)("p",{children:"Error"})},se=i(155),oe=ae.a({title:ae.b().required("This is required").min(3).max(64),user:ae.b().required("This is required")}).required(),ue=function(){var e,n,i=Object(u.i)().id,a=Object(u.h)(),l=Object(p.a)(le.getUsers),r=l.loading,c=l.data,s=Object(p.a)(se.getAlbum,{variables:{id:null!==i&&void 0!==i?i:""}}),o=s.loading,v=s.data,f=Object(H.a)(se.updateAlbum),j=Object(m.a)(f,2),k=j[0],h=j[1],O=h.data,S=h.loading;return Object(t.useEffect)((function(){null!==O&&void 0!==O&&O.updateAlbum&&a("/admin_panel/albums")}),[null===O||void 0===O?void 0:O.updateAlbum,a]),!c||r||!v||o?Object(b.jsx)(Q,{}):null!==c&&void 0!==c&&null!==(e=c.users)&&void 0!==e&&e.data&&null!==v&&void 0!==v&&v.album?Object(b.jsx)(g.c,{h:"100vh",align:"center",justify:"center",children:Object(b.jsxs)(g.a,{p:"10",w:"500px",bgColor:"white",borderRadius:"lg",children:[Object(b.jsx)(g.d,{mb:"6",size:"md",children:"Edit album"}),Object(b.jsxs)(w,{onSubmit:function(e){k({variables:{title:e.title,userId:e.user,id:null!==i&&void 0!==i?i:""}})},validationSchema:oe,defaultValues:{title:v.album.title,user:null===(n=v.album.user)||void 0===n?void 0:n.id},children:[Object(b.jsx)(C,{name:"title",label:"Title"}),Object(b.jsx)(G,{name:"user",label:"User",data:c.users.data,dataValueKey:"id",dataLabelKey:"username"}),Object(b.jsxs)(g.c,{justify:"end",mt:"6",children:[Object(b.jsx)(d.b,{to:"/admin_panel/albums",children:Object(b.jsx)(x.a,{children:"Cancel"})}),Object(b.jsx)(x.a,{isLoading:S,ml:"3",colorScheme:"teal",type:"submit",children:"Edit"})]})]})]})}):Object(b.jsx)("p",{children:"Error"})},me=ae.a({email:ae.b().required("This is required").email("Must be a valid email"),password:ae.b().required("This is required")}).required(),be=function(){var e=k().signIn;return Object(b.jsx)(g.b,{maxW:"container.xxl",bgGradient:"linear(to-r, green.100, pink.300)",children:Object(b.jsx)(g.c,{h:"100vh",align:"center",justify:"center",children:Object(b.jsxs)(g.a,{p:10,w:"500px",bgColor:"white",borderRadius:"lg",children:[Object(b.jsx)(g.d,{mb:"6",size:"md",textAlign:"center",children:"Log In"}),Object(b.jsxs)(w,{onSubmit:function(){return e()},validationSchema:me,children:[Object(b.jsx)(C,{name:"email",label:"Email",rules:{pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}}),Object(b.jsx)(C,{name:"password",label:"Password",type:"password"}),Object(b.jsx)(x.a,{w:"full",mt:"6",colorScheme:"teal",type:"submit",children:"Log In"})]})]})})})},ve=function(){return Object(b.jsxs)(g.a,{minH:"100vh",bgGradient:"linear(to-r, green.100, pink.300)",children:[Object(b.jsx)(L,{}),Object(b.jsx)(g.a,{ml:{base:40,md:60},px:"4",children:Object(b.jsx)(u.b,{})})]})},fe=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:["This page does not exist. Go ",Object(b.jsx)(d.b,{to:"/admin_panel/albums",children:"home"})]})})},je=new c.a({uri:"https://graphqlzero.almansi.me/api",cache:new s.a}),ke=function(){return Object(b.jsx)(o.a,{client:je,children:Object(b.jsx)(j,{children:Object(b.jsxs)(u.e,{children:[Object(b.jsxs)(u.c,{path:"admin_panel",element:Object(b.jsx)(h,{children:Object(b.jsx)(ve,{})}),children:[Object(b.jsx)(u.c,{path:"albums",element:Object(b.jsx)(te,{})}),Object(b.jsx)(u.c,{path:"albums/:id",element:Object(b.jsx)(O,{})}),Object(b.jsx)(u.c,{path:"albums/:id/edit",element:Object(b.jsx)(ue,{})}),Object(b.jsx)(u.c,{path:"albums/create",element:Object(b.jsx)(ce,{})})]}),Object(b.jsx)(u.c,{path:"admin_panel/login",element:Object(b.jsx)(be,{})}),Object(b.jsx)(u.c,{path:"*",element:Object(b.jsx)(fe,{})})]})})})};r.render(Object(b.jsx)(t.StrictMode,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(ke,{})})})}),document.getElementById("root"))}},[[308,1,2]]]);
//# sourceMappingURL=main.3633f998.chunk.js.map