import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from "../navigation/PokedexNavigation";
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='Favorites' 
        component={FavoriteNavigation} 
        options={{
          tabBarLabel: 'Favoritos',
          headerShown: false,
          tabBarIcon: ({color, size}) => ( 
            <Icon name='heart' color={color} size={size} /> 
          ),
          }}
      />

      <Tab.Screen 
        name='Pokedex' 
        component={PokedexNavigation} 
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
          headerShown: false
        }}
      />
      
      <Tab.Screen 
        name='Account' 
        component={AccountNavigation} 
        options={{
          tabBarLabel: 'Mi cuenta',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name='user' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image source={require('../assets/pokeball.jpg')} 
      style={{width: 70, height: 70, top: -15}} />
  );
}