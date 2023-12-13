import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text,  FlatList } from "react-native";

import theme from "../../styles/theme.style";

import { API_URL } from "@env";
import LocationItem from "../home/LocationItem";

export default function CountryLocaitons(props) {
  const { country } = props.route.params;

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/location/country/${country.name}`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, [countries]);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={countries}
        renderItem={({ item }) => <LocationItem location={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

CountryLocaitons.navigationOptions = {
  title: "Country Locations",
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={{ marginLeft: 15, color: theme.PRIMARY_COLOR }}>Back</Text>
    </TouchableOpacity>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
