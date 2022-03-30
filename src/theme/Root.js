import React from "react";
import { BootstrapProvider } from "@bootstrap-styled/provider";
import ServerStyle from './ServerStyle'
// import { useColorMode } from "@docusaurus/theme-common";
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
v["$body-bg"] = "transparent";
v["$card-bg"] = "#ffffff08";
v["$body-color"] = "inherit";

function Root({ children }) {
  const theme = { ...v };
  return (
    <>
    <ServerStyle from={children} />
      <BootstrapProvider theme={theme}>{children}</BootstrapProvider>
    </>
  );
}

export default Root;
