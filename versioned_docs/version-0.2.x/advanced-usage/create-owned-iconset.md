---
sidebar_position: 2
---

# Create owned Iconset

## Setup
### Create by generator

We have a yeoman generator template to setup the iconset. Run ```yeoman svgr-iconkit``` and fill-in the some basic information, all the default setup will be ready for you.

After repositories ready, just put your svg icon files under ROOT/assets/regular and run ```npm run build``` in termainl. The iconset will be ready for use.

### Create manually

```svgr-iconkit``` is providing sharable, typescript defined dataset for rendering actual context by framework & platform that needed. 

To create an iconset, you need to prepare and setup below file structure:

- assets - Original svg files (Optional)
   - ```{variantName}``` - The variant name of the iconset, default is ```regular```
      - ```{iconName}.svg``` - The original svg data
- icons - Indvidual icon data used for production use.
   - ```{variantName}``` - The variant name of the iconset, default is ```regular```
      - ```{iconName}.js``` - The JS content of SVGData.
      - ```{iconName}.d.ts``` - Typescript defintion of SVGData.
- src: Source code of elements with configuration
   - config.ts - Original configuration contains all information about the iconset
   - index.ts - React.js rendering version 
   - native.ts - React Native rendering version
- tsconfig.json - Typescript configuration
- rollup.config.js - Rollup build configuration
- package.json
- index.js / index.d.ts - Used for React.js under webpack
- index.native.js / index.native.d.ts - Used for ReactNative under metro bundler

  
 
## SVG File Transformation
  
When you try to create actual SVG data, you can use our command line tools to assist for the transformation.

You can install ```@svgr-iconkit/cli``` by npm / yarn globally and run below commands


```shell
# When your svg icons located at ROOT/assets folder
svgr-iconkit convert-data ./assets ./src/gen/icons/regular
```

All svg file will be transform as JavaScript / Typescript readable context


### Don't use css style

Assigning svg content with inline style and/or css class defintion would cause your icon not running as expected during render. Mark all your colorizable context with ```"currentColor"``` in ```fill``` or ```stroke``` attribute(s).

## Configuration

In configuration file ```src/config.ts```, you need to provide below elements for create iconset:

| name | type | description |
| - | - | - |
| IconVariant | - | Typescript type defintion. The variant names. example: "regular" | "outlined" |
| variantNames | ```string[]``` \| ```IconVariant[]``` | List of variant names |
| defaultVariant | IconVariant | The default variant name |
| familyName | string | The family name for rendering identification | 
| IconNames | - | Typescript type defintion. The icon names, example: "heart" | "star" | "home". It should be able to be created by ```@svgr-iconkit/cli``` |
| iconNames | ```string[]``` \| ```IconNames[]``` |  Name list for all icons | 
| colorize | boolean | To identify if iconset able to be coloring |

## Default files template

```typescript title="src/index.ts"
import { createFamily, createVariantsMap } from "@svgr-iconkit/core";
import {
  familyName,
  IconNames,
  map,
  variantNames,
  IconVariant,
  defaultVariant,
  colorize,
} from "./config";
export * from "./config";
export const Iconset = createFamily<IconNames, IconVariant>({
  familyName,
  variantsMap: map,
  defaultVariant,
  colorize,
});
export const variants = createVariantsMap<IconNames, IconVariant>({
  familyName,
  variantNames,
  colorize,
  variantsMap: map,
});

export default Iconset;

```


```typescript title="src/native.ts"
import { createFamily, createVariantsMap } from "@svgr-iconkit/core/native";
import {
  familyName,
  IconNames,
  map,
  variantNames,
  IconVariant,
  defaultVariant,
  colorize,
} from "./config";
export * from "./config";
export const Iconset = createFamily<IconNames, IconVariant>({
  familyName,
  variantsMap: map,
  defaultVariant,
  colorize,
});
export const variants = createVariantsMap<IconNames, IconVariant>({
  familyName,
  variantNames,
  colorize,
  variantsMap: map,
});

export default Iconset;
```

