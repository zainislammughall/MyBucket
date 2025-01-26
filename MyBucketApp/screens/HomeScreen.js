import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { CubeIcon } from "react-native-heroicons/outline";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-[#3fb27f] h-full`}>
      <View style={tw` mt-64 items-center justify-center`}>
        <CubeIcon color="white" size="96"></CubeIcon>
      </View>
      <View style={tw`p-4 items-center justify-center`}>
        <Text style={tw`text-white font-semibold text-3xl`}>My Bucket</Text>
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 20,
  },
});
