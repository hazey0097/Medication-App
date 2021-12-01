import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {BACKGROUND, BUTTON_FILLED, FOOTER_COLOR, HEADER_COLOR, NAV_ICON_COLOR, SUB_HEADER} from "./colors";
import {
    FULL_SCREEN_WIDTH,
    HEADER_HEIGHT, LOGOUT,
    MED_HISTORY,
    NAV_HEIGHT,
    REFILLS,
    SUBHEADER_HEIGHT,
    SYMPT_JOURNAL
} from "./constants";
import DatePicker from 'react-native-datepicker'

let symptoms = ''
let date = new Date();
export default class TrackSymptomsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        const { navigate } = this.props.navigation;

        function saveInfo() {
            let info = [date, symptoms]
            console.log("Track Symptoms Page: " +  info)
            navigate('SymptomsPage', info)
        }
        function setText(text) {
            symptoms = text
        }
        function setDate(newDate) {
            date = newDate
        }

        return (
            <View style={styles.container}>
                <ImageBackground source={require('./img.png')} style = {styles.imgBackground}>
                {/*header*/}
                <View style={styles.header}>
                        <TouchableOpacity onPress={() =>navigate('HomePage')}>
                            <Image source={require('./clear_logo.png')} style={styles.header_logo}/>
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Good Morning Henry{"\n\n"}
                        Number of medications scheduled for today: 3
                        </Text>
                    </View>
                {/*middle*/}
                <View style={styles.subheader}>
                    <Text style={styles.subheader_text}>Track Your Own Symptoms</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.title }>Enter Today's Symptom Entry</Text>
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
                        //onDateChange={(date) => {setDate(date)}}

                    />
                    <Text> </Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter Your Symptoms..."
                        placeholderTextColor="black"
                        multiline
                        onChangeText={text => setText(text)}/>
                    <Text> </Text>
                    <View style={styles.buttons}>
                        {/*TODO: make sure symptoms and date saves*/}
                        {/*TODO: Fix title styling*/}
                        <TouchableOpacity style={styles.cancelBtn}>
                            <Text style={styles.cancelBtnText} onPress={() =>navigate('HomePage')}>Cancel</Text>
                        </TouchableOpacity>
                        <Text> </Text>
                        <TouchableOpacity style={styles.saveBtn} onPress={() =>saveInfo()}>
                            <Text style={styles.saveBtnText}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                {/*footer*/}
                    <View style={styles.bottomNav}>
                        <View style={styles.navWords}>
                            <Icon style={styles.Icon} name="home" size={28} color={NAV_ICON_COLOR} onPress={() =>navigate('HomePage')}/>
                            <Text style={styles.navText}>Home</Text>
                        </View>
                        <View style={styles.navWords}>
                            <Icon style={styles.Icon} name={SYMPT_JOURNAL} size={30} color={NAV_ICON_COLOR} onPress={() =>navigate('SymptomsPage')}/>
                            <Text style={styles.navText}>Symptoms</Text>
                        </View>
                        <View style={styles.navWords}>
                            <Icon style={styles.Icon} name={MED_HISTORY} size={30} color={NAV_ICON_COLOR} onPress={() =>navigate('MedicationsPage')}/>
                            <Text style={styles.navText}>History</Text>
                        </View>
                        <View style={styles.navWords}>
                            <Icon style={styles.Icon} name={REFILLS} size={30} color={NAV_ICON_COLOR} onPress={() =>navigate('RefillsPage')}/>
                            <Text style={styles.navText}>Refill</Text>
                        </View>
                        <View style={styles.navWords}>
                            <Icon name={LOGOUT} size={30} color={NAV_ICON_COLOR} onPress={() =>navigate('LoginPage')}/>
                            <Text style={styles.navText}>Logout</Text>
                        </View>
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
        opacity: 0.85,
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
        opacity:0.85,
        marginLeft:33,
    },
    navWords: {
        flexDirection:"column",
        alignItems:"center",
    },
    navText: {
        color:'white', 
        fontSize: 14,
        marginRight:12,
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
    Icon:{
        opacity: 2.0,
        marginRight:17,
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
        marginTop: 40
    },
    imgBackground:{
        width:450,
        height: 850,
        flex: 1,
        justifyContent: "center",
        resizeMode: "contain",
    },
    subheader: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor:SUB_HEADER,
        width:FULL_SCREEN_WIDTH,
        height: SUBHEADER_HEIGHT,
        alignItems:"center",
        marginLeft: 30,
    },
    inputText: {
        borderColor: SUB_HEADER,
        borderWidth: 1,
        width: FULL_SCREEN_WIDTH - 50,
        height: HEADER_HEIGHT,
        padding: 3, 
        borderRadius: 8,
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
    subheader_text:{
        fontSize:17
    }
});
