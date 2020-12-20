import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'

import styles from './styles'

function FilterOptionBox(props) {
    const option = props.option

    return (
        <Text>?</Text>
    );


}

export default function Filter(props) {

    const options = [
        {"id": "1", "name": "Books"},
        {"id": "2", "name": "Tools"},
        {"id": "3", "name": "Skills"},
    ]
  
    const listing = props.listing

    const renderItem = ({item}) => (
        <FilterOptionBox option={item}/>
    );
  
    return (
      <View>
          <FlatList 
            // horizontal={true}
            data={options}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />

      </View>
    );
  }