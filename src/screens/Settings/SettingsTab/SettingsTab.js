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
import { ListingRowView } from '../../../components/ListingRowView'

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

      <ScrollView style={styles.scrollView}>
        <View style={styles.insideContainer}>
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default function SettingsTab(props) {


  const settings = [
    {'id':1, 'name': 'User profile'},
    {'id':2, 'name': 'Interests'},
    {'id':3, 'name': 'History'},
    {'id':4, 'name': 'Sign out'},

  ]

  const Stack = createStackNavigator();

  return (
    
    <Stack.Navigator 
      initialRouteName="Master"   
      screenOptions={{
        headerShown: false
      }}>
    
      <Stack.Screen name="Master" initialParams={{listings:settings}}>
        {props => <ListingContent {...props}  />}
      </Stack.Screen>
      

    </Stack.Navigator>
  );
}