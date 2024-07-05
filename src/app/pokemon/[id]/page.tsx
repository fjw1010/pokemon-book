import ferchPokemonData from "@/apis/pokemon";
import React from "react";

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemonData = await ferchPokemonData(params.id);

  return (
    <>
      <div className="pokemon-details max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-100 text-gray-800 text-center p-4 bm-4">
          <h2 className="text-2xl font-bold">{pokemonData.korean_name}</h2>
          <p>No .{pokemonData.id.toString().padStart(4, "0")}</p>
        </div>
        <div className="p-4 text-black flex flex-col justify-start items-center">
          <img src={pokemonData.sprites.front_default} alt="포켓몬 이미지" />
          <p className="text-center text-xl my-2">
            이름 : {pokemonData.korean_name}
          </p>
          <div className="flex gap-2">
            <p className="text-center">키 : {pokemonData.height / 10} m</p>
            <p className="text-center">무게 : {pokemonData.weight / 10} kg</p>
          </div>
        </div>
        <div className="text-center my-2 text-black p-5">
          <p className="font-bold mb-5">기술 : </p>
          <div className="flex flex-wrap gap-2 items-center text-center justify-center">
            {pokemonData.moves.map((move: any) => (
              <div key={move.move.name}>{move.move.korean_name}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetailPage;
