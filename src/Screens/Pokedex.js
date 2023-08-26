import React, { useState, useEffect } from "react";
import {SafeAreaView} from 'react-native';
import {getPokemonApi, getPokemonDetailsByUrlApi} from '../api/PokemonApi'; 
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next);
      
      const pokemonsArray = [];
      for await(const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        })
      }
      setPokemon([...pokemons, ...pokemonsArray]);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <PokemonList 
        pokemons={pokemons} 
        loadPokemon={loadPokemon} 
        isNext={nextUrl} />
    </SafeAreaView>
  )
}