import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import theme from "../../styles/theme.style";

import { API_URL } from "@env";

const onRegisterPress = (props) => {
  const { username, password, confirmPassword } = props.user;
  const { navigation } = props.navigation;

  if (password !== confirmPassword) {
    console.log("Passwords do not match");
    return;
  }

  fetch(`${API_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (response.ok) {
        navigation.goBack();
      } else {
        console.log("Register failed");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export default function RegisterButton(props) {
  const { user, navigation } = props;

  return (
    <Pressable
      style={styles.registerButton}
      onPress={() => onRegisterPress({ user, navigation })}
    >
      <Text style={styles.registerText}>Register</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  registerButton: {
    backgroundColor: theme.COLOR.PRIMARY,
    borderRadius: theme.BORDERRADIUS.MEDIUM,
    padding: theme.MARGIN.MEDIUM,
    alignItems: "center",
  },
  registerText: {
    color: "white",
    fontSize: theme.FONTSIZE.MEDIUM,
  },
});
