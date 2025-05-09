import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";

export default function SignlnScreen({}) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleLogin = () => {
    console.log(!id.trim());
    console.log(confirm);
    console.log(password);
    if (!id.trim()) {
      Alert.alert("아이디를 입력하세요.");
      return;
    }

    if (password.length < 4 || confirm.length < 4) {
      Alert.alert("비밀번호는 4자 이상이어야 합니다.");
      return;
    }

    if (password && !confirm) {
      Alert.alert("비밀번호가 맞지 않습니다.");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="ID를 입력하세요"
        onChangeText={setId}
        value={id}
      ></TextInput>
      <TextInput
        style={styles.textinput}
        placeholder="PW를 입력하세요"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      ></TextInput>
      <TextInput
        style={styles.textinput}
        placeholder="PW를 한번더 입력하세요"
        secureTextEntry
        onChangeText={setConfirm}
        value={confirm}
      ></TextInput>
      <TouchableHighlight onPress={handleLogin} style={styles.btn}>
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
