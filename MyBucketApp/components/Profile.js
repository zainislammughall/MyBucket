import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "twrnc";

const Profile = () => {
  const [name, setName] = useState("Zain Islam");
  const [email, setEmail] = useState("zain.islam@example.com");
  const [activeStatus, setActiveStatus] = useState(true);
  const [smartBucketName, setSmartBucketName] = useState("My SmartBucket");

  const handleSave = () => {
    // Replace with backend logic or API call to save the profile information
    Alert.alert(
      "Profile Updated",
      "Your profile has been successfully updated!"
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="user-circle"
          type="font-awesome"
          color="#3fb27f"
          size={100}
        />
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Active Status</Text>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>
            {activeStatus ? "Active" : "Inactive"}
          </Text>
          <Switch
            value={activeStatus}
            onValueChange={setActiveStatus}
            trackColor={{ true: "#ccc", false: "#ccc" }}
            thumbColor={activeStatus ? "#3fb27f" : "#f4f3f4"}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>SmartBucket Name</Text>
        <TextInput
          style={styles.input}
          value={smartBucketName}
          onChangeText={setSmartBucketName}
          placeholder="Enter your SmartBucket name"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    width: "100%",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
    color: "#333",
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#3fb27f",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Profile;
