import {
  Card,
  CardBlock,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupButton,
  Row,
} from "@bootstrap-styled/v4";
import { Icon } from "@svgr-iconkit/core";
import IconColorPicker from "@svgr-iconkit/css-gg/icons/regular/color-picker";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Picker from "../../../components/Picker";
import { Box } from "../../../components/Box";
import Label from "../../../components/Label";
import Slider from "../../../components/Slider";
import Text from "../../../components/Text";

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
    <Box my={4} position="relative">
      <Box as={Card} overflow="inherit">
        <CardBlock>
          <Form>
            <Row>
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
                        <Icon
                          content={IconColorPicker}
                          size={24}
                          color="white"
                        />
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
        </CardBlock>
      </Box>
    </Box>
  );
}
