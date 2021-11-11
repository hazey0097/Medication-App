import React, { Component } from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, ImageBackground} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, HOMEPAGE_ICONS, NAV_ICON_COLOR, SUB_HEADER} from "./colors";
import {FULL_SCREEN_WIDTH, HEADER_HEIGHT, MEDICATIONS, NAV_HEIGHT, SUBHEADER_HEIGHT} from "./constants";
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
                    <TouchableOpacity onPress={()=>navigate('LoginPage')}>
                        <Image source={require('./clear_logo.png')} style={styles.header_logo}/>
                    </TouchableOpacity>
                </View>
                {/*middle*/}
                <View style={styles.subheader}>
                    <Text>Medications Page</Text>
                </View>
                <View style={styles.container2}>
                    <Text> </Text>
                    <ScrollView>
                    <Text style={styles.title }>        Your Medications</Text>
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
                </View>
                {/*footer*/}
                <View style={styles.bottomNav}>
                    <Icon style={styles.Icon} name="home" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('HomePage')}/>
                    <Icon style={styles.Icon} name="clipboard-outline" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('SymptomsPage')}/>
                    <Icon style={styles.Icon} name="list" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('MedicationsPage')}/>
                    <Icon style={styles.Icon} name="sync" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('RefillsPage')}/>
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
    },
    Icon:{
        opacity: 2.0,
    },


});
