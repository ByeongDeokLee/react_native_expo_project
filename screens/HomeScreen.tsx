import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useUser } from "../context/UserContext";

export default function HomeScreen({ navigation }: any) {
  const { user, logout } = useUser();

  const logoutBtn = () => {
    logout;
    console.log("\n\n\n 왜 안될까? \n\n\n", navigation.canGoBack());
    // if (navigation.canGoBack()) {
    //   navigation.goBack();
    // } else {
    navigation.navigate("Login"); // 또는 다른 기본 화면으로 이동
    // }
  };
  return (
    <View style={styles.container}>
      <Text>{user?.id}님 환영합니다!</Text>
      <Button title="로그아웃" onPress={logoutBtn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20 },
});
