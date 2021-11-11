import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {BACKGROUND, FOOTER_COLOR, HEADER_COLOR, HOMEPAGE_ICONS, NAV_ICON_COLOR, SUB_HEADER} from "./colors";
import {FULL_SCREEN_WIDTH, HEADER_HEIGHT, MED_INFO, MEDICATIONS, NAV_HEIGHT, SUBHEADER_HEIGHT} from "./constants";

export default class MedicationInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {itemName: props.navigation.state.params, item: MED_INFO[MEDICATIONS.indexOf(props.navigation.state.params)]};
    }

    render() {
        console.log(this.state.item)
        const { navigate } = this.props.navigation;

        function listInfo(item) {
            return (
                <View>
                    <View>
                        <Text style={styles.topInfo}>Prescribed on: {item.Day_Prescribed}</Text>
                        <Text style={styles.topInfo}>Dosage Per Day: {item.Dosage}</Text>
                        <Text style={styles.topInfo}>Meal Before: {item.Meal_Before}</Text>
                        <Text style={styles.topInfo}>Meal After: {item.Meal_After}</Text>
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
                </View>
            )
        }

        return (

            <View style={styles.container}>
                {/*header*/}
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>navigate('LoginPage')}>
                        <Image source={require('./logo.png')} style={{ width: 130, height: 130 }}/>
                    </TouchableOpacity>
                </View>
                {/*middle*/}
                <View style={styles.subheader}>
                    <Icon name="chevron-back" size={35} color={'black'} onPress={() =>navigate('MedicationsPage')}/>
                    <Text>                        Medication Info Page</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.state.itemName} </Text>
                    <View style={styles.info}>
                        { listInfo(this.state.item) }
                    </View>
                </View>
                {/*footer*/}
                <View style={styles.bottomNav}>
                    <Icon name="home" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('HomePage')}/>
                    <Icon name="clipboard-outline" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('SymptomsPage')}/>
                    <Icon name="list" size={35} color={NAV_ICON_COLOR} onPress={() =>navigate('MedicationsPage')}/>
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
        backgroundColor:SUB_HEADER,
        width:FULL_SCREEN_WIDTH,
        height: SUBHEADER_HEIGHT,
        alignItems:"center",
    },
    title: {
        fontSize:28,
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
        backgroundColor: HOMEPAGE_ICONS,
        borderRadius:180,
        width: '45%',
        alignItems: 'center'
    },
    pills: {
        fontSize:45,
        padding: 40
    },
    remaining: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
