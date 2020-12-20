import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import styles from './styles'

export default function Filter(props) {
  
    const listing = props.listing
  
    return (
      <View>
          <ScrollView horizontal={true}>

            <Text>Filter</Text>
            <Text>Filter</Text>
          </ScrollView>
      </View>
    );
  }