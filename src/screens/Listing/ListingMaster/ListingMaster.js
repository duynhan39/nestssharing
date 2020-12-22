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

function Header(props) {
  const options = props.options

  return (
    <View>
      <Filter options={options} onOptionPressed={(param) => props.onOptionPressed(param)} pickedOptions={props.pickedOptions}/>
      <Text style={[styles.defaultMargin, styles.text, styles.headlineText]}>Today's pick</Text>
    </View>
  );
}

function ListItemDisplay(props) {
  const item = props.item
  const onPress = props.onPress
  const options = props.options

  if (item.name == ' header') {
    return <Header options={options} onOptionPressed={(param) => props.onOptionPressed(param)} pickedOptions={props.pickedOptions}/>;
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
  var {data} = route.params
  var categories = [
    {"id": "books", "name": "Books", "isPicked": false},
    {"id": "tools", "name": "Tools", "isPicked": false},
    {"id": "skills", "name": "Skills", "isPicked": false},
  ]
  
  const [isUpdated, setUpdate] = useState(true)
  var [pickedCategory, changeCategory] = useState(categories[0] == undefined ? {'id':"empty"} : categories[0])
  
  console.log("!!!!!")
  console.log(data)

  console.log("-----")
  console.log(data['books'])



  var listings = [{'id': 'header', 'name': ' header'}].concat(data[pickedCategory.id].sort((a, b) => (a.name > b.name) ? 1 : -1 ))

  // pickedCategoryID = categories[0] == undefined ? null : categories[0].id
  // if (pickedCategory != null) {
  //   pickedCategory.isPicked = true
  // }

  const setCategory = (category) => {
    // console.log("=======")
    // console.log("Old")
    // console.log(pickedCategory)
    // // console.log(pickedCategory.isPicked)
    // console.log("Cate")
    // console.log(category)
    // pickedCategoryID.isPicked = false
    changeCategory(category)
    // pickedCategory.isPicked = true
    setUpdate(false)
    // console.log("New")
    // console.log(pickedCategory)
  };
  console.log(" ")
  console.log("New category is")
  console.log(pickedCategory)

  const [search, updateSearch] = useState('')

  const onRowPressed = (listing) => {
    navigation.navigate('Details', {listing: listing})
  }

  const renderItem = ({ item }) => (
    <ListItemDisplay item={item} onPress={onRowPressed} options={categories} onOptionPressed={(param) => setCategory(param)} pickedOptions={[pickedCategory == null ? null : pickedCategory.id]}/>
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

      <FlatList style={styles.scrollView}
        data = {listings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />


     
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