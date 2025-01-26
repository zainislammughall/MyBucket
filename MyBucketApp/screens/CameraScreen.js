import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const CameraScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Camera Screen!</Text>
        {/* Add camera functionality here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e1527a",
  },
});

export default CameraScreen;
