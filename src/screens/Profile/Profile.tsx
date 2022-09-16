import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import {SafeAreaView,TextInput,Image} from 'react-native';
import styles from './styles';


export default function Profile() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const displayData = async () => {
    try {
       const displayname =  await AsyncStorage.getItem('name')
       const displayemail = await AsyncStorage.getItem('email')
       setName(displayname);
       setEmail(displayemail);
    } catch(e) {
        console.log(e);
      }
    }
    useEffect(()=>{
      displayData();
    },[])
  return (
    <SafeAreaView>
      <Image
        source={require('../../assetes/react-logo.png')}
        style={styles.image}
      />
     <TextInput
        style={styles.container}
        placeholder="Enter Name"
        onChangeText={name => setName(name)}
        value={name}
      />
      <TextInput
      style={styles.container}
        placeholder="Enter Email Address"
        onChangeText={email => setEmail(email)}
        value={email}
      /> 
    </SafeAreaView>
  );
}
