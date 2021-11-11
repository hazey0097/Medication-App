import React, {Component, useState} from 'react';
import {StyleSheet, View, Button, Text, ViewComponent, Modal,ImageBackground, TouchableOpacity, Image, Alert} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {ListItem} from "react-native-elements";
import { useModal } from 'react-native-use-modal-hooks';
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, HOMEPAGE_ICONS, NAV_ICON_COLOR} from "./colors";
import {FULL_SCREEN_WIDTH, HEADER_HEIGHT, NAV_HEIGHT} from "./constants";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

const Reminders = ['Adderall : 1 Pill at 8:00 AM. Food (REQUIRED).', 'Benzodiazepines : 2 Pill at 3:00 PM. Food (OPTIONAL)', 'Advil : take anytime if needed. Food (OPTIONAL).', 'Drink enough fluids with medications.']
export default class HomePage extends Component {
    state = {
        items: {}
    };
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
                <Agenda style={styles.agenda} theme={styles.agenda_theme}
                    items={this.state.items}
                    loadItemsForMonth={this.loadItems.bind(this)}
                    selected={'2021-11-10'}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    showClosingKnob={true}
                />
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
                    <Icon style={styles.Icon} name="home" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('HomePage')}/>
                    <Icon style={styles.Icon} name="clipboard-outline" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('SymptomsPage')}/>
                    <Icon style={styles.Icon} name="list" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('MedicationsPage')}/>
                    <Icon style={styles.Icon} name="sync" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('RefillsPage')}/>
                </View>
                </ImageBackground>
            </View>
        );
    }
    loadItems(day) {
        setTimeout(() => {
          for (let i = 0; i < 30; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
            if (!this.state.items[strTime]) {
              this.state.items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                this.state.items[strTime].push({
                  name: Reminders[j],
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          const newItems = {};
          Object.keys(this.state.items).forEach(key => {
            newItems[key] = this.state.items[key];
          });
          this.setState({
            items: newItems
          });
        }, 1000);
    }
    renderItem(item) {
        return (
          <TouchableOpacity
            style={[styles.item, {height: item.height}]}
            onPress={() => Alert.alert(item.name)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        );
    }
    renderEmptyDate() {
        return (
          <View style={styles.emptyDate}>
            <Text>This is empty date!</Text>
          </View>
        );
    }
    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }
    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
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
        height:5,
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
        backgroundColor:"#fdffff",
        borderWidth:1,
        borderRadius:15,
        width:375,
        alignItems:'center',
        justifyContent:'space-between',
        height: 60,
        paddingRight:10,
        paddingLeft:10,
        marginLeft:37,
    },
    agenda_theme:{
        agendaTodayColor: 'grey',
        agendaKnobColor: 'grey',
        backgroundColor: '#d9dedb',
        calendarBackground: '#fdffff',
        selectedDotColor: 'white',
        selectedDayBackgroundColor: '#F08753',
        dotColor: '#F08753',
        todayTextColor: '#F08753',

    },
    Icon:{
        opacity: 2.0,
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
        opacity:2,
    },
    imgBackground:{
        width:450,
        height: 850,
        flex: 1,
        justifyContent: "center",
        resizeMode: "contain",
    },
    agenda:{
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});
