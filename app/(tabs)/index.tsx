// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "../../screens/LoginScreen";
// import HomeScreen from "../../screens/HomeScreen";
// import SignInScreen from "../../screens/SignInScreen";
// import { UserProvider, useUser } from "../../context/UserContext";

// const Stack = createNativeStackNavigator();

// function AppInner() {
//   const { loading, user } = useUser();

//   if (loading) return null; // 또는 로딩 스피너

//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{ headerShown: !user }}
//       />
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ headerShown: !!user }}
//       />
//       <Stack.Screen name="SignIn" component={SignInScreen} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <UserProvider>
//       <AppInner />
//     </UserProvider>
//   );
// }

import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import {
//   login,
//   logout,
//   getProfile as getKakaoProfile,
//   shippingAddresses as getKakaoShippingAddresses,
//   unlink,
// } from "@react-native-seoul/kakao-login";
import * as KakaoLogin from "@react-native-seoul/kakao-login";

const App = () => {
  const [result, setResult] = useState<string>("");

  const signInWithKakao = async (): Promise<void> => {
    // try {
    //   const token = await login();
    //   setResult(JSON.stringify(token));
    //   console.log("login success ", token.accessToken);
    // } catch (err) {
    //   console.error("login err", err);
    // }
    KakaoLogin.login()
      .then((result) => {
        console.log("Login Success", JSON.stringify(result));
        getProfile();
      })
      .catch((error) => {
        if (error.code === "E_CANCELLED_OPERATION") {
          console.log("Login Cancel", error.message);
        } else {
          console.log(`Login Fail(code:${error.code})`, error.message);
        }
      });
  };

  const signOutWithKakao = async (): Promise<void> => {
    // try {
    //   const message = await logout();
    //   setResult(message);
    // } catch (err) {
    //   console.error("signOut error", err);
    // }
  };

  const getProfile = async (): Promise<void> => {
    KakaoLogin.getProfile()
      .then((result) => {
        console.log("GetProfile Success", JSON.stringify(result));
      })
      .catch((error) => {
        console.log(`GetProfile Fail(code:${error.code})`, error.message);
      });
  };

  const getShippingAddresses = async (): Promise<void> => {
    // try {
    //   const shippingAddresses = await getKakaoShippingAddresses();
    //   setResult(JSON.stringify(shippingAddresses));
    // } catch (err) {
    //   console.error("signOut error", err);
    // }
  };

  const unlinkKakao = async (): Promise<void> => {
    // try {
    //   const message = await unlink();
    //   setResult(message);
    // } catch (err) {
    //   console.error("signOut error", err);
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <ScrollView>
          <Text>{result}</Text>
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          signInWithKakao();
        }}
      >
        <Text
          style={styles.text}
          onPress={() => {
            signInWithKakao();
          }}
        >
          카카오 로그인
        </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => getProfile()}>
        <Text style={styles.text}>프로필 조회</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => getShippingAddresses()}>
        <Text style={styles.text}>배송주소록 조회</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => unlinkKakao()}>
        <Text style={styles.text}>링크 해제</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => signOutWithKakao()}>
        <Text style={styles.text}>카카오 로그아웃</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100,
  },
  resultContainer: {
    flexDirection: "column",
    width: "100%",
    padding: 24,
  },
  button: {
    backgroundColor: "#FEE500",
    borderRadius: 40,
    borderWidth: 1,
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
  },
});
