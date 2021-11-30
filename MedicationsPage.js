import React, { Component } from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, ImageBackground} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, HOMEPAGE_ICONS, NAV_ICON_COLOR, SUB_HEADER} from "./colors";
import {
    FULL_SCREEN_WIDTH,
    HEADER_HEIGHT,
    MEDICATIONS,
    NAV_HEIGHT,
    SUBHEADER_HEIGHT,
    PRE_MEDICATIONS,
    SYMPT_JOURNAL, MED_HISTORY, REFILLS, LOGOUT
} from "./constants";
import { ListItem } from 'react-native-elements'
import MedicationInfoPage from "./MedicationInfoPage";

let itemClicked = ''
export default class MedicationsPage extends Component {

    render() {
        const { navigate } = this.props.navigation;
        function setItemClicked(item) {
            itemClicked = item
            console.log("MedicationsPage : " + itemClicked)
            navigate('MedicationInfoPage', itemClicked)
        }

        return (
            <View style={styles.container}>
                {/*header*/}
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
                    <Text>Medication History</Text>
                </View>
                <View style={styles.container2}>
                    <Text> </Text>
                    <ScrollView>
                    <Text style={styles.title }>                 Currently Prescribed Medications</Text>
                        <Text> </Text>
                        {
                            MEDICATIONS.map((item, index) => (
                                <View>
                                    <TouchableOpacity style={styles.list} onPress={()=>setItemClicked(item)}>
                                        <Text>
                                            {item}
                                        </Text>
                                        <ListItem.Chevron />
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </ScrollView>
                    <Text style={{color:"#e8e8e8"}}>
                            _______________________________________________{"\n"}
                    </Text>
                    <ScrollView>
                    <Text style={styles.title }>               Previously Prescribed Medications</Text>
                        <Text> </Text>
                        {
                            PRE_MEDICATIONS.map((item, index) => (
                                <View>
                                    <TouchableOpacity style={styles.list} onPress={()=>setItemClicked(item)}>
                                        <Text>
                                            {item}
                                        </Text>
                                        <ListItem.Chevron />
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </ScrollView>

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
                    <View style={styles.navWords}>
                        <Icon name={LOGOUT} size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('LoginPage')}/>
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
    title: {
        fontSize:16,
    },
    list: {
        flexDirection:"row",
        justifyContent: 'space-between',
        width:FULL_SCREEN_WIDTH -5,
        borderWidth:0.5,
        borderRadius: 5,
        borderColor:HOMEPAGE_ICONS,
        height:50,
        paddingRight:10,
        paddingLeft:10,
        alignItems:'center',
        marginBottom:2
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

});
