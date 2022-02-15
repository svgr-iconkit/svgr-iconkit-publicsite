import { Container, H1, Header } from "@bootstrap-styled/v4";
import { useHistory } from "@docusaurus/router";
import React from "react";
import { Box } from "../../components/Box";
import LinkButton from "../../components/LinkButton";
import { namespace, pathPrefix, sortedPackageNames } from "./config";

const iconsetWithoutScope = (name) => name.replace(namespace, "");
const iconsetWithScope = (name) =>
  name.startsWith(namespace) ? name : namespace + name;

export default function DetailExplorer() {
  const history = useHistory();

  const onClickIconset = (packageName) => {
    history.push(pathPrefix + packageName);
    // onChangeIconset(index);
    // setMaxIconsShown(50);
  };

  return (
    <Box as={Container} backgroundColor="transparent">
      <Box py={4}>
        <Header>
          <H1>Icons Explorer</H1>
        </Header>
        <Box p={2}>
          {sortedPackageNames.map(({ packageName, name, colorize }, index) => {
            return (
              <LinkButton
                key={packageName}
                onClick={() => onClickIconset(packageName)}
              >
                {name}
              </LinkButton>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
