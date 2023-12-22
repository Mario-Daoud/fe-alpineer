import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import IonIcons from "react-native-vector-icons/Ionicons";

import LoginScreen from "../components/authentication/LoginScreen";
import RegisterScreen from "../components/authentication/RegisterScreen";
import DiscoverScreen from "../components/home/DiscoverScreen";
import SettingsScreen from "../components/settings/SettingsScreen";
import CountryScreen from "../components/countries/CountryScreen";
import CountryLocaitons from "../components/countries/CountryLocations";
import DetailScreen from "../components/location/DetailScreen";

const AuthStack = createStackNavigator();
const AuthNavigator = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
);

const DiscoverStack = createStackNavigator();
const DiscoverNavigator = () => (
    <DiscoverStack.Navigator>
        <DiscoverStack.Screen name="Discover" component={DiscoverScreen} />
        <DiscoverStack.Screen
            name="Details"
            component={DetailScreen}
            options={({ route }) => ({
                title: route.params.location.name,
                headerShown: false,
            })}
        />
        <CountryStack.Screen
            name="CountryLocations"
            component={CountryLocaitons}
            options={({ route }) => ({ title: route.params.country })}
        />
    </DiscoverStack.Navigator>
);

const CountryStack = createStackNavigator();
const CountryNavigator = () => (
    <CountryStack.Navigator>
        <CountryStack.Screen name="Countries" component={CountryScreen} />
        <CountryStack.Screen
            name="CountryLocations"
            component={CountryLocaitons}
            options={({ route }) => ({ title: route.params.country })}
        />
        <DiscoverStack.Screen
            name="Details"
            component={DetailScreen}
            options={({ route }) => ({
                title: route.params.location.name,
                headerShown: false,
            })}
        />
    </CountryStack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="DiscoverScreen"
            component={DiscoverNavigator}
            options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                    <IonIcons name="compass" size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="CountriesScreen"
            component={CountryNavigator}
            options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                    <IonIcons name="flag" size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{
                headerShown: false,
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
