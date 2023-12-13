import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import IonIcons from "react-native-vector-icons/Ionicons";

import LoginScreen from "../authentication/LoginScreen";
import RegisterScreen from "../authentication/RegisterScreen";
import DiscoverScreen from "../home/DiscoverScreen";
import SettingsScreen from "../settings/SettingsScreen";

const AuthStack = createStackNavigator();
const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Discover"
      component={DiscoverScreen}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <IonIcons name="compass" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Countries"
      component={DiscoverScreen}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <IonIcons name="flag" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <IonIcons name="settings" size={size} color={color} />
        ),
      }}
    />
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
    <RootStack.Screen name="Main" component={TabNavigator} />
  </RootStack.Navigator>
);

export default RootNavigator;
