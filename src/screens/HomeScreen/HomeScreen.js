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

    const data = {
        'empty':[],
        'books':[
            {'id': '1', 'name': 'The Fault in our Stars', 'price': '$15', 'description': ''},
            {'id': '2', 'name': 'Pokemon', 'price': '$10', 'description': ''},
            {'id': '3', 'name': 'Naruto', 'price': '$20', 'description': ''},
            {'id': '4', 'name': 'Ender\'s Game', 'price': '$25', 'description': ''},
            {'id': '5', 'name': 'Lean Startup', 'price': '$30', 'description': ''},
            {'id': '6', 'name': 'The Alchemist', 'price': '$5', 'description': ''},
            {'id': '7', 'name': 'Rich dad, poor dad', 'price': '$20', 'description': ''},
            {'id': '8', 'name': 'Make your bed', 'price': '$9.99', 'description': ''},
            {'id': '9', 'name': 'Extreme Ownership', 'price': '$10', 'description': ''},
        ],

        'tools':[
            {'name': 'Chainsaw', 'price': '$55', 'description': ''},
            {'name': 'Electric drill', 'price': '$15', 'description': ''},
            {'name': 'Lawn mower', 'price': '$7', 'description': ''},
        ],

        'skills':[
            {'name': 'Calculus I, II & III', 'price': '$20/per class', 'description': ''},
            {'name': 'Physics', 'price': '$25/per class', 'description': ''},
            {'name': 'Chem 118', 'price': '$15/per class', 'description': ''},
            {'name': 'Arabic for beginner', 'price': '$15/per class', 'description': ''},
            {'name': 'Beginner Guitar', 'price': '$5/per class', 'description': ''},
        ],
    }

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
                {props => <ListingMaster {...props} data={data} />}
            </Tab.Screen>
            {/* <Tab.Screen name="Tools">
                {props => <ListingMaster {...props} data={tools} />}
            </Tab.Screen>
            <Tab.Screen name="Skills">
                {props => <ListingMaster {...props} data={skills} />}
            </Tab.Screen> */}
            <Tab.Screen name="Settings">
                {props => <SettingsTab {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
        // </NavigationContainer>
    );
}