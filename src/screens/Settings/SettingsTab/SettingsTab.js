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

function SettingsListContent({ navigation, route }) {
  const {listings} = route.params

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your referrals</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.insideContainer}>
          <View>
          {
            listings.map((listing, _) => 
            // <Text>{listing.name}</Text>


              <SettingRow key = {listing.id} listing={listing} />
  
            )
          }
          </View>
        </View>
      </ScrollView>


    </SafeAreaView>
  );
}

function SettingRow(props) {
  const listing = props.listing

  return(
    <View  style = {[styles.roundedCornerBox, styles.defaultMargin, styles.vstack]}>
      <Text> </Text>

      <Text style={{color:listing.color, fontWeight:listing.fontWeight }}>{listing.name}</Text>      
     
      <Text> </Text>
    </View>

  );
}

export default function SettingsTab(props) {


  const settings = [
    {'id':1, 'name': 'User profile'},
    {'id':2, 'name': 'Interests'},
    {'id':3, 'name': 'History'},
    {'id':4, 'name': 'Sign out', 'color':'red', 'fontWeight':'bold',},

  ]

  const Stack = createStackNavigator();

  return (
    
    <Stack.Navigator 
      initialRouteName="Master"   
      screenOptions={{
        headerShown: false
      }}>
    
      <Stack.Screen name="Master" initialParams={{listings:settings}}>
        {props => <SettingsListContent {...props}  />}
      </Stack.Screen>
      

    </Stack.Navigator>
  );
}