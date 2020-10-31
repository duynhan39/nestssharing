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
        {'name': 'The Fault in our Stars', 'price': '$15', 'id': 1, 'description': ''},
        {'name': 'Pokemon', 'price': '$10', 'id': 2, 'description': ''},
        {'name': 'Naruto', 'price': '$20', 'id': 3, 'description': ''},
        {'name': 'Ender\'s Game', 'price': '$25', 'id': 4, 'description': ''},
        {'name': 'Lean Startup', 'price': '$30', 'id': 5, 'description': ''},
        {'name': 'The Alchemist', 'price': '$5', 'id': 6, 'description': ''},
        {'name': 'Rich dad, poor dad', 'price': '$20', 'id': 7, 'description': ''},
        {'name': 'Make your bed', 'price': '$9.99', 'id': 8, 'description': ''},
        {'name': 'Extreme Ownership', 'price': '$10', 'id': 9, 'description': ''},
    ]

    const tools = [
        {'name': 'Chainsaw', 'price': '$55', 'id': 1, 'description': ''},
        {'name': 'Electric drill', 'price': '$15', 'id': 2, 'description': ''},
        {'name': 'Lawn mower', 'price': '$7', 'id': 3, 'description': ''},
    ]

    const skills = [
        {'name': 'Calculus I, II & III', 'price': '$20/per class', 'id': 1, 'description': ''},
        {'name': 'Physics', 'price': '$25/per class', 'id': 2, 'description': ''},
        {'name': 'Chem 118', 'price': '$15/per class', 'id': 3, 'description': ''},
        {'name': 'Arabic for beginner', 'price': '$15/per class', 'id': 4, 'description': ''},
        {'name': 'Beginner Guitar', 'price': '$5/per class', 'id': 5, 'description': ''},
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