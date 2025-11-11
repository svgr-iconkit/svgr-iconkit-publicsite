import styled from "styled-components";
import {
  compose,
  position,
  layout,
  shadow,
  background,
  flexbox,
  border,
  space,
} from "styled-system";

export const Box = styled.div(
  compose(position, layout, shadow, background, flexbox, border, space)
);

export const Flex = styled(Box)`
  display: flex;
`;

export default Box;
