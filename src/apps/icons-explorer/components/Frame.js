import React, { useEffect, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import {
  Button,
  Col,
  Container,
  H1,
  Header,
  Row,
  H3,
} from "@bootstrap-styled/v4";
import styled, { css } from "styled-components";
import { Box } from "../../../components/Box";
import LinkButton from "../../../components/LinkButton";
import { iconsets, pageSize, pathPrefix, sortedPackageNames } from "../config";

const SidedOverlay = styled(Box)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  content: " ";
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.8);
  left: -200vw;
  top: 0;
  transition: opacity 0.25s 0s ease-out;
  opacity: 0;
  ${({ active = false }) =>
    active &&
    css`
      left: 0;
      top: 0;
      z-index: 8;
      opacity: 1;
    `}
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const SidedMenu = styled(Box)`
  min-width: 200px;
  max-width: 300px;
  width: 80vw;
  position: fixed;
  top: var(--ifm-navbar-height);
  height: 100vh;

  overflow: auto;
  z-index: 10;
  background-color: var(--ifm-navbar-background-color);

  transform: translate(-200vw, 0);
  transition: transform 0.25s 0s ease-out;
  padding-bottom: var(--ifm-navbar-height);
  ${({ active = false }) =>
    active &&
    css`
      transform: translate(0, 0);
    `}

  @media screen and (min-width: 1024px) {
    background: transparent;
    width: var(--doc-sidebar-width);
    position: sticky;
    top: var(--ifm-navbar-height);
    height: 100%;
    transition: none;
    max-height: calc(100vh - var(--ifm-navbar-height));
    transform: translate(0, 0);
    border-right: 1px solid var(--ifm-toc-border-color);
  }
`;

export default function Frame({ children, packageName: currentPackageName }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Box as="aside" display="flex" flexDirection="row" maxWidth="100vw">
      <Box>
        <SidedOverlay active={showMenu} />
        <SidedMenu as="nav" active={showMenu}>
          <Box pt={3} px={3}>
            <H3>Icons Explorer</H3>
          </Box>
          <Box p={2} display="flex" flexDirection="column">
            {sortedPackageNames.map(
              ({ packageName, name, colorize }, index) => {
                return (
                  <LinkButton
                    key={packageName}
                    active={currentPackageName === packageName}
                    to={`${pathPrefix}${packageName}`}
                  >
                    {name}
                  </LinkButton>
                );
              }
            )}
          </Box>
        </SidedMenu>
      </Box>
      <Box minHeight="80vh" flex="1" p={3}>
        <BrowserOnly fallback={<div />}>
          {() => {
            const { ToggleAsideButton } = require("./ToggleAsideButton");
            return (
              <ToggleAsideButton active={showMenu} onChange={setShowMenu} />
            );
          }}
        </BrowserOnly>
        {children}
      </Box>
    </Box>
  );
}