```json title="package.json"
{
  "name": "module-name",
  "version": "0.1.0",
  "main": "index",
  "react-native": "index",
  "commonjs": "index",
  "module": "index.esm",
  "types": "index",
  "directories": {
    "icons": "icons",
    "lib": "lib",
    "native": "native"
  },
  "files": [
    "icons",
    "lib",
    "native",
    "index.js",
    "index.native.js",
    "index.native.d.ts",
    "index.web.js",
    "index.web.d.ts",
    "index.d.ts",
    "native.js",
    "native.d.ts",
    "README.md"
  ],
  "peerDependencies": {
    "@svgr-iconkit/core": "^0.2.0",
    "react": "*",
    "react-native-svg": "*"
  },
  "peerDependenciesMeta": {
    "react-native-svg": {
      "optional": true
    }
  },
  "dependencies": {
    "@svgr-iconkit/core": "^0.2.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.14.3",
    "@babel/core": "^7.14.3",
    "@babel/plugin-transform-typescript": "^7.14.4",
    "@babel/preset-env": "^7.14.4",
    "@babel/preset-react": "^7.13.13",
    "@rollup/plugin-babel": "^5.3.0",
    "@rollup/plugin-commonjs": "^19.0.0",
    "@rollup/plugin-json": "^4.1.0",
    "@rollup/plugin-node-resolve": "^13.0.0",
    "@svgr-iconkit/build-config": "^0.2.0",
    "@svgr-iconkit/cli": "^0.2.0",
    "@svgr-iconkit/rollup-plugin-svg-data": "^0.2.0",
    "@types/node": "^15.6.1",
    "@types/react": "^17.0.9",
    "@types/react-native": "^0.64.10",
    "npm-run-all": "^4.1.5",
    "react": "17.0.1",
    "react-native": "^0.64.2",
    "react-native-svg": "12.1.0",
    "rimraf": "^3.0.2",
    "rollup": "^2.50.4",
    "rollup-plugin-peer-deps-external": "^2.2.4",
    "rollup-plugin-terser": "^7.0.2",
    "rollup-plugin-typescript2": "^0.30.0",
    "terser": "^5.7.0",
    "typescript": "^4.3.4"
  },
  "scripts": {
    "iconsmap:create:regular": "svgr-iconkit convert-data ./assets/regular ./src/gen/icons/regular",
    "iconsmap:create": "npm-run-all iconsmap:create:regular",
    "iconsmap:prepare": "rimraf ./src/gen/icons/ ./gen/icons/",
    "iconsmap": "npm-run-all iconsmap:prepare iconsmap:create",
    "prebuild": "rimraf ./lib ./dist ./tmp ./icons",
    "compile": "rollup -c",
    "build": "npm-run-all iconsmap compile"
  },
}

```

```javascript title="rollup.config.js"
import {
  createRollupLibraryConfig,
  createRollupDataConfig,
} from "@svgr-iconkit/build-config";

const pkg = require("./package.json");

const plugins = [];

export default [
  createRollupLibraryConfig({
    libraryName: pkg.name,
    entry: ["./src/index.ts", "./src/native.ts"],
    plugins,
  }),
  createRollupDataConfig({
    entryPath: "./src/gen/icons/regular",
    outputPath: "./icons/regular",
  }),
];


```

> Important: Below files used for bundler for selecting right files to render context. 

```javascript title="index.js"
module.exports = require('./lib/commonjs/index');
```

```javascript title="index.native.js"
module.exports = require('./lib/commonjs/native');
```

```javascript title="index.web.js"
module.exports = require('./lib/commonjs/native');
```

```javascript title="index.js"
module.exports = require('./lib/commonjs/index');
```

```javascript title="index.esm.native.js"
module.exports = require('./lib/commonjs/native');
```

```javascript title="index.esm.web.js"
module.exports = require('./lib/commonjs/native');
```

## See also


- [metro.js documentation](https://facebook.github.io/metro/docs/getting-started#configuration) for react-native platform based file extension.
