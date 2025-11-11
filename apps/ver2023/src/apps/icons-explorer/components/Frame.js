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
import { Icon } from "@svgr-iconkit/core"
import ColorizerIconContent from "@svgr-iconkit/fluentui-system/icons/regular/color"
import LineStylesIcon from "@svgr-iconkit/fluentui-system/icons/regular/line-style"
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
  width: 280px;
  position: fixed;
  top: 0;
    padding-top: 0;
  height: 100vh;
  z-index: 10;
  transform: translate(-280px, 0);
  transition: transform 0.25s 0s ease-out;
  ${({ active = false }) =>
    active &&
    css`
      transform: translate(0, 0);
    `}

  @media screen and (min-width: 1024px) {
    background: transparent;
    width: var(--doc-sidebar-width);
    position: sticky;
    height: 100%;
    z-index: 0;
    transition: none;
    max-height: calc(100vh);
    transform: translate(0, 0);
  }
`;

const SideMenuBody = styled(Box)`
  background-color: var(--ifm-navbar-background-color);
  overflow: auto;
  padding-bottom: env(safe-area-inset-bottom);
  height: 100%;
  @media screen and (min-width: 1024px) {
    border-right: 1px solid var(--ifm-toc-border-color);
  }
`;

export default function Frame({ children, packageName: currentPackageName }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Box display="flex" flexDirection="row" maxWidth="100vw">
      <Box as="aside">
        <SidedOverlay active={showMenu} />
        <SidedMenu as="nav" active={showMenu}>
          <SideMenuBody>
            <Box pt={3} px={3}>
              <H3>Icons Explorer</H3>
            </Box>
            <Box p={2} display="flex" flexDirection="column">
              {sortedPackageNames.map(
                ({ packageName, name, meta: { colorize, hasStrokeStyle} }, index) => {
                  return (
                    <LinkButton
                      key={packageName}
                      active={currentPackageName === packageName}
                      to={`${pathPrefix}${packageName}`}
                    >
                      <span>
                      {name}
                      </span>
                      <span className="accessory">
                      {colorize && <Icon size={18} content={ColorizerIconContent} />}
                      {hasStrokeStyle && <Icon  size={18} content={LineStylesIcon} />}
                      </span>
                    </LinkButton>
                  );
                }
              )}
            </Box>
          </SideMenuBody>
        </SidedMenu>
        <BrowserOnly fallback={<div />}>
          {() => {
            const { ToggleAsideButton } = require("./ToggleAsideButton");
            return (
              <ToggleAsideButton active={showMenu} onChange={setShowMenu} />
            );
          }}
        </BrowserOnly>
      </Box>
      <Box as={"main"} minHeight="80vh" flex="1" p={3}>
        {children}
      </Box>
    </Box>
  );
}
