import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from '../Screens/Pokedex';
import PokemonScreen from '../Screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="pokedex"
        component={PokedexScreen} 
        options={{ title: '', headerTransparent: true }}
      />
      <Stack.Screen 
        name="Pokemon" 
        component={PokemonScreen}
        options={ {title: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}