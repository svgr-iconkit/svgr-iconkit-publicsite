---
sidebar_position: 3
---

# NativeBase

## General use with individual iconkit

Starting with NativeBase v3, its using styled-components/native for styling elements. You can pass the iconset into ```as``` properties from default Iconset component or variant based elements.

### Example

```jsx title="src/App.js"
import FontawesomeIcon, { variants } from "@svgr-iconkit/fontawesome";
import { NativeBaseProvider, Icon, Box, IconButton, Button } from "native-base";

export default function App () {
  return (
    <NativeBaseProvider>
    <Box p="5">
      <Icon as={FontawesomeIcon} name="heart" color="primary.500" size="md" />
      <Icon as={variants.regular} name="heart" color="red.500" size="md" />
      <Button leftIcon={<Icon as={FontawesomeIcon} name="star" />}>Click Me</Button>
      <Button rightIcon={<Icon as={variants.regular} name="star" />}>Click Me</Button>
      <IconButton icon={<Icon as={FontawesomeIcon} name="star" />} />
      <IconButton icon={<Icon as={variants.regular} name="star" />} />
      </Box>
    </NativeBaseProvider>
  )
}

```


[Demo link on Expo](https://snack.expo.dev/@lemankk/svgr-iconkit-examples---nativebase-icon-component) 