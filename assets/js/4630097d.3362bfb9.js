"use strict";(self.webpackChunksvgr_iconkit_publicsite=self.webpackChunksvgr_iconkit_publicsite||[]).push([[6838],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7462),a=n(7294),o=n(2389),i=n(4314),l=n(6010),c="tabItem_LplD";function s(e){var t,n,o,s=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),w=h.tabGroupChoices,y=h.setTabGroupChoices,x=(0,a.useState)(k),j=x[0],N=x[1],E=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=w[m];null!=I&&I!==j&&b.some((function(e){return e.value===I}))&&N(I)}var T=function(e){var t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==j&&(O(t),N(r),null!=m&&y(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:T,onClick:T},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function u(e){var t=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},4375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(8215),c=["components"],s={sidebar_position:1},u="Intro",p={unversionedId:"intro",id:"version-0.2.x/intro",title:"Intro",description:"Inspired by gregberge/svgr and oblador/react-native-vector-icons, the kit set used to rendering SVG formatted icon content directly and supporting different framework/ platform on Next.js React.js, React-Native and Expo.",source:"@site/versioned_docs/version-0.2.x/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/0.2.x/intro",editUrl:"https://github.com/svgr-iconkit/svgr-iconkit-publicsite/edit/main/versioned_docs/version-0.2.x/intro.mdx",tags:[],version:"0.2.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Icon component properties",permalink:"/docs/0.2.x/core/properties"}},d={},m=[{value:"Install packages",id:"install-packages",level:2},{value:"Start your project",id:"start-your-project",level:2},{value:"React.js/Next.js for Web",id:"reactjsnextjs-for-web",level:3},{value:"React Native or Expo",id:"react-native-or-expo",level:3},{value:"Using with react-native-web",id:"using-with-react-native-web",level:4}],f={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gregberge/svgr"},"gregberge/svgr")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons"},"oblador/react-native-vector-icons"),", the kit set used to rendering SVG formatted icon content directly and supporting different framework/ platform on Next.js React.js, React-Native and Expo."),(0,o.kt)("p",null,"It provide below benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Standardize same set of icons."),(0,o.kt)("li",{parentName:"ul"},"Easy to integrate with styled-components or css based framework (for web only)."),(0,o.kt)("li",{parentName:"ul"},"All svg content exported as pure JS data easier to be reuse in other platform and/or in-app updates solution like CodePush in react native.")),(0,o.kt)("h2",{id:"install-packages"},"Install packages"),(0,o.kt)("p",null,"Install package in your react.js, react-native or expo project"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @svgr-iconkit/fontawesome5\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @svgr-iconkit/fontawesome5\n")))),(0,o.kt)("h2",{id:"start-your-project"},"Start your project"),(0,o.kt)("p",null,"Import icon from your project "),(0,o.kt)("h3",{id:"reactjsnextjs-for-web"},"React.js/Next.js for Web"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import FontawesomeIcon from "@svgr-iconkit/fontawesome5";\n\nexport default function App() {\n  return <div>\n    <FontawesomeIcon name="heart" color="red" size={24} />\n  </div>\n}\n')),(0,o.kt)("h3",{id:"react-native-or-expo"},"React Native or Expo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { View } from "react-native";\nimport FontawesomeIcon from "@svgr-iconkit/fontawesome5";\n\nexport default function App() {\n  return <View>\n    <FontawesomeIcon name="heart" color="red" size={24} />\n  </View>\n}\n')),(0,o.kt)("h4",{id:"using-with-react-native-web"},"Using with react-native-web"),(0,o.kt)("p",null,"Due to limitation of webpack resolving used in ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-web"),', it\'s suggested to use "/native" from package or adding ".web.js" when resolving files in webpack configuration. '),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { View } from "react-native";\nimport FontawesomeIcon from "@svgr-iconkit/fontawesome5/native";\n\nexport default function App() {\n  return <View>\n    <FontawesomeIcon name="heart" color="red" size={24} />\n  </View>\n}\n')),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("p",null,"See sample of webpack config ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/svgr-iconkit/svgr-iconkit/blob/main/examples/expo-explorer/webpack.config.js"},"https://github.com/svgr-iconkit/svgr-iconkit/blob/main/examples/expo-explorer/webpack.config.js")))}v.isMDXComponent=!0}}]);