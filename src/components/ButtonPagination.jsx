import React from "react";

const ButtonPagination = ({ prev, next }) => {
  return (
    <div className="flex">
      <div className="mx-auto">
        <button
          onClick={prev}
          className={
            prev === null
              ? `ml-2 p-0 w-10 h-10 text-white bg-gray-700 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none`
              : `ml-2 p-0 w-10 h-10 text-white bg-red-600 rounded-full hover:bg-yellow-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        <button
          onClick={next}
          className="ml-2 p-0 w-10 h-10 text-white bg-red-600 rounded-full hover:bg-yellow-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ButtonPagination;
