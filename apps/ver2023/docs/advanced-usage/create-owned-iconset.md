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
  "exports": {
    "./icons/*": "./icons/*.js",
    "./native": {
      "require": "./lib/cjs/native.js",
      "browser": "./lib/cjs/native.js",
      "import": "./lib/esm/native.js",
      "types": "./lib/types/native",
      "default": "./lib/esm/native.js"
    },
    ".": {
      "react-native": "./lib/esm/native.js",
      "import": "./lib/esm/index.js",
      "default": "./lib/cjs/index.js"
    }
  },
  "main": "lib/cjs/index",
  "react-native": "lib/esm/native",
  "commonjs": "lib/cjs/index",
  "module": "lib/esm/index",
  "types": "lib/types/index",
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
    "@svgr-iconkit/core": "^0.3.0",
    "react": "^16.8.0 || ^17.0.1 || ^18.0.0"
  },
  "peerDependenciesMeta": {
    "react-native": {
      "optional": true
    },
    "react-native-svg": {
      "optional": true
    }
  },
  "dependencies": {
    "@svgr-iconkit/core": "^0.3.0"
  },
  "devDependencies": {
    "@ant-design/icons-svg": "^4.2.1",
    "@svgr-iconkit/build-config": "^0.3.0",
    "@svgr-iconkit/cli": "^0.3.0",
    "@types/node": "^15.6.1",
    "npm-run-all": "^4.1.5",
    "react": "^17.0.1",
    "rimraf": "^3.0.2",
    "typescript": "^4.3.4"
  },
  "publishConfig": {
    "access": "public"
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

## See also

- [metro.js documentation](https://facebook.github.io/metro/docs/getting-started#configuration) for react-native platform based file extension.
