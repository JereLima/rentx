import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(180)}px;
`;

export const Period = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px;
  padding: 15px 0px;
  align-items: center;
  border-bottom-color: ${({ theme }) => theme.colors.text_detail};
  border-bottom-width: 1px;
`;

export const Calendar = styled.View`
  width: 48px;
  background-color: ${({ theme }) => theme.colors.main};
  height: 48px;
  align-items: center;
  justify-content: center;
`;

export const Chevron = styled.View`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
`;

export const Date = styled.View`
  flex: 3;
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Day = styled.Text``;

export const Total = styled.View`
  padding: 12px 24px ;

  justify-content: space-between;

  `;

export const Wrapper = styled.View`
  background-color: lime;
`;

export const WrapperRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DescriptionRent = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const Amount = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.success};
`;
