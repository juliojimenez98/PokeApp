import React, { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../services/pokemon";
import Card from "./Card/Card";

const Index = () => {
  const [pokemonData, setPokemonData] = useState();
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const urlEndPoint = "https://pokeapi.co/api/v2/pokemon?limit=21";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(urlEndPoint);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);

      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);
  return (
    <>
      <div className="m-auto w-full lg:grid lg:grid-cols-3 ">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Index;
