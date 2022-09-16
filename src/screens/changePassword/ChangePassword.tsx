import React, { useState } from 'react'
import { Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function ChangePassword() {

  const [currentpwd, setCurrentPwd] = useState('');
  const [newpwd, setNewPwd] = useState('');
  const [confirmpwd, setConfirmPwd] = useState('');

  const navigation = useNavigation();

  const UpdateData = async () => {
    try {
      console.log('msg', currentpwd, newpwd, confirmpwd);
      const storedpwd = await AsyncStorage.getItem('password');
      const updnewpwd = await AsyncStorage.setItem('newpwd', newpwd);
      const updconfirmpwd = await AsyncStorage.setItem('confirmpwd', confirmpwd);
      console.log('Password Updated');

    if (storedpwd === currentpwd && updnewpwd === updconfirmpwd) {
        Alert.alert('Your Password has been Updated succesufully');
        setTimeout(() => {
          navigation.navigate('Login');
        }, 2000);
      } else if (storedpwd !== currentpwd) {
        Alert.alert('Your Entered Current Password doesnt match');
      } else {
        Alert.alert('Your Entered New Password and Confirm Password doesnt match');
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Enter Current PassWord'
        onChangeText={currentpwd => setCurrentPwd(currentpwd)}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Enter New PassWord'
        onChangeText={newpwd => setNewPwd(newpwd)}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Confirm PassWord'
        onChangeText={confirmpwd => setConfirmPwd(confirmpwd)}
      />
      <TouchableOpacity onPress={UpdateData} style={styles.button}>
        <Text style={styles.textBtn}>Change PassWord</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


