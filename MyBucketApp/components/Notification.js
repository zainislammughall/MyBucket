import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import tw from "twrnc";

const NotificationScreen = () => {
  // Dummy notifications data
  const notifications = [
    {
      id: 1,
      icon: "motorcycle",
      title: "Rider on the Way",
      description: "Your rider is heading towards your location.",
      timestamp: "5 mins ago",
    },
    {
      id: 2,
      icon: "check-circle",
      title: "Parcel Delivered",
      description: "Your parcel has been successfully delivered.",
      timestamp: "30 mins ago",
    },
    {
      id: 3,
      icon: "unlock",
      title: "Manual Lock Open Request",
      description: "A request to manually open the lock has been received.",
      timestamp: "1 hour ago",
    },
    {
      id: 4,
      icon: "clock-o",
      title: "Delayed Delivery",
      description: "Your delivery has been delayed due to traffic.",
      timestamp: "2 hours ago",
    },
    {
      id: 5,
      icon: "exclamation-circle",
      title: "System Alert",
      description: "An unexpected error occurred. Please check the system.",
      timestamp: "3 hours ago",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      {notifications.map((notification) => (
        <View key={notification.id} style={styles.notificationCard}>
          <Icon
            name={notification.icon}
            type="font-awesome"
            color="#3fb27f"
            size={24}
            containerStyle={styles.iconContainer}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{notification.title}</Text>
            <Text style={styles.description}>{notification.description}</Text>
            <Text style={styles.timestamp}>{notification.timestamp}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 10,
    width: "100%",
    height: "100%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  timestamp: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
});

export default NotificationScreen;
