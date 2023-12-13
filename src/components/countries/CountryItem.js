import React from "react";
import { StyleSheet, Pressable, Text, Image, Dimensions } from "react-native";

import theme from "../../styles/theme.style";

import { BLOB_URL } from "@env";

export default function CountryItem(props) {
  const { country, navigation } = props;
  const imageDimention = 0.3 * Dimensions.get("window").width;

  const onCountryPress = () => {
    navigation.navigate("CountryLocations", { country });
  };

  return (
    <Pressable onPress={() => onCountryPress()} style={styles.container}>
      <Image
        style={{
          width: imageDimention,
          height: imageDimention,
          margin: theme.PADDING.SMALL,
        }}
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
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontWeight: theme.FONTWEIGHT.SEMIBOLD,
  },
});
