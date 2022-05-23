import React from "react";
import {TextInputProps } from "react-native";

import { Container, CustomInput } from "./styles";

const Input = ({...rest}: TextInputProps) => {
  return (
    <Container>
      <CustomInput {...rest}/>;
    </Container>
  );
};

export default Input;