import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetails() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [params.name]);

  if (!pokemon) {
    return <>loading...</>;
  }

  return (
    <div>
      <img width="300" height="300" src={`https://img.pokemondb.net/artwork/large/${params.name}.jpg`} />
      <h1>{params.name}</h1>
      <p>height: {pokemon.height}</p>
      <p>weight: {pokemon.weight}</p>
      <div>
        <p>abilities:</p>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>
              <span>{ability.ability.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>types:</p>
        <ul>
          {pokemon.types.map((type) => (
            <li key={type.type.name}>
              <span>{type.type.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>stats:</p>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              <span>{stat.stat.name}: </span>
              <span>{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { PokemonDetails };
