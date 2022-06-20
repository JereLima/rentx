import { TouchableOpacity } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface StyleProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<StyleProps>`
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.title};
  width: ${RFValue(90)}px;
  height: ${RFValue(50)}px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.sizes.fonts.h3}px;
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  color: ${({ theme }) => theme.colors.shape};
`;
