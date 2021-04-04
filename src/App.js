import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import  { getAllPokemon, getPokemon }  from './services/pokemonService';
import PokeCard from './PokeCard';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import './App.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  // const [nextUrl, setNextUrl] = useState('');
  // const [prevUrl, setPrevUrl] = useState('');
  // const [pokeInfo, setPokeInfo] = useState([]);
  const [search, setSearch] = useState('');
  const initalUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150';

  // To fetch the Api data from service
  useEffect(() => {
      const fetchPokemon = async () => {
        let response = await getAllPokemon(initalUrl);
        // setNextUrl(response.next);
        // setPrevUrl(response.previous);
        await loadingPokemon(response.results);
      }
      fetchPokemon();
  }, []);

  // // Next set of cards 
  // const next = async () => {
  //   let data = await getAllPokemon(nextUrl)
  //   await loadingPokemon(data.results);
  //   setNextUrl(data.next);
  //   setPrevUrl(data.previous);
  // }

  // // Previous set of cards 
  // const prev = async () => {
  //   if(!prevUrl) return;
  //   let data = await getAllPokemon(prevUrl)
  //   await loadingPokemon(data.results);
  //   setNextUrl(data.next);
  //   setPrevUrl(data.previous);
  // }

  // Fetch Other End Poit data and combine that in useState pokemonData
  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
    }))
    setPokemonData(_pokemonData);
  }

  // Handle search
  const handleChange = e => {
    setSearch(e.target.value);
  }

  // filter the data and Search data
  const filteredPokemon = pokemonData.filter(pokemon => 
    pokemon.data.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
    <section className="search-section">
      <form>
        <input className="search-pokemon" onChange={handleChange} placeholder="Search" />
      </form>
    </section>
    <section className="card-Area">
    
        <Grid container className="mainGrid">
          {filteredPokemon.map((pokemon, i) => {
            return(
              <PokeCard 
                pokemon={pokemon}
                key={i}
              />
            );
          })}
          {/* <Grid item xs={12}>
            <button onClick={prev}><NavigateBeforeIcon /></button>
            <button onClick={next}><NavigateNextIcon /></button>
          </Grid> */}
        </Grid>
    </section>
    </div>
  );
}

export default App;