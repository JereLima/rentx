import React from "react";
import { StatusBar, View } from "react-native";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import { CarDetailsNavigationProps } from "../../routes/typeRoutes";

import {
  Container,
  Content,
  BackButtonFloat,
  Footer,
  InfoCar,
  RentDetail,
  Slider,
} from "./styles";

const CarDetails: React.FC<CarDetailsNavigationProps> = ({
  route,
  navigation,
}) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Content>
        <Slider>
          <BackButtonFloat>
            <BackButton color="white" onPress={handleGoBack} />
          </BackButtonFloat>
          <ImageSlider
            imagesUrls={[
              "https://w7.pngwing.com/pngs/404/195/png-transparent-2013-audi-a3-2012-audi-a3-car-volkswagen-group-coche-compact-car-sedan-convertible.png",
            ]}
          />
        </Slider>
        <RentDetail></RentDetail>
        <InfoCar></InfoCar>
        <Footer />
      </Content>
    </Container>
  );
};

export default CarDetails;
