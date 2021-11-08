import React, {Component, useState} from 'react';
import {StyleSheet, View, Button, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {BACKGROUND, BUTTON_FILLED, FOOTER_COLOR, HEADER_COLOR, NAV_ICON_COLOR, SUB_HEADER} from "./colors";
import {FULL_SCREEN_WIDTH, HEADER_HEIGHT, NAV_HEIGHT, SUBHEADER_HEIGHT} from "./constants";
import DatePicker from 'react-native-datepicker'

export default class TrackSymptomsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {chosenDate: new Date()};
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({chosenDate: newDate});
    }

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
                    <Text>Track Symptoms Page</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title }>Add a symptom</Text>
                    <Text> </Text>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                    <Text> </Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter Your Symptoms..."
                        multiline={true}
                        numberOfLines={4}
                        placeholderTextColor="black"
                        onChangeText={text => this.setState({symptoms:text})}/>
                    <Text> </Text>
                    <View style={styles.buttons}>
                        {/*TODO: fix what happens with the cancel and save buttons*/}
                        {/*TODO: make sure symptoms and date saves*/}
                        {/*TODO: Fix title styling*/}
                        <TouchableOpacity style={styles.cancelBtn}>
                            <Text style={styles.cancelBtnText} onPress={() =>navigate('HomePage')}>Cancel</Text>
                        </TouchableOpacity>
                        <Text> </Text>
                        <TouchableOpacity style={styles.saveBtn} onPress={() =>navigate('SymptomsPage')}>
                            <Text style={styles.saveBtnText}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>
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
    subheader: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor:SUB_HEADER,
        width:FULL_SCREEN_WIDTH,
        height: SUBHEADER_HEIGHT,
        alignItems:"center",
    },
    inputText: {
        borderColor: SUB_HEADER,
        borderWidth: 1,
        width: FULL_SCREEN_WIDTH - 50,
        height: HEADER_HEIGHT,
        padding: 3
    },
    buttons: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
    },
    saveBtn:{
        width:"20%",
        backgroundColor:BUTTON_FILLED,
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    saveBtnText:{
        color:"white"
    },
    cancelBtn:{
        width:"20%",
        borderColor:BUTTON_FILLED,
        borderWidth:1,
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    cancelBtnText: {
        color: BUTTON_FILLED
    },
    title: {
        fontSize:28
    },

});
