import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Frame from "./components/Frame";
import DetailExplorer from "./components/DetailExplorer";
import { iconsets } from "./config";

interface IconsetDetailPageProps {
  packageName: string;
  iconsetModule: any;
}

export default function IconsetDetailPage({
  packageName,
  iconsetModule,
}: IconsetDetailPageProps) {
  const [iconsetInfo, setIconsetInfo] = useState<any>();
  const currentIconsetIndex = iconsets.findIndex(
    (iconset) => iconset.packageName === packageName
  );

  useEffect(() => {
    setTimeout(() => {
      setIconsetInfo(iconsets[currentIconsetIndex]);
    }, 10);
  }, [currentIconsetIndex]);

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

