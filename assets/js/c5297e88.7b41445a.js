"use strict";(self.webpackChunksvgr_iconkit_publicsite=self.webpackChunksvgr_iconkit_publicsite||[]).push([[1993],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3335:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:1},u="Invidual use",s={unversionedId:"advanced-usage/individual-use",id:"advanced-usage/individual-use",isDocsHomePage:!1,title:"Invidual use",description:"Direct render",source:"@site/docs/advanced-usage/individual-use.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/individual-use",permalink:"/docs/next/advanced-usage/individual-use",editUrl:"https://github.com/svgr-iconkit/svgr-iconkit-publicsite/edit/master/docs/advanced-usage/individual-use.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NativeBase",permalink:"/docs/next/integration/with-nativebase"},next:{title:"Create owned Iconset",permalink:"/docs/next/advanced-usage/create-owned-iconset"}},l=[{value:"Direct render",id:"direct-render",children:[],level:2}],d={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"invidual-use"},"Invidual use"),(0,a.kt)("h2",{id:"direct-render"},"Direct render"),(0,a.kt)("p",null,"You are able to import single or few icon data for reduce file size to load."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.js"',title:'"src/index.js"'},'import React from "react";\nimport StarOutlined from "@svgr-iconkit/fontawesome5/icons/regular/star";\nimport StarFilled from "@svgr-iconkit/fontawesome5/icons/solid/star";\nimport StarHalf from "@svgr-iconkit/fontawesome5/icons/regular/star-half-alt";\nimport { Icon } from "@svgr-iconkit/core";\n\nfunction RatingStarItem({minValue = 1, value = 0, ...props}) {\n  const content = React.useMemo(() => {\n    if ( value >= minValue ) {\n      return StarFilled\n    } else if ( value >= minValue - 0.5) {\n      return StarHalf\n    } \n    return StarOutlined;\n\n  }, [minValue, value]);\n  return <Icon content={content} {...props} />\n}\n')))}p.isMDXComponent=!0}}]);