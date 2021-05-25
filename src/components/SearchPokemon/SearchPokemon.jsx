import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import PokeInfoPage from "../PokeInfo/PokeInfoPage";
import * as Yup from "yup";
const SearchPokemon = () => {
  const [pokemonId, setPokemonId] = useState();
  const [dataPokemon, setDataPokemon] = useState([]);

  let history = useHistory();

  const getPokemon = async (values) => {
    const endPoint = `https://pokeapi.co/api/v2/pokemon/${values}`;
    await Axios.get(endPoint).then((res) => {
      setPokemonId(res.data.id);
      setDataPokemon(res.data);
      console.log(res.data);
      if (res.data.id === undefined) {
        console.log("No hay name");
      } else {
        history.push(`/pokemon/${res.data.id}`);
      }
    });
  };
  const SignupSchema = Yup.object().shape({
    namePokemon: Yup.string()
      .min(2, "El nombre es muy corto")
      .max(50, "Muchos caracteres")
      .required("El nombre es requerido para buscar"),
  });

  return (
    <Formik
      initialValues={{ namePokemon: "" }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting }) => {
        getPokemon(values.namePokemon);
        console.log(values.namePokemon);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div className="grid grid-cols-2 mx-auto">
            <Field
              type="text"
              className="h-12 border-2 border-gray-600 px-5 pr-10 rounded-full text-sm focus:outline-none"
              placeholder="Ingresa un pokemon"
              name="namePokemon"
            />
            <button
              type="submit"
              className="uppercase p-3 flex items-center ml-1 bg-red-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 "
              disabled={isSubmitting}
            >
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path
                  d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          {errors.namePokemon && touched.namePokemon ? (
            <div className="text-red-600">{errors.namePokemon}</div>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};

export default SearchPokemon;
