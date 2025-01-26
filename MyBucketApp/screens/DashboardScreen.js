import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { CubeIcon } from "react-native-heroicons/outline";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import Maps from "../components/Maps";
import Dashboard from "../components/Dashboard";
import Notification from "../components/Notification";
import Profile from "../components/Profile";

const DashboardScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const DashboardScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState("dashboard");
  };
  // Sample user data for username
  const username = "Zain Islam"; // Replace with dynamic data if necessary

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Header with User Icon and Username */}
        <View style={styles.header}>
          <Icon name="user" type="font-awesome" color="#3fb27f" size={24} />
          <Text style={styles.username}>Hi, {username}!</Text>
        </View>
        {/* navtabs*/}
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "notifications" && <Notification />}
        {activeTab === "profile" && <Profile />}
      </View>

      {/* Bottom Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("dashboard")}
        >
          <Icon
            name="cube"
            type="font-awesome"
            color={activeTab === "dashboard" ? "#3fb27f" : "gray"}
            size={activeTab === "dashboard" ? 28 : 24}
          />
          <Text
            style={[
              styles.navLabel,
              activeTab === "dashboard" && { color: "#3fb27f" },
            ]}
          >
            SmartBucket
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("notifications")}
        >
          <Icon
            name="bell"
            type="font-awesome"
            color={activeTab === "notifications" ? "#3fb27f" : "gray"}
            size={activeTab === "notifications" ? 28 : 24}
          />
          <Text
            style={[
              styles.navLabel,
              activeTab === "notifications" && { color: "#3fb27f" },
            ]}
          >
            Notifications
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("profile")}
        >
          <Icon
            name="user"
            type="font-awesome"
            color={activeTab === "profile" ? "#3fb27f" : "gray"}
            size={activeTab === "profile" ? 28 : 24}
          />
          <Text
            style={[
              styles.navLabel,
              activeTab === "profile" && { color: "#3fb27f" },
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "flex-start",
  },
  username: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 10,
    color: "#333",
  },
  cardsContainer: {
    width: "90%",
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
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    borderRadius: 20,
    margin: 5,
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    alignItems: "center",
    flex: 1,
  },
  navLabel: {
    fontSize: 12,
    color: "gray",
    marginTop: 5,
  },
});

export default DashboardScreen;
