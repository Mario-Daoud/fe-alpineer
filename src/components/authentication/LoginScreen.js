import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import theme from "../../styles/theme.style";

import LoginButton from "./LoginButton";

import { BLOB_URL } from "@env";

export default function LoginScreen(props) {
  const { navigation } = props;
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");

  const onRegisterLinkPress = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: `${BLOB_URL}/ski-bg.jpg` }}
        style={styles.backgroundImage}
      >
        <View style={styles.inputBlock}>
          <Text style={styles.inputTitle} adjustsFontSizeToFit>Welcome back!</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <LoginButton
            user={{ username, password }}
            navigation={{ navigation }}
          />
          <Pressable onPress={() => onRegisterLinkPress()}>
            <Text style={styles.registerLinkText}>
              Don't have an account yet? Register
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  inputBlock: {
    width: "90%",
    borderRadius: theme.BORDERRADIUS.MEDIUM,
    alignSelf: "center",
  },
  inputTitle: {
    fontSize: theme.FONTSIZE.SUPER_LARGE,
    fontWeight: "bold",
    color: "white",
    marginBottom: theme.MARGIN.MEDIUM,
  },
  inputField: {
    backgroundColor: "white",
    borderRadius: theme.BORDERRADIUS.MEDIUM,
    padding: theme.PADDING.MEDIUM,
    marginBottom: theme.MARGIN.MEDIUM,
  },
  registerLinkText: {
    color: "white",
    fontSize: theme.FONTSIZE.MEDIUM,
    textAlign: "right",
    marginTop: theme.MARGIN.MEDIUM,
  },
});
