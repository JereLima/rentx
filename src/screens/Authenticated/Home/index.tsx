import React from "react";
import { StatusBar } from "react-native";
import { HomeNavigationProps } from "../../../routes/typeRoutes";

import {
  Container,
  Header,
  HeaderContent,
  Total,
  Content,
  CarList,
} from "./styles";
import Logo from "../../../assets/svg/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import Car from "../../../components/Car";

const Home: React.FC<HomeNavigationProps> = ({ navigation, route }) => {
  const handleNavigateFromRegister = () => {
    navigation.navigate("Register");
  };

  const data = [
    {
      brand: "audi",
      name: "a4",
      period: "dia a dia",
      price: 35,
      image:
        "https://w7.pngwing.com/pngs/404/195/png-transparent-2013-audi-a3-2012-audi-a3-car-volkswagen-group-coche-compact-car-sedan-convertible.png",
    },
    {
      brand: "audi",
      name: "a45",
      period: "dia a dia",
      price: 35,
      image:
        "https://w7.pngwing.com/pngs/404/195/png-transparent-2013-audi-a3-2012-audi-a3-car-volkswagen-group-coche-compact-car-sedan-convertible.png",
    },
  ];

  const handleNavigationCarDetails = () => {
    navigation.navigate("CarDetails");
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(30)} />
          <Total>Total de 12 Carros</Total>
        </HeaderContent>
      </Header>

      <Content>
        <CarList
          data={data}
          renderItem={({ item }) => (
            <Car data={item} goDetails={handleNavigationCarDetails} />
          )}
        />
      </Content>
    </Container>
  );
};

export default Home;
