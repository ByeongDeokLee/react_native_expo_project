import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import HomeScreen from "../../screens/HomeScreen";
import SignInScreen from "../../screens/SignInScreen";
import { UserProvider, useUser } from "../../context/UserContext";

const Stack = createNativeStackNavigator();

function AppInner() {
  const { loading, user } = useUser();

  if (loading) return null; // 또는 로딩 스피너

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: !user }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: !!user }}
      />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppInner />
    </UserProvider>
  );
}
