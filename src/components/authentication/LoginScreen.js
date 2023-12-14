import React, { useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LoginButton from "./LoginButton";
import constants from "../../styles/constants";
import { useAppContext } from "../../../AppContext";
import { BLOB_URL } from "@env";

export default function LoginScreen(props) {
  const { navigation } = props;
  const { theme } = useAppContext();
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
          <Text style={[styles.inputTitle, {color: theme.INVERTTEXT}]} adjustsFontSizeToFit>
            Welcome back!
          </Text>
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
            <Text style={[styles.registerLinkText, {color: theme.INVERTTEXT}]}>
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
    borderRadius: constants.BORDERRADIUS.MEDIUM,
    alignSelf: "center",
  },
  inputTitle: {
    fontSize: constants.FONTSIZE.SUPER_LARGE,
    fontWeight: "bold",
    color: "white",
    marginBottom: constants.MARGIN.MEDIUM,
  },
  inputField: {
    borderRadius: constants.BORDERRADIUS.MEDIUM,
    padding: constants.PADDING.MEDIUM,
    marginBottom: constants.MARGIN.MEDIUM,
    backgroundColor: "lightgrey"
  },
  registerLinkText: {
    color: "white",
    fontSize: constants.FONTSIZE.MEDIUM,
    marginTop: constants.MARGIN.MEDIUM,
    fontWeight: constants.FONTWEIGHT.SEMIBOLD
  },
});
