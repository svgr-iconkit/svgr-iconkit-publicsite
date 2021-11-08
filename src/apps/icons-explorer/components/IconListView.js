import { Button } from "@bootstrap-styled/v4";
import React from "react";
import styled, { css } from "styled-components";
import { Box, Flex } from "../../../components/Box";
import { ErrorBoundary } from "../../../components/ErrorBoundary";
import Text from "../../../components/Text";

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
  grid-template-columns: 1fr 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
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
  maxIconsShown = 40,
  pageSize = 40,
  onShowMore,
}) {
  if (!iconsetInfo) {
    return null;
  }
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
      <Grid py={3} my={2}>
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
          <Flex justifyContent="center">
            <Button variant="outline" onClick={() => onShowMore(pageSize)}>
              Show more {pageSize} icons
            </Button>
          </Flex>
        )}
    </IconWrapper>
  );
}
