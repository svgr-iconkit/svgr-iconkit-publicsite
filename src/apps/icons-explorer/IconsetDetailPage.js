import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
  matchPath,
} from "react-router-dom";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import React, { useEffect } from "react";
import { SpinnerOverlay } from "../../components/Spinner";
import Frame from "./components/Frame";
import DetailExplorer from "./components/DetailExplorer";
import { iconsets, pageSize, pathPrefix, sortedPackageNames } from "./config";
import { useIconset } from "./useIconset";

export default function IconExplorerDetailPage(props) {
  const { packageName, iconsetModule } = props;
  const { siteConfig } = useDocusaurusContext();
  const currentIconsetIndex = iconsets.findIndex(
    (iconset) => iconset.packageName === packageName
  );
  const iconsetInfo = iconsets[currentIconsetIndex];
  return (
    <Layout
      title={
        iconsetInfo ? `Icons Explorer - ${iconsetInfo.name}` : "Icons Explorer"
      }
      description="List all icons from different packages"
    >
      <Frame packageName={packageName}>
        {!!iconsetInfo && (
          <DetailExplorer
            packageName={packageName}
            iconsetInfo={{
              ...iconsetInfo,
              ...iconsetModule,
            }}
            currentIconsetIndex={currentIconsetIndex}
          />
        )}
      </Frame>
    </Layout>
  );
}
