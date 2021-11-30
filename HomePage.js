import React, {Component} from 'react';
import {StyleSheet, View, Text,ImageBackground, TouchableOpacity, Image, Alert, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, HOMEPAGE_ICONS, NAV_ICON_COLOR, BUTTON_FILLED} from "./colors";
import {FULL_SCREEN_WIDTH, HEADER_HEIGHT, NAV_HEIGHT, Reminders} from "./constants";
import {Agenda} from 'react-native-calendars';
import Modal from "react-native-modal";
import DatePicker from 'react-native-datepicker'
import { Button } from 'antd';
import CheckBox from '@react-native-community/checkbox';


export default class HomePage extends Component {
    state = {
        items: {},
        PopUp: false,
        Date: new Date(),
        Reminder:"",
        Checkbox: true,
        isChecked: false,
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
                        <Text style={styles.header_text}>Good Morning Henry{"\n\n"}
                        Number of medications scheduled for today: 3
                        </Text>
                    </View>
                    <Agenda style={styles.agenda} theme={styles.agenda_theme}
                        items={this.state.items}
                        loadItemsForMonth={this.loadItems.bind(this)}
                        selected={'2021-11-29'}
                        renderItem={this.renderItem.bind(this, this.state.Checkbox)}
                        renderEmptyDate={this.renderEmptyDate.bind(this)}
                        rowHasChanged={this.rowHasChanged.bind(this)}
                        showClosingKnob={true}
                    />
                    {/*middle*/}
                    <View style={styles.container2}>
                    </View>
                    <View style={styles.container3}>
                    <View style={styles.options}>
                        <Text>Add Medication Reminder</Text>
                        <Icon name="add" size={35} color={HOMEPAGE_ICONS} onPress={() => {this.setState({PopUp:true})}}/>
                        <Modal isVisible={this.state.PopUp} animationType="slide">
                            <View style = {styles.popUp}>
                                <View style = {styles.modalView}>
                                    <Text>Add Custom Reminder</Text>
                                    <View style={styles.inputView} >
                                        <TextInput
                                            style={styles.inputText}
                                            placeholder="Reminder..."
                                            placeholderTextColor="black"
                                            onChangeText={text => this.setState({Reminder:text})}/>
                                    </View>
                                        <DatePicker
                                            style={{width: 200}}
                                            date={this.state.Date}
                                            mode="date"
                                            placeholder="select date"
                                            format="YYYY-MM-DD"
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
                                                    marginLeft: 36,
                                                    borderRadius: 15,
                                                }
                                            }}
                                            onDateChange={date =>this.setState({Date:date})}
                                        />
                                        <TouchableOpacity style={styles.AddBtn} onPress={() => {
                                            this.setState({PopUp:false})
                                            this.addEvent(this.state.Date, this.state.Reminder)}}>
                                            <Text style={styles.AddTxt}>Add Reminder</Text>
                                        </TouchableOpacity>
                                        
                                </View>
                            </View>
                        </Modal>
                    </View>
                    {/*track symptoms*/}
                    <View style={styles.options}>
                        <Text>Track Symptoms</Text>
                        <Icon name="add" size={35} color={HOMEPAGE_ICONS} onPress={() =>navigate('TrackSymptomsPage')}/>
                    </View>
                    </View>
                    <View style={styles.container2}>
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
    addEvent(date, reminder){
        this.state.items[date].push({
            name: reminder,
            height: Math.max(50, Math.floor(Math.random() * 80))
        });
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
                  height: Math.max(50, Math.floor(Math.random() * 80))
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
    renderItem(checkbox, item) {
               return (
            <TouchableOpacity
                style={[styles.item, {height: item.height}]}>
                <View>
                    <Text style={styles.checkText}>{item.name}</Text> 
                    <CheckBox
                        disabled={this.state.isChecked}
                        style = {styles.checkbox}
                        onTintColor = {'#3c8242'}
                        onFillColor = {'#3c8242'}
                        onCheckColor = {'#fafcff'}
                    />
                </View>
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
    popUp:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: { 
        margin: 20,
        backgroundColor: "white",
        borderRadius: 40,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 250,
    },
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
        backgroundColor: BACKGROUND,
        opacity: 0.85,
    },
    container3:{
        opacity: 0.85,
        height: 120,
        backgroundColor: BACKGROUND,
    },
    bottomNav: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor: FOOTER_COLOR,
        width:FULL_SCREEN_WIDTH,
        height: NAV_HEIGHT,
        alignItems:"center",
        opacity:0.85,
        marginLeft:33,
    },
    header: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor: HEADER_COLOR,
        width:FULL_SCREEN_WIDTH,
        height: HEADER_HEIGHT,
        alignItems:"center",
        opacity:0.8,
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
        height: 58,
        paddingRight:10,
        paddingLeft:10,
        margin:1,
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
        marginLeft: 80,
    },
    header_text:{
        marginRight: 150,
        fontSize: 15,
        color: 'white',
        opacity:2,
        textAlign:"left",
        marginLeft: 80,
        marginTop: 30
    },
    imgBackground:{
        width:450,
        height: 850,
        flex: 1,
        justifyContent: "center",
        resizeMode: "contain",
    },
    agenda:{
        width: 410,
        marginLeft: 15,
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
    },
    inputView:{
        width:200,
        backgroundColor:"#cdd1d1",
        borderRadius:15,
        height:5,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        marginTop: 20,
    },
    inputText:{
        height:50,
        color:"black"
    },
    AddBtn:{
        width:150,
        backgroundColor:BUTTON_FILLED,
        borderRadius:25,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 20
    },
    AddTxt:{
        marginTop: 30,
        height:50,
        color:"white",
    },
    checkText:{
        fontSize: 13,
        marginLeft: 24,
        marginTop: 10,
    },
    checkbox:{
        alignSelf: "center",
        marginRight: 300,
        size: 20,
        height: 15,
        width: 15,
        marginTop: -14,
    },
});
