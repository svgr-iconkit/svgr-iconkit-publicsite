import React from "react";
import { BootstrapProvider } from "@bootstrap-styled/provider";
import { useColorMode } from "@docusaurus/theme-common";
// Default implementation, that you can customize

const v = {
  "$brand-primary": "#ff6150",
  "#brand-secondary": "#3c5ed4",
  "$enable-shadows": false,
  "$border-width": "2px",
};
v["$border-radius"] = ".5rem";
v["$border-radius-lg"] = "1.5rem";
v["$border-radius-sm"] = "2rem";

function Root({ children }) {
  const theme = { ...v };
  return <BootstrapProvider theme={theme}>{children}</BootstrapProvider>;
}

export default Root;
