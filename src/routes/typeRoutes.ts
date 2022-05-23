import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  //Auth
  Register: undefined;
  //Shopping
  Home: undefined;
  CarDetails: undefined;
};


export type RegisterNavigationProps = NativeStackScreenProps<RootStackParamList, 'Register'>;


export type HomeNavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type CarDetailsNavigationProps = NativeStackScreenProps<RootStackParamList, 'CarDetails'>;


