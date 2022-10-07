"use strict";(self.webpackChunksvgr_iconkit_publicsite=self.webpackChunksvgr_iconkit_publicsite||[]).push([[739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9844:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const a=e=>{let{path:t="",width:n="100%",height:a=500,theme:o="dark"}=e;return r.createElement("iframe",{src:`https://codesandbox.io/embed/${t}?autoresize=1&fontsize=14&hidenavigation=1&theme=${o}`,width:n,height:a,style:{borderRadius:4,border:"none",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},6329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(9844);const i={sidebar_position:1},l="Package",p={unversionedId:"core/package",id:"core/package",title:"Package",description:"Default export",source:"@site/docs/core/package.mdx",sourceDirName:"core",slug:"/core/package",permalink:"/docs/core/package",draft:!1,editUrl:"https://github.com/svgr-iconkit/svgr-iconkit-publicsite/edit/main/docs/core/package.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Properties",permalink:"/docs/core/properties"}},c={},d=[{value:"Default export",id:"default-export",level:2},{value:"Specified icon",id:"specified-icon",level:2},{value:"Example",id:"example",level:3}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"package"},"Package"),(0,a.kt)("h2",{id:"default-export"},"Default export"),(0,a.kt)("p",null,"In every iconset package, it provides few thing from the exports:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Iconset")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Component<IconProps>")),(0,a.kt)("td",{parentName:"tr",align:null},"(Default export) The iconset component contain all variants and content")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"variants")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, Component<IconProps>>")),(0,a.kt)("td",{parentName:"tr",align:null},"Indvidual groupped component by variant name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"map")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, Record<string, IconSVG>>")),(0,a.kt)("td",{parentName:"tr",align:null},"Raw data of the icon, grouped by variant and icon name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"colorize")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Given ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the iconset support coloring to the content")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"iconNames")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,a.kt)("td",{parentName:"tr",align:null},"The list of icon names")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"variantNames")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,a.kt)("td",{parentName:"tr",align:null},"The list of variant names")))),(0,a.kt)("h2",{id:"specified-icon"},"Specified icon"),(0,a.kt)("p",null,"If you need specified icon(s) only, you are allowed to import one or serveal files that you only needed."),(0,a.kt)("p",null,"You can follow below pattern when import from the package"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"package-name"),"/icons/",(0,a.kt)("inlineCode",{parentName:"p"},"variant name"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"icon name")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import HeartIconData from "@svgr-iconkit/fontawesome/icons/regular/heart"\nimport { Icon } from "@svgr-iconkit/core"\n\nexport default () => {\n  return <Icon content={HeartIconData} size="24" color="blue" />\n}\n\n')),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)(o.Z,{path:"svgr-iconkit-examples-specified-icon-dqmr0x",mdxType:"CodesandboxPreview"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/svgriconkit-examples-specified-icon-bbdmop"},"Demo on codesandbox")))}s.isMDXComponent=!0}}]);