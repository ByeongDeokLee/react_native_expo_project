/* import { registerRootComponent } from "expo";
import App from "./App";

registerRootComponent(App);
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import HomeScreen from "../../screens/HomeScreen";
import SignInScreen from "../../screens/SignInScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <h1>안녕하세여</h1>
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SingIn" component={SignInScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
