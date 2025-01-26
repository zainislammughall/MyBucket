import React, { useEffect } from "react";
import { StyleSheet, View, Text, Animated, SafeAreaView } from "react-native";
import tw from "twrnc";
import { CubeIcon } from "react-native-heroicons/outline";

const LoadingScreen = ({ navigation }) => {
  const bounceValue = React.useRef(new Animated.Value(0)).current;

  // Bounce animation setup
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: -20,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [bounceValue]);

  // Navigate to DashboardScreen after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("DashboardScreen"); // Navigate to DashboardScreen
    }, 2500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigation]);

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ translateY: bounceValue }] }}>
          <CubeIcon size={80} color="#3fb27f" />
        </Animated.View>
        <Text style={styles.text}>Loading...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
});

export default LoadingScreen;
