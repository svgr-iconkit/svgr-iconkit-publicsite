---
sidebar_position: 1
---

# Intro



Inspired by [gregberge/svgr](https://github.com/gregberge/svgr) and [oblador/react-native-vector-icons](https://github.com/oblador/react-native-vector-icons), the kit set used to rendering SVG formatted icon content directly and cross-platform from React.js, React-Native and Expo.

It provide below benefits:
- Standardize same set of icons.
- Easy to integrate with styled-components.
- All svg content exported as pure JS data easier to be reuse in other platform and/or in-app updates solution like CodePush in react native.



## Install packages

Install package in your react.js, react-native or expo project

**npm**
```shell
npm install @svgr-iconkit/core @svgr-iconkit/fontawesome5
```


**yarn**
```shell
yarn add @svgr-iconkit/core @svgr-iconkit/fontawesome5
```

## Start your project

Import icon from your project 

### React.js for Web

```javascript
import FontawesomeIcon from "@svgr-iconkit/fontawesome5";

export default function App() {
  return <div>
    <FontawesomeIcon name="heart" color="red" size={24} />
  </div>
}
```

### React Native or Expo


```javascript
import { View } from "react-native";
import FontawesomeIcon from "@svgr-iconkit/fontawesome5";

export default function App() {
  return <View>
    <FontawesomeIcon name="heart" color="red" size={24} />
  </View>
}
```

#### Using with react-native-web

Due to limitation of webpack resolving used in ```react-native-web```, it's suggested to use "/native" entry for React Native / Expo project. 

Example:

```javascript
import { View } from "react-native";
import FontawesomeIcon from "@svgr-iconkit/fontawesome5/native";

export default function App() {
  return <View>
    <FontawesomeIcon name="heart" color="red" size={24} />
  </View>
}
```
