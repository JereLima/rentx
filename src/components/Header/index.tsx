import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title, IconLeft } from "./styles";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "styled-components";

interface Props {
  title?: string;
  backButton?: boolean;
  onPressLeft?: () => void;
}

const Header: React.FC<Props> = ({
  title,
  backButton,
  onPressLeft,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Container {...rest}>
      {backButton && (
        <IconLeft onPress={onPressLeft}>
          <Icon name="chevron-left" size={50} color={theme.colors.shape} />
        </IconLeft>
      )}
      <Title numberOfLines={1}>{title}</Title>
    </Container>
  );
};

export default Header;
