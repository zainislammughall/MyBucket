import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Maps from "./Maps";

const Dashboard = () => {
  const navigation = useNavigation();
  const [isCard1Locked, setIsCard1Locked] = useState(true); // Lock state for Card 1
  const [isCard2PowerOn, setIsCard2PowerOn] = useState(true); // Power state for Card 2
  const [isWifiConnected, setIsWifiConnected] = useState(true); // Wi-Fi connectivity for Card 3

  const Dashboard = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState("dashboard");
  };
  // Data array with card details
  const data = [
    {
      id: "1",
      title: "Lock",
      size: "small",
    },
    {
      id: "2",
      title: "Power",
      size: "small",
    },
    {
      id: "3",
      title: "Wi-Fi",
      size: "small",
    },
    {
      id: "4",
      title: "Card 4",
      size: "small",
    },
    {
      id: "5",
      title: "Map",
      size: "large",
    },
  ];

  // Toggle function for Card 1 lock state
  const toggleCard1Lock = () => {
    setIsCard1Locked(!isCard1Locked);
  };
  // Toggle function for Card 2 power state
  const toggleCard2Power = () => {
    setIsCard2PowerOn(!isCard2PowerOn);
  };

  // Custom function to render each row of cards
  const renderItem = ({ item }) => {
    if (item.id === "1") {
      // Special rendering for Card 1
      return (
        <TouchableOpacity
          style={[
            styles.card,
            styles.smallCard,
            { backgroundColor: isCard1Locked ? "#4c8fe6" : "white" },
          ]}
          onPress={toggleCard1Lock}
        >
          <Icon
            name={isCard1Locked ? "lock" : "unlock"} // Dynamic icon
            type="font-awesome"
            color={isCard1Locked ? "white" : "#4c8fe6"} // Dynamic icon color
            size={28}
          />
          <Text
            style={[
              styles.cardTitle,
              { color: isCard1Locked ? "white" : "#4c8fe6" },
            ]}
          >
            {isCard1Locked ? "Unlock" : "Lock"}
          </Text>
          <Text
            style={[
              styles.cardDescription,
              { color: isCard1Locked ? "white" : "#666" },
            ]}
          >
            {item.description}
          </Text>
        </TouchableOpacity>
      );
    }

    if (item.id === "2") {
      // Special rendering for Card 2
      return (
        <TouchableOpacity
          style={[
            styles.card,
            styles.smallCard,
            { backgroundColor: isCard2PowerOn ? "#88dd8d" : "white" },
          ]}
        >
          <Icon
            name={isCard2PowerOn ? "power-off" : "power-off"}
            type="font-awesome"
            color={isCard2PowerOn ? "white" : "#88dd8d"}
            size={28}
          />
          <Text
            style={[
              styles.cardTitle,
              { color: isCard2PowerOn ? "white" : "#88dd8d" },
            ]}
          >
            {isCard2PowerOn ? "Power Up" : "Power Down"}
          </Text>
        </TouchableOpacity>
      );
    }

    if (item.id === "3") {
      // Special rendering for Card 3
      return (
        <View
          style={[
            styles.card,
            styles.smallCard,
            { backgroundColor: isWifiConnected ? "#8b71ea" : "white" },
          ]}
        >
          <Icon
            name={isWifiConnected ? "wifi" : "wifi-slash"}
            type="font-awesome-5"
            color={isWifiConnected ? "white" : "#8b71ea"}
            size={28}
          />
          <Text
            style={[
              styles.cardTitle,
              {
                marginBottom: "10",
                color: isWifiConnected ? "white" : "#8b71ea",
              },
            ]}
          >
            {isWifiConnected ? "Connected" : "Disconnected"}
          </Text>
        </View>
      );
    }
    if (item.id === "4") {
      // Special rendering for Card 4: Camera
      return (
        <TouchableOpacity
          style={[
            styles.card,
            styles.smallCard,
            { backgroundColor: "#e1527a" },
          ]}
          onPress={() => navigation.navigate("CameraScreen")}
        >
          <Icon name="camera" type="font-awesome" color="white" size={28} />
          <Text
            style={[styles.cardTitle, { color: "white", marginBottom: "10" }]}
          >
            Camera
          </Text>
        </TouchableOpacity>
      );
    }

    if (item.id === "5") {
      // Special rendering for Big Card with Map

      return (
        <View style={styles.largeCard}>
          <Maps />
        </View>
      );
    }

    return (
      <View
        style={[
          styles.card,
          item.size === "large" ? styles.largeCard : styles.smallCard,
        ]}
      >
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    );
  };

  // Create rows of cards: two in the first row, two in the second row, and one in the third
  const renderRow = (rowData) => (
    <View style={styles.row}>
      {rowData.map((item) => renderItem({ item }))}
    </View>
  );

  // Group the data into rows
  const groupedData = [
    data.slice(0, 2), // First row: first 2 cards
    data.slice(2, 4), // Second row: next 2 cards
    data.slice(4), // Third row: last card
  ];

  return (
    <View>
      {/* Dashboard Cards */}
      <FlatList
        data={groupedData}
        renderItem={({ item }) => renderRow(item)}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.cardsContainer}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  cardsContainer: {
    marginTop: 10,
    width: "97%",
    marginLeft: "1.5%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  smallCard: {
    width: "48%",
  },
  largeCard: {
    borderRadius: 10,
    width: "100%",
    height: 350,
    justifyContent: "flex-start",
  },
  cardTitle: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 0,
    textAlign: "center",
  },
});
