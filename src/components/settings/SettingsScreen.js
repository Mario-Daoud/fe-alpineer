import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Switch } from "react-native";
import theme from "../../styles/theme.style";

export default function SettingsScreen() {
  const [username, setUsername] = useState("username123");
  const [password, setPassword] = useState("password123");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch
          thumbColor={isDarkMode ? "blue" : "grey"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setIsDarkMode(value)}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.PADDING.MEDIUM,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.PADDING.MEDIUM,
    alignItems: "center",
  },
  label: {
    fontSize: theme.FONTSIZE.MEDIUM,
    width: "30%",
    fontWeight: theme.FONTWEIGHT.SEMIBOLD,
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderRadius: theme.BORDERRADIUS.SMALL,
    borderWidth: 1,
    padding: theme.PADDING.SMALL,
  },
  switchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.MARGIN.MEDIUM,
  },
});
