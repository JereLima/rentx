import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/*----------------------------------------------*/
import Login from "../screens/Authenticated/Home";
import { RootStackParamList } from "./typeRoutes";
import Register from "../screens/Unauthenticated/Register";
import Home from "../screens/Authenticated/Home";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const  Unauthenticated: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Register" component={Register} />

    </Navigator>
  );
}

export default Unauthenticated;
