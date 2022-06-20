import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../../theme";

export const Edges = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Info = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  height: 150px;
  padding: 16px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background_primary};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 30px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.background_primary};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 16px;
`;

export const ScheduledWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const Scheduled = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 16px;
`;

export const ScheduledQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 16px;
`;

export const CarWrapper = styled.View`
  margin: 5px;
  padding: 5px;
`;

export const Period = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin: 0px ${RFValue(8)}px;
`;

export const PeriodTitle = styled.Text`
  margin: 8px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 16px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 16px;
`;
