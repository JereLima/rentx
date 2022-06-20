import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MarkedDateProps } from "../components/Calendar";
import { CarDto } from "../dtos/CarDTO";

export type RootStackParamList = {
  //unauthenticated
  Register: undefined;
  //Authenticated
  Home: undefined;
  CarDetails: CarDto;
  SelectPeriod: CarDto;
  SchedulingDetails: { car: CarDto, period: string[] };
  RentConfirmation: undefined;
  Scheduling: undefined;
};

export type HomeNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type CarDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "CarDetails"
>;

export type SelectPeriodProps = NativeStackScreenProps<
  RootStackParamList,
  "SelectPeriod"
>;

export type SchedulingDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "SchedulingDetails"
>;

export type RentConfirmationProps = NativeStackScreenProps<
  RootStackParamList,
  "RentConfirmation"
>;

export type SchedulingProps = NativeStackScreenProps<
  RootStackParamList,
  "Scheduling"
>;