import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Modal,
  FlatList,
  TouchableHighlight,
} from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { BlurView } from "expo-blur";

const SignupScreen = ({ navigation }) => {
  const [role, setRole] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const roles = [
    { label: "User", value: "user" },
    { label: "Delivery Rider", value: "rider" },
  ];

  const getBoxColor = (role) => {
    switch (role) {
      case "user":
        return "#f0f9ff"; // Light blue for "User"
      case "rider":
        return "#e0f7fa"; // Light teal for "Delivery Rider"
      default:
        return "rgba(255, 255, 255, 0.6)"; // Default color
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <View style={tw`flex-1 justify-center items-center`}>
        {/* Title */}
        <Text style={tw`text-2xl font-bold mb-10 text-gray-800`}>Sign Up</Text>

        {/* Form Container */}
        <BlurView intensity={50} tint="light" style={styles.formContainer}>
          {/* Name Input */}
          <View style={styles.inputContainer}>
            <Icon
              name="user"
              type="font-awesome"
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="gray"
              style={styles.input}
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Icon
              name="envelope"
              type="font-awesome"
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="gray"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Icon
              name="lock"
              type="font-awesome"
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              style={styles.input}
            />
          </View>

          {/* Role Selection (Combo Box) */}
          <View style={[styles.roleContainer, ,]}>
            <Text style={styles.roleTitle}>Select Your Role:</Text>
            <TouchableOpacity
              style={[styles.comboBox]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.selectedRole}>{role || "Select Role"}</Text>
            </TouchableOpacity>

            {/* Modal for dropdown */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                  <FlatList
                    data={roles}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                      <TouchableHighlight
                        style={styles.modalOption}
                        onPress={() => {
                          setRole(item.label);
                          setModalVisible(false);
                        }}
                      >
                        <Text style={styles.modalText}>{item.label}</Text>
                      </TouchableHighlight>
                    )}
                  />
                </View>
              </View>
            </Modal>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LoadingScreen")}
          >
            <Text style={tw`text-white text-lg font-semibold`}>Sign Up</Text>
          </TouchableOpacity>
        </BlurView>

        {/* Already Have an Account */}
        <View style={tw`mt-5 flex-row`}>
          <Text style={tw`text-gray-700`}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={tw`text-[#3fb27f] font-bold`}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 20,
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "100%",
    height: 50,
    overflow: "hidden",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    color: "black",
  },
  roleContainer: {
    width: "100%",
    marginTop: 10,
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
    marginBottom: 5,
  },
  comboBox: {
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  selectedRole: {
    fontSize: 16,
    color: "black",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    padding: 20,
  },
  modalOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  modalText: {
    fontSize: 16,
    color: "black",
  },
  button: {
    backgroundColor: "#3fb27f",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
});

export default SignupScreen;
