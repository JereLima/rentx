import React from "react";
import { Spacer, SquareButton } from "../../../components";
import { RentConfirmationProps } from "../../../routes/typeRoutes";
import { Container, Title, Subtitle, Content, Footer } from "./styles";
import { LogoGray } from "../../../assets/svg";
import { StatusBar } from "react-native";
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const RentConfirmation: React.FC<RentConfirmationProps> = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <LogoGray fill="green" />
        <Icon name="check-bold" color='green' size={50}/>
        <StatusBar barStyle="light-content" />
        <Title>Carro Alugado</Title>
        <Subtitle>
          Agora você só precisa ir{"\n"}até a concessionária da RENTX{"\n"}{" "}
          pegar o seu automóvel.
        </Subtitle>
      </Content>
      <Footer>
        <SquareButton title="OK" onPress={() => navigation.navigate("Home")} />
      </Footer>
    </Container>
  );
};

export default RentConfirmation;
