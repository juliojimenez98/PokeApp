import React from "react";
import pika from "./pikapika.png";

const LoadingPage = () => {
  return (
    <div className="flex min-w-screen min-h-screen">
      <div className="mx-auto">
        <h1 className="text-center text-lg font-semibold lg:text-xl mb-6">
          Cargando la lista de pokemons...
        </h1>
        <img src={pika} alt="" className="w-48 lg:w-96 mx-auto" />
        <h1 className="text-center text-lg font-semibold lg:text-xl mt-6">
          Espera un momento
        </h1>
      </div>
    </div>
  );
};

export default LoadingPage;
