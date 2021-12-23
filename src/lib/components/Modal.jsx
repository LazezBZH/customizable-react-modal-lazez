import React from "react";
import { ThemeProvider } from "styled-components";

import { ModalContainer, ModalMessage, ModalButton } from "./styles/modal";

export default function Modal(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <ModalContainer>
        <ModalMessage>
          <p>{props.text}</p>
          <ModalButton onClick={props.close}>X</ModalButton>
        </ModalMessage>
      </ModalContainer>
    </ThemeProvider>
  );
}
