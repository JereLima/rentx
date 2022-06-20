import React from "react";
import { ActivityIndicator, Modal, ModalProps, View } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

const Loading: React.FC<ModalProps> = ({ ...rest }) => {
  const theme = useTheme();
  return (
    <Modal {...rest}>
      <Container>
        <ActivityIndicator size="large" color={theme.colors.main} />
      </Container>
    </Modal>
  );
};

export default Loading;
