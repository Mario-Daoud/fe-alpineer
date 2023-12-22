import React from "react";
import { StyleSheet, Pressable, Text, Image } from "react-native";
import PropTypes from "prop-types";
import constants from "../../styles/constants";
import { useAppContext } from "../../../AppContext";
import { BLOB_URL } from "@env";

export default function CountryItem(props) {
  const { country, navigation } = props;
  const { theme } = useAppContext();

  const onCountryPress = () => {
    navigation.navigate("CountryLocations", { country });
  };

  return (
    <Pressable
      onPress={() => onCountryPress()}
      style={[styles.container, { borderColor: theme.TEXT }]}
    >
      <Image
        style={styles.image}
        source={{
          uri: `${BLOB_URL}/flags/${country.name.toLowerCase()}.jpg`,
        }}
      />
      <Text style={[styles.text, { color: theme.TEXT }]}>{country.name}</Text>
    </Pressable>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: constants.PADDING.SMALL,
    borderBottomWidth: 1,
  },
  image: {
    height: 52,
    width: 52,
    marginRight: constants.MARGIN.MEDIUM,
    borderRadius: constants.BORDERRADIUS.SMALL,
  },
  text: {
    fontWeight: constants.FONTWEIGHT.SEMIBOLD,
  },
});
