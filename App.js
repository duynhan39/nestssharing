import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {View, Text} from 'react-native';

import { enableScreens } from 'react-native-screens';
enableScreens();

import {decode, encode} from 'base-64'

import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

function Foo() {
  return (
  <View>
    <Text>
      HOME
    </Text>
  </View>
  )
}

export default function App() {

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(0)

  if (loading) {
    return (
      <View>
        <Text>LOADING...</Text>
      </View>
    )
  }

  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        // header: null,
        headerMode:"none"
      }}>
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} user={user} />}
          </Stack.Screen>
        {/* { user ? (
          <Stack.Screen name="Home">
            {props => <Foo {...props} user={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" initialParams={{ setUser:setUser }} >
              {props => <LoginScreen {...props}   />}
            </Stack.Screen>
            <Stack.Screen name="Registration" initialParams={{ setUser:setUser }} >
              {props => <RegistrationScreen {...props}  />}

            </Stack.Screen>
          </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}


// AppRegistry.registerComponent('main',() => App);
// registerRootComponent(App);


