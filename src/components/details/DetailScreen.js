import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import constants from "../../styles/constants";
import { useAppContext } from "../../../AppContext";
import { BLOB_URL } from "@env";

export default function DetailScreen(props) {
  const { navigation } = props;
  const { location } = props.route.params;
  const { theme } = useAppContext();

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.backButton, { backgroundColor: theme.PRIMARY }]}
        onPress={() => onBackPress()}
      >
        <IonIcons name="arrow-back" size={24} color="white" />
      </Pressable>
      <Image
        source={{
          uri: `${BLOB_URL}/locations/${location.name.toLowerCase()}.jpg`,
        }}
        style={styles.image}
      />
      <View style={[styles.middlePiece, { backgroundColor: theme.PRIMARY }]}>
        <Text
          style={[styles.text, { color: theme.SECONDARY }]}
          adjustsFontSizeToFit
        >
          {location.name}
        </Text>
      </View>
      <ScrollView
        style={[styles.details, { backgroundColor: theme.BACKGROUND }]}
      >
        <Text style={[styles.title, styles.overviewTitle, {color: theme.TEXT}]}>Overview</Text>
        <Text style={[styles.locatedIn, {color: theme.TEXT}]}>Located in: {location.country}</Text>
        <Text style={[styles.description, {color: theme.TEXT}]}>
          Description: {location.description}
        </Text>
        <Text style={[styles.description, {color: theme.TEXT}]}>
          Avg. rating: {location.averageRating}
        </Text>

        <Text style={[styles.title, styles.generalInfoTitle, {color: theme.TEXT}]}>
          General info
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoBlock}>
            <Text style={[styles.infoTitle, {color: theme.TEXT}]}>Weather</Text>
            <Image
              source={{
                uri: `${BLOB_URL}/icons/weather.png`,
              }}
              style={styles.infoImage}
            />
            <Text style={[styles.infoText, {color: theme.TEXT}]}>{location.degrees}°C</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={[styles.infoTitle, {color: theme.TEXT}]}>Track length</Text>
            <Image
              source={{
                uri: `${BLOB_URL}/icons/tracklength.png`,
              }}
              style={styles.infoImage}
            />
            <Text style={[styles.infoText, {color: theme.TEXT}]}>{location.trackLength}km</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={[styles.infoTitle, {color: theme.TEXT}]}>Chairlifts</Text>
            <Image
              source={{
                uri: `${BLOB_URL}/icons/chairlifts.png`,
              }}
              style={styles.infoImage}
            />
            <Text style={[styles.infoText, {color: theme.TEXT}]}>{location.chairlifts}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    zIndex: 3,
    position: "absolute",
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: constants.BORDERRADIUS.LARGE,
    alignItems: "center",
    justifyContent: "center",
  },
  middlePiece: {
    zIndex: 2,
    position: "absolute",
    width: "70%",
    height: 80,
    borderTopLeftRadius: constants.BORDERRADIUS.EXTRA_LARGE,
    borderBottomRightRadius: constants.BORDERRADIUS.EXTRA_LARGE,
    elevation: 10,
    boxShadow: "0 0 10px black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: constants.FONTSIZE.LARGE,
    fontWeight: "bold",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "55%",
  },
  details: {
    zIndex: 1,
    position: "absolute",
    top: "49%",
    width: "100%",
    height: "51%",
    borderTopLeftRadius: constants.BORDERRADIUS.EXTRA_LARGE,
    borderTopRightRadius: constants.BORDERRADIUS.EXTRA_LARGE,
    padding: constants.PADDING.MEDIUM,
    elevation: 10,
    boxShadow: "0 0 10px black",
  },
  title: {
    fontSize: constants.FONTSIZE.EXTRA_LARGE,
    fontWeight: constants.FONTWEIGHT.BOLD,
    marginBottom: constants.MARGIN.SMALL,
  },
  overviewTitle: {
    marginTop: 40,
  },
  generalInfoTitle: {
    marginTop: constants.MARGIN.EXTRA_LARGE,
  },
  locatedIn: {
    fontSize: constants.FONTSIZE.MEDIUM,
    fontWeight: constants.FONTWEIGHT.SEMIBOLD,
    marginBottom: constants.MARGIN.SMALL,
  },
  description: {
    fontSize: constants.FONTSIZE.MEDIUM,
    fontWeight: constants.FONTWEIGHT.REGULAR,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBlock: {
    flexDirection: "column",
    alignItems: "center",
  },
  infoTitle: {
    padding: constants.PADDING.SMALL,
    fontSize: constants.FONTSIZE.LARGE,
    fontWeight: constants.FONTWEIGHT.NORMAL,
  },
  infoImage: {
    padding: constants.PADDING.SMALL,
    width: 64,
    height: 64,
  },
  infoText: {
    padding: constants.PADDING.SMALL,
    fontSize: constants.FONTSIZE.LARGE,
    fontWeight: constants.FONTWEIGHT.REGULAR,
  },
});
