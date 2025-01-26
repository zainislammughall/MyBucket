import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList, // Import FlatList
} from "react-native";
import { Icon } from "react-native-elements"; // Import Icon from react-native-elements
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const ordersData = [
  {
    id: 1,
    qrCode: "qrcode", // Use "qr-code" as the icon name
    name: "M. Ali",
    email: "Ali.a@gmail.com",
    bucketName: "Ali's Bucket",
    bucketLocation: { latitude: 31.451572, longitude: 74.270848 },
  },
  {
    id: 2,
    qrCode: "qrcode", // Use "qr-code" as the icon name
    name: "Hassan Ijaz",
    email: "Hassan.ijaz@gmail.com",
    bucketName: "Hassan's SmartBucket",
    bucketLocation: { latitude: 31.444209, longitude: 74.273048 },
  },
  {
    id: 3,
    qrCode: "qrcode", // Use "qr-code" as the icon name
    name: "Zain Islam",
    email: "zainislammughal@gmail.com",
    bucketName: "Zain's SmartBucket",
    bucketLocation: { latitude: 31.44659, longitude: 74.267917 },
  },
];

const OrdersList = () => {
  const navigation = useNavigation(); // Use the hook to get the navigation prop

  // Handle order click, navigate to the Map screen with the order's location data
  const handleOrderClick = (order) => {
    navigation.navigate("RiderMap", {
      location: order.bucketLocation,
      orderDetails: order,
    });
  };

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.orderItem}
      onPress={() => handleOrderClick(item)}
    >
      <Icon
        name={item.qrCode} // Use QR code icon
        type="font-awesome" // Specify FontAwesome icon set
        size={50}
        color="#3fb27f"
        style={styles.qrCode} // Style for the QR icon
      />
      <View style={styles.orderDetails}>
        <Text style={styles.orderText}>Orderer: {item.name}</Text>
        <Text style={styles.orderText}>Email: {item.email}</Text>
        <Text style={styles.orderText}>SmartBucket: {item.bucketName}</Text>
        <Text style={styles.orderText}>
          Location: {item.bucketLocation.latitude},{" "}
          {item.bucketLocation.longitude}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Use FlatList to render the orders */}
      <FlatList
        data={ordersData}
        renderItem={renderItem} // Pass the renderItem function
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  orderItem: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f8f8f8",
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  qrCode: {
    marginRight: 15,
  },
  orderDetails: {
    flex: 1,
    justifyContent: "center",
  },
  orderText: {
    fontSize: 14,
    color: "#333",
  },
});

export default OrdersList;
