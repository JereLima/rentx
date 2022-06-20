import React from "react";
import { useTheme } from "styled-components/native";
import { Button } from "../../../../components";
import { Container } from "./styles";

interface FooterType {
  onPress: () => void;
}

const Footer: React.FC<FooterType> = ({ onPress, children }) => {
  const theme = useTheme();
  return (
    <Container>
      {children}
      <Button
        title="Alugar"
        onPress={onPress}
        color={theme.colors.success}
      />
    </Container>
  );
};

export default Footer;
