import {
  Card,
  CardBlock,
  Col,
  Row,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupButton,
  ButtonGroup,
  Button,
} from "@bootstrap-styled/v4";
import styled, { css } from "styled-components";
import { Icon } from "@svgr-iconkit/core";
import CogsIconContent from "@svgr-iconkit/material-community/icons/regular/cogs";
import IconColorPicker from "@svgr-iconkit/css-gg/icons/regular/color-picker";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Picker from "../../../components/Picker";
import { Box } from "../../../components/Box";
import Label from "../../../components/Label";
import Slider from "../../../components/Slider";
import Text from "../../../components/Text";

const SideWidget = styled(Box)`
  position: fixed;
  left: 100vw;
  z-index: 7;
  top: 0;
  transform: translate(0);
  width: 260px;

  transition: transform 0.25s 0s ease-in-out;
  ${({ active = false }) =>
    active &&
    css`
      transform: translate(-240px, 0);
    `}

  @media screen and (min-width: 1024px) {
    width: 340px;
    ${({ active = false }) =>
      active &&
      css`
        transform: translate(-320px, 0);
      `}
  }
  @media screen and (min-width: 1200px) {
    padding-right: auto;
    position: sticky;
    left: auto;
    top: 5rem;
    width: auto;
  }
`;

const SideWidgetButton = styled(Box).attrs({ role: "button", tabIndex: 0 })`
  cursor: pointer;
  position: absolute;
  left: -50px;
  width: 50px;
  height: 50px;
  top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: none;
  background-color: var(--ifm-navbar-background-color);
  border: 1px solid var(--ifm-navbar-border-color);
  box-shadow: var(--ifm-navbar-shadow);
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
const SideWidgetBody = styled(Box)`
  position: absolute;
  top: 100px;
  left: 0;
  background-color: var(--ifm-navbar-background-color);
  padding: 18px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: none;
  margin-right: 20px;
  box-shadow: var(--ifm-navbar-shadow);

  @media screen and (min-width: 1200px) {
    position: relative;
    top: auto;
    left: auto;
    width: auto;
    background-color: transparent;
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
`;

export default function ControlPanel({
  variantNames = [],
  currentVariant = "",
  onChangeVariant,
  iconColor,
  onChangeIconColor,
  iconSize,
  onChangeIconSize,
  keyword,
  onChangeKeyword,
  renderingType,
  onChangeRenderingType,
  colorize = true,
}) {
  const [isActive, setIsActive] = useState(false);
  const [isColorPickerOpen, setColorPickerOpen] = useState(false);
  return (
    <SideWidget active={isActive}>
      <SideWidgetButton onClick={() => setIsActive((val) => !val)}>
        <Icon content={CogsIconContent} size="24" />
      </SideWidgetButton>
      <SideWidgetBody>
        <Form>
          <Row>
            {variantNames && variantNames.length > 0 && (
              <Col xs={12}>
                <FormGroup>
                  <Label>Variants</Label>
                  <ButtonGroup size="sm">
                    {variantNames.map((name) => (
                      <Button
                        key={name}
                        data-testid="iconset-variant-button"
                        data-variant-name={name}
                        onClick={() => onChangeVariant && onChangeVariant(name)}
                        color={currentVariant === name ? "primary" : "light"}
                      >
                        {name}
                      </Button>
                    ))}
                  </ButtonGroup>
                </FormGroup>
              </Col>
            )}
            <Col xs={12}>
              <FormGroup>
                <Label>Keyword</Label>
                <Box my={1}>
                  <InputGroup my={1}>
                    <Input
                      value={keyword}
                      placeholder="Search icons..."
                      onChange={(evt) => {
                        onChangeKeyword && onChangeKeyword(evt.target.value);
                      }}
                    />
                  </InputGroup>
                </Box>
              </FormGroup>
            </Col>
            <Col xs={12}>
              <FormGroup>
                <Label>Size</Label>
                <Box display="flex" my={1} alignItems="center">
                  <Slider
                    min={8}
                    max={128}
                    width="100%"
                    value={iconSize}
                    onChange={onChangeIconSize}
                  />
                  <Text textAlign="center" width="3rem">
                    {iconSize}
                  </Text>
                </Box>
              </FormGroup>
            </Col>
            <Col xs={12}>
              <FormGroup>
                <Label>Color</Label>
                {!colorize && (
                  <FormText>Not supported for this iconset</FormText>
                )}
                <Picker
                  my={1}
                  isOpen={isColorPickerOpen}
                  onClose={() => setColorPickerOpen(false)}
                  content={
                    <ChromePicker
                      color={iconColor}
                      onChangeComplete={(color) =>
                        onChangeIconColor && onChangeIconColor(color.hex)
                      }
                    />
                  }
                >
                  <InputGroup>
                    <InputGroupButton
                      onClick={() => setColorPickerOpen(true)}
                      style={{
                        backgroundColor: iconColor,
                        padding: "0rem 0.5rem",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                      }}
                    >
                      <Icon content={IconColorPicker} size={24} color="white" />
                    </InputGroupButton>
                    <Input
                      type="text"
                      onClick={() => setColorPickerOpen(true)}
                      value={iconColor}
                      onChange={(e) =>
                        onChangeIconColor && onChangeIconColor(e.target.value)
                      }
                    />
                  </InputGroup>
                </Picker>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </SideWidgetBody>
    </SideWidget>
  );
}
