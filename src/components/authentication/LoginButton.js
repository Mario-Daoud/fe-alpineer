import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import constants from "../../styles/constants";
import { useAppContext } from "../../contexts/AppContext";
import { API_URL } from "@env";

const onLoginPress = (props) => {
    const { navigation, updateUser, user: { username, password } } = props;

    fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => {
            if (response.ok) {
                updateUser({ username, password });
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
    const { navigation, user: { username, password } } = props;
    const { updateUser, theme } = useAppContext();

    return (
        <Pressable
            style={[styles.loginButton, { backgroundColor: theme.PRIMARY }]}
            onPress={() =>
                onLoginPress({ user: { username, password }, navigation, updateUser })
            }
        >
            <Text style={styles.loginText}>Login</Text>
        </Pressable>
    );
}

LoginButton.propTypes = {
    user: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    loginButton: {
        borderRadius: constants.BORDERRADIUS.MEDIUM,
        padding: constants.MARGIN.MEDIUM,
        alignItems: "center",
    },
    loginText: {
        color: "white",
        fontSize: constants.FONTSIZE.MEDIUM,
    },
});
