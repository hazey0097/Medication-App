import React, {Component, useState} from 'react';
import {StyleSheet, View, Button, Text, ViewComponent, Modal, Image, ImageBackground, TouchableOpacity} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import {ListItem} from "react-native-elements";
import { useModal } from 'react-native-use-modal-hooks';
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, HOMEPAGE_ICONS, NAV_ICON_COLOR} from "./colors";
import {FULL_SCREEN_WIDTH, HEADER_HEIGHT, NAV_HEIGHT} from "./constants";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['en'] = {
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthNamesShort: ['Jan.','Feb.','Mar.','April','May','June','July','Aug.','Sept.','Oct.','Nov.','Dec.'],
    dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    dayNamesShort: ['Sun.','Mon.','Tue.','Wed.','Thu.','Fri.','Sat.'],
    today: 'Today'
  };
  LocaleConfig.defaultLocale = 'en';

export default class HomePage extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                <ImageBackground source={require('./img.png')} style = {styles.imgBackground}>
                {/*header*/}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() =>navigate('LoginPage')}>
                        <Image source={require('./clear_logo.png')} style={styles.header_logo}/>
                    </TouchableOpacity>
                    <Text style={styles.header_text}> Hello Henry</Text>
                </View>
                <Calendar style={styles.calendar_style} theme={styles.calender_theme}
                markedDates={{
                    '2021-11-09' : {selected: true, selectedColor: '#bd3402' },
                    '2021-11-16': {marked: true, dotColor: '#bd3402'},
                    '2021-11-17': {marked: true, dotColor: '#bd3402'},
                    '2021-11-18': {marked: true, dotColor: '#bd3402', activeOpacity: 0},
                    '2021-11-19': {marked: true, dotColor: '#bd3402'}
                  }}/>
                {/*middle*/}
                <View style={styles.container2}>
                </View>
                <View style={styles.options}>
                    <Text>Add Medication Reminder</Text>
                    <Icon name="add" size={35} color={HOMEPAGE_ICONS} onPress={() =>navigate('AddReminderPage')}/>
                </View>
                {/*track symptoms*/}
                <View style={styles.options}>
                    <Text>Track Symptoms</Text>
                    <Icon name="add" size={35} color={HOMEPAGE_ICONS} onPress={() =>navigate('TrackSymptomsPage')}/>
                </View>
                {/*footer*/}
                <View style={styles.bottomNav}>
                    <Icon name="home" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('HomePage')}/>
                    <Icon name="clipboard-outline" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('SymptomsPage')}/>
                    <Icon name="list" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('MedicationInfoPage')}/>
                    <Icon name="sync" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('RefillsPage')}/>
                </View>
                </ImageBackground>
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
    container2:{
        flex:1,
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
        opacity:0.7,
        marginLeft:33,
    },
    header: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor: HEADER_COLOR,
        width:FULL_SCREEN_WIDTH,
        height: HEADER_HEIGHT,
        alignItems:"center",
        opacity:0.7,
        marginLeft:30,
    },
    options: {
        flexDirection:"row",
        borderColor: HOMEPAGE_ICONS,
        backgroundColor:"#FDFFFE",
        borderWidth:1,
        borderRadius:15,
        width:375,
        alignItems:'center',
        justifyContent:'space-between',
        height: 55,
        paddingRight:10,
        paddingLeft:10,
        marginLeft:37,
    },
    calendar_style:{
        marginTop: 5,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius:15,
        height: 400,
        width: 375,
        marginLeft: 37,
    },
    calender_theme:{
        backgroundColor: '#FDFFFE',
        calendarBackground: '#FDFFFE',
        textSectionTitleColor: '#b6c1cd',
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#bd3402',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: '#cc4700',
        disabledArrowColor: '#d9e1e8',
        monthTextColor: '#42423e',
        indicatorColor: '#42423e',
        textDayFontWeight: '300',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 18,
        textDayHeaderFontSize: 16
    
    }, 
    header_logo:{
        width: 145, 
        height: 145,
        marginTop: 15,
        opacity:2,
    },
    header_text:{
        marginRight: 150,
        fontSize: 20,
        color: 'white',
    },
    imgBackground:{
        width:450,
        height: 850,
        flex: 1,
        justifyContent: "center",
        resizeMode: "contain",
      },


});
