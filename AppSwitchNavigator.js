import React from "react";
import { StatusBar, View } from "react-native";
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";

//
import MainTabNavigator from "./MainTabNavigator";
import LonginScreen from "./screens/LoginScreen";

const AppSwitchNavigator = createSwitchNavigator({
    Main: MainTabNavigator,
    Login: LonginScreen
}, {
        initialRouteName: 'Login'
    });
export default AppSwitchNavigator;