import React from "react";
import { useTheme } from "styled-components";

import {
  Container,
  Column,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  Image,
} from "./styles";
import Gasoline from "../../assets/svg/gasoline.svg";

interface CartData {
  brand: string;
  name: string;
  period: string;
  price: number;
  image: string;
}

interface Props {
    data: CartData;
    goDetails: () => void;
}

const Car: React.FC<Props> = ({data, goDetails}) => {
    console.log(data)
  const theme = useTheme();
  return (
    <Container onPress={goDetails}>
      <Column>
        <Details>
          <Brand>{data?.brand}</Brand>
          <Name>{data?.name}</Name>
        </Details>

        <About>
          <Rent>
            <Period>{data?.period}</Period>
            <Price>R${data?.price}</Price>
          </Rent>

          <Type>
            <Gasoline width={30} fill={theme.colors.main} />
          </Type>
        </About>
      </Column>

      <Image
        source={{ uri: data?.image }}
        resizeMode="cover"
      />
    </Container>
  );
};

export default Car;
