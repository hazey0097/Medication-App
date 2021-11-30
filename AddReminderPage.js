import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, NAV_ICON_COLOR, SUB_HEADER} from "./colors";
import {
    FULL_SCREEN_WIDTH,
    HEADER_HEIGHT,
    MED_HISTORY,
    NAV_HEIGHT,
    REFILLS,
    SUBHEADER_HEIGHT,
    SYMPT_JOURNAL
} from "./constants";

export default class AddReminderPage extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {/*header*/}
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>navigate('HomePage')}>
                        <Image source={require('./logo.png')} style={{ width: 130, height: 130 }}/>
                    </TouchableOpacity>
                </View>
                {/*middle*/}
                <View style={styles.subheader}>
                    <Text>Add Reminder Page</Text>
                </View>
                <View style={styles.container}>
                    <Button title='Go to Medication Page'
                            onPress={() =>navigate('MedicationsPage')}
                    />
                </View>
                {/*footer*/}
                <View style={styles.bottomNav}>
                    <View style={styles.navWords}>
                        <Icon style={styles.Icon} name="home" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('HomePage')}/>
                        <Text style={styles.navText}>Home</Text>
                    </View>
                    <View style={styles.navWords}>
                        <Icon style={styles.Icon} name={SYMPT_JOURNAL} size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('SymptomsPage')}/>
                        <Text style={styles.navText}>Symptoms</Text>
                    </View>
                    <View style={styles.navWords}>
                        <Icon style={styles.Icon} name={MED_HISTORY} size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('MedicationsPage')}/>
                        <Text style={styles.navText}>History</Text>
                    </View>
                    <View style={styles.navWords}>
                        <Icon style={styles.Icon} name={REFILLS} size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('RefillsPage')}/>
                        <Text style={styles.navText}>Refill</Text>
                    </View>
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
    navWords: {
        flexDirection:"column",
        alignItems:"center",
    },
    navText: {
        color:'white'
    },
    header: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor: HEADER_COLOR,
        width:FULL_SCREEN_WIDTH,
        height: HEADER_HEIGHT,
        alignItems:"center",
    },
    subheader: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor:SUB_HEADER,
        width:FULL_SCREEN_WIDTH,
        height: SUBHEADER_HEIGHT,
        alignItems:"center",
    },


});
