import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import BackIcon from "@expo/vector-icons/MaterialCommunityIcons";

import { Container } from "./styles";
import { useTheme } from "styled-components";

interface Props extends BorderlessButtonProps {
  color?: string;
}

const BackButton: React.FC<Props> = ({color, ...rest}) => {
    const theme = useTheme();
  return (
    <Container {...rest}>
      <BackIcon name="chevron-left" size={30} color={color ? color : theme.colors.text} />
    </Container>
  );
};

export default BackButton;
