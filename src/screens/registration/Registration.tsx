import React from 'react';
import {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity,SafeAreaView,Alert}from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../login/Login';
import styles from './styles';


const Registration = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');

  const storeData = async () => {
        console.log('message',name,email,password);
        try {
          if(name.length==0){
            Alert.alert('please enter details')
          }else{
          await AsyncStorage.setItem('name',name);
          await AsyncStorage.setItem('email',email);
          await AsyncStorage.setItem('password',password);
          
          setTimeout(() => {
            Alert.alert('Successfully Registration'),
                navigation.navigate(Login);
              },3000);
          }
          } catch (error) {
          console.log(error);
          }
      };
    
  return (
      <SafeAreaView>
          <View style={styles.container}>
              <TextInput
                style={styles.inputstyle}
                placeholder="Enter Name"
                onChangeText={name => setName(name)}
              />
              <TextInput
                style={styles.inputstyle}
                placeholder="Enter Email Address"
                onChangeText={email => setEmail(email)}
              />
              <TextInput
                style={styles.inputstyle}
                placeholder="Enter PassWord"
                onChangeText={password => setPassWord(password)}
              />
          </View>
          <TouchableOpacity onPress={storeData} style={styles.resBtn}>
                <Text style={styles.resText}>REGISTRATION</Text>
          </TouchableOpacity>
      </SafeAreaView>
  );
};

export default Registration;
