import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { UserIcon, TruckIcon } from "react-native-heroicons/outline";
import { BlurView } from "expo-blur"; // Import BlurView from expo-blur
import { useNavigation } from "@react-navigation/native";

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex mt-50 flex-row justify-center items-center`}>
      <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
        <BlurView intensity={50} tint="light" style={styles.iconContainer}>
          <UserIcon size={30} color="white" />
          <Text style={{ padding: 5, color: "white" }}>User</Text>
        </BlurView>
      </TouchableOpacity>

      <TouchableOpacity>
        <BlurView intensity={50} tint="light" style={styles.iconContainer}>
          <TruckIcon size={30} color="white" />
          <Text style={{ padding: 5, color: "white" }}>Rider</Text>
        </BlurView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Transparent white background
    borderRadius: 8,
    width: 165,
    height: 82,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    overflow: "hidden", // Ensures the blur effect stays within the rounded corners
  },
});

export default NavOptions;
