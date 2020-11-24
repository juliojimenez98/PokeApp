import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokeInfoPage = () => {
  const { id } = useParams();
  const [infoPoke, setInfoPoke] = useState([]);

  // OBTENER DATOS DE UN POKEMON
  useEffect(() => {
    const informacionPokemon = async () => {
      const toArray = [];
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await Axios.get(url);
        toArray.push(res.data);

        setInfoPoke(toArray);
      } catch (e) {
        console.log(e);
      }
    };
    informacionPokemon();
  }, [id]);
  console.log(infoPoke);

  return (
    <>
      {infoPoke.map((data) => {
        console.log(data);
        return (
          <>
            <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
              <div class="w-full lg:w-8/12 mx-auto rounded-lg bg-white shadow-lg px-16 pt-5 pb-10 text-gray-800">
                <div class="w-full pt-1 pb-5">
                  <div class="overflow-hidden rounded-full w-48 h-48 -mt-16 mx-auto shadow-lg">
                    <img
                      src={data.sprites["front_default"]}
                      alt="0"
                      className="w-48"
                    />
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-lg lg:text-3xl text-red-700 font-bold text-center">
                    {data.name.replace(/^\w/, (c) => c.toUpperCase())}
                  </p>
                </div>
                <div>
                  {data.types.map((t) => {
                    return (
                      <div className="flex">
                        <div className="mx-auto uppercase my-2">
                          <span
                            className={
                              t.type.name === "fire" ? (
                                `bg-red-600 rounded-full px-6 py-1 my-4 text-sm font-semibold text-white w-full`
                              ) : t.type.name === "water" ? (
                                `bg-blue-600 rounded-full px-6 my-4 py-1 text-sm font-semibold text-white`
                              ) : t.type.name === "ice" ? (
                                `bg-blue-300 rounded-full px-6 py-1 my-4 text-sm font-semibold text-black `
                              ) : t.type.name === "grass" ? (
                                `bg-green-900 rounded-full px-6 py-1 my-4 text-sm font-semibold text-white `
                              ) : t.type.name === "poison" ? (
                                `bg-purple-700 rounded-full px-6 my-4 py-1 text-sm font-semibold text-white `
                              ) : t.type.name === "dark" ? (
                                `bg-black rounded-full px-6 my-4 py-1 text-sm font-semibold text-white`
                              ) : t.type.name === "flying" ? (
                                `bg-white rounded-full px-6 my-4 py-1 text-sm font-semibold text-black`
                              ) : t.type.name === "dragon" ? (
                                `bg-purple-500 rounded-full my-4 px-6 py-1 text-sm font-semibold text-black`
                              ) : t.type.name === "normal" ? (
                                `bg-gray-500 rounded-full my-4 px-6 py-1 text-sm font-semibold text-black`
                              ) : t.type.name === "bug" ? (
                                `bg-green-400 rounded-full my-4 px-6 py-1 text-sm font-semibold text-black`
                              ) : t.type.name === "ghost" ? (
                                `bg-indigo-900 rounded-full my-4 px-6 py-1 text-sm font-semibold text-white`
                              ) : t.type.name === "electric" ? (
                                `bg-yellow-400 rounded-full my-4 px-6 py-1 text-sm font-semibold text-black`
                              ) : t.type.name === "ground" ? (
                                `bg-yellow-600 rounded-full my-4 px-6 py-1 text-sm font-semibold text-white`
                              ) : t.type.name === "rock" ? (
                                `bg-yellow-800 rounded-full my-4 px-6 py-1 text-sm font-semibold text-white`
                              ) : t.type.name === "fairy" ? (
                                `bg-red-200 rounded-full my-4 px-6 py-1 text-sm font-semibold text-black`
                              ) : t.type.name === "fighting" ? (
                                `bg-red-900 rounded-full my-4 px-6 py-1 text-sm font-semibold text-white`
                              ) : t.type.name === "psychic" ? (
                                `bg-pink-400 rounded-full my-4 px-6 py-1 text-sm font-semibold text-black`
                              ) : t.type.name === "steel" ? (
                                `bg-gray-400 rounded-full my-4 px-6 py-1 text-sm font-semibold text-black`
                              ) : (
                                <></>
                              )
                            }
                          >
                            {t.type.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="w-3/4">
                  <h2>Altura: {data.height}</h2>
                </div>
                {/* <div class="w-full mb-10">
                  <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                    “
                  </div>
                  <p class="text-sm text-gray-600 text-center px-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nam obcaecati laudantium recusandae, debitis eum voluptatem
                    ad, illo voluptatibus temporibus odio provident.
                  </p>
                  <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                    ”
                  </div>
                </div> */}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default PokeInfoPage;
