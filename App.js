import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from './screens/Feed';
import CreateStory from './screens/CreateStory';

const Tab=createBottomTabNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screensOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
        let iconName;
        if(route.name==='Feed'){
          iconName=focused
          ?'book'
          :'book-outline'
        }
        else if(route.name==='CreateStory'){
          iconName=focused?'create':'create-outline'
        }
        return <Ionicons name={iconName} size={size} color={color}/>
        },
        })}
        tabBarOptions={{
          activeTintColor:'lightBlue',
          inactiveTintColor:'green'
        }}>
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="CreateStory" component={CreateStory}/>

      </Tab.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
