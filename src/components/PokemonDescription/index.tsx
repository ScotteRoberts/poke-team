import React from 'react'
import { Pokemon } from 'pokenode-ts'
import './style.css'

interface PokemonDescriptionProps {
  currentPokemon: Pokemon
}

function PokemonDescription({ currentPokemon }: PokemonDescriptionProps) {
  return (
    <section className="pokemon-description">
      <header className="pokemon-description-header">
        <img
          id="description-header-sprite"
          src={currentPokemon.sprites.front_default || undefined}
          alt="Pokemon Sprite"
        />
        <h2 id="description-header-name">{currentPokemon.name}</h2>
      </header>

      <table className="poke-info">
        <tbody>
          <tr>
            <th>Weight</th>
            <td>
              <span>{(currentPokemon.weight / 10).toFixed(1)} kg</span>
            </td>
          </tr>
          <tr>
            <th>Height</th>
            <td>
              <span>{(currentPokemon.height / 10).toFixed(1)} m</span>
            </td>
          </tr>
          <tr>
            <th>Types</th>
            <td>
              <ul>
                {currentPokemon.types.map((type) => (
                  <li key={type.type.name}>{type.type.name}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>Abilities</th>
            <td>
              <ul>
                {currentPokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default PokemonDescription
