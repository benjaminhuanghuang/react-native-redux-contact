import React from "react";
import {
    createBottomTabNavigator
} from "react-navigation";

//
import ContactsStackNavigator from "./ContactsStackNavigator";
import SettingsScreen from "./screens/SettingsScreen";

const MainTabNavigator = createBottomTabNavigator({
    Contacts: ContactsStackNavigator,
    Settings: SettingsScreen,
}, {
        tabBarOptions: {
            activeTabColor: "#a41034"
        }
    });

export default MainTabNavigator;