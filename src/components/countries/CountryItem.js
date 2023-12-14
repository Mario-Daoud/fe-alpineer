import React from "react";
import { StyleSheet, Pressable, Text, Image, Dimensions } from "react-native";

import theme from "../../styles/theme.style";

import { BLOB_URL } from "@env";

export default function CountryItem(props) {
  const { country, navigation } = props;

  const onCountryPress = () => {
    navigation.navigate("CountryLocations", { country });
  };

  return (
    <Pressable onPress={() => onCountryPress()} style={styles.container}>
      <Image
      style={styles.image}
        source={{
          uri: `${BLOB_URL}/flags/${country.name.toLowerCase()}.jpg`,
        }}
      />
      <Text style={styles.text}>{country.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.PADDING.MEDIUM,
    borderBottomWidth: 1,
  },
  image: {
    height: 42,
    width: 42,
    marginRight: theme.MARGIN.MEDIUM,
  },
  text: {
    fontWeight: theme.FONTWEIGHT.SEMIBOLD,
  },
});
