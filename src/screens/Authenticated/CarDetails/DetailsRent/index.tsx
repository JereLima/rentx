import React from "react";
import { View } from "react-native";
import { CarDto } from "../../../../dtos/CarDTO";
import { formatCurrent } from "../../../../utils/formatCurrent";

import {
  Container,
  Wrapper,
  Brand,
  Name,
  RentType,
  RentAmount,
} from "./styles";

interface Car {
  item: CarDto;
}

const DetailsRent: React.FC<Car> = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Brand>{item.brand}</Brand>
        <Name>{item.name}</Name>
      </Wrapper>
      <Wrapper>
        <RentType>{item.rent.period}</RentType>
        <RentAmount>{formatCurrent(item.rent.price)}</RentAmount>
      </Wrapper>
    </Container>
  );
};

export default DetailsRent;
