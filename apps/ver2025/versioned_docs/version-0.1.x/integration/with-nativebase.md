---
sidebar_position: 3
---

# NativeBase

## General use with individual iconkit

Starting with NativeBase v3, its using styled-components/native for styling elements. You can directly use their design token to provide theme based setting

```jsx title="src/container/HomePage.js"
import FontawesomeIcon from "@svgr-iconkit/fontawesome5";
import { Icon } from "native-base";

export default HomePage () {

  return (
    <>
      <Icon as={FontawesomeIcon} name="heart" color="primary.500" size="md" />
      <Icon as={<FontawesomeIcon variant="outline" />} name="star" size="lg" />
    </>
  )
}
`;

```
