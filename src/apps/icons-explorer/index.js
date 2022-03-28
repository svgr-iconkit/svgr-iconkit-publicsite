import { Route, Switch, Redirect } from "react-router-dom";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import React from "react";
import Frame from "./components/Frame";
import { SpinnerOverlay } from "../../components/Spinner";
import { iconsets } from "./config";

export default function IconExplorerPage({ match }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Switch>
    <Redirect to={`/explorer/${iconsets[0].packageName}`} />
    </Switch>
  );
}
