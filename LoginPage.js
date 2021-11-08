import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native' ;
import HomePage from "./HomePage";
import {BUTTON_FILLED} from "./colors";

export default class LoginPage extends React.Component {
  state={
    email:"",
    password:""
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('./logo.png')} style={{ width: 200, height: 200 }}/>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf2ef',
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
    width:"80%",
    backgroundColor:"#cdd1d1",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:BUTTON_FILLED,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  signupText:{
    color:"black"
  },
});