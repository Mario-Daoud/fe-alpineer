import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  Pressable,
} from "react-native";
import PropTypes from "prop-types";
import constants from "../../styles/constants";
import { useAppContext } from "../../../AppContext";
import { API_URL } from "@env";

export default function SettingsScreen(props) {
  const { navigation } = props;
  const { user, theme, toggleDarkMode, isDarkMode } = useAppContext();
  const { username } = user;

  const [existingUser, setExistingUser] = useState();
  const [password, setPassword] = useState(user.password);

  useEffect(() => {
    fetch(`${API_URL}/users/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((data) => {
        setExistingUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [existingUser]);

  const onLogoutPress = () => {
    navigation.popToTop();
  };

  const onSavePress = () => {
    const data = {
      username: username,
      password: password,
    };

    fetch(`${API_URL}/users/${existingUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKGROUND }]}>
      <Text style={[styles.title, { color: theme.TEXT }]}>Settings</Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.label, { color: theme.TEXT }]}>Dark Mode</Text>
        <Switch
          thumbColor={isDarkMode ? "navy" : "lightgrey"}
          onValueChange={() => toggleDarkMode()}
          value={isDarkMode}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: theme.TEXT }]}>Username</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.usernameInput]}
            placeholder="Enter your username"
            value={username}
            editable={false}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: theme.TEXT }]}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, { backgroundColor: theme.SECONDARY }]}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      <Pressable style={styles.save} onPress={() => onSavePress()}>
        <Text style={styles.saveText}>Save</Text>
      </Pressable>
      <Pressable style={styles.logout} onPress={() => onLogoutPress()}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: constants.PADDING.MEDIUM,
  },
  title: {
    fontSize: constants.FONTSIZE.SUPER_LARGE,
    fontWeight: constants.FONTWEIGHT.BOLD,
    marginBottom: constants.MARGIN.MEDIUM,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: constants.PADDING.MEDIUM,
    alignItems: "center",
  },
  label: {
    fontSize: constants.FONTSIZE.MEDIUM,
    width: "30%",
    fontWeight: constants.FONTWEIGHT.SEMIBOLD,
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderRadius: constants.BORDERRADIUS.SMALL,
    borderWidth: 1,
    padding: constants.PADDING.SMALL,
  },
  usernameInput: {
    backgroundColor: "grey",
    color: "lightgrey",
  },
  switchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: constants.MARGIN.MEDIUM,
  },
  save: {
    padding: constants.PADDING.MEDIUM,
    backgroundColor: "blue",
    borderRadius: constants.BORDERRADIUS.SMALL,
    alignItems: "center",
    width: "60%",
    margin: constants.MARGIN.SMALL,
  },
  saveText: {
    color: "white",
    fontSize: constants.FONTSIZE.MEDIUM,
  },
  logout: {
    borderRadius: constants.BORDERRADIUS.SMALL,
    padding: constants.MARGIN.MEDIUM,
    alignItems: "center",
    width: "60%",
    margin: constants.MARGIN.SMALL,
    backgroundColor: "red",
  },
  logoutText: {
    color: "white",
    fontSize: constants.FONTSIZE.MEDIUM,
  },
});
