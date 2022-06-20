import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const StatusBarIos = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
`;

export const WrapperPeriod = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px ${RFValue(30)}px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape};
  margin: 0px 30px;
`;

export const Date = styled.View`
  align-items: flex-start;
`;

export const TitleDate = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
`;

export const Day = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
`;

export const CalendarArea = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Footer = styled.View`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;
