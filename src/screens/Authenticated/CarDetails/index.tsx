import React from "react";
import { StatusBar } from "react-native";
import { Header } from "../../../components";
import ImageSlider from "../../../components/ImageSlider";
import { CarDto } from "../../../dtos/CarDTO";
import { CarDetailsProps } from "../../../routes/typeRoutes";
import DetailsCar from "./DetailsCar";
import DetailsRent from "./DetailsRent";
import Footer from "./Footer";

import { Container, Content, Scroll, Slider } from "./styles";

const CarDetails: React.FC<CarDetailsProps> = ({ navigation, route }) => {
  const car = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigate = () => {
    navigation.navigate("SelectPeriod", car);
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Content>
        <Header backButton onPressLeft={handleGoBack} />
        <Scroll>
          <Slider>
            <ImageSlider
              imagesUrls={car.photos}
            />
          </Slider>
          <DetailsRent item={car} />
          <DetailsCar item={car} />
        </Scroll>
        <Footer onPress={handleNavigate} />
      </Content>
    </Container>
  );
};

export default CarDetails;
