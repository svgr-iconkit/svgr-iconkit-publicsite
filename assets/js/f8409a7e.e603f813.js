"use strict";(self.webpackChunksvgr_iconkit_publicsite=self.webpackChunksvgr_iconkit_publicsite||[]).push([[3206],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},179:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return h}});var n=r(7462),a=r(3366),o=r(7294),i=r(3905),l=r(2389),c=r(9548),u=r(6010),s="tabItem_LplD";function p(e){var t,r,a,i=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,c.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,c.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,j=(0,o.useState)(h),N=j[0],x=j[1],E=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=y[m];null!=I&&I!==N&&b.some((function(e){return e.value===I}))&&x(I)}var T=function(e){var t=e.currentTarget,r=E.indexOf(t),n=b[r].value;n!==N&&(O(t),x(n),null!=m&&w(m,n))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},v)},b.map((function(e){var t=e.value,r=e.label,a=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:T,onClick:T},a,{className:(0,u.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),i?(0,o.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,l.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}var m=function(e){var t=e.children,r=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:r,className:n},t)},v=["components"],f={sidebar_position:1},b="Intro",g={unversionedId:"intro",id:"intro",title:"Intro",description:"Inspired by gregberge/svgr and oblador/react-native-vector-icons, the kit set used to rendering SVG formatted icon content directly and cross-platform from React.js, React-Native and Expo.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/0.2.0/intro",editUrl:"https://github.com/svgr-iconkit/svgr-iconkit-publicsite/edit/master/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Icon component properties",permalink:"/docs/0.2.0/core/properties"}},h=[{value:"Install packages",id:"install-packages",children:[],level:2},{value:"Start your project",id:"start-your-project",children:[{value:"React.js for Web",id:"reactjs-for-web",children:[],level:3},{value:"React Native or Expo",id:"react-native-or-expo",children:[{value:"Using with react-native-web",id:"using-with-react-native-web",children:[],level:4}],level:3}],level:2}],k={toc:h};function y(e){var t=e.components,r=(0,a.Z)(e,v);return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gregberge/svgr"},"gregberge/svgr")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons"},"oblador/react-native-vector-icons"),", the kit set used to rendering SVG formatted icon content directly and cross-platform from React.js, React-Native and Expo."),(0,i.kt)("p",null,"It provide below benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Standardize same set of icons."),(0,i.kt)("li",{parentName:"ul"},"Easy to integrate with styled-components."),(0,i.kt)("li",{parentName:"ul"},"All svg content exported as pure JS data easier to be reuse in other platform and/or in-app updates solution like CodePush in react native.")),(0,i.kt)("h2",{id:"install-packages"},"Install packages"),(0,i.kt)("p",null,"Install package in your react.js, react-native or expo project"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(m,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @svgr-iconkit/core @svgr-iconkit/fontawesome5\n"))),(0,i.kt)(m,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @svgr-iconkit/core @svgr-iconkit/fontawesome5\n")))),(0,i.kt)("h2",{id:"start-your-project"},"Start your project"),(0,i.kt)("p",null,"Import icon from your project "),(0,i.kt)("h3",{id:"reactjs-for-web"},"React.js for Web"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import FontawesomeIcon from "@svgr-iconkit/fontawesome5";\n\nexport default function App() {\n  return <div>\n    <FontawesomeIcon name="heart" color="red" size={24} />\n  </div>\n}\n')),(0,i.kt)("h3",{id:"react-native-or-expo"},"React Native or Expo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { View } from "react-native";\nimport FontawesomeIcon from "@svgr-iconkit/fontawesome5";\n\nexport default function App() {\n  return <View>\n    <FontawesomeIcon name="heart" color="red" size={24} />\n  </View>\n}\n')),(0,i.kt)("h4",{id:"using-with-react-native-web"},"Using with react-native-web"),(0,i.kt)("p",null,"Due to limitation of webpack resolving used in ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-web"),', it\'s suggested to use "/native" entry for React Native / Expo project. '),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { View } from "react-native";\nimport FontawesomeIcon from "@svgr-iconkit/fontawesome5/native";\n\nexport default function App() {\n  return <View>\n    <FontawesomeIcon name="heart" color="red" size={24} />\n  </View>\n}\n')))}y.isMDXComponent=!0}}]);