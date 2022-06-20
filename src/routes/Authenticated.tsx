import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/*----------------------------------------------*/
import { RootStackParamList } from "./typeRoutes";
import { Home, CarDetails, Register, SelectPeriod, RentConfirmation, SchedulingDetails, Scheduling } from "../screens";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function Authenticated() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="SelectPeriod" component={SelectPeriod} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="RentConfirmation" component={RentConfirmation} />
      <Screen name="Scheduling" component={Scheduling} />
    </Navigator>
  );
}

export default Authenticated;
