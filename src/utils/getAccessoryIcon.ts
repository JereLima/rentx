import {
  Acceleration,
  Arrow,
  Brand,
  Car,
  Done,
  Energy,
  Exchange,
  Force,
  Gasoline,
  Hybrid,
  Logo,
  LogoGray,
  People,
  Speed,
} from "../assets/svg";

export function getAccessoryIcon(type: string) {
  switch (type) {
    case "speed":
      return Speed;
    case "acceleration":
      return Acceleration;
    case "turning_diameter":
      return Force;
    case "gasoline_motor":
      return Gasoline;
    case "electric_motor":
      return Energy;
    case "hybrid_motor":
      return Hybrid;
    case "exchange":
      return Exchange;
    case "seats":
      return People;
    default:
      return Car;
  }
}
