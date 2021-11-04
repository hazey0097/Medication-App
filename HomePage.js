import React, { Component } from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import SymptomsPage from "./SymptomsPage";

export default class HomePage extends Component {
    //not really sure this is used, but keeping for now in case its needed later
    static navigationOptions = {
        title: 'First Page',
        //Sets Header text of Status Bar
        headerStyle: {
            backgroundColor: '#f4511e',
            //Sets Header color
        },
        headerTintColor: '#fff',
        //Sets Header text color
        headerTitleStyle: {
            fontWeight: 'bold',
            //Sets Header text style
        },
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Home Page</Text>
                <Button title='Go to Symptoms Page'
                        onPress={() =>navigate('SymptomsPage')}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
