import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import PropTypes from "prop-types";
import CountryItem from "./CountryItem";
import { useAppContext } from "../../contexts/AppContext";
import { API_URL } from "@env";

export default function CountryScreen(props) {
  const { navigation } = props;
  const { theme } = useAppContext();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/countries`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, [countries]);

  return (
    <View style={[styles.container, {backgroundColor: theme.BACKGROUND}]}>
      <FlatList
        style={{ width: "100%" }}
        data={countries}
        renderItem={({ item }) => (
          <CountryItem country={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

CountryScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
