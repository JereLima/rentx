import { FlatList, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { CarDto } from "../../../dtos/CarDTO";

export const IosArea = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  height: ${RFValue(130)}px;
  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
`;

export const Total = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarList = styled(FlatList as new () => FlatList<CarDto>)``;

export const Float = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  position: absolute;
  right: 22px;
  bottom: 30px;
  background-color: red;
  align-items: center;
  justify-content: center;
`;
