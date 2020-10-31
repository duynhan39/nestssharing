import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useEffect, useState } from 'react';

// import { RegistrationScreen } from '../'
import {ListingMaster} from '../Listing/ListingMaster'
import {SettingsTab} from '../Settings/SettingsTab'

const Tab = createBottomTabNavigator();

export default function HomeScreen(props) {
    // console.log(ListingMaster)

    const [user, setUser] = useState(null)
    return (

        // <NavigationContainer>
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                header: null,
                headerMode:"screen"
            }}>
            <Tab.Screen name="Listing">
                {props => <ListingMaster {...props} />}
            </Tab.Screen>
            <Tab.Screen name="Settings">
                {props => <SettingsTab {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
        // </NavigationContainer>
    );
}