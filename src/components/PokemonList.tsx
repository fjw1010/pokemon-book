"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      // console.log(data);
      // setPokemons(data);
      return data;
    };
    fetchData();
  }, []);
  return (
    <main className="container mx-auto">
      {pokemons.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <p className="text-xl font-semibold">불러오는 중입니다...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:gid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {pokemons.map((pokemon) => (
            <div key={pokemon.id} className="pokemon p-4 border rounded-lg">
              <Link href={`/pokemon/${pokemon.id}`}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                  width={96}
                  height={96}
                />
                <p>{pokemon.korean_name}</p>
                <p>도감번호 : {pokemon.id}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default PokemonList;
