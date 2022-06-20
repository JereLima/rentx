/*Rotas não autenticadas*/
import Register from "./Unauthenticated/Register";
/*Rotas autenticadas*/
import Home from "./Authenticated/Home";
import CarDetails from "./Authenticated/CarDetails";
import SelectPeriod from "./Authenticated/SelectPeriod";
import RentConfirmation from "./Authenticated/RentConfirmation";
import SchedulingDetails from "./Authenticated/SchedulingDetails";
import Scheduling from "./Authenticated/Schedulings";

export {
  Register,
  Home,
  CarDetails,
  SelectPeriod,
  RentConfirmation,
  SchedulingDetails,
  Scheduling,
};
