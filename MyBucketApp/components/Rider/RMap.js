import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  Platform,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Icon } from "react-native-elements"; // Import Icon for back button
import * as Location from "expo-location"; // Import expo-location

const RMap = ({ route, navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);

  // Fallback location if route.params is undefined
  const { location, orderDetails } = route.params || {
    location: { latitude: 37.78825, longitude: -122.4324 },
    orderDetails: { name: "", email: "", bucketName: "" },
  };

  // Request and get the user's current location using expo-location
  useEffect(() => {
    const getCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } else {
        alert("Permission to access location was denied");
      }
    };
    getCurrentLocation();
  }, []);

  const handleNavigate = () => {
    const destination = `${location.latitude},${location.longitude}`;
    const url = Platform.select({
      ios: `http://maps.apple.com/?daddr=${destination}`,
      android: `geo:0,0?q=${destination}`,
    });

    Linking.openURL(url).catch((err) => {
      console.error("Error opening navigation app:", err);
      alert("Failed to open Maps app. Please try again.");
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-left" type="font-awesome" color="#fff" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Location</Text>
      </View>

      {/* Map Section (70% of the screen) */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
        >
          {/* Marker for the SmartBucket's Location */}
          <Marker
            coordinate={location}
            title="SmartBucket Location"
            description={`SmartBucket: ${orderDetails.bucketName}`}
          />

          {/* Marker for the Current Location */}
          {currentLocation && (
            <Marker
              coordinate={currentLocation}
              title="Your Location"
              description="This is your current location"
              pinColor="blue"
            />
          )}
        </MapView>
      </View>

      {/* Order Details Section (30% of the screen) */}
      <View style={styles.detailsContainer}>
        <Text style={styles.orderDetailsText}>
          <Text style={styles.label}>Orderer: </Text>
          {orderDetails.name}
        </Text>
        <Text style={styles.orderDetailsText}>
          <Text style={styles.label}>Email: </Text>
          {orderDetails.email}
        </Text>
        <Text style={styles.orderDetailsText}>
          <Text style={styles.label}>SmartBucket: </Text>
          {orderDetails.bucketName}
        </Text>
        <Text style={styles.orderDetailsText}>
          <Text style={styles.label}>Location: </Text>
          {location.latitude}, {location.longitude}
        </Text>

        {/* Navigate Button */}
        <TouchableOpacity
          style={styles.navigateButton}
          onPress={handleNavigate}
        >
          <Text style={styles.navigateButtonText}>Navigate to Location</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#3fb27f",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: {
    paddingRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },
  mapContainer: {
    height: "70%", // 70% of the screen height for the map
  },
  map: {
    flex: 1,
  },
  detailsContainer: {
    height: "30%", // Remaining 30% for the order details
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  orderDetailsText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  label: {
    fontWeight: "600",
    color: "#3fb27f",
  },
  navigateButton: {
    marginTop: 10,
    paddingVertical: 12,
    backgroundColor: "#3fb27f",
    borderRadius: 5,
    alignItems: "center",
  },
  navigateButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default RMap;
