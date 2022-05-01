---
sidebar_position: 2
---

# Styled Components

## General use with individual iconkit

You are able to use the styled-components's api to provide css definition to the icons.

```jsx title="src/components/Icon.js"
import FontawesomeIcon from "@svgr-iconkit/fontawesome";
import styled from "styled-components";

export default styled(FontawesomeIcon)`
color: black;
width: 2rem;
height: 2rem;
${({color}) => color && css`color: ${color};`}
`;

```

```jsx title="src/container/HomePage.js"
import Icon from "components/Icon.js";

export default HomePage () {

  return (
    <>
      <Icon color="#ffcc000" fontSize="2rem" />
    </>
  )
}
```

## Using with Styled System

You are able to use the styled-system's api to provide styling context to the icon.

```jsx title="src/components/Icon.js"
import { Icon } from "@svgr-iconkit/core";
import styled from "styled-components";
import { compose, color, position, space } from "styled-system";

export default styled(Icon)`
width: 1.2rem;
height: 1.2rem;
${compose(color, position, space)}
`;

```


```jsx title="src/container/HomePage.js"
import Icon from "components/Icon.js";

export default HomePage () {

  return (
    <>
      <Icon color="#ffcc000" fontSize="2rem" />
    </>
  )
}
`;

```
