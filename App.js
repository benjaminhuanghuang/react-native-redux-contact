import React from 'react'

// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'

//
import AppNavigator from './AppNavigator';
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
      <AppNavigator screenProps={{ contacts: this.state.contacts, addContact: this.addContact }} />
    )
  }
}
