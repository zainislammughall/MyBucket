import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { BlurView } from "expo-blur";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <View style={tw`flex-1 justify-center items-center`}>
        {/* Title */}
        <Text style={tw`text-2xl font-bold mb-10 text-gray-800`}>Log In</Text>

        {/* Form Container */}
        <BlurView intensity={50} tint="light" style={styles.formContainer}>
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

          {/* Log In Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LoadingScreen")}
          >
            <Text style={tw`text-white text-lg font-semibold`}>Log In</Text>
          </TouchableOpacity>
        </BlurView>
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
  button: {
    backgroundColor: "#3fb27f",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
});

export default LoginScreen;
