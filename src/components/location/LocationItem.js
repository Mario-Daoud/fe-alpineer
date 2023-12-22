import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";
import constants from "../../styles/constants";
import { useAppContext } from "../../contexts/AppContext";
import { BLOB_URL } from "@env";

export default function LocationItem(props) {
  const { location, navigation } = props;
  const { theme } = useAppContext();

  const onLocationPress = () => {
    navigation.navigate("Details", { location });
  };

  return (
    <Animatable.View
      animation={"fadeInUp"}
      duration={700}
    >
      <Pressable style={styles.itemContainer} onPress={() => onLocationPress()}>
        <Image
          style={styles.image}
          source={{
            uri: `${BLOB_URL}/locations/${location.name.toLowerCase()}.jpg`,
          }}
        />
        <View style={[styles.details, { backgroundColor: theme.TERTIARY }]}>
          <Text style={[styles.name, { color: theme.TEXT }]}>
            {location.name}
          </Text>
          <View style={styles.flagContainer}>
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

LocationItem.propTypes = {
  location: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  itemContainer: {
    position: "relative",
    alignSelf: "center",
    margin: constants.MARGIN.SMALL,
    width: "94%",
    height: 212,
    borderRadius: constants.BORDERRADIUS.MEDIUM,
    overflow: "hidden",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    elevation: 4,
  },
  details: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: constants.BORDERRADIUS.MEDIUM,
    borderBottomRightRadius: constants.BORDERRADIUS.MEDIUM,
  },
  name: {
    fontWeight: constants.FONTWEIGHT.NORMAL,
    fontSize: constants.FONTSIZE.LARGE,
    padding: constants.PADDING.SMALL,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: constants.BORDERRADIUS.MEDIUM,
  },
  flagContainer: {
    margin: constants.MARGIN.SMALL,
    borderRadius: 200,
    width: 24,
    height: 24,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 2,
  },
  flag: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
