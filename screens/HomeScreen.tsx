import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen({ route }: any) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>환영합니다, {username}님!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20 },
});
