import { Route, Switch, Redirect } from "react-router-dom";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { iconsets } from "./config";
import DetailExplorer from "./DetailExplorer";

export default function IconExplorerPage({ match }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Icons Explorer - ${siteConfig.title}`}
      description="All available iconset from original"
    >
      <Switch>
        <Route
          path={`${match.path}/:packageName`}
          exact
          component={DetailExplorer}
        />
        {/* <Route path={matches.url} exact component={Summary} /> */}
        <Redirect
          path={match.path}
          exact
          to={`${match.path}/${iconsets[0].packageName}`}
        />
      </Switch>
    </Layout>
  );
}
