import React from "react";
import { StatusBar, View } from "react-native";
import {
    createStackNavigator
} from "react-navigation";

//
import AddContactScreen from "./screens/AddContactScreen";
import ContactListScreen from "./screens/ContactListScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";


const ContactsStackNavigator = createStackNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen
}, {
        initialRouteName: 'ContactList',
        navigationOptions: {
            headerTintColor: "#a41034"
        }
    });

export default ContactsStackNavigator; 