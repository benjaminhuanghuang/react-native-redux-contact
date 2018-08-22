import React from "react";
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";

//
import AddContactScreen from "./screens/AddContactScreen";
import ContactListScreen from "./screens/ContactListScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";

// Navigator for the screens related to contacts
const ContactsStackNavigator = createStackNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen
}, {
        initialRouteName: 'ContactList',
        navigationOptions: {
            headerTintColor: "#2A73E0"
        }
    });


ContactsStackNavigator.navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons name={`ios-contacts${focused ? '' : '-outline'}`} size={25} color={tintColor} />
    ),
};


// Navigator for the contacts navigator add settings
import SettingsScreen from "./screens/SettingsScreen";

const MainTabNavigator = createBottomTabNavigator({
    Contacts: ContactsStackNavigator,
    Settings: SettingsScreen,
}, {
        tabBarOptions: {
            activeTabColor: "#a41034"
        }
    });


// Navigator fot login sreen and the main navigator
import LonginScreen from "./screens/LoginScreen";

const AppNavigator = createSwitchNavigator({
    Main: MainTabNavigator,
    Login: LonginScreen
}, {
        initialRouteName: 'Login'
    });

export default AppNavigator;