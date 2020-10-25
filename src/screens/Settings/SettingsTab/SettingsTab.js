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

function ListingContent({ navigation, route }) {
  const {listings} = route.params

  const onRowPressed = (listing) => {
    navigation.navigate('Details', {listing: listing})
  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText]}>Setting</Text>
      </View>

      {/* <ScrollView style={styles.scrollView}>
        <View style={styles.insideContainer}>
          <Text style={[styles.defaultMargin, styles.text]}>Filter</Text>
          <Text style={[styles.defaultMargin, styles.text]}>{listings.length} items found</Text>
          <View>
          {
            listings.map((listing, _) => (
              <TouchableOpacity
                key = {listing.id}
                // style={styles.button}
                onPress={() => onRowPressed(listing)}>
            
                <ListingRowView listing={listing}/>
              </TouchableOpacity>
            ))
          }
          </View>
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
}

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
        {props => <ListingContent {...props}  />}
      </Stack.Screen>
      

    </Stack.Navigator>
  );
}