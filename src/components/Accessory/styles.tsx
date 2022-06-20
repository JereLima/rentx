import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const {width } = Dimensions.get("window");

export const Container = styled.View`
  height: ${RFValue(width * 0.24)}px;
  width: ${RFValue(width * 0.24)}px;
  margin: 12px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background_primary};
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
`;
