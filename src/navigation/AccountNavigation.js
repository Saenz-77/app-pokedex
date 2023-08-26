import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../Screens/Account";

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accounte"
        component={AccountScreen}
        options={{ title: "Mi cuenta" }}
      />
    </Stack.Navigator>
  );
}