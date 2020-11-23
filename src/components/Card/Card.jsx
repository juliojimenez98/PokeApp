import React from "react";

const Card = ({ pokemon }) => {
  return (
    <>
      <div className=" mx-auto p-10 w-full  mb-2   ">
        <div className="pattern-dots-md gray-light">
          <div className="rounded bg-gray-800 p-4 border-2 border-yellow-300 shadow-2xl">
            <img
              className="w-40 lg:w-64 mx-auto rounded-full"
              src={pokemon.sprites.front_default}
              alt=""
            />
            <div className="text-white flex m-6">
              <div className="mx-auto">
                <h1 className="text-xl">{pokemon.name.toUpperCase(1)}</h1>
              </div>
            </div>
            <div className="flex m-10 mb-8">
              {pokemon.types.map((t) => {
                return (
                  <div className="mx-auto uppercase">
                    <span
                      className={
                        t.type.name === "fire" ? (
                          `bg-red-600 rounded-full px-6 py-1 text-sm font-semibold text-white w-full`
                        ) : t.type.name === "water" ? (
                          `bg-blue-600 rounded-full px-6 py-1 text-sm font-semibold text-white`
                        ) : t.type.name === "ice" ? (
                          `bg-blue-300 rounded-full px-6 py-1 text-sm font-semibold text-black `
                        ) : t.type.name === "grass" ? (
                          `bg-green-900 rounded-full px-6 py-1 text-sm font-semibold text-white `
                        ) : t.type.name === "poison" ? (
                          `bg-purple-700 rounded-full px-6 py-1 text-sm font-semibold text-white `
                        ) : t.type.name === "dark" ? (
                          `bg-black rounded-full px-6 py-1 text-sm font-semibold text-white`
                        ) : t.type.name === "flying" ? (
                          `bg-white rounded-full px-6 py-1 text-sm font-semibold text-black`
                        ) : t.type.name === "dragon" ? (
                          `bg-purple-500 rounded-full px-6 py-1 text-sm font-semibold text-black`
                        ) : t.type.name === "normal" ? (
                          `bg-gray-500 rounded-full px-6 py-1 text-sm font-semibold text-black`
                        ) : t.type.name === "bug" ? (
                          `bg-green-400 rounded-full px-6 py-1 text-sm font-semibold text-black`
                        ) : t.type.name === "ghost" ? (
                          `bg-indigo-900 rounded-full px-6 py-1 text-sm font-semibold text-white`
                        ) : t.type.name === "electric" ? (
                          `bg-yellow-400 rounded-full px-6 py-1 text-sm font-semibold text-black`
                        ) : t.type.name === "ground" ? (
                          `bg-yellow-600 rounded-full px-6 py-1 text-sm font-semibold text-white`
                        ) : t.type.name === "rock" ? (
                          `bg-yellow-800 rounded-full px-6 py-1 text-sm font-semibold text-white`
                        ) : t.type.name === "fairy" ? (
                          `bg-red-200 rounded-full px-6 py-1 text-sm font-semibold text-black`
                        ) : t.type.name === "fighting" ? (
                          `bg-red-900 rounded-full px-6 py-1 text-sm font-semibold text-white`
                        ) : t.type.name === "psychic" ? (
                          `bg-pink-400 rounded-full px-6 py-1 text-sm font-semibold text-black`
                        ) : t.type.name === "steel" ? (
                          `bg-gray-400 rounded-full px-6 py-1 text-sm font-semibold text-black`
                        ) : (
                          <></>
                        )
                      }
                    >
                      {t.type.name}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex text-white">
              <button className="px-6 mx-auto py-2 transition ease-in duration-200 rounded-full bg-red-800 hover:bg-yellow-400 hover:text-black border-2 border-gray-400 focus:outline-none">
                Más info
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
