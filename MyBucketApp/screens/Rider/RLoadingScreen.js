import React, { useEffect } from "react";
import { StyleSheet, View, Text, Animated, SafeAreaView } from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-elements"; // Import Icon from react-native-elements

const RLoadingScreen = ({ navigation }) => {
  const moveValue = React.useRef(new Animated.Value(0)).current;

  // Left-right animation setup
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveValue, {
          toValue: -20, // Move to the left
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(moveValue, {
          toValue: 20, // Move to the right
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(moveValue, {
          toValue: 0, // Return to center
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [moveValue]);

  // Navigate to DashboardScreen after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("MainScreen");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ translateX: moveValue }] }}>
          {/* Use Icon component for rider */}
          <Icon
            name="motorcycle"
            type="font-awesome"
            size={80}
            color="#3fb27f"
          />
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

export default RLoadingScreen;
