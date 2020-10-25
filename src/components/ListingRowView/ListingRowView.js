import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import styles from './styles'

export default function ListingRowView(props) {
  
  const listing = props.listing

  return (
    <View  style = {[styles.roundedCornerBox, styles.defaultMargin, styles.shadowbox: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.30,

      elevation: 13,
  },]}>
      <View style={styles.vstack}>
        <View style={styles.hstack}>
          <Text style={styles.title} >{listing.name}</Text>
          <Text tyle={styles.subtitle}>{listing.price}</Text>
        </View>

        <Text>Description</Text>
        <Text>Tags</Text>
        <Text></Text>
      </View>
    </View>
  );
}