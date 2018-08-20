import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//

export default class LoginScreen extends React.Component {
    state = {
        username: '',
        password: ''
    }

    _login = async () => {
        try {
            const success = await login(this.state.usename, this.state.password);
            this.props.navigation.navigate('');
        }
        catch (err) {
            const errMessage = err.message;
            this.setState({ err: errMessage })
        }
    }
}
