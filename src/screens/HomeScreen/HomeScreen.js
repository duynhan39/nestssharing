import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useEffect, useState } from 'react';

// import { RegistrationScreen } from '../'
import {HomeTab} from '../HomeTab/HomeTab'  //HomeScreenTabs/HomeTab';
import {ReferTab} from '../ReferTab/ReferTab'

const Tab = createBottomTabNavigator();

export default function HomeScreen(props) {
    // console.log(HomeTab)

    const [user, setUser] = useState(null)
    return (

        // <NavigationContainer>
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                header: null,
                headerMode:"screen"
            }}>
            <Tab.Screen name="Rental">
                {props => <HomeTab {...props} />}
            </Tab.Screen>
            <Tab.Screen name="..." component={ReferTab} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}