import React from "react";
import { Container } from "./styles";

type Props = {
  spacing?: number
}

const Spacer = ({spacing}: Props) => {
  return <Container spacing={spacing} />;
};

export default Spacer;
