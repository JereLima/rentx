import React from "react";
import { View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Container,
  Period,
  Calendar,
  Date,
  Day,
  Title,
  Chevron,
  Total,
  Wrapper,
  DescriptionRent,
  Amount,
  WrapperRow,
} from "./styles";
import { Spacer } from "../../../../components";
import { MarkedDateProps } from "../../../../components/Calendar";
import { format, getISODay, parseISO } from "date-fns";

import { CarDto } from "../../../../dtos/CarDTO";
import { formatCurrent } from "../../../../utils/formatCurrent";
import { useEffect } from "react";
import { useState } from "react";
import { toDate } from "date-fns/esm";
import { api } from "../../../../services/api";

interface Props {
  period: string[];
  item: CarDto;
}

interface PeriodTypes {
  start: string;
  end: string;
}

const Rent: React.FC<Props> = ({ period, item }) => {
  const periodLength = period.length;
  const totalAmount = item.rent.price * periodLength;
  const firstDate = format(parseISO(period[0]), "dd/MM/yyyy");
  const endDate = format(parseISO(period[period.length - 1]), "dd/MM/yyyy");

  

  return (
    <Container>
      <Period>
        <Calendar>
          <Icon name="calendar-month" size={30} color="white" />
        </Calendar>
        <Date>
          <Title>DE</Title>
          <Day>{firstDate}</Day>
        </Date>
        <Chevron>
          <Icon name="chevron-double-right" size={30} />
        </Chevron>
        <Date>
          <Title>DE</Title>
          <Day>{endDate}</Day>
        </Date>
      </Period>
      <Total>
        <Title>Total</Title>
        <Spacer />
        <WrapperRow>
          <DescriptionRent>
            R${item.rent.price} x {periodLength}
          </DescriptionRent>
          <Amount>{formatCurrent(totalAmount)}</Amount>
        </WrapperRow>
      </Total>
    </Container>
  );
};

export default Rent;
