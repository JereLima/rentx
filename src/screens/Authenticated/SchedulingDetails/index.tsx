import { AxiosError } from "axios";
import { format, parseISO } from "date-fns";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Button, Header } from "../../../components";
import ImageSlider from "../../../components/ImageSlider";
import Loading from "../../../components/Loading";
import {
  CarDetailsProps,
  SchedulingDetailsProps,
} from "../../../routes/typeRoutes";
import { api } from "../../../services/api";
import DetailsCar from "./DetailsCar";
import DetailsRent from "./DetailsRent";
import Footer from "./Footer";
import Rent from "./Rent";

import { Container, Content, Scroll, Slider } from "./styles";

const SchedulingDetails: React.FC<SchedulingDetailsProps> = ({
  navigation,
  route,
}) => {
  const car = route?.params.car;
  const period = route?.params.period;

  const [loading, setLoading] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleGoFinish = () => {
    navigation.navigate("RentConfirmation");
  };
  

  const handleConfirmRental = async () => {
    setLoading(true);

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);
    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...period,
    ];

    const startDate = format(parseISO(period[0]), "dd/MM/yyyy");
    const endDate = format(parseISO(period[period.length - 1]), "dd/MM/yyyy");
  
    await api
      .post(`schedules_byuser`, {
        user_id: 1,
        car,
        startDate,
        endDate,
      })
      .catch((error: AxiosError) => {
        console.log(error.message);
      });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(handleGoFinish)
      .catch((error: AxiosError) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Loading visible={loading} transparent />
      <Content>
        <Header backButton onPressLeft={handleGoBack} />
        <Scroll>
          <Slider>
            <ImageSlider imagesUrls={car.photos} />
          </Slider>
          <Rent period={period} item={car} />
          <DetailsRent item={car} />
          <DetailsCar item={car} />
        </Scroll>
        <Footer onPress={handleConfirmRental}></Footer>
      </Content>
    </Container>
  );
};

export default SchedulingDetails;
