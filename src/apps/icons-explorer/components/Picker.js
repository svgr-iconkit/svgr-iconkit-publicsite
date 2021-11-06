import React from "react";
import styled from "styled-components";
import { Box } from "./Box";

const Wrapper = styled(Box)`
  position: relative;
`;

const PickerBackdrop = styled(Box)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
`;

const PickerContent = styled(Box)`
  position: absolute;
  z-index: 12;
`;

export default function Picker({
  children,
  content,
  isOpen = false,
  onClose,
  ...rest
}) {
  return (
    <Wrapper {...rest}>
      {children}

      {isOpen && (
        <>
          <PickerBackdrop onClick={onClose} />
          <PickerContent>{content}</PickerContent>
        </>
      )}
    </Wrapper>
  );
}
