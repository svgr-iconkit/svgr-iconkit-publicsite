import React, { useState } from "react";
import { Box, Flex } from "./Box";
import Slider from "./Slider";
import Text from "./Text";
import {
  Container,
  Button,
  ButtonGroup,
  Dropdown,
  Select,
  Card,
  Input,
  InputGroup,
  Form,
  FormGroup,
  FormCustom,
  Label,
} from "@bootstrap-styled/v4";
import { TwitterPicker } from "react-color";
import Picker from "./Picker";

export default function ControlPanel({
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
  const [isColorPickerOpen, setColorPickerOpen] = useState(false);
  return (
    <>
      <Form inline>
        <FormGroup row>
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
        <FormGroup row>
          <Label>Size</Label>
          <Box my={1}>
            <Slider
              min={8}
              max={64}
              width="100%"
              value={iconSize}
              onChange={onChangeIconSize}
            />
            <Text>{iconSize}</Text>
          </Box>
        </FormGroup>
        <FormGroup row display={colorize ? "block" : "none"}>
          <Label>Color</Label>
          <Picker
            my={1}
            isOpen={isColorPickerOpen}
            onClose={() => setColorPickerOpen(false)}
            content={
              <TwitterPicker
                color={iconColor}
                onChangeComplete={(color) =>
                  onChangeIconColor && onChangeIconColor(color.hex)
                }
              />
            }
          >
            <Box direction="row">
              <Button
                onClick={() => setColorPickerOpen(true)}
                color="light"
                style={{ backgroundColor: iconColor }}
              >
                {iconColor}
              </Button>
            </Box>
          </Picker>
        </FormGroup>
      </Form>
    </>
  );
}
