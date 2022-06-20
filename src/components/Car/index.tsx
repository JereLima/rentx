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
import { CarDto } from "../../dtos/CarDTO";
import { RectButtonProps } from "react-native-gesture-handler";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { TouchableOpacityProps } from "react-native";
interface Props extends TouchableOpacityProps {
  data: CarDto;
  goDetails?: () => void;
}

const Car: React.FC<Props> = ({ data, goDetails, ...rest }) => {
  const theme = useTheme();
  const MotorIcon = getAccessoryIcon(data?.fuel_type);

  return (
    <Container onPress={goDetails} {...rest}>
      <Column>
        <Details>
          <Brand>{data?.brand}</Brand>
          <Name>{data?.name}</Name>
        </Details>

        <About>
          <Rent>
            <Period>{data?.rent.period}</Period>
            <Price>R${data?.rent.price}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Column>

      <Image source={{ uri: data?.thumbnail }} resizeMode="cover" />
    </Container>
  );
};

export default Car;
