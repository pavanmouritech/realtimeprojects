import React from 'react';
import {SafeAreaView,Image,Text,Button} from 'react-native';
import {DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const CustomSidebarMenu = (props) => {

  const navigation = useNavigation();
  const logOut = async () => {
    try {
        await AsyncStorage.clear();
        console.log('Clear data');
        navigation.navigate('Login');
    } catch (e) {
        console.log(e);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require('../assetes/react-logo.png')}
        style={styles.sideMenuProfileIcon}
      />
      <Text style={styles.textInput}>
        Pavan Kumar Reddy
      </Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Button
        style={styles.signOut}
        title="Sign Out"
        onPress={logOut}
      />
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
