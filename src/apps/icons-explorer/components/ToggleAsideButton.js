import React, { useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly"
import styled, { css } from "styled-components";
import { Button } from "@bootstrap-styled/v4"
import { Box } from "../../../components/Box";

const HiddenMore = styled(Box)`
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
    <HiddenMore p={2}>
      <Button color="light" onClick={() => onChange && onChange(true)}>
        More Iconset
      </Button>
    </HiddenMore>
  );
};
