import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import PropTypes from "prop-types";
import LocationItem from "../home/LocationItem";
import { useAppContext } from "../../../AppContext";
import { API_URL } from "@env";

export default function CountryLocaitons(props) {
  const { country } = props.route.params;
  const { navigation } = props;
  const { theme } = useAppContext();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/locations/country/${country.name}`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, [countries]);

  return (
    <View style={[styles.container, {backgroundColor: theme.BACKGROUND}]}>
      <FlatList
        style={{ flex: 1 }}
        data={countries}
        renderItem={({ item }) => (
          <LocationItem location={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
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
