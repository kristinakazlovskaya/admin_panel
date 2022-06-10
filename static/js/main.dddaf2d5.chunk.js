(this["webpackJsonparistek-template-v1"]=this["webpackJsonparistek-template-v1"]||[]).push([[0],{159:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getPhotos"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"page"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"photos"},arguments:[{kind:"Argument",name:{kind:"Name",value:"options"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"paginate"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"page"},value:{kind:"Variable",name:{kind:"Name",value:"page"}}},{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"meta"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:278}};i.loc.source={body:"query getPhotos($id: ID!, $page: Int, $limit: Int) {\n  album(id: $id) {\n    id\n    photos(options: { paginate: { page: $page, limit: $limit } }) {\n      data {\n        id\n        title\n        url\n        thumbnailUrl\n      }\n      meta {\n        totalCount\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.getPhotos=function(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,d=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var c=r;r=new Set,c.forEach((function(e){d.has(e)||(d.add(e),(a[e]||new Set).forEach((function(e){r.add(e)})))}))}return d.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}(i,"getPhotos")},161:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAlbumData"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:125}};i.loc.source={body:"query getAlbumData($id: ID!) {\n  album(id: $id) {\n    user {\n      id\n      username\n      name\n    }\n    title\n    id\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.getAlbumData=function(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,d=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var c=r;r=new Set,c.forEach((function(e){d.has(e)||(d.add(e),(a[e]||new Set).forEach((function(e){r.add(e)})))}))}return d.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}(i,"getAlbumData")},162:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAlbums"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"page"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albums"},arguments:[{kind:"Argument",name:{kind:"Name",value:"options"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"paginate"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"page"},value:{kind:"Variable",name:{kind:"Name",value:"page"}}},{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"photos"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"meta"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"},arguments:[],directives:[]}]}}]}}]}},{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"deleteAlbum"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteAlbum"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[]}]}}],loc:{start:0,end:356}};i.loc.source={body:"query getAlbums($page: Int, $limit: Int) {\n  albums(options: { paginate: { page: $page, limit: $limit } }) {\n    data {\n      id\n      title\n      user {\n        id\n        username\n      }\n      photos {\n        data {\n          id\n        }\n      }\n    }\n    meta {\n      totalCount\n    }\n  }\n}\n\nmutation deleteAlbum($id: ID!) {\n  deleteAlbum(id: $id)\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function d(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,d=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var c=r;r=new Set,c.forEach((function(e){d.has(e)||(d.add(e),(a[e]||new Set).forEach((function(e){r.add(e)})))}))}return d.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.getAlbums=d(i,"getAlbums"),e.exports.deleteAlbum=d(i,"deleteAlbum")},184:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getUsers"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"users"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:74}};i.loc.source={body:"query getUsers {\n  users {\n    data {\n      id\n      username\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.getUsers=function(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,d=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var c=r;r=new Set,c.forEach((function(e){d.has(e)||(d.add(e),(a[e]||new Set).forEach((function(e){r.add(e)})))}))}return d.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}(i,"getUsers")},185:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createAlbum"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createAlbum"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"ObjectField",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:162}};i.loc.source={body:"mutation createAlbum($title: String!, $userId: ID!) {\n  createAlbum(input: { title: $title, userId: $userId }) {\n    id\n    title\n    user {\n      id\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.createAlbum=function(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,d=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var c=r;r=new Set,c.forEach((function(e){d.has(e)||(d.add(e),(a[e]||new Set).forEach((function(e){r.add(e)})))}))}return d.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}(i,"createAlbum")},186:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"updateAlbum"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateAlbum"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"ObjectField",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}]}},{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAlbum"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:277}};i.loc.source={body:"mutation updateAlbum($id: ID!, $userId: ID!, $title: String!) {\n  updateAlbum(input: { title: $title, userId: $userId }, id: $id) {\n    id\n    title\n    user {\n      id\n    }\n  }\n}\n\nquery getAlbum($id: ID!) {\n  album(id: $id) {\n    id\n    title\n    user {\n      id\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function d(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,d=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var c=r;r=new Set,c.forEach((function(e){d.has(e)||(d.add(e),(a[e]||new Set).forEach((function(e){r.add(e)})))}))}return d.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.updateAlbum=d(i,"updateAlbum"),e.exports.getAlbum=d(i,"getAlbum")},387:function(e,n,i){"use strict";i.r(n);var t=i(1),a=i.n(t),l=i(19),d=i(44),r=i(17),c=i(394),o=i(409),s=i(408),u=i(156),m=i(12),b=i(10),v=i(5),j=Object(t.createContext)(null),f=function(){return!!localStorage.getItem("fake-token")},k=function(e){var n=e.children,i=Object(t.useState)(f),a=Object(b.a)(i,2),l=a[0],d=a[1],r=Object(m.h)(),c={user:l,signIn:function(){localStorage.setItem("fake-token",(new Date).toString()),d(!0),r("/admin_panel/albums",{replace:!0})},signOut:function(){localStorage.removeItem("fake-token"),d(!1)}};return Object(v.jsx)(j.Provider,{value:c,children:n})},h=function(){return Object(t.useContext)(j)},O=function(){for(var e=Object(r.c)(),n=Object(b.a)(e,1),i=n[0],t=arguments.length,a=new Array(t),l=0;l<t;l++)a[l]=arguments[l];return a.map((function(e){return i.get(e)}))},p=function(e){var n=e.children;return h().user?n:Object(v.jsx)(m.a,{to:"login"})},g=i(402),x=i(188),S=i(30),N=i(200),y=i(23),w=function(e){var n=e.onSubmit,i=e.validationSchema,t=e.children,a=Object(y.f)({resolver:Object(N.a)(i)});return Object(v.jsx)(y.a,Object(S.a)(Object(S.a)({},a),{},{children:Object(v.jsx)("form",{onSubmit:a.handleSubmit(n),children:t})}))},D=i(59),F=i(154),E=i(70),V=function(e){var n,i=e.children,t=e.name,a=e.label,l=Object(y.g)().formState.errors;return Object(v.jsxs)(E.a,{isInvalid:!!l[t],children:[Object(v.jsx)(E.c,{htmlFor:t,children:a}),i,Object(v.jsx)(E.b,{children:l[t]&&(null===(n=l[t])||void 0===n?void 0:n.message)})]})},A=["name","label","defaultValue"],I=function(e){var n=e.name,i=e.label,t=e.defaultValue,a=Object(D.a)(e,A),l=Object(y.g)().control,d=Object(y.e)({control:l,name:n,defaultValue:t||""}).field,r=d.onChange,c=d.onBlur,o=d.value,s=d.ref;return Object(v.jsx)(V,{name:n,label:i,children:Object(v.jsx)(F.a,Object(S.a)({ref:s,value:o,name:n,id:n,onChange:r,onBlur:c},a))})},C=i(155),T=i(190),q=function(e){var n=e.data,i=e.children;return Object(v.jsx)(C.b,{children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(C.f,{children:Object(v.jsx)(C.g,{children:a.a.Children.map(i,(function(e){return Object(v.jsx)(C.e,{children:e.props.label})}))})}),Object(v.jsx)(C.c,{children:n.map((function(e){return Object(v.jsx)(C.g,{children:a.a.Children.map(i,(function(n){if(n.props.isActions)return a.a.cloneElement(n,{record:e});var i=Object(T.get)(e,n.props.dataKey);return Object(v.jsx)(C.d,{children:n.props.render?n.props.render(i,e):i})}))},e.id)}))})]})})},$=function(){return null},z=i(90),P=i(157),_=i(58),K=i(191),L=function(){var e=h().signOut;return Object(v.jsx)(u.a,{bg:Object(z.c)("white","gray.900"),borderRight:"1px",borderRightColor:Object(z.c)("gray.200","gray.700"),w:{base:40,md:60},pos:"fixed",px:"4",children:Object(v.jsxs)(u.c,{direction:"column",justifyContent:"space-between",h:"100vh",children:[Object(v.jsx)(u.a,{mt:"4",children:Object(v.jsx)(r.b,{to:"/admin_panel/albums",children:Object(v.jsx)(P.a,{colorScheme:"teal",variant:"ghost",w:"full",justifyContent:"flex-start",leftIcon:Object(v.jsx)(_.a,{as:K.a}),role:"group",_hover:{bg:"teal",color:"white"},children:"Albums"})})}),Object(v.jsx)(P.a,{w:"full",mb:4,colorScheme:"teal",onClick:e,children:"Log Out"})]})})},U=i(158),G=i(145),R=function(e){var n=e.totalCount,i=Object(r.c)(),a=Object(b.a)(i,2),l=a[0],d=a[1],c=Object(t.useState)(Number(l.get("page"))||1),o=Object(b.a)(c,2),s=o[0],m=o[1],j=Object(t.useState)(Number(l.get("limit"))||10),f=Object(b.a)(j,2),k=f[0],h=f[1],O=Object(t.useMemo)((function(){return Array(Math.ceil(n/k)).fill("").map((function(e,n){return 1+n}))}),[n,k]);return Object(v.jsxs)(u.c,{gap:"1",justifyContent:"center",wrap:"wrap",children:[Object(v.jsxs)(U.a,{size:"sm",fontWeight:"semibold",bg:"white",borderRadius:"md",w:"15",value:k,onChange:function(e){var n=Number(e.target.value);h(n),m(1),d({page:"1",limit:String(n)})},children:[Object(v.jsx)("option",{value:"10",children:"10"}),Object(v.jsx)("option",{value:"20",children:"20"}),Object(v.jsx)("option",{value:"50",children:"50"})]}),Object(v.jsx)(P.b,{bg:"none",size:"sm",borderRadius:"50%","aria-label":"Previous page",icon:Object(v.jsx)(G.a,{}),_hover:{bg:"teal.600",color:"white"},disabled:1===s,onClick:function(){1!==s&&(m(s-1),d({page:String(s-1),limit:String(k)}))}}),O.map((function(e){return Object(v.jsx)(P.a,{size:"sm",borderRadius:"full",bg:e===s?void 0:"none",colorScheme:e===s?"teal":void 0,_hover:{bg:"teal.600",color:"white"},onClick:function(){return m(n=e),void d({page:String(n),limit:String(k)});var n},children:e},e)})),Object(v.jsx)(P.b,{bg:"none",size:"sm",borderRadius:"50%","aria-label":"Next page",icon:Object(v.jsx)(G.b,{}),_hover:{bg:"teal.600",color:"white"},disabled:s===O.length,onClick:function(){s!==O.length&&(m(s+1),d({page:String(s+1),limit:String(k)}))}})]})},B=["name","label","optionsValueKey","optionsLabelKey","options","defaultValue"],M=function(e){var n=e.name,i=e.label,t=e.optionsValueKey,a=e.optionsLabelKey,l=e.options,d=e.defaultValue,r=Object(D.a)(e,B),c=Object(y.g)().control,o=Object(y.e)({control:c,name:n,defaultValue:d||""}).field,s=o.onChange,u=o.onBlur,m=o.value,b=o.ref;return Object(v.jsx)(V,{name:n,label:i,children:Object(v.jsx)(U.a,Object(S.a)(Object(S.a)({name:n,id:n,value:m,ref:b,onChange:s,onBlur:u,placeholder:"-"},r),{},{children:l.map((function(e){return Object(v.jsx)("option",{value:e[t],children:e[a]},e[t])}))}))})},Q=i(108),H=function(){return Object(v.jsx)(u.a,{h:"100vh",display:"flex",alignItems:"center",justifyContent:"center",children:Object(v.jsx)(Q.a,{color:"teal.500",size:"xl"})})},W=function(e){var n=e.record,i=e.children;return Object(v.jsx)(C.d,{textAlign:"end",children:a.a.Children.map(i,(function(e){return a.a.cloneElement(e,{record:n})}))})};W.defaultProps={isActions:!0};var J=W,Y=i(73),X=function(e){var n=e.record;return Object(v.jsx)(r.b,{to:"".concat(null===n||void 0===n?void 0:n.id,"/edit"),children:Object(v.jsx)(P.b,{"aria-label":"Edit",icon:Object(v.jsx)(_.a,{as:Y.b}),bg:"none",size:"md",_hover:{bg:"none"}})})},Z=i(31),ee=i(18),ne=i.n(ee),ie=i(20),te=i(187),ae=function(e){var n=e.record,i=e.onDelete,a=e.loading,l=e.alertHeading,d=Object(ie.d)(),r=d.isOpen,c=d.onOpen,o=d.onClose,s=Object(t.useRef)(null),u=function(){var e=Object(Z.a)(ne.a.mark((function e(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(n);case 3:o(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(P.b,{"aria-label":"Delete",icon:Object(v.jsx)(_.a,{as:Y.a}),onClick:c,bg:"none",size:"md",_hover:{bg:"none"}}),Object(v.jsx)(te.a,{isOpen:r,leastDestructiveRef:s,onClose:o,children:Object(v.jsx)(te.f,{children:Object(v.jsxs)(te.c,{children:[Object(v.jsx)(te.e,{fontSize:"lg",fontWeight:"bold",children:l}),Object(v.jsx)(te.b,{children:"Are you sure? You can't undo this action afterwards."}),Object(v.jsxs)(te.d,{children:[Object(v.jsx)(P.a,{ref:s,onClick:o,children:"Cancel"}),Object(v.jsx)(P.a,{colorScheme:"red",ml:3,isLoading:a,onClick:u,children:"Delete"})]})]})})})]})},le=i(192),de=function(e){var n=e.record;return Object(v.jsx)(r.b,{to:"".concat(null===n||void 0===n?void 0:n.id),children:Object(v.jsx)(P.b,{"aria-label":"Show",icon:Object(v.jsx)(_.a,{as:le.a}),bg:"none",size:"md",_hover:{bg:"none"}})})},re=function(){return Object(v.jsx)(r.b,{to:"..",children:Object(v.jsx)(P.a,{colorScheme:"teal",leftIcon:Object(v.jsx)(Y.c,{}),children:"Back"})})},ce=i(193),oe=function(e){var n=e.record;return Object(v.jsx)(u.e,{isExternal:!0,href:String(null===n||void 0===n?void 0:n.url),children:Object(v.jsx)(P.b,{"aria-label":"Show photo",icon:Object(v.jsx)(_.a,{as:ce.a}),bg:"none",size:"md",_hover:{bg:"none"}})})},se=(i(194),i(244),i(160)),ue=i(159),me=function(){var e,n,i,t,a=Object(m.i)().id,l=O("page","limit"),d=Object(b.a)(l,2),r=d[0],c=d[1],o=Object(g.a)(ue.getPhotos,{variables:{id:a||"",page:Number(r)||1,limit:Number(c)||10}}),s=o.data;return o.loading?Object(v.jsx)(H,{}):null!==s&&void 0!==s&&null!==(e=s.album)&&void 0!==e&&null!==(n=e.photos)&&void 0!==n&&n.data?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(q,{data:null===(i=s.album.photos)||void 0===i?void 0:i.data,children:[Object(v.jsx)($,{dataKey:"id",label:"ID"}),Object(v.jsx)($,{dataKey:"title",label:"Title"}),Object(v.jsx)($,{dataKey:"thumbnailUrl",label:"Preview",render:function(e){return Object(v.jsx)(se.a,{boxSize:"50px",src:e,alt:"Photo preview"})}}),Object(v.jsx)(J,{children:Object(v.jsx)(oe,{})})]}),Object(v.jsx)(u.a,{mt:"2",children:Object(v.jsx)(R,{totalCount:(null===(t=s.album.photos.meta)||void 0===t?void 0:t.totalCount)||0})})]}):Object(v.jsx)("p",{children:"Error"})},be=i(161),ve=function(){var e,n,i,t=Object(m.i)().id,a=Object(g.a)(be.getAlbumData,{variables:{id:t||""}}),l=a.data;return a.loading?Object(v.jsx)(H,{}):null!==l&&void 0!==l&&null!==(e=l.album)&&void 0!==e&&e.id?l.album?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(u.c,{justify:"space-between",mb:"4",children:[Object(v.jsxs)(u.d,{children:["Album: ",l.album.title]}),Object(v.jsx)(re,{})]}),Object(v.jsxs)(x.e,{variant:"enclosed",colorScheme:"teal",children:[Object(v.jsxs)(x.b,{mb:"1em",children:[Object(v.jsx)(x.a,{children:"Basic"}),Object(v.jsx)(x.a,{children:"Photos"})]}),Object(v.jsxs)(x.d,{children:[Object(v.jsxs)(x.c,{children:[Object(v.jsxs)(u.f,{children:["ID: ",l.album.id]}),Object(v.jsxs)(u.f,{children:["User: ",null===(n=l.album.user)||void 0===n?void 0:n.name," (",null===(i=l.album.user)||void 0===i?void 0:i.username,")"]})]}),Object(v.jsx)(x.c,{children:Object(v.jsx)(me,{})})]})]})]}):Object(v.jsx)("p",{children:"Error"}):Object(v.jsx)(u.a,{pt:"4",children:"Error"})},je=i(403),fe=i(162),ke=function(){var e,n,i=O("page","limit"),t=Object(b.a)(i,2),a=t[0],l=t[1],d=Object(g.a)(fe.getAlbums,{variables:{page:Number(a)||1,limit:Number(l)||10}}),c=d.loading,o=d.data,s=Object(je.a)(fe.deleteAlbum),m=Object(b.a)(s,2),j=m[0],f=m[1].loading;return c?Object(v.jsx)(H,{}):null!==o&&void 0!==o&&null!==(e=o.albums)&&void 0!==e&&e.data?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(u.c,{mb:"4",justify:"space-between",children:[Object(v.jsx)(u.d,{children:"Albums"}),Object(v.jsx)(r.b,{to:"create",children:Object(v.jsx)(P.a,{colorScheme:"teal",my:"2",children:"Create album"})})]}),Object(v.jsxs)(q,{data:o.albums.data,children:[Object(v.jsx)($,{label:"ID",dataKey:"id"}),Object(v.jsx)($,{label:"Title",dataKey:"title"}),Object(v.jsx)($,{label:"Username",dataKey:"user.username"}),Object(v.jsx)($,{label:"Number of photos",dataKey:"photos.data.length"}),Object(v.jsxs)(J,{children:[Object(v.jsx)(X,{}),Object(v.jsx)(ae,{onDelete:function(e){return j({variables:{id:String(null===e||void 0===e?void 0:e.id)}})},loading:f,alertHeading:"Delete album"}),Object(v.jsx)(de,{})]})]}),Object(v.jsx)(u.a,{mt:"2",children:Object(v.jsx)(R,{totalCount:(null===(n=o.albums.meta)||void 0===n?void 0:n.totalCount)||0})})]}):Object(v.jsx)("p",{children:"Error"})},he=i(35),Oe=i(184),pe=i(185),ge=he.a({title:he.b().required("This is required").min(3,"Must be at least 3 characters").max(64,"Must be less than 64 characters"),user:he.b().required("This is required")}).required(),xe=function(){var e,n=Object(m.h)(),i=Object(g.a)(Oe.getUsers),a=i.loading,l=i.data,d=Object(je.a)(pe.createAlbum),c=Object(b.a)(d,2),o=c[0],s=c[1],j=s.data,f=s.loading;return Object(t.useEffect)((function(){null!==j&&void 0!==j&&j.createAlbum&&n("/admin_panel/albums")}),[null===j||void 0===j?void 0:j.createAlbum,n]),!l||a?Object(v.jsx)(H,{}):null!==(e=l.users)&&void 0!==e&&e.data?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(u.c,{justify:"space-between",children:[Object(v.jsx)(u.d,{mb:"4",children:"Create album"}),Object(v.jsx)(re,{})]}),Object(v.jsx)(u.a,{w:"500px",children:Object(v.jsxs)(w,{onSubmit:function(e){o({variables:{title:e.title,userId:e.user}})},validationSchema:ge,children:[Object(v.jsx)(I,{name:"title",label:"Title",bg:"white"}),Object(v.jsx)(M,{name:"user",label:"User",options:l.users.data,optionsValueKey:"id",optionsLabelKey:"username",bg:"white"}),Object(v.jsxs)(u.a,{mt:"4",children:[Object(v.jsx)(P.a,{isLoading:f,mr:"2",colorScheme:"teal",type:"submit",children:"Submit"}),Object(v.jsx)(r.b,{to:"/admin_panel/albums",children:Object(v.jsx)(P.a,{children:"Cancel"})})]})]})})]}):Object(v.jsx)("p",{children:"Error"})},Se=i(186),Ne=he.a({title:he.b().required("This is required").min(3).max(64),user:he.b().required("This is required")}).required(),ye=function(){var e,n,i=Object(m.i)().id,a=Object(m.h)(),l=Object(g.a)(Oe.getUsers),d=l.loading,c=l.data,o=Object(g.a)(Se.getAlbum,{variables:{id:null!==i&&void 0!==i?i:""}}),s=o.loading,j=o.data,f=Object(je.a)(Se.updateAlbum),k=Object(b.a)(f,2),h=k[0],O=k[1],p=O.data,x=O.loading;return Object(t.useEffect)((function(){null!==p&&void 0!==p&&p.updateAlbum&&a("/admin_panel/albums")}),[null===p||void 0===p?void 0:p.updateAlbum,a]),!c||d||!j||s?Object(v.jsx)(H,{}):null!==c&&void 0!==c&&null!==(e=c.users)&&void 0!==e&&e.data&&null!==j&&void 0!==j&&j.album?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(u.c,{justify:"space-between",children:[Object(v.jsx)(u.d,{mb:"4",children:"Edit album"}),Object(v.jsx)(re,{})]}),Object(v.jsx)(u.a,{w:"500px",children:Object(v.jsxs)(w,{onSubmit:function(e){h({variables:{title:e.title,userId:e.user,id:null!==i&&void 0!==i?i:""}})},validationSchema:Ne,children:[Object(v.jsx)(I,{name:"title",label:"Title",defaultValue:j.album.title||"",bg:"white"}),Object(v.jsx)(M,{name:"user",label:"User",options:c.users.data,optionsValueKey:"id",optionsLabelKey:"username",defaultValue:(null===(n=j.album.user)||void 0===n?void 0:n.id)||"",bg:"white"}),Object(v.jsxs)(u.a,{mt:"4",children:[Object(v.jsx)(P.a,{isLoading:x,colorScheme:"teal",type:"submit",mr:"2",children:"Edit"}),Object(v.jsx)(r.b,{to:"/admin_panel/albums",children:Object(v.jsx)(P.a,{children:"Cancel"})})]})]})})]}):Object(v.jsx)("p",{children:"Error"})},we=he.a({email:he.b().required("This is required").matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,"Must be a valid email"),password:he.b().required("This is required")}).required(),De=function(){var e=h().signIn;return Object(v.jsx)(u.b,{maxW:"container.xxl",bgGradient:"linear(to-r, green.100, pink.300)",children:Object(v.jsx)(u.c,{h:"100vh",align:"center",justify:"center",children:Object(v.jsxs)(u.a,{p:10,w:"500px",bgColor:"white",borderRadius:"lg",children:[Object(v.jsx)(u.d,{mb:"4",textAlign:"center",children:"Log In"}),Object(v.jsxs)(w,{onSubmit:function(){return e()},validationSchema:we,children:[Object(v.jsx)(I,{name:"email",label:"Email"}),Object(v.jsx)(I,{name:"password",label:"Password",type:"password"}),Object(v.jsx)(P.a,{w:"full",mt:"4",colorScheme:"teal",type:"submit",children:"Log In"})]})]})})})},Fe=function(){return Object(v.jsxs)(u.a,{minH:"100vh",bgGradient:"linear(to-r, green.100, pink.300)",children:[Object(v.jsx)(L,{}),Object(v.jsx)(u.a,{ml:{base:40,md:60},px:"4",children:Object(v.jsx)(m.b,{})})]})},Ee=function(){return Object(v.jsxs)(u.c,{h:"100vh",direction:"column",justify:"center",align:"center",children:[Object(v.jsx)(u.d,{as:"h1",size:"4xl",children:"404"}),Object(v.jsx)(u.d,{as:"h2",children:"Not Found"}),Object(v.jsxs)(u.f,{children:["Go to"," ",Object(v.jsx)(r.b,{to:"/admin_panel/albums",style:{textDecoration:"underline",color:"teal"},children:"home page"})]})]})},Ve=new c.a({uri:"https://graphqlzero.almansi.me/api",cache:new o.a}),Ae=function(){return Object(v.jsx)(s.a,{client:Ve,children:Object(v.jsx)(k,{children:Object(v.jsxs)(m.e,{children:[Object(v.jsx)(m.c,{path:"admin_panel",element:Object(v.jsx)(p,{children:Object(v.jsx)(Fe,{})}),children:Object(v.jsxs)(m.c,{path:"albums",element:Object(v.jsx)(u.a,{py:"4",children:Object(v.jsx)(m.b,{})}),children:[Object(v.jsx)(m.c,{index:!0,element:Object(v.jsx)(ke,{})}),Object(v.jsx)(m.c,{path:":id",element:Object(v.jsx)(ve,{})}),Object(v.jsx)(m.c,{path:":id/edit",element:Object(v.jsx)(ye,{})}),Object(v.jsx)(m.c,{path:"create",element:Object(v.jsx)(xe,{})})]})}),Object(v.jsx)(m.c,{path:"*",element:Object(v.jsx)(Ee,{})}),Object(v.jsx)(m.c,{path:"admin_panel/login",element:Object(v.jsx)(De,{})})]})})})};d.render(Object(v.jsx)(t.StrictMode,{children:Object(v.jsx)(r.a,{children:Object(v.jsx)(l.a,{children:Object(v.jsx)(Ae,{})})})}),document.getElementById("root"))}},[[387,1,2]]]);
//# sourceMappingURL=main.dddaf2d5.chunk.js.map