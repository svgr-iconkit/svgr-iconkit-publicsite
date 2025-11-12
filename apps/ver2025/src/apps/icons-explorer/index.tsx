import React from "react";
import { Redirect } from "@docusaurus/router";
import { iconsets } from "./config";

export default function IconExplorerPage() {
  return <Redirect to={`/explorer/${iconsets[0].packageName}`} />;
}




