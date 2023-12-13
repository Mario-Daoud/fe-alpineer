import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

import theme from "../../styles/theme.style";
import LocationItem from "./LocationItem";

import { API_URL, BLOB_URL } from "@env";

export default function DiscoverScreen(props) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/location`)
      .then((response) => response.json())
      .then((json) => setLocations(json))
      .catch((error) => console.error(error));
  }, [locations]);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={locations}
        renderItem={({ item, index }) => (
          <LocationItem location={item} navigation={props.navigation} index={index} />
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
});
