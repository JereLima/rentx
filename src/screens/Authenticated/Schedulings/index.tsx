import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Button, Car, Spacer } from "../../../components";
import Header from "../../../components/Header";
import { CarDto } from "../../../dtos/CarDTO";
import { SchedulingProps } from "../../../routes/typeRoutes";
import { api } from "../../../services/api";
import Icon from "@expo/vector-icons/MaterialIcons";

import {
  Edges,
  Container,
  Content,
  Info,
  Title,
  SubTitle,
  ScheduledWrapper,
  Scheduled,
  ScheduledQuantity,
  CarWrapper,
  Period,
  PeriodTitle,
  Date,
} from "./styles";
import Loading from "../../../components/Loading";

interface ScheduledCars {
  userId: number;
  car: CarDto;
  id: number;
  startDate: string;
  endDate: string;
}

const Scheduling: React.FC<SchedulingProps> = ({ navigation, route }) => {
  const [data, setData] = useState<ScheduledCars[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  console.log(data);
  const getScheduledAll = async () => {
    setLoading(true)
    await api
      .get(`schedules_byuser?user_id=1`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  };

  useEffect(() => {
    getScheduledAll();
  }, []);

  return (
    <Edges>
      <Loading visible={loading} transparent/>
      <Container>
        <Header backButton onPressLeft={handleGoBack} />
        <Info>
          <Title>Seus agendamentos,{"\n"}estão aqui.</Title>
          <Spacer />
          <SubTitle>Conforto, segurança e praticidade.</SubTitle>
        </Info>
        <Content>
          <ScheduledWrapper>
            <Scheduled>Agendamentos feitos</Scheduled>
            <ScheduledQuantity>{data.length}</ScheduledQuantity>
          </ScheduledWrapper>

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} disabled />
                <Period>
                  <PeriodTitle>PERÍODO</PeriodTitle>
                  <Date>{item.startDate}</Date>
                  <Icon name="chevron-right" size={20} />
                  <Date>{item.endDate}</Date>
                </Period>
              </CarWrapper>
            )}
            keyExtractor={(item) => String(item.id)}
          />
        </Content>
      </Container>
    </Edges>
  );
};

export default Scheduling;
