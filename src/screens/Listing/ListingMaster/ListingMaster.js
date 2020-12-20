import React, {useEffect, useState} from 'react'
import { Text, 
          View, 
          StyleSheet, 
          FlatList, 
          SafeAreaView, 
          TouchableOpacity } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';


// import { SearchBar } from 'react-native-elements'

import styles from './styles'

import { ListingDetail } from '../ListingDetail'

import { ListingRowView } from '../../../components/ListingRowView'
import { Filter } from '../../../components/Filter'

//'../../../components/ListingDetail'

function Header() {
  const options = [
    {"id": "1", "name": "Books"},
    {"id": "2", "name": "Tools"},
    {"id": "3", "name": "Skills"},
  ]

  return (
    <View>
      <Filter options={options}/>
      <Text style={[styles.defaultMargin, styles.text, styles.headlineText]}>Today's pick</Text>
    </View>
  );
}

function ListItemDisplay(props) {
  const item = props.item
  const onPress = props.onPress
  if (item.name == ' header') {
    return <Header/>;
  }
  return (
    <View>  
      <TouchableOpacity
      onPress={() => onPress(item)}>
      <ListingRowView listing={item}/>
      </TouchableOpacity>
    </View>
  );
}

function ListingContent({ navigation, route }) {
  const {data} = route.params
  var listings = [{'id': 'header', 'name': ' header'}].concat(data.sort((a, b) => (a.name > b.name) ? 1 : -1 ))

  const [search, updateSearch] = useState('')

  const onRowPressed = (listing) => {
    navigation.navigate('Details', {listing: listing})
  }

  const renderItem = ({ item }) => (
    <ListItemDisplay item={item} onPress={onRowPressed} />
  );

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


      <View style={styles.insideContainer}>
        <FlatList style={styles.scrollView}
          data = {listings}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </View> 

     
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