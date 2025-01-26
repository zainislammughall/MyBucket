import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 31.446874,
          longitude: 74.267879,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={styles.map}
        mapType="MutedStandard"
      >
        {/* Marker must be inside MapView */}
        <Marker
          coordinate={{ latitude: 31.446874, longitude: 74.26804 }}
          title="SmartBucket"
          description="This is Your SmartBucket."
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default Maps;
