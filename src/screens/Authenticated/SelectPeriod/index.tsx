import React, { useState } from "react";
import { Alert, StatusBar } from "react-native";

import {
  Container,
  Content,
  WrapperPeriod,
  Title,
  TitleDate,
  Date,
  Day,
  CalendarArea,
  Footer,
  StatusBarIos,
} from "./styles";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Spacer, Button, BackButton, Header } from "../../../components";
import {
  Calendar,
  DayProps,
  MarkedDateProps,
  generateInterval,
} from "../../../components/Calendar";
import { SelectPeriodProps } from "../../../routes/typeRoutes";
import { format, parseISO } from "date-fns";

interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

const SelectPeriod: React.FC<SelectPeriodProps> = ({ navigation, route }) => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const car = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const confirmRental = () => {
    if (!rentalPeriod.start && !rentalPeriod.end) {
      Alert.alert("Atenção", "Escolha uma data ou período");
    } else {
      navigation.navigate("SchedulingDetails", {
        car: car,
        period: Object.keys(markedDates),
      });
    }
  };

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = String(start.dateString);
    const endDate = String(end.dateString);

    setRentalPeriod({
      start: start.timestamp,
      startFormatted: format(parseISO(firstDate), "dd/MM/yyyy"),
      end: end.timestamp,
      endFormatted: format(parseISO(endDate), "dd/MM/yyyy"),
    });
  };

  return (
    <StatusBarIos>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Header backButton onPressLeft={handleGoBack} />
        <Content>
          <Spacer />
          <Title>
            Escolha uma{"\n"}data de início e{"\n"}fim do aluguel
          </Title>
          <Spacer />
          <WrapperPeriod>
            <Date>
              <TitleDate>DE</TitleDate>
              <Day>
                {rentalPeriod.startFormatted ? rentalPeriod.startFormatted : ""}
              </Day>
            </Date>
            <Icon name="arrow-right" size={25} color="white" />
            <Date>
              <TitleDate>ATÉ</TitleDate>
              <Day>
                {rentalPeriod?.endFormatted ? rentalPeriod?.endFormatted : ""}
              </Day>
            </Date>
          </WrapperPeriod>
        </Content>
        <CalendarArea>
          <Calendar
            onDayPress={(date: DayProps) => handleChangeDate(date)}
            markedDates={markedDates}
          />
        </CalendarArea>
        <Footer>
          <Button title="Confirmar" onPress={confirmRental} />
        </Footer>
      </Container>
    </StatusBarIos>
  );
};

export default SelectPeriod;
