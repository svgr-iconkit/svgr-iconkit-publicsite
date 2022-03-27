import styled, { css } from "styled-components";
import Box from "./Box";
export const LinkButton = styled(Box).attrs((props) => {
  return { tabIndex: 0, role: "button", ...props }
})`
display: inline-block;
padding: 2px 8px;
border-radius: 5px;
margin: 2px 4px;
${({ active = false }) =>
  active
    ? css`
        cursor: default;
        color: #fff;
        background-color: ${({ theme }) => theme["$btn-primary-bg"]};
      `
    : css`
        cursor: pointer;
        color: ${({ theme }) => theme["$btn-primary-bg"]};
        &:hover {
          color: ${({ theme }) => theme["$btn-primary-bg"]};
        }
      `}
`;

export default LinkButton;
