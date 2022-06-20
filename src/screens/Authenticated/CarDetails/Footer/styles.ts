import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;
