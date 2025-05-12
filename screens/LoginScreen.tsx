import { useUser } from "../context/UserContext";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";

export default function LoginScreen({ navigation }: any) {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((prev) => !prev);
  const { login } = useUser();

  const handleLogin = () => {
    if (!ID.trim()) {
      Alert.alert("아이디를 입력하세요.");
      return;
    }

    if (password.length < 4) {
      Alert.alert("비밀번호는 4자 이상이어야 합니다.");
      return;
    }
    login(ID);
    navigation.navigate("Home");
    // navigation.navigate("Home", { username: ID });
  };

  const handleSignln = () => {
    navigation.navigate("SingIn");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="Username"
        value={ID}
        onChangeText={setID}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.switchView}>
        <Text>자동 로그인</Text>
        <Switch value={isEnabled} onValueChange={toggleSwitch} />
      </View>
      <TouchableHighlight onPress={handleLogin} style={styles.btn}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={handleSignln} style={styles.btn}>
        <Text style={styles.btnText}>회원가입</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  textinput: { borderBottomWidth: 1, marginBottom: 15, height: 40 },
  switchView: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  btn: { backgroundColor: "gray", padding: 15, borderRadius: 10 },
  btnText: { color: "white", fontWeight: "bold", textAlign: "center" },
});
