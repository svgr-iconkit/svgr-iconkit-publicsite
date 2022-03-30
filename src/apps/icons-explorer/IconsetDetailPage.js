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
import React, { useEffect, useState } from "react";
import { SpinnerOverlay } from "../../components/Spinner";
import Frame from "./components/Frame";
import DetailExplorer from "./components/DetailExplorer";
import { iconsets, pageSize, pathPrefix, sortedPackageNames } from "./config";
import { useIconset } from "./useIconset";

export default function IconExplorerDetailPage(props) {
  const { packageName, iconsetModule } = props;
  const [iconsetInfo, setIconsetInfo] = useState();
  const { siteConfig } = useDocusaurusContext();
  const currentIconsetIndex = iconsets.findIndex(
    (iconset) => iconset.packageName === packageName
  );
  useEffect(() => {
    setTimeout(() => {
      setIconsetInfo(iconsets[currentIconsetIndex]);
    }, 10);
  }, []);
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
