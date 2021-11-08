import { Redirect, Route, Switch, useRouteMatch } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { iconsets } from "./config";
import DetailExplorer from "./DetailExplorer";

export default function IconExplorerPage() {
  const { siteConfig } = useDocusaurusContext();
  const matches = useRouteMatch();
  return (
    <Layout
      title={`Icons Explorer - ${siteConfig.title}`}
      description="All available iconset from original"
    >
      <Switch>
        <Route
          path={`${matches.url}/:packageName`}
          exact
          component={DetailExplorer}
        />
        {/* <Route path={matches.url} exact component={Summary} /> */}
        <Redirect
          path={matches.url}
          exact
          to={`${matches.url}/${iconsets[0].packageName}`}
        />
      </Switch>
    </Layout>
  );
}
