import React, {useEffect, useState} from 'react'
import { Text, 
          View, 
          StyleSheet, 
          ScrollView, 
          SafeAreaView,
          Dimensions, 
          TouchableOpacity,
         } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Modal, { SlideAnimation, ModalFooter, ModalButton, ModalContent } from 'react-native-modals';

import { SettingDetail } from '../SettingDetail'

import styles from './styles'


export default function SettingsTab(props) {


  const referrals = [
    {'company': 'Uber', 'id':1, 'link':'uber.referral.user001'},
    {'company': 'Lyft', 'id':2, 'link':'lyft.referral.user001'},
    {'company': 'DoorDash', 'id':3, 'link':'dd.referral.user001'},
    {'company': 'Instacart', 'id':4, 'link':'instc.referral.user001'},
    {'company': 'Uber Eat', 'id':5, 'link':'uber.eat.referral.user001'},
  ]

  const Stack = createStackNavigator();

  return (
    
    <Stack.Navigator 
      initialRouteName="Master"   
      screenOptions={{
        headerShown: false
      }}>
    
      <Stack.Screen name="Master" initialParams={{referrals:referrals}}>
        {props => <ReferralListingContent {...props}  />}
      </Stack.Screen>
      

    </Stack.Navigator>
  );
}