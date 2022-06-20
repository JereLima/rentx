import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { HomeNavigationProps } from "../../../routes/typeRoutes";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import {
  Container,
  Header,
  HeaderContent,
  Total,
  Content,
  CarList,
  IosArea,
  Float,
} from "./styles";
import Logo from "../../../assets/svg/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import Car from "../../../components/Car";
import { api } from "../../../services/api";
import { CarDto } from "../../../dtos/CarDTO";
import Loading from "../../../components/Loading";

const Home: React.FC<HomeNavigationProps> = ({ navigation }) => {
  const [cars, setCars] = useState<CarDto[]>([]);
  const [loading, setLoading] = useState(true);

  const handleNavigateFromRegister = () => {
    navigation.navigate("Register");
  };

  const handleNavigationCarDetails = (item: CarDto) => {
    navigation.navigate("CarDetails", item);
  };

  const handleNavigationScheduling = () => {
    navigation.navigate("Scheduling");
  };

  const getCars = async () => {
    const response = await api
      .get("/cars")
      .then((response) => setCars(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    return response;
  };

  useEffect(() => {
    getCars();
  }, []);

  const renderContent = () => {
    return (
      <>
        <Header>
          <HeaderContent>
            <Logo width={RFValue(108)} height={RFValue(30)} />
            <Total>
              {!loading ? `Total de ${cars.length} Carros` : "Carregando"}
            </Total>
          </HeaderContent>
        </Header>

        <Content>
          <CarList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Car
                data={item}
                goDetails={() => handleNavigationCarDetails(item)}
              />
            )}
          />
        </Content>
      </>
    );
  };

  const renderFloatButton = () => (
    <Float
      activeOpacity={0.6}
      onPress={handleNavigationScheduling}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}
    >
      <Icon name="car" size={40} color="white" />
    </Float>
  );

  return (
    <IosArea>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        {loading && <Loading />}
        {!loading && renderContent()}
        {renderFloatButton()}
      </Container>
    </IosArea>
  );
};

export default Home;
