"use strict";(self.webpackChunksvgr_iconkit_publicsite=self.webpackChunksvgr_iconkit_publicsite||[]).push([[3206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:v,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,l.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:w}=(0,s.U)(),[x,N]=(0,a.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=v){const e=h[v];null!=e&&e!==x&&b.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,n=j.indexOf(t),r=b[n].value;r!==x&&(E(t),N(r),null!=v&&w(v,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>j.push(e),onKeyDown:O,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},9827:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const a=e=>{let{path:t,width:n="100%",height:a="500",hasBorder:o=!0,platform:i="web",theme:l="light"}=e;return r.createElement("iframe",{src:`https://snack.expo.dev/embedded/${t}?preview=true&amp;platform=${i}&amp;theme=${l}`,height:a,width:n,frameborder:"0","data-snack-iframe":"true",style:{display:"block",borderRadius:4,border:o?"1px solid #ececec":"none"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},9568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),i=n(5162),l=n(9827),s=n(7408);const c={sidebar_position:1},p="Intro",u={unversionedId:"intro",id:"intro",title:"Intro",description:"Inspired by gregberge/svgr and oblador/react-native-vector-icons, the kit set used to rendering SVG formatted icon content directly and supporting different framework/ platform on Next.js React.js, React-Native and Expo.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/svgr-iconkit/svgr-iconkit-publicsite/edit/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Package",permalink:"/docs/core/package"}},m={},d=[{value:"Install packages",id:"install-packages",level:2},{value:"For React.js",id:"for-reactjs",level:3},{value:"For React Native",id:"for-react-native",level:3},{value:"Start your project",id:"start-your-project",level:2},{value:"React.js for Web",id:"reactjs-for-web",level:3},{value:"React Native or Expo",id:"react-native-or-expo",level:3},{value:"Using react-native for website",id:"using-react-native-for-website",level:4},{value:"Option 1 - Use /native entry",id:"option-1---use-native-entry",level:5},{value:"Option 2 - Resolve by alias",id:"option-2---resolve-by-alias",level:5}],v={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gregberge/svgr"},"gregberge/svgr")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons"},"oblador/react-native-vector-icons"),", the kit set used to rendering SVG formatted icon content directly and supporting different framework/ platform on Next.js React.js, React-Native and Expo."),(0,a.kt)("p",null,"It provide below benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Standardize same set of icons."),(0,a.kt)("li",{parentName:"ul"},"Easy to integrate with styled-components or css based framework (for web only)."),(0,a.kt)("li",{parentName:"ul"},"All svg content exported as pure JS data easier to be reuse in other platform and/or in-app updates solution like CodePush in react native.")),(0,a.kt)("h2",{id:"install-packages"},"Install packages"),(0,a.kt)("p",null,"Install package in your react.js, react-native or expo project"),(0,a.kt)("h3",{id:"for-reactjs"},"For React.js"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @svgr-iconkit/fontawesome\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @svgr-iconkit/fontawesome\n")))),(0,a.kt)("h3",{id:"for-react-native"},"For React Native"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @svgr-iconkit/fontawesome react-native-svg\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @svgr-iconkit/fontawesome react-native-svg\n")))),(0,a.kt)("h2",{id:"start-your-project"},"Start your project"),(0,a.kt)("p",null,"Import icon from your project "),(0,a.kt)("h3",{id:"reactjs-for-web"},"React.js for Web"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import FontawesomeIcon from "@svgr-iconkit/fontawesome";\n\nexport default function App() {\n  return <div>\n    <FontawesomeIcon name="heart" color="red" size={24} onClick={(evt: MouseEvent<SVGSVGElement>) => { /** Do something **/ }} />\n  </div>\n}\n')),(0,a.kt)("p",null,"And this is how it looks ",(0,a.kt)(s.default,{name:"heart",color:"red",size:24,mdxType:"FontawesomeIcon"})),(0,a.kt)("h3",{id:"react-native-or-expo"},"React Native or Expo"),(0,a.kt)(l.Z,{path:"@lemankk/svgr-iconkit---native-example",mdxType:"ExpoSnackPreview"}),(0,a.kt)("h4",{id:"using-react-native-for-website"},"Using react-native for website"),(0,a.kt)("p",null,"From 0.3.x, it's extending full set of properties from react-native via ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-web"),'. It\'s suggested to define "custom.d.ts" in typescript or use "/native" entry to conform the typescript defintion. It make sure your styling properties converted as expected.'),(0,a.kt)("h5",{id:"option-1---use-native-entry"},"Option 1 - Use /native entry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { View } from "react-native";\nimport FontawesomeIcon from "@svgr-iconkit/fontawesome/native";\n\nexport default function App() {\n  return <View>\n    <FontawesomeIcon name="heart" color="red" size={24} onPress={(evt) => { /** Do something **/ }} />\n  </View>\n}\n')),(0,a.kt)("h5",{id:"option-2---resolve-by-alias"},"Option 2 - Resolve by alias"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="custom.d.ts"',title:'"custom.d.ts"'},'// In custom.d.ts\ndeclare module "@svgr-iconkit/core" {\n  export * from "@svgr-iconkit/core/native"\n  export { default } from "@svgr-iconkit/core/native"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},"const createExpoWebpackConfigAsync = require(\"@expo/webpack-config\");\n\n// Expo CLI will await this method so you can optionally return a promise.\nmodule.exports = async function (env, argv) {\n  const config = await createExpoWebpackConfigAsync(env, argv);\n  // Resolving \"react-native\" module first.\n  config.resolve.mainFields = ['react-native', 'browser', 'module', 'main']\n  // Finally return the new config for the CLI to use.\n  return config;\n};\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// In code\nimport { View } from "react-native";\nimport FontawesomeIcon from "@svgr-iconkit/fontawesome";\n\nexport default function App() {\n  return <View>\n    <FontawesomeIcon name="heart" color="red" size={24} onPress={(evt) => { /** Do something **/ }} />\n  </View>\n}\n')))}f.isMDXComponent=!0}}]);