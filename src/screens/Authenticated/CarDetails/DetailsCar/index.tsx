import React from "react";
import Accessory from "../../../../components/Accessory";
import {
  Acceleration,
  Energy,
  Force,
  Speed,
  People,
  Exchange,
  Gasoline,
} from "../../../../assets/svg";
import { Container, Accessories, Description } from "./styles";
import { CarDetailsProps } from "../../../../routes/typeRoutes";
import { CarDto } from "../../../../dtos/CarDTO";
import { getAccessoryIcon } from "../../../../utils/getAccessoryIcon";

interface Car {
  item: CarDto;
}

const DetailsCar: React.FC<Car> = ({ item }) => {
  return (
    <Container>
      <Accessories>
        {item.accessories.map((i, x) => (
          <Accessory key={x} name={i.name} icon={getAccessoryIcon(i.type)} />
        ))}
      </Accessories>
      <Description>{item.about}</Description>
    </Container>
  );
};

export default DetailsCar;
