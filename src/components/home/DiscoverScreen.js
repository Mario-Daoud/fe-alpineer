import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    TextInput
} from "react-native";
import PropTypes from "prop-types";
import LocationList from "../location/LocationList"
import constants from "../../styles/constants";
import { useAppContext } from "../../contexts/AppContext";
import { API_URL } from "@env";

export default function DiscoverScreen(props) {
    const { theme } = useAppContext();
    const { navigation } = props

    const [locations, setLocations] = useState([]);
    const [filteredLocations, setFilteredLocations] = useState([]);

    const filterLocations = (text) => {
        const filteredLocations = [];
        locations.forEach((location) => {
            if (location.name.toLowerCase().includes(text.toLowerCase())) {
                filteredLocations.push(location);
            }
        });
        setFilteredLocations(filteredLocations);
    };

    filterLocations.propTypes = {
        text: PropTypes.string.isRequired,
    };

    useEffect(() => {
        fetch(`${API_URL}/locations`)
            .then((response) => response.json())
            .then((json) => {
                setLocations(json), setFilteredLocations(json);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: theme.BACKGROUND }]}>
            <TextInput
                style={styles.search}
                placeholder="Search..."
                onChangeText={(text) => filterLocations(text)}
            />
            <LocationList locations={filteredLocations} navigation={navigation} />
        </View>
    );
}

DiscoverScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        margin: constants.MARGIN.SMALL,
        padding: constants.PADDING.SMALL,
        borderRadius: constants.BORDERRADIUS.SMALL,
        borderWidth: 1,
        backgroundColor: "white",
    },
});
