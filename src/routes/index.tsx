import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Unauthenticated from "./Unauthenticated";
import Authenticated from "./Authenticated";

function Routes() {
  const token = false;
  return (
    <NavigationContainer>
      <Authenticated />
    </NavigationContainer>
  );
}
export default Routes;
