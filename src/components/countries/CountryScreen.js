import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import theme from "../../styles/theme.style";

import CountryItem from "./CountryItem";

import { API_URL } from "@env";

export default function CountryScreen(props) {
  const { navigation } = props;
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/country`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, [countries]);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        numColumns={3}
        data={countries}
        renderItem={({ item }) => (
          <CountryItem country={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  save: {
    backgroundColor: theme.PRIMARY_COLOR,
    padding: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  saveText: {
    color: "white",
    fontWeight: "bold",
  },
});
