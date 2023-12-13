import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import theme from "../../styles/theme.style";

import { API_URL } from "@env";

const onLoginPress = (props) => {
  const { username, password } = props.user;
  const { navigation } = props.navigation;

  fetch(`${API_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (response.ok) {
        navigation.navigate("Main");
      } else {
        console.log("Login failed");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export default function LoginButton(props) {
  const { user, navigation } = props;

  return (
    <Pressable
      style={styles.loginButton}
      onPress={() => onLoginPress({ user, navigation })}
    >
      <Text style={styles.loginText}>Login</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: theme.COLOR.PRIMARY,
    borderRadius: theme.BORDERRADIUS.MEDIUM,
    padding: theme.MARGIN.MEDIUM,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: theme.FONTSIZE.MEDIUM,
  },
});
