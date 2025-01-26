import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-elements";

import OrderList from "../../components/Rider/OrderList";
import RMap from "../../components/Rider/RMap";
import RProfile from "../../components/Rider/RProfile";

const RiderDashboardScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("orders"); // Default active tab is Orders
  const username = "Rider"; // Replace with dynamic data if necessary

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Header with User Icon and Username */}
        <View style={styles.header}>
          <Icon name="user" type="font-awesome" color="#3fb27f" size={24} />
          <Text style={styles.username}>Hi, {username}!</Text>
        </View>

        {/* Tab Content */}
        {activeTab === "orders" && <OrderList />}
        {activeTab === "profile" && <RProfile />}
      </View>

      {/* Bottom Navbar */}
      <View style={styles.navbar}>
        {/* Orders Tab */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("orders")}
        >
          <Icon
            name="list"
            type="font-awesome"
            color={activeTab === "orders" ? "#3fb27f" : "gray"}
            size={activeTab === "orders" ? 28 : 24}
          />
          <Text
            style={[
              styles.navLabel,
              activeTab === "orders" && { color: "#3fb27f" },
            ]}
          >
            Orders List
          </Text>
        </TouchableOpacity>

        {/* Profile Tab */}
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

export default RiderDashboardScreen;
