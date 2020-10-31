import React, {useEffect, useState} from 'react'
import { Text, 
          View, 
          StyleSheet, 
          ScrollView, 
          SafeAreaView, 
          TouchableOpacity } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchBar } from 'react-native-elements';

// import { SearchBar } from 'react-native-elements'

import styles from './styles'

import { ListingRowView } from '../../../components/ListingRowView'
import { ListingDetail } from '../ListingDetail'
//'../../../components/ListingDetail'


function ListingContent({ navigation, route }) {
  const {data} = route.params
  const listings = data.sort((a, b) => (a.name > b.name) ? 1 : -1 )
  const [search, updateSearch] = useState('')

  const onRowPressed = (listing) => {
    navigation.navigate('Details', {listing: listing})
  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={[styles.headerText]}>Listing</Text> */}
        <SearchBar
          placeholder="What are you looking for?"
          onChangeText={updateSearch}
          containerStyle={{backgroundColor: 'transparent', borderTopWidth:0, borderBottomWidth:0}}
          inputContainerStyle={{backgroundColor: 'white'}}
          value={search}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.insideContainer}>
          <Text style={[styles.defaultMargin, styles.text, styles.headlineText]}>Today's pick</Text>
          {/* <Text style={[styles.defaultMargin, styles.text]}>{listings.length} items found</Text> */}
          <View>
          {
            listings.map((listing, _) => (
              <TouchableOpacity
                key = {listings.findIndex((e) => e==listing)}
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


export default function ListingMaster(props) {

  const data = props.data

  const Stack = createStackNavigator();

  return (
    
    <Stack.Navigator 
    
      initialRouteName="Master"
      screenOptions={{
        headerShown: false
    }}
    >
    
      <Stack.Screen name="Master" initialParams={{data:data}}>
        {props => <ListingContent {...props}  />}
      </Stack.Screen>
      
      <Stack.Screen name="Details">
        {props => <ListingDetail {...props} />}
      </Stack.Screen>

    </Stack.Navigator>
  );
}