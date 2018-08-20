


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//
import AddContactForm from '../AddContactForm';

import store from '../redux/store';
import { addContact } from '../redux/actions';
import { connect } from 'net';

export default class ContactListScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'New Contact'
    }

    handleSubmit = formState => {
        this.props.screenProps.addContace({ name: formState.name, phone: formState.phone });
        store.dispatch(addContact(formState));

        this.props.navigation.navigate('ConatacList')
    }

    render() {
        return (
            <AddContactForm onSubmit={} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = state => {
    contacts: state.contacts
}


export default connect(mapStateToProps)(ContactListScreen);