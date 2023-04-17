"use strict";(self.webpackChunksvgr_iconkit_publicsite=self.webpackChunksvgr_iconkit_publicsite||[]).push([[3896],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},l="Create owned Iconset",o={unversionedId:"advanced-usage/create-owned-iconset",id:"version-0.1.x/advanced-usage/create-owned-iconset",title:"Create owned Iconset",description:"Setup",source:"@site/versioned_docs/version-0.1.x/advanced-usage/create-owned-iconset.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/create-owned-iconset",permalink:"/docs/0.1.x/advanced-usage/create-owned-iconset",draft:!1,editUrl:"https://github.com/svgr-iconkit/svgr-iconkit-publicsite/edit/main/versioned_docs/version-0.1.x/advanced-usage/create-owned-iconset.md",tags:[],version:"0.1.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NativeBase",permalink:"/docs/0.1.x/integration/with-nativebase"},next:{title:"Expo Explorer",permalink:"/docs/0.1.x/examples/expo-explorer"}},s={},c=[{value:"Setup",id:"setup",level:2},{value:"Create by generator",id:"create-by-generator",level:3},{value:"Create manually",id:"create-manually",level:3},{value:"SVG File Transformation",id:"svg-file-transformation",level:2},{value:"Don&#39;t use css style",id:"dont-use-css-style",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Default files template",id:"default-files-template",level:2},{value:"See also",id:"see-also",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-owned-iconset"},"Create owned Iconset"),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"create-by-generator"},"Create by generator"),(0,r.kt)("p",null,"We have a yeoman generator template to setup the iconset. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"yeoman svgr-iconkit")," and fill-in the some basic information, all the default setup will be ready for you."),(0,r.kt)("p",null,"After repositories ready, just put your svg icon files under ROOT/assets/regular and run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," in termainl. The iconset will be ready for use."),(0,r.kt)("h3",{id:"create-manually"},"Create manually"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"svgr-iconkit")," is providing sharable, typescript defined dataset for rendering actual context by framework & platform that needed. "),(0,r.kt)("p",null,"To create an iconset, you need to prepare and setup below file structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"assets - Original svg files (Optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{variantName}")," - The variant name of the iconset, default is ",(0,r.kt)("inlineCode",{parentName:"li"},"regular"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{iconName}.svg")," - The original svg data"))))),(0,r.kt)("li",{parentName:"ul"},"icons - Indvidual icon data used for production use.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{variantName}")," - The variant name of the iconset, default is ",(0,r.kt)("inlineCode",{parentName:"li"},"regular"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{iconName}.js")," - The JS content of SVGData."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{iconName}.d.ts")," - Typescript defintion of SVGData."))))),(0,r.kt)("li",{parentName:"ul"},"src: Source code of elements with configuration",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"config.ts - Original configuration contains all information about the iconset"),(0,r.kt)("li",{parentName:"ul"},"index.ts - React.js rendering version "),(0,r.kt)("li",{parentName:"ul"},"native.ts - React Native rendering version"))),(0,r.kt)("li",{parentName:"ul"},"tsconfig.json - Typescript configuration"),(0,r.kt)("li",{parentName:"ul"},"rollup.config.js - Rollup build configuration"),(0,r.kt)("li",{parentName:"ul"},"package.json"),(0,r.kt)("li",{parentName:"ul"},"index.js / index.d.ts - Used for React.js under webpack"),(0,r.kt)("li",{parentName:"ul"},"index.native.js / index.native.d.ts - Used for ReactNative under metro bundler")),(0,r.kt)("h2",{id:"svg-file-transformation"},"SVG File Transformation"),(0,r.kt)("p",null,"When you try to create actual SVG data, you can use our command line tools to assist for the transformation."),(0,r.kt)("p",null,"You can install ",(0,r.kt)("inlineCode",{parentName:"p"},"@svgr-iconkit/cli")," by npm / yarn globally and run below commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# When your svg icons located at ROOT/assets folder\nsvgr-iconkit convert-data ./assets ./src/gen/icons/regular\n")),(0,r.kt)("p",null,"All svg file will be transform as JavaScript / Typescript readable context"),(0,r.kt)("h3",{id:"dont-use-css-style"},"Don't use css style"),(0,r.kt)("p",null,"Assigning svg content with inline style and/or css class defintion would cause your icon not running as expected during render. Mark all your colorizable context with ",(0,r.kt)("inlineCode",{parentName:"p"},'"currentColor"')," in ",(0,r.kt)("inlineCode",{parentName:"p"},"fill")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"stroke")," attribute(s)."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"In configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config.ts"),", you need to provide below elements for create iconset:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IconVariant"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},'Typescript type defintion. The variant names. example: "regular"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variantNames"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"IconVariant[]")),(0,r.kt)("td",{parentName:"tr",align:null},"List of variant names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultVariant"),(0,r.kt)("td",{parentName:"tr",align:null},"IconVariant"),(0,r.kt)("td",{parentName:"tr",align:null},"The default variant name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"familyName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The family name for rendering identification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IconNames"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},'Typescript type defintion. The icon names, example: "heart"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iconNames"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"IconNames[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Name list for all icons")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorize"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"To identify if iconset able to be coloring")))),(0,r.kt)("h2",{id:"default-files-template"},"Default files template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/index.ts"',title:'"src/index.ts"'},'import { createFamily, createVariantsMap } from "@svgr-iconkit/core";\nimport {\n  familyName,\n  IconNames,\n  map,\n  variantNames,\n  IconVariant,\n  defaultVariant,\n  colorize,\n} from "./config";\nexport * from "./config";\nexport const Iconset = createFamily<IconNames, IconVariant>({\n  familyName,\n  variantsMap: map,\n  defaultVariant,\n  colorize,\n});\nexport const variants = createVariantsMap({\n  familyName,\n  variantNames,\n  colorize,\n  variantsMap: map,\n});\n\nexport default Iconset;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/native.ts"',title:'"src/native.ts"'},'import { createFamily, createVariantsMap } from "@svgr-iconkit/core/native";\nimport {\n  familyName,\n  IconNames,\n  map,\n  variantNames,\n  IconVariant,\n  defaultVariant,\n  colorize,\n} from "./config";\nexport * from "./config";\nexport const Iconset = createFamily<IconNames, IconVariant>({\n  familyName,\n  variantsMap: map,\n  defaultVariant,\n  colorize,\n});\nexport const variants = createVariantsMap({\n  familyName,\n  variantNames,\n  colorize,\n  variantsMap: map,\n});\n\nexport default Iconset;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "module-name",\n  "version": "0.1.0",\n  "main": "index",\n  "react-native": "native",\n  "commonjs": "index",\n  "module": "lib/es/index.js",\n  "types": "index",\n  "directories": {\n    "icons": "icons",\n    "lib": "lib",\n    "native": "native"\n  },\n  "files": [\n    "icons",\n    "lib",\n    "native",\n    "index.js",\n    "index.native.js",\n    "index.native.d.ts",\n    "index.web.js",\n    "index.web.d.ts",\n    "index.d.ts",\n    "native.js",\n    "native.d.ts",\n    "README.md"\n  ],\n  "peerDependencies": {\n    "@svgr-iconkit/core": "^0.2.0",\n    "react": "*",\n    "react-native-svg": "*"\n  },\n  "peerDependenciesMeta": {\n    "react-native-svg": {\n      "optional": true\n    }\n  },\n  "dependencies": {\n    "@svgr-iconkit/core": "^0.2.0"\n  },\n  "devDependencies": {\n    "@babel/cli": "^7.14.3",\n    "@babel/core": "^7.14.3",\n    "@babel/plugin-transform-typescript": "^7.14.4",\n    "@babel/preset-env": "^7.14.4",\n    "@babel/preset-react": "^7.13.13",\n    "@rollup/plugin-babel": "^5.3.0",\n    "@rollup/plugin-commonjs": "^19.0.0",\n    "@rollup/plugin-json": "^4.1.0",\n    "@rollup/plugin-node-resolve": "^13.0.0",\n    "@svgr-iconkit/build-config": "^0.2.0",\n    "@svgr-iconkit/cli": "^0.2.0",\n    "@svgr-iconkit/rollup-plugin-svg-data": "^0.2.0",\n    "@types/node": "^15.6.1",\n    "@types/react": "^17.0.9",\n    "@types/react-native": "^0.64.10",\n    "npm-run-all": "^4.1.5",\n    "react": "17.0.1",\n    "react-native": "^0.64.2",\n    "react-native-svg": "12.1.0",\n    "rimraf": "^3.0.2",\n    "rollup": "^2.50.4",\n    "rollup-plugin-peer-deps-external": "^2.2.4",\n    "rollup-plugin-terser": "^7.0.2",\n    "rollup-plugin-typescript2": "^0.30.0",\n    "terser": "^5.7.0",\n    "typescript": "^4.3.4"\n  },\n  "scripts": {\n    "iconsmap:create:regular": "svgr-iconkit convert-data ./assets/regular ./src/gen/icons/regular",\n    "iconsmap:create": "npm-run-all iconsmap:create:regular",\n    "iconsmap:prepare": "rimraf ./src/gen/icons/ ./gen/icons/",\n    "iconsmap": "npm-run-all iconsmap:prepare iconsmap:create",\n    "prebuild": "rimraf ./lib ./dist ./tmp ./icons",\n    "compile": "rollup -c",\n    "build": "npm-run-all iconsmap compile"\n  },\n}\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="rollup.config.js"',title:'"rollup.config.js"'},'import {\n  createRollupLibraryConfig,\n  createRollupDataConfig,\n} from "@svgr-iconkit/build-config";\n\nconst pkg = require("./package.json");\n\nconst plugins = [];\n\nexport default [\n  createRollupLibraryConfig({\n    libraryName: pkg.name,\n    entry: ["./src/index.ts", "./src/native.ts"],\n    plugins,\n  }),\n  createRollupDataConfig({\n    entryPath: "./src/gen/icons/regular",\n    outputPath: "./icons/regular",\n  }),\n];\n\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Important: Below files used for bundler for selecting right files to render context. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"module.exports = require('./lib/commonjs/index');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.native.js"',title:'"index.native.js"'},"module.exports = require('./lib/commonjs/native');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.web.js"',title:'"index.web.js"'},"module.exports = require('./lib/commonjs/native');\n")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://facebook.github.io/metro/docs/getting-started#configuration"},"metro.js documentation")," for react-native platform based file extension.")))}m.isMDXComponent=!0}}]);