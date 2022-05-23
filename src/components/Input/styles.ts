import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: white;
  border-radius: ${({ theme }) => theme.sizes.radius}px;
`;

export const CustomInput = styled(TextInput)`
  margin: ${RFValue(12)}px;
`;
