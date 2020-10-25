import React, {useEffect, useState} from 'react'
import { 
        Text,
        TextInput,
        View, 
        StyleSheet, 
        ScrollView, 
        SafeAreaView,
        Share,
        TouchableOpacity 
        } from 'react-native'
        
import { Feather } from '@expo/vector-icons';


import styles from './styles'


export default function SettingDetail(props) {

  const {referral} = props
  
  if (!referral) {
    return (
      <View>
        <Text>NULL</Text>
      </View>
    )
  }

  const [referralLink, setReferralLink] = useState(referral.link)
  
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: referralLink,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }



  return (
    
    <View style={styles.container}>


      <Text >{referral.company}</Text>
      <Text>{referral.name}</Text>
      <Text>Referral link</Text>
      <TextInput
        style={{ height: 40, borderColor: 'lightgray', borderWidth: 1, borderRadius: 5 }}
        onChangeText={text => setReferralLink(text)}
        value={referralLink}
        placeholder='example.com/referral'
      />
      {/* <Feather name="share" size={24} color="black" style={styles.defaultMargin}/> */}
      <TouchableOpacity
        style={styles.rowMargin}
        onPress={() => onShare()}>

        <Text >Share</Text>

      </TouchableOpacity>



    </View>
  );
}