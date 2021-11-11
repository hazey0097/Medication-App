import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert, Image, ImageBackground} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {
    BACKGROUND,
    BUTTON_FILLED,
    FOOTER_COLOR,
    HEADER_COLOR,
    HOMEPAGE_ICONS,
    NAV_ICON_COLOR,
    SUB_HEADER
} from "./colors";
import {FULL_SCREEN_WIDTH, HEADER_HEIGHT, MEDICATIONS, NAV_HEIGHT, SUBHEADER_HEIGHT} from "./constants";
import SelectDropdown from 'react-native-select-dropdown'



export default class RefillsPage extends Component {

    render() {
        const { navigate } = this.props.navigation;
        let selectedMed = MEDICATIONS[0];
        function checkOrder() {
            Alert.alert(
                "Order Refill",
                "You are placing a refill order for " + selectedMed + ". Would you like to continue?",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "Continue", onPress: () => okAlert() }
                ]
            );
        }
        function okAlert() {
            Alert.alert(
                "Order Placed",
                "Your order has been placed.",
                [
                    { text: "Okay", onPress: () => navigate('HomePage') }
                ]
            );
        }

        return (
            <View style={styles.container}>
                <ImageBackground source={require('./img.png')} style = {styles.imgBackground}/>
                {/*header*/}
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>navigate('LoginPage')}>
                        <Image source={require('./clear_logo.png')} style={styles.header_logo}/>
                    </TouchableOpacity>
                </View>
                {/*middle*/}
                <View style={styles.subheader}>
                    <Text>Refills Page</Text>
                </View>
                <View style={styles.container2}>
                    <Text>Select the medication you would like to refill:  </Text>
                    <Text> </Text>
                    <SelectDropdown
                        data={MEDICATIONS}
                        defaultButtonText={'Select Medication'}
                        defaultButtonText={MEDICATIONS[0]}
                        renderDropdownIcon={() => {
                            return (
                                <Icon name="chevron-down" color={"#444"} size={18} />
                            );
                        }}
                        dropdownIconPosition={"right"}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            selectedMed = selectedItem
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                    <Text> </Text>
                    <TouchableOpacity style={styles.orderBtn} onPress={() => checkOrder()}>
                        <Text style={styles.orderBtnText}>Order Refill</Text>
                    </TouchableOpacity>
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
    orderBtn:{
        width:155,
        backgroundColor:BUTTON_FILLED,
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    orderBtnText:{
        color:"white"
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


