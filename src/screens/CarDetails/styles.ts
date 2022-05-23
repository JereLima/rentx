import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Content = styled(SafeAreaView)`
    flex: 1;
`;

export const BackButtonFloat = styled.View`
    position: absolute;
    z-index: 2;
    background-color: #999a;
    border-radius: 50px;
`;
export const Slider = styled.View`
    background: blue;
    height: 200px;
`;

export const RentDetail = styled.View`
    background: green;
    height: 150px;

`;

export const InfoCar = styled.View`
    background: gray;
    flex: 1;
`;

export const Footer = styled.View`
    background-color: wheat;
    height:110px;
`;