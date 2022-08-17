import React from "react";
import { ScrollView, View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenStack } from "react-native-screens";

import WallStreet from "./src/WallStreet";
import TechCrunch from "./src/TechCrunch";
import Apple from "./src/Apple";
import RedWire from "./src/RedWire";

const App = () => {

  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RedWire" component={RedWire} color="red"
                options={{
                  title: 'Get your updates for today',
                  headerStyle: {
                    backgroundColor: 'black',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25
                  },
                }}
        />
        <Stack.Screen name="WallStreet" component={WallStreet} 
          options={{
            title: 'Know the market',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            },
          }}/>
        <Stack.Screen name="Apple" component={Apple} 
          options={{
          title: 'News from Apple',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25
          },
        }}/>
        <Stack.Screen name="TechCrunch" component={TechCrunch} 
          options={{
          title: 'Top news in Tech World',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;