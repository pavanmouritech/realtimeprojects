import React, {useState} from 'react';
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import Registration from '../registration/Registration';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [isloading, setIsloading] = useState(false);

  const getData = async () => {
    try {
      const storedemail = await AsyncStorage.getItem('email');
      const storedpassword = await AsyncStorage.getItem('password');
      console.log('message', email, password);
      if (
        storedemail.toString() === email &&
        storedpassword.toString() === password
      ) {
        setTimeout(() => {
          setIsloading(true);
          navigation.navigate('Root');
        }, 2000);
      } else {
        alert('Invalid Creditionals');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <Image
        source={require('../../assetes/react-logo.png')}
        style={styles.logoContainer}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Email Address"
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter PassWord"
        onChangeText={password => setPassWord(password)}
      />
      <TouchableOpacity onPress={getData} style={styles.loginBn}>
        <Text style={styles.textBtn}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(Registration)}
        style={styles.resBtn}>
        <Text style={styles.textBtn}>REGISTRATION</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
