import { NamedAPIResource } from 'pokenode-ts'
import React from 'react'

function PokemonCard({ pokemonStub }: { pokemonStub: NamedAPIResource }) {
  return (
    <article>
      {/* <img src={pokemon.sprites.front_default || undefined} alt="" /> */}
      <h2>{pokemonStub.name}</h2>
    </article>
  )
}

export default PokemonCard
