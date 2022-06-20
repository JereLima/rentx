import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.SafeAreaView`
  flex: 1;
`;

export const Scroll = styled.ScrollView`
  background-color: ${({theme}) => theme.colors.background_secondary};

`;

export const Slider = styled.View``;

export const RentDetail = styled.View`
  height: 150px;
`;

export const InfoCar = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  height: 110px;
`;
