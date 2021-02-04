import React from 'react';
import { Link } from "react-router-dom";



export function PokemonIndexItem({ pokemon }) {
  return (
    <li className="pokemon-index-item">
      <Link to="/pokemon/:pokemonId">

        <span>{pokemon.id}</span>
        <img src={pokemon.imageUrl} />
        <span>{pokemon.name}</span>

      </Link>
    </li>
  )
}

