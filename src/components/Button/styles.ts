import { TouchableOpacity } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface StyleProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<StyleProps>`
  width: 100%;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.main};
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin: ${RFValue(12)}px;
  font-size: ${({ theme }) => theme.sizes.fonts.h3}px;
  border-radius: ${({ theme }) => theme.sizes.radius}px;

  color: ${({ theme }) => theme.colors.shape};
`;
