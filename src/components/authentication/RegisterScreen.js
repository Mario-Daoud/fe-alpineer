import React, { useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import theme from "../../styles/theme.style";

import { BLOB_URL } from "@env";
import RegisterButton from "./RegisterButton";

export default function RegisterScreen(props) {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");

  const onLoginLinkPress = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: `${BLOB_URL}/ski-bg.jpg` }}
        style={styles.backgroundImage}
      >
        <View style={styles.inputBlock}>
          <Text style={styles.inputTitle}>Create account</Text>
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
          <TextInput
            style={styles.inputField}
            placeholder="Confirm password"
            secureTextEntry
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <RegisterButton
            user={{ username, password, confirmPassword }}
          />
          <Pressable onPress={() => onLoginLinkPress()}>
            <Text style={styles.registerLinkText}>
              Already have an account yet? Login
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
