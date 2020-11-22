import React from "react";

const Card = ({ pokemon }) => {
  return (
    <>
      <div class=" mx-auto p-10 w-full  mb-2   ">
        <div class="pattern-dots-md gray-light">
          <div class="rounded bg-gray-800 p-4 border-2 border-yellow-300 shadow-2xl">
            <img
              className="w-40 lg:w-64 mx-auto rounded-full"
              src={pokemon.sprites.front_default}
              alt=""
            />
            <div className="text-white flex m-6">
              <div className="mx-auto">
                <h1 className="text-xl">{pokemon.name.toUpperCase()}</h1>
              </div>
            </div>
            <div className="flex m-4 mb-8">
              <span className="mx-auto bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #photography
              </span>
            </div>
            <div class="flex text-white">
              <button className="px-6 mx-auto py-2 transition ease-in duration-200 uppercase rounded-full bg-red-800 hover:bg-yellow-400 hover:text-black border-2 border-gray-400 focus:outline-none">
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
