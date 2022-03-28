import React from 'react'
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";
import Box from "./Box";


const RawLinkButton = (props) => {
  return <Box as={Link} {...props} />
}

export const LinkButton = styled(RawLinkButton).attrs((props) => {
  return { tabIndex: 0, ...props }
})`
display: inline-block;
padding: 2px 8px;
border-radius: 5px;
margin: 2px;
text-decoration:none ;
cursor: pointer;
color: ${({ theme }) => theme["$btn-primary-bg"]};
&:hover {
text-decoration:underline;
}
${({ active = false }) =>
  active && css`
        cursor: default;
        color: #fff;
        background-color: ${({ theme }) => theme["$btn-primary-bg"]};
        &:hover {
          color: #fff;
          text-decoration:none ;
        }
      `}
`;

export default LinkButton;
