import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";

import theme from "../../styles/theme.style";

import { BLOB_URL } from "@env";

const zoomIn = {
  0: {
    opacity: 0,
    scale: 0,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};

export default function LocationItem(props) {
  const { location, index } = props;
  return (
    <Animatable.View
      animation={zoomIn}
      duration={700}
      delay={(index * 100)}
    >
      <Pressable style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `${BLOB_URL}/locations/${location.name.toLowerCase()}.jpg`,
          }}
        />
        <View style={styles.details}>
          <Text style={styles.name}>{location.name}</Text>
          <View style={styles.flagWrapper}>
            <Image
              style={styles.flag}
              source={{
                uri: `${BLOB_URL}/flags/${location.country.toLowerCase()}.jpg`,
              }}
            />
          </View>
        </View>
      </Pressable>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    position: "relative",
    margin: theme.MARGIN.SMALL,
    width: "94%",
    height: 212,
    borderRadius: theme.BORDERRADIUS.MEDIUM,
    overflow: "hidden",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    elevation: 8,
  },
  details: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: theme.BORDERRADIUS.MEDIUM,
    borderBottomRightRadius: theme.BORDERRADIUS.MEDIUM,
  },
  name: {
    fontWeight: theme.FONTWEIGHT.NORMAL,
    fontSize: theme.FONTSIZE.LARGE,
    padding: theme.PADDING.SMALL,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: theme.BORDERRADIUS.MEDIUM,
  },
  flagWrapper: {
    borderRadius: 200,
    overflow: "hidden",
    margin: theme.MARGIN.SMALL,
    borderColor: "black",
    borderWidth: 2,
  },
  flag: {
    width: 24,
    height: 24,
  },
});
