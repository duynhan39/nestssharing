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

    const books = [
        {'name': 'The Fault in our Stars', 'price': '$15', 'description': ''},
        {'name': 'Pokemon', 'price': '$10', 'description': ''},
        {'name': 'Naruto', 'price': '$20', 'description': ''},
        {'name': 'Ender\'s Game', 'price': '$25', 'description': ''},
        {'name': 'Lean Startup', 'price': '$30', 'description': ''},
        {'name': 'The Alchemist', 'price': '$5', 'description': ''},
        {'name': 'Rich dad, poor dad', 'price': '$20', 'description': ''},
        {'name': 'Make your bed', 'price': '$9.99', 'description': ''},
        {'name': 'Extreme Ownership', 'price': '$10', 'description': ''},
    ]

    const tools = [
        {'name': 'Chainsaw', 'price': '$55', 'description': ''},
        {'name': 'Electric drill', 'price': '$15', 'description': ''},
        {'name': 'Lawn mower', 'price': '$7', 'description': ''},
    ]

    const skills = [
        {'name': 'Calculus I, II & III', 'price': '$20/per class', 'description': ''},
        {'name': 'Physics', 'price': '$25/per class', 'description': ''},
        {'name': 'Chem 118', 'price': '$15/per class', 'description': ''},
        {'name': 'Arabic for beginner', 'price': '$15/per class', 'description': ''},
        {'name': 'Beginner Guitar', 'price': '$5/per class', 'description': ''},
    ]

    const [user, setUser] = useState(null)
    return (

        // <NavigationContainer>
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                header: null,
                headerMode:"screen"
            }}>

            <Tab.Screen name="Books">
                {props => <ListingMaster {...props} data={books} />}
            </Tab.Screen>
            <Tab.Screen name="Tools">
                {props => <ListingMaster {...props} data={tools} />}
            </Tab.Screen>
            <Tab.Screen name="Skills">
                {props => <ListingMaster {...props} data={skills} />}
            </Tab.Screen>
            <Tab.Screen name="Settings">
                {props => <SettingsTab {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
        // </NavigationContainer>
    );
}