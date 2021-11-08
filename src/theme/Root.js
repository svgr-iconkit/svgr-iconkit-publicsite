import React from "react";
import { BootstrapProvider } from "@bootstrap-styled/provider";
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
  return <BootstrapProvider theme={v}>{children}</BootstrapProvider>;
}

export default Root;
