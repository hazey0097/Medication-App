import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, NAV_ICON_COLOR, SUB_HEADER} from "./colors";
import {
    FULL_SCREEN_WIDTH,
    HEADER_HEIGHT, MEDICATIONS,
    NAV_HEIGHT,
    SUBHEADER_HEIGHT,
    SYMPTOMS
} from "./constants";
import {ListItem} from "react-native-elements";

export default class SymptomsPage extends Component {
    constructor(props) {
        super(props);
        if (props.navigation.state.params != undefined) {
            this.state = {
                date: props.navigation.state.params[0],
                symptoms: props.navigation.state.params[1]
            };
            console.log("symptoms page->> date: " + this.state.date + " symptoms " + this.state.symptoms)
            this.updateSymptomsList(this.state.date.toDateString(), this.state.symptoms)
        }
    }

    updateSymptomsList(date, symptoms) {
        SYMPTOMS.push({key:date, value:symptoms})
    }

    render() {
        const { navigate } = this.props.navigation;
        function clearSymptoms() {
            SYMPTOMS.length = 0
            console.log("cleared: " + SYMPTOMS)
        }
        return (
            <View style={styles.container}>
                {/*header*/}
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>navigate('LoginPage')}>
                        <Image source={require('./logo.png')} style={{ width: 130, height: 130 }}/>
                    </TouchableOpacity>
                </View>
                {/*middle*/}
                <View style={styles.subheader}>
                    <Text>Symptoms Page</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.info}>
                        {
                            SYMPTOMS.map((item, index) => (
                                   <Text>
                                       {JSON.stringify(item)}
                                   </Text>
                            ))
                        }
                    </View>
                    <Button title='Clear Symptoms' onPress={() =>clearSymptoms()} />
                </View>
                {/*footer*/}
                <View style={styles.bottomNav}>
                    <Icon name="home" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('HomePage')}/>
                    <Icon name="clipboard-outline" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('SymptomsPage')}/>
                    <Icon name="list" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('MedicationsPage')}/>
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
    subheader: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor:SUB_HEADER,
        width:FULL_SCREEN_WIDTH,
        height: SUBHEADER_HEIGHT,
        alignItems:"center",
    },
    info: {
        padding: 10
    },

});
