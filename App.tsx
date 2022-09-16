import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import {View} from 'react-native';
import Rootnavigation from './src/navigation/rootnavigation';

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => SplashScreen.hide(), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <Rootnavigation />
    </View>
  );
};

export default App;
