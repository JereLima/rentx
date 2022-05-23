import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  border-radius: ${({ theme }) => theme.sizes.radius}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  margin: ${RFValue(12)}px;
  font-size: ${({ theme }) => theme.sizes.fonts.h3}px;
  border-radius: ${({ theme }) => theme.sizes.radius}px;

  color: ${({ theme }) => theme.colors.white};
`;
