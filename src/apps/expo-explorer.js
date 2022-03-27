import { Redirect, Route, Switch } from "react-router-dom";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

export default function OldExpoExplorerPage({ match}) {
  const { siteConfig } = useDocusaurusContext();
  return (<>
    {/* <Route path={matches.url} exact component={Summary} /> */}
    <Redirect
      path={match.path}
      exact
      to={`/explorer`}
    />
    </>
  );
}
