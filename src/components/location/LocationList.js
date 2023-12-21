import React from "react";
import { FlatList } from "react-native";
import LocationItem from "./LocationItem";
import PropTypes from "prop-types";

const LocationList = (props) => {
  const { navigation, locations } = props;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      data={locations}
      renderItem={({ item, index }) => (
        <LocationItem
          location={item}
          index={index}
          navigation={navigation}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

LocationList.propTypes = {
  navigation: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
};

export default LocationList;
