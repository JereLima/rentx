import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background_primary};
  justify-content: space-between;
  flex-direction: row;
  margin: ${RFValue(8)}px;
  padding: ${RFValue(24)}px;
  min-height: ${RFValue(126)}px;
`;

export const Column = styled.View`
  justify-content: space-between;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.title};
  text-transform: uppercase;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rent = styled.View`
    margin-right: 24px;
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(12)};
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.main};
  text-transform: uppercase;
`;

export const Type = styled.View``;

export const Image = styled.Image`
  height: ${RFValue(92)}px;
  width: ${RFValue(160)}px;
`;
