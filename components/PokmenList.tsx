'use client'

import React, { useEffect, useState } from 'react'
import data from '../utils/data/api'
import { PokemonData } from '@/utils/types/pokemonData';
import Pokemon from './Pokemon';

function PokmenList() {
    const [pokemons, setPokemons] = useState<PokemonData[]>([]);

    useEffect(() => {
        function updateData() {
            data.getAllPokemons(50).then((res) => {
                setPokemons(res);
            });
        }
        updateData();
    }, []);

  return (
    <>
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white-900">Pokemon</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {pokemons.map((pokemon) => (
                        <div key={pokemon.url} className="group relative">
                            <Pokemon pokemon={pokemon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default PokmenList