import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../services/pokemon";
import ButtonPagination from "./ButtonPagination";
import Card from "./Card/Card";
import LoadingPage from "./LoadPage/LoadingPage";

const Index = () => {
  const [pokemonData, setPokemonData] = useState();
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [infoPoke, setInfoPoke] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlEndPoint = "https://pokeapi.co/api/v2/pokemon?limit=21";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(urlEndPoint);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);

      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) {
      return;
    }
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

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
      <div>
        <ButtonPagination prev={prev} next={next} />
      </div>
      <div className="m-auto w-full lg:grid lg:grid-cols-3 ">
        {loading ? (
          <LoadingPage />
        ) : (
          <>
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </>
        )}
      </div>
      <div>
        <ButtonPagination prev={prev} next={next} />
      </div>
    </>
  );
};

export default Index;
