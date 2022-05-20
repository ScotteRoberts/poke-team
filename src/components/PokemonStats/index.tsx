import { Pokemon, PokemonStat } from 'pokenode-ts'
import React from 'react'
import './style.css'

interface PokemonStatProp {
  stat: PokemonStat
}

interface PokemonStatsProps {
  currentPokemon: Pokemon
}

function PokeStat({ stat }: PokemonStatProp) {
  return (
    <div className="poke-stat">
      <span>{stat.stat.name}</span>

      <span className="poke-stat__number">{stat.base_stat}</span>
      <meter
        className="poke-stat__meter"
        min="0"
        max="255"
        low={50}
        high={120}
        optimum={200}
        value={stat.base_stat}
      >
        {stat.base_stat}
      </meter>
    </div>
  )
}

function PokemonStats({ currentPokemon }: PokemonStatsProps) {
  return (
    <section className="pokemon-stat-list">
      <h2 className="pokemon-stat-list__header">Pokemon Base Stats</h2>
      <div className="pokemon-stat-list__container">
        {currentPokemon.stats.map((stat) => (
          <PokeStat key={stat.stat.url} stat={stat} />
        ))}
      </div>
    </section>
  )
}

export default PokemonStats
