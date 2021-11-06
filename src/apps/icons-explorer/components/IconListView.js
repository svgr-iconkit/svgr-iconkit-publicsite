import React, { useContext } from "react";
import { Flex, Box } from "./Box";
import Text from "./Text";
import { Button, Card, CardBlock, Container } from "@bootstrap-styled/v4";
import styled, { css } from "styled-components";
import { Icon } from "@svgr-iconkit/core";
import { ErrorBoundary } from "./ErrorBoundary";

const IconWrapper = styled.div`
  svg {
    ${({ iconColor }) =>
      !!iconColor &&
      css`
        color: ${iconColor};
      `}
    ${({ iconSize }) =>
      !!iconSize &&
      css`
        width: ${iconSize}px;
        height: ${iconSize}px;
      `}
  }
`;

const Grid = styled(Box)`
display: grid;
grid-template-columns: 1fr  1fr 1fr 1fr;
`;

const IconItem = styled(Box).attrs({ tabIndex: 0, role: "button" })`
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  display: flex; 
  flex-direction: column;
`;

export default function IconListView({
  iconsetInfo,
  matchedIconNames,
  variantName = "regular",
  keyword,
  iconSize,
  iconColor,
  isSearchMode = false,
  renderingType = "styled",
  maxIconsShown = 50,
  onShowMore,
}) {
  const {
    iconNames = [],
    variantsMap,
    Iconset: IconComponent,
  } = iconsetInfo || {};

  const styledProps = {};
  const iconProps = {};
  if (renderingType === "styled") {
    styledProps.iconSize = iconSize;
    styledProps.iconColor = iconColor;
  } else {
    iconProps.size = iconSize;
    iconProps.color = iconColor;
  }
  return (
    <IconWrapper {...styledProps}>
      <Grid
        py={3}
        my={2}
      >
          {matchedIconNames.slice(0, maxIconsShown).map((name) => (
            <IconItem key={`${variantName}-${name}`}>
              <ErrorBoundary>
                <Flex
                  width="100%"
                  minWidth={Number(iconSize) + 10}
                  minHeight={Number(iconSize) + 10}
                  justifyContent="center"
                  alignItems="center"
                >
                  {IconComponent && (
                    <IconComponent
                      variant={variantName}
                      name={name}
                      {...iconProps}
                    />
                  )}
                </Flex>
              </ErrorBoundary>
              <Flex width="100%" justifyContent="center">
                <Text textAlign="center">
                  <small>{name}</small>
                </Text>
              </Flex>
            </IconItem>
          ))}
      </Grid>
      {matchedIconNames.length > 0 &&
        matchedIconNames.length > maxIconsShown &&
        maxIconsShown < iconNames.length && (
          <Flex>
            <Button variant="outline" onClick={() => onShowMore(50)}>
              Show more 50 icons
            </Button>
          </Flex>
        )}
    </IconWrapper>
  );
}
