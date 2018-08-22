import React from "react";
import { StatusBar, View } from "react-native";
import {
    createStackNavigator
} from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons'

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


ContactsStackNavigator.navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
        <Ionicons name={`ios-contacts${focused ? '' : '-outline'}`} size={25} color={tintColor} />
      ),
};

export default ContactsStackNavigator; 