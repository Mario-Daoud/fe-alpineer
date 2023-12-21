import React from "react"
import { View, FlatList } from "react-native";
import LocationItem from "./LocationItem"

const LocationList = (props) => {
    const { navigation, locations } = props
    return (
        <View>
            <FlatList
                style={{ flex: 1 }}
                data={locations}
                renderItem={({ item, index }) => (
                    <LocationItem location={item} index={index} navigation={navigation} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default LocationList;
