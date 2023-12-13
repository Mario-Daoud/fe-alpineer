import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  Pressable,
} from "react-native";
import theme from "../../styles/theme.style";

export default function SettingsScreen(props) {
  const { navigation } = props;
  const [username, setUsername] = useState("username123");
  const [password, setPassword] = useState("password123");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onLogoutPress = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch
          thumbColor={isDarkMode ? "blue" : "grey"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setIsDarkMode(value)}
          value={isDarkMode}
        />
      </View>
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

      <Pressable style={styles.save}>
        <Text style={styles.saveText}>Save</Text>
      </Pressable>
      <Pressable style={styles.logout} onPress={() => onLogoutPress()}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
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
    width: "100%",
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
  save: {
    padding: theme.PADDING.MEDIUM,
    borderRadius: theme.BORDERRADIUS.SMALL,
  },
  save: {
    backgroundColor: theme.COLOR.PRIMARY,
    borderRadius: theme.BORDERRADIUS.MEDIUM,
    padding: theme.MARGIN.MEDIUM,
    alignItems: "center",
    width: "60%",
    margin: theme.MARGIN.SMALL,
  },
  saveText: {
    color: "white",
    fontSize: theme.FONTSIZE.MEDIUM,
  },
  logout: {
    borderRadius: theme.BORDERRADIUS.SMALL,
    padding: theme.MARGIN.MEDIUM,
    alignItems: "center",
    width: "60%",
    margin: theme.MARGIN.SMALL,
    backgroundColor: "red"
  },
  logoutText: {
    color: "white",
    fontSize: theme.FONTSIZE.MEDIUM,
  },
});
