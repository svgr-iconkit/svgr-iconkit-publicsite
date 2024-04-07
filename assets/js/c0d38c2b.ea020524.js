"use strict";(self.webpackChunksvgr_iconkit_publicsite=self.webpackChunksvgr_iconkit_publicsite||[]).push([[4946],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9365:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(6540),a=r(53);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:r},t)}},1470:(e,t,r)=>{r.d(t,{A:()=>x});var n=r(8168),a=r(6540),o=r(53),i=r(3104),l=r(6347),s=r(7485),c=r(1682),u=r(9466);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var v=r(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==l&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(b,(0,n.A)({},e,t)),a.createElement(h,(0,n.A)({},e,t)))}function x(e){const t=(0,v.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},7034:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(6540);const a=e=>{let{path:t="",width:r="100%",height:a=500,theme:o="dark"}=e;return n.createElement("iframe",{src:`https://codesandbox.io/embed/${t}?autoresize=1&fontsize=14&hidenavigation=1&theme=${o}`,width:r,height:a,style:{borderRadius:4,border:"none",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},2592:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(6540);const a=e=>{let{path:t,width:r="100%",height:a="500",hasBorder:o=!0,platform:i="web",theme:l="light"}=e;return n.createElement("iframe",{src:`https://snack.expo.dev/embedded/${t}?preview=true&amp;platform=${i}&amp;theme=${l}`,height:a,width:r,frameborder:"0","data-snack-iframe":"true",style:{display:"block",borderRadius:4,border:o?"1px solid #ececec":"none"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},8039:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var n=r(8168),a=(r(6540),r(5680)),o=r(1470),i=r(9365),l=r(2592),s=(r(4366),r(7034));const c={sidebar_position:1},u="Intro",p={unversionedId:"intro",id:"version-0.3.x/intro",title:"Intro",description:"Inspired by gregberge/svgr and oblador/react-native-vector-icons, the kit set used to rendering SVG formatted icon content directly and supporting different framework/ platform on Next.js React.js, React-Native and Expo.",source:"@site/versioned_docs/version-0.3.x/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/0.3.x/intro",draft:!1,editUrl:"https://github.com/svgr-iconkit/svgr-iconkit-publicsite/edit/main/versioned_docs/version-0.3.x/intro.mdx",tags:[],version:"0.3.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Properties",permalink:"/docs/0.3.x/core/properties"}},d={},m=[{value:"Install packages",id:"install-packages",level:2},{value:"For React.js",id:"for-reactjs",level:3},{value:"For React Native",id:"for-react-native",level:3},{value:"Start your project",id:"start-your-project",level:2},{value:"React.js for Web",id:"reactjs-for-web",level:3},{value:"React Native or Expo",id:"react-native-or-expo",level:3},{value:"Using react-native for website",id:"using-react-native-for-website",level:4},{value:"Option 1 - Use /native entry",id:"option-1---use-native-entry",level:5},{value:"Option 2 - Resolve by alias",id:"option-2---resolve-by-alias",level:5}],g={toc:m},f="wrapper";function v(e){let{components:t,...r}=e;return(0,a.yg)(f,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"intro"},"Intro"),(0,a.yg)("p",null,"Inspired by ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/gregberge/svgr"},"gregberge/svgr")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons"},"oblador/react-native-vector-icons"),", the kit set used to rendering SVG formatted icon content directly and supporting different framework/ platform on Next.js React.js, React-Native and Expo."),(0,a.yg)("p",null,"It provide below benefits:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Standardize same set of icons."),(0,a.yg)("li",{parentName:"ul"},"Easy to integrate with styled-components or css based framework (for web only)."),(0,a.yg)("li",{parentName:"ul"},"All svg content exported as pure JS data easier to be reuse in other platform and/or in-app updates solution like CodePush in react native.")),(0,a.yg)("h2",{id:"install-packages"},"Install packages"),(0,a.yg)("p",null,"Install package in your react.js, react-native or expo project"),(0,a.yg)("h3",{id:"for-reactjs"},"For React.js"),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(i.A,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @svgr-iconkit/fontawesome\n"))),(0,a.yg)(i.A,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @svgr-iconkit/fontawesome\n")))),(0,a.yg)("h3",{id:"for-react-native"},"For React Native"),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(i.A,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @svgr-iconkit/fontawesome react-native-svg\n"))),(0,a.yg)(i.A,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @svgr-iconkit/fontawesome react-native-svg\n")))),(0,a.yg)("h2",{id:"start-your-project"},"Start your project"),(0,a.yg)("p",null,"Import icon from your project "),(0,a.yg)("h3",{id:"reactjs-for-web"},"React.js for Web"),(0,a.yg)(s.A,{path:"svgr-iconkit-simple-web-z43xm9",mdxType:"CodesandboxPreview"}),(0,a.yg)("h3",{id:"react-native-or-expo"},"React Native or Expo"),(0,a.yg)(l.A,{path:"@lemankk/svgr-iconkit---native-example",mdxType:"ExpoSnackPreview"}),(0,a.yg)("h4",{id:"using-react-native-for-website"},"Using react-native for website"),(0,a.yg)("p",null,"From 0.3.x, it's extending full set of properties from react-native via ",(0,a.yg)("inlineCode",{parentName:"p"},"react-native-web"),'. It\'s suggested to define "custom.d.ts" in typescript or use "/native" entry to conform the typescript defintion. It make sure your styling properties converted as expected.'),(0,a.yg)("h5",{id:"option-1---use-native-entry"},"Option 1 - Use /native entry"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { View } from "react-native";\nimport FontawesomeIcon from "@svgr-iconkit/fontawesome/native";\n\nexport default function App() {\n  return <View>\n    <FontawesomeIcon name="heart" color="red" size={24} onPress={(evt) => { /** Do something **/ }} />\n  </View>\n}\n')),(0,a.yg)("h5",{id:"option-2---resolve-by-alias"},"Option 2 - Resolve by alias"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="custom.d.ts"',title:'"custom.d.ts"'},'// In custom.d.ts\ndeclare module "@svgr-iconkit/core" {\n  export * from "@svgr-iconkit/core/native"\n  export { default } from "@svgr-iconkit/core/native"\n}\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},"const createExpoWebpackConfigAsync = require(\"@expo/webpack-config\");\n\n// Expo CLI will await this method so you can optionally return a promise.\nmodule.exports = async function (env, argv) {\n  const config = await createExpoWebpackConfigAsync(env, argv);\n  // Resolving \"react-native\" module first.\n  config.resolve.mainFields = ['react-native', 'browser', 'module', 'main']\n  // Finally return the new config for the CLI to use.\n  return config;\n};\n\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// In code\nimport { View } from "react-native";\nimport FontawesomeIcon from "@svgr-iconkit/fontawesome";\n\nexport default function App() {\n  return <View>\n    <FontawesomeIcon name="heart" color="red" size={24} onPress={(evt) => { /** Do something **/ }} />\n  </View>\n}\n')))}v.isMDXComponent=!0}}]);