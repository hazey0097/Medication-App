import React, {Component, useState} from 'react';
import {StyleSheet, View, Button, Text, ViewComponent, Modal} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import {ListItem} from "react-native-elements";
import { useModal } from 'react-native-use-modal-hooks';
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, HOMEPAGE_ICONS, NAV_ICON_COLOR} from "./colors";
import {FULL_SCREEN_WIDTH, HEADER_HEIGHT, NAV_HEIGHT} from "./constants";


export default class HomePage extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                {/*header*/}
                <View style={styles.header}>
                    <Icon name="airplane" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('LoginPage')}/>
                </View>
                {/*middle*/}
                <Text>Home Page</Text>
                <View style={styles.container}>
                    <Button title='Go to Symptoms Page'
                            onPress={() =>navigate('SymptomsPage')}
                    />
                </View>
                {/*add reminder*/}
                <View style={styles.options}>
                    <Text>Add Medication Reminder</Text>
                    <Icon name="add" size={35} color={HOMEPAGE_ICONS} onPress={() =>navigate('AddReminderPage')}/>
                </View>
                {/*track symptoms*/}
                <View style={styles.options}>
                    <Text>Track Symptoms</Text>
                    <Icon name="add" size={35} color={HOMEPAGE_ICONS} onPress={() =>navigate('TrackSymptomsPage')}/>
                </View>
                <Text> </Text>
                {/*footer*/}
                <View style={styles.bottomNav}>
                    <Icon name="home" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('HomePage')}/>
                    <Icon name="clipboard-outline" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('SymptomsPage')}/>
                    <Icon name="list" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('MedicationInfoPage')}/>
                    <Icon name="sync" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('RefillsPage')}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomNav: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor: FOOTER_COLOR,
        width:FULL_SCREEN_WIDTH,
        height: NAV_HEIGHT,
        alignItems:"center",
    },
    header: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor: HEADER_COLOR,
        width:FULL_SCREEN_WIDTH,
        height: HEADER_HEIGHT,
        alignItems:"center",
    },
    options: {
        flexDirection:"row",
        borderColor: HOMEPAGE_ICONS,
        borderWidth:1,
        width:300,
        alignItems:'center',
        justifyContent:'space-between',
        height:50,
        paddingRight:10,
        paddingLeft:10,
    }

});
