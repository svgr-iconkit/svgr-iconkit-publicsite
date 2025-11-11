import styled from "styled-components";
import {
  compose,
  position,
  layout,
  shadow,
  background,
  typography,
  flexbox,
  border,
  space,
} from "styled-system";

export const Text = styled.div`
${compose(position, layout, shadow, background, typography, flexbox, border, space)}
`;

export default Text;