import React, {useEffect, useState} from 'react'
import { Text, 
          View, 
          StyleSheet, 
          ScrollView, 
          SafeAreaView, 
          TouchableOpacity } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import { SearchBar } from 'react-native-elements'

import styles from './styles'

import { ListingRowView } from '../../../components/ListingRowView'
import { ListingDetail } from '../ListingDetail'
//'../../../components/ListingDetail'


function ListingContent({ navigation, route }) {
  const {listings} = route.params

  const onRowPressed = (listing) => {
    navigation.navigate('Details', {listing: listing})
  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText]}>Rental</Text>
      </View>

      <ScrollView style={styles.scrollView}>
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
      </ScrollView>
    </SafeAreaView>
  );
}


export default function RentalTab(props) {


  const listings = [
    {'name': 'The Fault in our Stars', 'price': '$15', 'id': 1, 'description': ''},
    {'name': 'Pokemon', 'price': '$10', 'id': 2, 'description': ''},
    {'name': 'Naruto', 'price': '$20', 'id': 3, 'description': ''},
    {'name': 'Ender\'s Game', 'price': '$25', 'id': 4, 'description': ''},
    {'name': 'Lean Startup', 'price': '$30', 'id': 5, 'description': ''},
    {'name': 'The Alchemist', 'price': '$5', 'id': 6, 'description': ''},
    {'name': 'Rich dad, poor dad', 'price': '$20', 'id': 7, 'description': ''},
    {'name': 'Make your bed', 'price': '$9.99', 'id': 8, 'description': ''},
    {'name': 'Extreme Ownership', 'price': '$10', 'id': 9, 'description': ''},
  ]

  const Stack = createStackNavigator();

  return (
    
    <Stack.Navigator 
    
      initialRouteName="Master"
      screenOptions={{
        headerShown: false
    }}
    >
    
      <Stack.Screen name="Master" initialParams={{listings:listings}}>
        {props => <ListingContent {...props}  />}
      </Stack.Screen>
      
      <Stack.Screen name="Details">
        {props => <ListingDetail {...props} />}
      </Stack.Screen>

    </Stack.Navigator>
  );
}