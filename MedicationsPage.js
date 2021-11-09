import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, HOMEPAGE_ICONS, NAV_ICON_COLOR, SUB_HEADER} from "./colors";
import {FULL_SCREEN_WIDTH, HEADER_HEIGHT, MEDICATIONS, NAV_HEIGHT, SUBHEADER_HEIGHT} from "./constants";
import { ListItem } from 'react-native-elements'

export default class MedicationsPage extends Component {

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                {/*header*/}
                <View style={styles.header}>
                    <Icon name="airplane" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('LoginPage')}/>
                </View>
                {/*middle*/}
                <View style={styles.subheader}>
                    <Text>Medications Page</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title }>Your Medications</Text>
                        {
                            MEDICATIONS.map((item, index) => (
                                <View>
                                    <TouchableOpacity style={styles.list} onPress={()=>navigate('MedicationInfoPage')}>
                                        <Text>
                                            {item}
                                        </Text>
                                        <ListItem.Chevron />
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
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
    title: {
        fontSize:28,
    },
    list: {
        flexDirection:"row",
        justifyContent: 'space-between',
        width:FULL_SCREEN_WIDTH-90,
        borderWidth:1,
        borderColor:HOMEPAGE_ICONS,
        height:50,
        paddingRight:10,
        paddingLeft:10,
        alignItems:'center',
    },



});
