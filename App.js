import React from 'react'

// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'

//
import { AppSwitchNavigator } from './AppSwitchNavigator';
import { AppStackNavigator } from './AppStackNavigator';
import AddContactScreen from './screens/AddContactScreen'
import SettingsScreen from './screens/SettingsScreen'
import ContactListScreen from './screens/ContactListScreen'
import ContactDetailsScreen from './screens/ContactDetailsScreen'
import LoginScreen from './screens/LoginScreen'
import { fetchUsers } from './api'
import contacts from './contacts'
import { store, persistor } from './redux/store'


export default class App extends React.Component {
  state = {
    contacts,
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }))
  }

  render() {
    return (
      <AppStackNavigator
        screenProps={{ contacts: this.state.contacts, addContact: this.addContact }}
      />
    )
  }
}
