import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TextInput,
} from "react-native";

import theme from "../../styles/theme.style";
import LocationItem from "./LocationItem";

import { API_URL } from "@env";

export default function DiscoverScreen(props) {
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
    fetch(`${API_URL}/location`)
      .then((response) => response.json())
      .then((json) => {
        setLocations(json), setFilteredLocations(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
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
    margin: theme.MARGIN.SMALL,
    padding: theme.PADDING.SMALL,
    borderRadius: theme.BORDERRADIUS.SMALL,
    borderWidth: 1,
    backgroundColor: "white",
  },
});
