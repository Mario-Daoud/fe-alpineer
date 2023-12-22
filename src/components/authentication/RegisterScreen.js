import React, { useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PropTypes from "prop-types";
import RegisterButton from "./RegisterButton";
import constants from "../../styles/constants";
import { useAppContext } from "../../contexts/AppContext";
import { BLOB_URL } from "@env";

export default function RegisterScreen(props) {
  const { navigation } = props;
  const { theme } = useAppContext();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const onLoginLinkPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: `${BLOB_URL}/ski-bg.jpg` }}
        style={styles.backgroundImage}
      >
        <View style={styles.inputBlock}>
          <Text
            style={[styles.inputTitle, { color: theme.INVERTTEXT }]}
            adjustsFontSizeToFit
          >
            Create account
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
          <TextInput
            style={styles.inputField}
            placeholder="Confirm password"
            secureTextEntry
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <RegisterButton
            user={{ username, password, confirmPassword }}
            navigation={{ navigation }}
          />
          <Pressable onPress={() => onLoginLinkPress()}>
            <Text
              style={[styles.registerLinkText, { color: theme.INVERTTEXT }]}
            >
              Already have an account yet? Login
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

RegisterScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

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
    backgroundColor: "white",
  },
  registerLinkText: {
    color: "white",
    fontSize: constants.FONTSIZE.MEDIUM,
    marginTop: constants.MARGIN.MEDIUM,
    fontWeight: constants.FONTWEIGHT.SEMIBOLD,
  },
});
