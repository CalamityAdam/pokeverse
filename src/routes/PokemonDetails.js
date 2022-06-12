import React from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetails() {
  const params = useParams();

  return (
    <div>
      <h1>Pokemon Details</h1>
      <h2>{params.name}</h2>
    </div>
  );
}

export { PokemonDetails };
