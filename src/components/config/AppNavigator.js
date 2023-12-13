import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import IonIcons from "react-native-vector-icons/Ionicons";

import LoginScreen from "../authentication/LoginScreen";
import RegisterScreen from "../authentication/RegisterScreen";
import HomeScreen from "../home/HomeScreen";

const AuthStack = createStackNavigator();
const AuthNavigator = () => (
  <AuthStack.Navigator
    options={{
      headerStyle: {
        backgroundColor: "transparent",
      },
    }}
  >
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
  </Tab.Navigator>
);

const RootStack = createStackNavigator();
const RootNavigator = () => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStack.Screen name="Auth" component={AuthNavigator} />
    <RootStack.Screen name="HomePage" component={TabNavigator} />
  </RootStack.Navigator>
);

export default RootNavigator;
