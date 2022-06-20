import { TouchableOpacity } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps extends RectButtonProps {}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.sizes.fonts.h1}px;
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  color: ${({ theme }) => theme.colors.shape};
  flex: 1;
  text-align: center;
  margin-right: ${RFValue(50)}px;
`;

export const IconLeft = styled(TouchableOpacity)<ButtonProps>`
  align-items: center;
  justify-content: center;
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`;
