import React, { useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly"
import styled, { css } from "styled-components";
import { Button } from "@bootstrap-styled/v4"
import { Box } from "../../../components/Box";
import { Icon } from "@svgr-iconkit/core"
import MoreIcon from "@svgr-iconkit/themify-icons/icons/regular/more-alt"
 
const HiddenMore = styled(Box)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;


const SideWidgetButton = styled(Box).attrs({ role: "button", tabIndex: 0 })`
  cursor: pointer;
  position: fixed;
  right: 0px;
  width: 50px;
  height: 50px;
  top: 80px;
  display: flex;
  z-index: 2 ;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: none;
  background-color: var(--ifm-navbar-background-color);
  border: 1px solid var(--ifm-navbar-border-color);
  box-shadow: var(--ifm-navbar-shadow);
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;


export const ToggleAsideButton = ({ active, onChange }) => {
  useEffect(() => {
    if (!active) {
      return;
    }

    const handler = () => {
      onChange(false);
    };
    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, [active]);

  return (
      <SideWidgetButton  onClick={() => onChange && onChange(true)}>
        <Icon content={MoreIcon} size="24px" />
      </SideWidgetButton>
  );
};
