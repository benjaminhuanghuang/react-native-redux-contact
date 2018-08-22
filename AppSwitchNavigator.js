import React from "react";
import { StatusBar, View } from "react-native";
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";

//
import AddContactScreen from "./screens/AddContactScreen";
import ContactListScreen from "./screens/ContactListScreen";


export const AppSwitchNavigator = createSwitchNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen
}, {
        initialRouteName: 'ContactList'
    });
