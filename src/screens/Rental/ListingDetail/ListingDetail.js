import React, {useEffect, useState} from 'react'
import { Text,
         View, 
         StyleSheet, 
         ScrollView, 
         SafeAreaView,
         TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'


import styles from './styles'


export default function ListingDetail({ navigation, route }) {

  const {listing} = route.params

  const goBack = () => {
    navigation.goBack()
  }

  return (
    
    <SafeAreaView style={styles.container}>


      <View style={styles.header}>
        <View style={styles.hstack}>
          {/* <View onClick={goBack} styles={styles.flex_one}> */}
          <TouchableOpacity
                style={styles.button}
                onPress={goBack}
                style={[styles.flex_one]}>

            <AntDesign name="left" size={35} color="white" style={[styles.backButton]}/>
          </TouchableOpacity>
          {/* </View> */}
          <Text style={[styles.headerText, styles.flex_one]}>{listing.name}</Text>
          <View style={styles.flex_one}></View>
        </View>

      </View>

      <ScrollView style={[styles.scrollView, styles.defaultPadding]}>

        <View style={[styles.roundedCornerBox, styles.shadowbox]}>

          <Text style={styles.title}>Description</Text>
          <Text>{listing.description}</Text>
          <Text> </Text>
          <Text style={styles.title}>Salary</Text>
          <Text>{listing.price}</Text>
          <Text></Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}