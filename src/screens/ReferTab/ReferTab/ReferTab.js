import React, {useEffect, useState} from 'react'
import { Text, 
          View, 
          StyleSheet, 
          ScrollView, 
          SafeAreaView,
          Dimensions, 
          TouchableOpacity,
         } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Modal, { SlideAnimation, ModalFooter, ModalButton, ModalContent } from 'react-native-modals';

import { ReferralDetail } from '../ReferralDetail'

// import Popup from "reactjs-popup";


// import { SearchBar } from 'react-native-elements'

import styles from './styles'

// import { RowView } from '../../../components/RowView'
// import { ListingDetail } from '../../../components/ListingDetail'


function ReferralListingContent({ navigation, route }) {
  const {referrals} = route.params

  const [visible, setModalVisibility] = useState(false)
  const [displayedReferral, setReferral] = useState(null)

  const showModal = (referral) => {
    setModalVisibility(true)
    setReferral(referral)
  }

  const save = () => {
    dismiss()
  }

  const cancel = () => {
    dismiss()
  }

  const dismiss = () => {
    setModalVisibility(false)
    setReferral(null)
  }

  const wid = Dimensions.get('window').width*0.8


  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your referrals</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.insideContainer}>
          <View>
          {
            referrals.map((referral, _) => (

              <TouchableOpacity
              key = {referral.id}
              onPress={() => showModal(referral)}>

                <ReferralRow key = {referral.id} referral={referral} />
              </TouchableOpacity>
            ))
          }
          </View>
        </View>
      </ScrollView>

        <Modal
          style={styles.modal}
          visible={visible}
          modalAnimation={new SlideAnimation({
            slideFrom: 'bottom',
            useNativeDriver: 'true',
          })}
          swipeDirection={['up', 'down']} // can be string or an array
          swipeThreshold={200} // default 100
          onSwipeOut={(event) => {
            setModalVisibility(false);
          }}
          onTouchOutside={() => {
            setModalVisibility(false);
          }}
          footer={
            <ModalFooter>
              <ModalButton
                text="Cancel"
                onPress={cancel}
              />
              <ModalButton
                text="Save"
                onPress={save}
              />
            </ModalFooter>
          }
        >

          <ModalContent style={{width: wid}}>
            <ReferralDetail referral={displayedReferral}/>
          </ModalContent>

        </Modal>

      {/* <View style={styles.container}> */}
      {/* </View> */}

    </SafeAreaView>
  );
}

function ReferralRow(props) {
  const referral = props.referral

  return(
    <View  style = {[styles.roundedCornerBox, styles.defaultMargin, styles.vstack]}>
      <Text> </Text>
      <Text>{referral.company}</Text>      
      <Text> </Text>
    </View>

  );
}


export default function ReferTab(props) {


  const referrals = [
    {'company': 'Uber', 'id':1, 'link':'uber.referral.user001'},
    {'company': 'Lyft', 'id':2, 'link':'lyft.referral.user001'},
    {'company': 'DoorDash', 'id':3, 'link':'dd.referral.user001'},
    {'company': 'Instacart', 'id':4, 'link':'instc.referral.user001'},
    {'company': 'Uber Eat', 'id':5, 'link':'uber.eat.referral.user001'},
  ]

  const Stack = createStackNavigator();




  return (
    
    <Stack.Navigator 
      initialRouteName="Master"   
      screenOptions={{
        headerShown: false
      }}>
    
      <Stack.Screen name="Master" initialParams={{referrals:referrals}}>
        {props => <ReferralListingContent {...props}  />}
      </Stack.Screen>
      
      {/* <Stack.Screen name="Details">
        {props => <ListingDetail {...props} />}
      </Stack.Screen> */}

    </Stack.Navigator>
  );
}