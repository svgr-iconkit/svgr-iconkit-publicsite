import React from "react";
import { useCallback, useState } from "react";
import { Icon } from "@svgr-iconkit/core";
import Npm from "@svgr-iconkit/fontawesome5-brands/icons/regular/npm";
import { Box } from "./Box";
import {
  Card,
  CardBlock,
  CardTitle,
  CardText,
  Button,
  ButtonGroup,
} from "@bootstrap-styled/v4";
import Label from "./Label";
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

  return (
    <>
      <Card>
        <CardBlock>
          <Box>
            <CardTitle>{familyName}</CardTitle>
            <Box display="flex" alignItems="center">
              <Icon content={Npm} color="red" size={32} />
              <code>{packageName}</code>
            </Box>
            <CardText>Total {iconNames.length} icon(s).</CardText>
          </Box>
          <Box>
            {variantNames && variantNames.length > 0 && (
              <div>
                <Label>Variants:</Label>
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
              </div>
            )}
          </Box>
        </CardBlock>
      </Card>
    </>
  );
}
