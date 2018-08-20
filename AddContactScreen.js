import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//
import { connect } from 'react-redux'
//
import AddContactForm from '../AddContactForm';

import store from '../redux/store';
import { addContact } from '../redux/actions';

class AddContactScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'New Contact'
    }

    handleSubmit = formState => {
        this.props.addContace({ name: formState.name, phone: formState.phone });   // call function mapped by redux
        this.props.navigation.navigate('ConatacList')
    }

    render() {
        return (
            <AddContactForm onSubmit={this.handleSubmit} />
        );
    }
}

export default connect(null, {addContact: addContact})(AddContactScreen);