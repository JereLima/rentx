import React from "react";
import { useTheme } from "styled-components/native";
import { Button } from "../../../../components";
import { Container } from "./styles";

interface FooterType {
  onPress: () => void;
}


const Footer: React.FC<FooterType> = ({ onPress }) => {
  const theme = useTheme(); 
  return (
    <Container>
      <Button
        title="Escolher período do aluguel"
        onPress={onPress}
      />
    </Container>
  );
};

export default Footer;
