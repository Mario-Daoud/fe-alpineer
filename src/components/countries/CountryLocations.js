import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import LocationList from "../location/LocationList"
import { useAppContext } from "../../contexts/AppContext";
import { API_URL } from "@env";

export default function CountryLocaitons(props) {
    const { country } = props.route.params
    const { navigation } = props;
    const { theme } = useAppContext();

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/locations/country/${country}`)
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: theme.BACKGROUND }]}>
            <LocationList locations={countries} navigation={navigation} />
        </View>
    );
}

CountryLocaitons.propTypes = {
    route: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});
