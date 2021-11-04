import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, ViewComponent} from 'react-native';
import SymptomsPage from "./SymptomsPage";
import Icon from "react-native-vector-icons/Ionicons";
import {ListItem} from "react-native-elements";


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
                {/*header*/}
                <View style={styles.header}>
                    <Icon name="airplane" size={35} color="white" onPress={() =>navigate('LoginPage')}/>
                </View>
                {/*middle*/}
                <Text>Home Page</Text>
                <View style={styles.container}>
                    <Button title='Go to Symptoms Page'
                            onPress={() =>navigate('SymptomsPage')}
                    />
                </View>
                {/*footer*/}
                <View style={styles.bottomNav}>
                    <Icon name="home" size={35} color="white" onPress={() =>navigate('HomePage')}/>
                    <Icon name="clipboard-outline" size={35} color="white" onPress={() =>navigate('SymptomsPage')}/>
                    <Icon name="list" size={35} color="white" onPress={() =>navigate('MedicationInfoPage')}/>
                    <Icon name="sync" size={35} color="white" onPress={() =>navigate('RefillsPage')}/>
                </View>
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
    bottomNav: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor:'#13505B',
        width:390,
        height: 100,
        alignItems:"center",
    },
    header: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor:'#13505B',
        width:390,
        height: 200,
        alignItems:"center",
    }

});
