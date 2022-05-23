import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/*----------------------------------------------*/
import { RootStackParamList } from "./typeRoutes";
import Home from "../screens/Authenticated/Home";
import CarDetails from "../screens/CarDetails";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function Authenticated() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />

    </Navigator>
  );
}

export default Authenticated;
