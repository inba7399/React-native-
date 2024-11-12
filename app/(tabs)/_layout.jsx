import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function _layout() {favorite
  return (
  <Tabs>
    <Tabs.Screen name='home'
    options={{title:'Home',headerShown:false,tabBarIcon:({color})=>{
        return<Ionicons name="home-outline" size={24} color={color} />
    }}}
    />
    <Tabs.Screen name='favorite'  options={{title:'Home',headerShown:false,tabBarIcon:({color})=>{
      return <Ionicons name="heart" size={24} color={color} />
    }}}/>
    <Tabs.Screen name='inbox'  options={{title:'Home',headerShown:false,tabBarIcon:({color})=>{
       return <Ionicons name="chatbubble-ellipses" size={24} color={color} />
    }}}/>
    <Tabs.Screen name='profile'  options={{title:'Home',headerShown:false,tabBarIcon:({color})=>{
        return <Ionicons name="person-circle" size={24} color={color} />
    }}}/>
  </Tabs>
  )
}