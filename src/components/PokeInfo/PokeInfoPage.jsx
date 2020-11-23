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
        return (
          <>
            <div className="mt-72">
              <div class="bannerFondo bg-green-800	bg-left-top bg-auto bg-repeat-x"></div>

              <div class="-mt-64 ">
                <div class="w-full text-center">
                  <p class="text-sm tracking-widest text-black">Subtitle</p>
                  <h1 class="font-bold text-5xl text-black">Title</h1>
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
                  <div class="p-2 sm:p-10 text-center cursor-pointer">
                    <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                      <div class="space-y-10">
                        <img
                          className="w-96"
                          src={data.sprites["front_default"]}
                          alt="a"
                        />
                        <div class="px-6 py-4">
                          <div class="space-y-5">
                            <div class="font-bold text-xl mb-2">Spa</div>
                            <p class="text-gray-700 text-base">
                              Todo tipo de masajes y técnicas
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="p-2 sm:p-10 text-center cursor-pointer text-black">
                    <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition duration-500">
                      <div class="space-y-10">
                        <div class="px-6 py-4">
                          <div class="space-y-5">
                            <div class="font-bold text-xl mb-2">
                              Bioseguridad
                            </div>
                            <p class="text-base">
                              Altos estandares de bioseguridad
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
                    <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                      <div class="space-y-10">
                        <div class="px-6 py-4">
                          <div class="space-y-5">
                            <div class="font-bold text-xl mb-2">Piscina</div>
                            <p class="text-gray-700 text-base">
                              Piscina temperada
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default PokeInfoPage;
