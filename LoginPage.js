import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native' ;
import HomePage from "./HomePage";
import {BUTTON_FILLED} from "./colors";

const d = Dimensions.get("window") 

export default class LoginPage extends React.Component {
  state={
    email:"",
    password:""
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./img.png')} style = {styles.imgBackground}>
        <Image source={require('./logo.png')} style={styles.imgLogo}/>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="black"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="black"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() =>navigate('HomePage')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signupText} onPress={() =>navigate('RegisterPage')}>Signup</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    alignItems: 'center',
    marginBottom:40,
    width: 20,
    height:20
  },
  inputView:{
    width:"70%",
    backgroundColor:"#cdd1d1",
    borderRadius:25,
    height:45,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    marginLeft:65,
  },
  inputText:{
    height:50,
    color:"black"
  },
  loginBtn:{
    width:"40%",
    backgroundColor:BUTTON_FILLED,
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10,
    marginLeft: 140,
  },
  loginText:{
    color:"white"
  },
  signupText:{
    color:"black",
    marginLeft: 205,
  },
  imgBackground:{
    width:450,
    height: 850,
    flex: 1,
    justifyContent: "center",
    resizeMode: "contain",
  },
  imgLogo:{
    width: 170, 
    height: 170, 
    marginTop: 15,
    marginLeft: 140}
});