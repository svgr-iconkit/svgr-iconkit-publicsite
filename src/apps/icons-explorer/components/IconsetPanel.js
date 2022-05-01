import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBlock,
  CardText,
  CardTitle,
  Col,
  Row,
} from "@bootstrap-styled/v4";
import { Icon } from "@svgr-iconkit/core";
import IconNpm from "@svgr-iconkit/fontawesome-brands/icons/regular/npm";
import LinkIconContent from "@svgr-iconkit/heroicons/icons/outline/link";
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
    originalAuthor,
    license,
    coreVersion = "0.1.20",
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
    <Box m={2}>
      <Box>
        <CardTitle>{familyName}</CardTitle>
        <Box my={1} display="flex" alignItems="center">
          <Icon content={IconNpm} color="red" size={24} />
          <Text
            as="a"
            data-testid="package-npm-link"
            href={`https://npmjs.com/package/${iconsetWithScope(packageName)}`}
            target="_blank"
            ml=".5rem"
            fontSize="12px"
          >
            {iconsetWithScope(packageName)}
          </Text>
        </Box>
      </Box>

      <Row>
        {!!originalAuthor && (
          <Col md={4} lg={6}>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Label>Creator</Label>
              <Box>
                <Text
                  as="a"
                  href={originalAuthor.url}
                  data-testid="creator-link"
                  target="_blank"
                  display="flex"
                  alignItems="center"
                >
                  <Box mr=".25rem" as="span">
                    {originalAuthor.name}
                  </Box>
                  <Icon content={LinkIconContent} size={12} />
                </Text>
              </Box>
              {!!originalAuthor.package && (
                <Box>
                  <Text
                    as="a"
                    data-testid="package-author-npm-link"
                    href={`https://npmjs.com/package/${originalAuthor.package}`}
                    target="_blank" mr=".25rem"
                   fontSize="12px">
                      {originalAuthor.package}
                    </Text>
                    <Badge fontSize="12px">
                      {originalAuthor.version}
                    </Badge>
                </Box>
              )}
            </Box>
          </Col>
        )}
        <Col md={7} lg={6}>
          <Row>
            <Box as={Col} md={4} lg={4}>
              <Label>License</Label>
              <Text>{license}</Text>
            </Box>
            <Box as={Col} md={4} lg={4}>
              <Label>Required core version</Label>
              <Badge>{coreVersion}</Badge>
            </Box>
            <Box as={Col} md={4} lg={4}>
              <Label>Total icons</Label>
              <CardText>{iconNames.length}</CardText>
            </Box>
          </Row>
        </Col>
      </Row>
    </Box>
  );
}
