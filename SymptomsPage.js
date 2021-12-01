import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity, Image, ScrollView, ImageBackground} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, NAV_ICON_COLOR, SUB_HEADER} from "./colors";
import {
    FULL_SCREEN_WIDTH,
    HEADER_HEIGHT, LOGOUT, MED_HISTORY,
    NAV_HEIGHT, REFILLS,
    SUBHEADER_HEIGHT, SYMPT_JOURNAL,
    SYMPTOMS
} from "./constants";

let fromNav = false;
export default class SymptomsPage extends Component {
    constructor(props) {
        super(props);
        if (props.navigation.state.params != undefined) {
            fromNav = true;
            this.state = {
                date: props.navigation.state.params[0],
                symptoms: props.navigation.state.params[1]
            };
            console.log("symptoms page->> date: " + this.state.date + " symptoms " + this.state.symptoms)
            this.updateSymptomsList(this.state.date.toDateString(), this.state.symptoms)
        }
    }

    updateSymptomsList(date, symptoms) {
        SYMPTOMS.reverse()
        SYMPTOMS.push({Date:date, Symptoms:symptoms})
        SYMPTOMS.reverse()
    }

    render() {
        const { navigate } = this.props.navigation;

        function listItem(item){
            return(
                <View style={styles.entries}>
                    <Text style={styles.title}>{item.Date}</Text>
                    <Text style={styles.symp}>{item.Symptoms}</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <ImageBackground source={require('./img.png')} style = {styles.imgBackground}/>
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
                    <Text style={styles.subheader_text} >Symptoms Tracking Journal</Text>
                </View>
                <ScrollView style={styles.container2}>
                    <View style={styles.info}>
                        {
                            SYMPTOMS.map((item, index) => (
                                listItem(item)
                            ))
                        }
                    </View>
                </ScrollView>
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
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: BACKGROUND,
    },
    container2:{
        opacity: 0.85,
        flex:1,
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
        marginRight:3,
    },
    navWords: {
        flexDirection:"column",
        alignItems:"center",
    },
    navText: {
        color:'white', 
        fontSize: 14,
        marginRight:8,
    },
    header: {
        flexDirection:"row",
        justifyContent: 'space-evenly',
        backgroundColor: HEADER_COLOR,
        width:FULL_SCREEN_WIDTH,
        height: HEADER_HEIGHT,
        alignItems:"center",
        opacity:0.8,
        marginTop: -540,
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
    title: {
        fontSize:18,
    },
    symp: {
        fontSize:16,
    },
    entries: {
        borderColor:SUB_HEADER,
        borderBottomWidth:1,
        padding: 30,
        width: FULL_SCREEN_WIDTH-35,
        marginBottom:5
    },
    imgBackground:{
        width:450,
        height: 850,
        flex: 1,
        justifyContent: "center",
        resizeMode: "contain",
    },
    header_logo:{
        width: 145,
        height: 145,
        marginTop: 15,
        opacity:2,
        marginLeft: 80,
    },
    Icon:{
        opacity: 2.0,
        marginRight:14,
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
    subheader_text:{
        fontSize:17
    }
});
