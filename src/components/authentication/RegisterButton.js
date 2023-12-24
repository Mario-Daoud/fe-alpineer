import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import constants from "../../styles/constants";
import { useAppContext } from "../../contexts/AppContext";
import { API_URL } from "@env";


export default function RegisterButton(props) {
    const { user, navigation } = props;
    const { theme } = useAppContext();

    const [isErrorVisible, setErrorVisible] = useState(false)

    const showErrorMessage = () => {
        setErrorVisible(true)

        setTimeout(() => {
            setErrorVisible(false)
        }, 2000)
    }

    const onRegisterPress = (props) => {
        const { navigation, user: { username, password, confirmPassword } } = props;


        if (password !== confirmPassword) {
            showErrorMessage()
            return;
        }


        fetch(`${API_URL}/users/register`, {
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
                    showErrorMessage()
                }
            })
            .catch((error) => {
                showErrorMessage()
            });
    };

    onRegisterPress.propTypes = {
        navigation: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
    };

    return (
        <View>
            <Pressable
                style={[styles.registerButton, { backgroundColor: theme.PRIMARY }]}
                onPress={() => onRegisterPress({ user, navigation })}
            >
                <Text style={styles.registerText}>Register</Text>
            </Pressable>
            {isErrorVisible && <Text style={{ color: "red" }}>Error while trying to register, please try again</Text>}
        </View>
    );
}

RegisterButton.propTypes = {
    user: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    registerButton: {
        borderRadius: constants.BORDERRADIUS.MEDIUM,
        padding: constants.MARGIN.MEDIUM,
        alignItems: "center",
    },
    registerText: {
        color: "white",
        fontSize: constants.FONTSIZE.MEDIUM,
    },
});
