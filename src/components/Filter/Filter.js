import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'

import styles from './styles'

function FilterOptionBox(props) {
    const option = props.option

    return (
        <View style={[styles.defaultMargin, styles.roundedCornerBox,]}>
            <Text>{option.name}</Text>
        </View>
    );


}

export default function Filter(props) {

    const options = props.options
    const listing = props.listing

    const renderItem = ({item}) => (
        <FilterOptionBox option={item}/>
    );
  
    return (
      <View style={styles.verticalPads}>
            <FlatList 
                horizontal={true}
                data={options}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

      </View>
    );
  }