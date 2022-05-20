import React, { useState, useEffect, ChangeEvent } from 'react'
import { PokemonClient, NamedAPIResourceList, Pokemon } from 'pokenode-ts'
import pikachu from './data/pikachu.json'
import './App.css'
import PokemonDescription from './components/PokemonDescription'
import PokemonStats from './components/PokemonStats'

function App() {
  // const [pokemonClient] = useState(new PokemonClient())
  const [pokemonResponse, setPokemonResponse] = useState<NamedAPIResourceList>({
    count: 0,
    next: null,
    previous: null,
    results: []
  })
  const [searchText, setSearchText] = useState<string>('pikachu')
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>(pikachu)
  useEffect(() => {
    new PokemonClient().listPokemons(0, 1200).then((res) => {
      res.results.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
      setPokemonResponse(res)
    })
  }, [])

  function searchSelectHandler(event: ChangeEvent<HTMLSelectElement>) {
    setSearchText(event.currentTarget.value)
  }

  async function search() {
    try {
      const pokemonRes = await new PokemonClient({
        cacheOptions: { maxAge: 5000, debug: true }
      }).getPokemonByName(searchText)
      setCurrentPokemon(pokemonRes)
    } catch (error) {
      console.error(error)
    }
  }

  // async function fetchPokemon() {}

  return (
    <>
      <header>
        <select
          autoComplete="on"
          onChange={searchSelectHandler}
          value={searchText}
        >
          {pokemonResponse.results.map((pokemon) => (
            <option key={pokemon.url} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>

        <button type="button" onClick={search}>
          Search
        </button>
      </header>
      <main>
        {/* <Pokedex>
          <DisplayScreen></DisplayScreen>

        </Pokedex> */}
        <PokemonDescription currentPokemon={currentPokemon} />
        <PokemonStats currentPokemon={currentPokemon} />
      </main>
    </>
  )
}

export default App
