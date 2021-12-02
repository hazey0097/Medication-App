import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, ImageBackground} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, HOMEPAGE_ICONS, NAV_ICON_COLOR, SUB_HEADER} from "./colors";
import {
    FULL_SCREEN_WIDTH,
    HEADER_HEIGHT,
    MED_INFO,
    PRE_MEDICATIONS,
    MEDICATIONS,
    NAV_HEIGHT,
    SUBHEADER_HEIGHT,
    PRE_MED_INFO,
    SYMPT_JOURNAL, MED_HISTORY, REFILLS, LOGOUT
} from "./constants";

export default class MedicationInfoPage extends Component {
    constructor(props) {
        super(props);
        if (MEDICATIONS.indexOf(props.navigation.state.params) == -1){
            console.log(props.navigation.state.params)
            this.state = {itemName: props.navigation.state.params, item: PRE_MED_INFO[PRE_MEDICATIONS.indexOf(props.navigation.state.params)]};
        }
        else{
            this.state = {itemName: props.navigation.state.params, item: MED_INFO[MEDICATIONS.indexOf(props.navigation.state.params)]};
        }
    }

    render() {
        console.log(this.state.item)
        const { navigate } = this.props.navigation;

        function listInfo(item) {
            return (
                <ScrollView>
                    <View>
                        <Text style={styles.topInfo}>Prescribed on: {item.Day_Prescribed}</Text>
                        <Text style={styles.topInfo}>Dosage Per Day: {item.Dosage}</Text>
                        <Text style={styles.topInfo}>Meal Before: {item.Meal_Before}</Text>
                        <Text style={styles.topInfo}>Meal After: {item.Meal_After}</Text>
                        <Text style={styles.topInfo}>Doctor : {item.Doc_name}</Text>
                        <Text style={styles.topInfo}>Office Phone: {item.Office_number}</Text>
                        <Text style={styles.topInfo}>Office Address: {item.Office_address}</Text>
                    </View>
                    <View style={styles.detailed}>
                        <Text>
                            <Text>Medication Detailed Information: {'\n'}{'\n'}</Text>
                            <Text>{item.Details}</Text>
                        </Text>
                    </View>
                    <View style={styles.remaining}>
                        <Text style={styles.topInfo}>Pills Remaining{'\n'}</Text>
                        <View style={styles.circle}>
                            <Text style={styles.pills}>{item.Remaining}</Text>
                        </View>
                    </View>
                </ScrollView>
            )
        }

        return (
            <View style={styles.container}>
                <ImageBackground source={require('./img.png')} style = {styles.imgBackground}/>
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
                    <Icon name="chevron-back" size={35} color={'black'} onPress={() =>navigate('MedicationsPage')}/>
                    <Text style={styles.title}>{this.state.itemName}</Text>
                </View>
                <View style={styles.container2}>
                    <View style={styles.info}>
                        { listInfo(this.state.item) }
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
        opacity:0.85,
    },
    navWords: {
        flexDirection:"column",
        alignItems:"center",
    },
    navText: {
        color:'white', 
        fontSize: 14,
        marginRight:3,
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
        backgroundColor:SUB_HEADER,
        width:FULL_SCREEN_WIDTH,
        height: SUBHEADER_HEIGHT,
        alignItems:"center",
    },
    title: {
        fontSize:25,
        textAlign: 'center',
        width: FULL_SCREEN_WIDTH-70
    },
    info: {
        padding: 10
    },
    topInfo: {
        fontSize:18
    },
    detailed: {
        borderColor: HOMEPAGE_ICONS,
        borderWidth:1,
        padding: 20,
        marginTop: 20,
        marginBottom: 20
    },
    circle: {
        backgroundColor: SUB_HEADER,
        borderRadius:130,
        width: '35%',
        alignItems: 'center',
    },
    pills: {
        fontSize:45,
        padding: 40
    },
    remaining: {
        justifyContent: 'center',
        alignItems: 'center'
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
        marginRight:2,
    },
    container2:{
        opacity: 0.8,
        flex:1,
        backgroundColor: BACKGROUND,
        width: 390,
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
