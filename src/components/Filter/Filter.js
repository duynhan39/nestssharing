import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'

import styles from './styles'

function FilterOptionBox(props) {
    const option = props.option

    if (props.pickedOptions.includes(option.id)) {
        return (
            <View style={[styles.defaultMargin, styles.roundedCornerBox, styles.pickedBox]}>
                <Text>{option.name}</Text>
            </View>
        );
    } 
    return (
        <View style={[styles.defaultMargin, styles.roundedCornerBox, , styles.notPickedBox]}>
            <Text>{option.name}</Text>
        </View>
    );


}

export default function Filter(props) {

    const options = props.options
    const listing = props.listing
    const onOptionPressed = props.onOptionPressed

    // console.log("+++")
    // console.log(options)
    // console.log("---")
    // console.log(props.pickedOptions)

    const renderItem = ({item}) => (
        <TouchableOpacity
            onPress={() => onOptionPressed(item)}>
            <FilterOptionBox option={item} pickedOptions={props.pickedOptions}/>
        </TouchableOpacity>
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