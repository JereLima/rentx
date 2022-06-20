import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  text-align: center;
  line-height: ${RFValue(25)}px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;
`;

export const Footer = styled.View`
    padding: 30px 0px;
    align-items: center;
`;
