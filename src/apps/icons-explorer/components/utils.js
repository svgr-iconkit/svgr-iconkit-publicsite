import * as dotProp from "dot-prop";

export const themeGet =
  (propName) =>
  ({ theme = {} }) =>
    dotProp.get(theme, propName);
