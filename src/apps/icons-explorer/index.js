import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Switch, Route, useRouteMatch } from "@docusaurus/router";
import IconsExplorer from "./Portal";

export default function IconExplorerPage() {
  const { siteConfig } = useDocusaurusContext();
  const matches = useRouteMatch();
  return (
    <Layout
      title={`Icons Explorer - ${siteConfig.title}`}
      description="All available iconset from original"
    >
      <Switch>
        <Route path={`${matches.url}/:familyName`} exact component={IconsExplorer} />
        <Route path={matches.url} exact component={IconsExplorer} />
      </Switch>
    </Layout>
  );
}
