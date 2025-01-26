import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignupScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";
import CameraScreen from "./screens/CameraScreen";
import RLoadingScreen from "./screens/Rider/RLoadingScreen";
import MainScreen from "./screens/Rider/MainScreen";
import OrdersList from "./components/Rider/OrderList";
import RMap from "./components/Rider/RMap";
import RProfile from "./components/Rider/RProfile";

//setup redux
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RLoadingScreen"
              component={RLoadingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardScreen"
              component={DashboardScreen}
              options={{ headerShown: false }}
              x
            />
            <Stack.Screen
              name="CameraScreen"
              component={CameraScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderList"
              component={OrdersList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RiderMap"
              component={RMap}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RiderProfile"
              component={RProfile}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
