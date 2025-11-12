---
sidebar_position: 1
---

# Invidual use

## Direct render

You are able to import single or few icon data for reduce file size to load.

```jsx title="src/index.js"
import React from "react";
import StarOutlined from "@svgr-iconkit/fontawesome5/icons/regular/star";
import StarFilled from "@svgr-iconkit/fontawesome5/icons/solid/star";
import StarHalf from "@svgr-iconkit/fontawesome5/icons/regular/star-half-alt";
import { Icon } from "@svgr-iconkit/core";

function RatingStarItem({minValue = 1, value = 0, ...props}) {
  const content = React.useMemo(() => {
    if ( value >= minValue ) {
      return StarFilled
    } else if ( value >= minValue - 0.5) {
      return StarHalf
    } 
    return StarOutlined;

  }, [minValue, value]);
  return <Icon content={content} {...props} />
}
```

