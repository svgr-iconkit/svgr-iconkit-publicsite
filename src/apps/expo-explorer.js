import { Redirect, Route, Switch, useRouteMatch } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

export default function OldExpoExplorerPage() {
  const { siteConfig } = useDocusaurusContext();
  const matches = useRouteMatch();
  return (<>
    {/* <Route path={matches.url} exact component={Summary} /> */}
    <Redirect
      path={matches.url}
      exact
      to={`/explorer`}
    />
    </>
  );
}
