import {
  Badge, Button,
  ButtonGroup, Card,
  CardBlock, CardText, CardTitle
} from "@bootstrap-styled/v4";
import { Icon } from "@svgr-iconkit/core";
import IconNpm from "@svgr-iconkit/fontawesome5-brands/icons/regular/npm";
import React, { useState } from "react";
import { Box } from "../../../components/Box";
import Label from "../../../components/Label";
import { Text } from "../../../components/Text";
import { iconsetWithScope } from "../utils";
export default function IconsetPanel({
  onVariantChange,
  variantName,
  iconsetInfo,
  iconSize,
  iconColor,
}) {
  const {
    name: familyName,
    packageName,
    version,
    variantNames = [],
    iconNames = [],
  } = iconsetInfo || {};
  const options = {
    packageName,
    variantName,
    iconName: iconNames[0],
    iconColor,
    iconSize,
  };
  const [usageTabIndex, setUsageTabIndex] = useState(0);

  if (!packageName) {
    return null;
  }

  return (
    <Box>
      <Box as={Card}>
        <CardBlock>
          <Box>
            <CardTitle>{familyName}</CardTitle>
            <Box my={1} display="flex" alignItems="center">
              <Icon content={IconNpm} color="red" size={24} />
              <Text
                as="a"
                href={`https://npmjs.com/package/${iconsetWithScope(
                  packageName
                )}`}
                target="_blank"
                ml=".5rem"
                fontSize="12px"
              >
                {iconsetWithScope(packageName)}
              </Text>
            </Box>
            <Box my={2}>
              <Label>Required core version</Label>
              <Badge>{version}</Badge>
            </Box>
            <Box my={2}>
              <Label>Total icons</Label>
              <CardText>{iconNames.length}</CardText>
            </Box>
          </Box>
          {variantNames && variantNames.length > 0 && (
            <Box my={2}>
              <Label>Variants</Label>
              <ButtonGroup>
                {variantNames.map((name) => (
                  <Button
                    key={name}
                    onClick={() => onVariantChange(name)}
                    color={variantName === name ? "primary" : "light"}
                  >
                    {name}
                  </Button>
                ))}
              </ButtonGroup>
            </Box>
          )}
        </CardBlock>
      </Box>
    </Box>
  );
}
