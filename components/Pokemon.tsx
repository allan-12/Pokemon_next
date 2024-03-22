/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
import data from '../utils/data/api'
import { PokemonData, PokemonDetail } from '@/utils/types/pokemonData';
import { useRouter } from 'next/navigation';


function Pokemon({ pokemon }: {pokemon: PokemonData}) {
    const [details, setDetails] = useState<PokemonDetail>();
    const router = useRouter();

    useEffect(() => {
        function updateData() {
            data.getPokemon(pokemon.url).then((res) => {;
                setDetails(res);
            })
        };
        updateData();
    }, [pokemon]);

    function goToDetails() {
        const segments = pokemon.url.split("/");
        const urlLocal = location.href.split("/");
        const id = segments[6];
        return router.push(`/${urlLocal[3]}/${id}`);
    }

    return (
        <>        
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                    src={details?.sprites.front_default}
                    alt="img failed load"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-xl">{details?.name}</h3>
                </div>
                <button 
                    className='rounded-lg px-2 py-1 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300'
                    onClick={() => goToDetails()}
                    > Details
                </button>
            </div>
        </>
    )
}

export default Pokemon