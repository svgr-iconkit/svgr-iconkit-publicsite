import React from "react";
import styled, { keyframes } from "styled-components";

import { Icon } from "@svgr-iconkit/core";
import IconSpinner from "@svgr-iconkit/css-gg/icons/regular/spinner";
import { Box } from "./Box";

const Spin = keyframes`

  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }

`;
export const Wrapper = ({ content = IconSpinner, ...restProps }) => (
  <Box width="50px" height="50px" {...restProps}>
    <Icon content={content} />
  </Box>
);

export const Spinner = styled(Wrapper)`
  animation-name: ${Spin};
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default Spinner;

export const SpinnerOverlay = ({
  isProcessing = false,
  children,
  contentProps,
  ...props
}) => (
  <Box position="relative" minHeight="50vh" {...props}>
    {isProcessing && (
      <Box
        position="fixed"
        width="50px"
        height="50px"
        left="50%"
        top="50%"
        ml="-25px"
        mt="-25px"
        zIndex={10}
      >
        <Spinner {...contentProps} />
      </Box>
    )}
    {children}
  </Box>
);
