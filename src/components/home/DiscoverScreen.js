import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from "react-native";
import LocationItem from "./LocationItem";
import constants from "../../styles/constants";
import { useAppContext } from "../../../AppContext";
import { API_URL } from "@env";

export default function DiscoverScreen(props) {
  const { theme } = useAppContext();

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

  useEffect(() => {
    fetch(`${API_URL}/locations`)
      .then((response) => response.json())
      .then((json) => {
        setLocations(json), setFilteredLocations(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: theme.BACKGROUND}]}>
      <TextInput
        style={styles.search}
        placeholder="Search..."
        onChangeText={(text) => filterLocations(text)}
      />
      <FlatList
        style={{ flex: 1 }}
        data={filteredLocations}
        renderItem={({ item, index }) => (
          <LocationItem
            location={item}
            navigation={props.navigation}
            index={index}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

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
