// import React from 'react';
// import {ActivityIndicator, View} from 'react-native';

// const SplashScreen = () => {
//   return (
//     <View
//       style={{flex: 1, justifyContent: 'center', backgroundColor: '#06bcee'}}>
//       <ActivityIndicator size="large" color="#ffffff" />
//     </View>
//   );
// };

import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { AsyncStorage } from 'react-native';
 
// import AsyncStorage from '@react-native-community/async-storage';
 
const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'Navigator' : 'DrawerNavigator'
        ),
      );
    }, 5000);
  }, []);
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});