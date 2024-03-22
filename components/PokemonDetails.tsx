'use client'

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import data from "../utils/data/api";
import { PokemonDetail } from "@/utils/types/pokemonData";

function PokemonDetails({ id }: { id: string }) {
    const [details, setDetails] = useState<PokemonDetail>();

    useEffect(() => {
        function updateData() {
            data.getPokemonById(id)
                .then((res) => setDetails(res));
            };
        updateData();
    }, []);
    
    return (
        <div className="p-12">
            <h1 className="text-2xl">{details?.name}</h1>
            <div className="w-52 overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-52">
                <img
                    src={details?.sprites.front_default}
                    alt="img failed load"
                    className="h-52 w-52 object-cover object-center lg:h-52 lg:w-52"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <p>Taille : {details?.height}</p>
                    <p>Poids : {details?.weight}</p>
                    <p>Numero : {details?.order}</p>
                    <div>Type : 
                        <ul className="mx-12">
                            {
                                details?.types.map((val) => (
                                    <li key={val.slot}>{val.type.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails