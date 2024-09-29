import React from "react";

function Formm() {

  return (
    <div className="grid items-center justify-center bg-gray-250   grid-cols-[60%_40%] gap-4 w-full p-6 bg-white rounded shadow-md">
      <form className="w-full  p-5 bg-white rounded shadow-md">
        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <input
              type="text"
              id="input1"
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Entrez la première valeur"
            />
          </div>

          <div className="flex-1">
            <input
              type="text"
              id="input2"
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Entrez la seconde valeur"
            />
          </div>
        </div>

        <input
          type="text"
          id="inputMiddle"
          className="p-2 my-2 border border-gray-300 rounded w-full"
          placeholder="Entrez une valeur"
        />

        <textarea
          id="textarea"
          className="p-2 my-2 border border-gray-300 rounded w-full"
          rows="4"
          placeholder="Entrez une description"
        ></textarea>

        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-50"
        >
          Soumettre
        </button>
      </form>
      <div className="py-10 flex flex-col">
        <div className=" m-2 flex items-center float-end ml-12">
          <img
            src=""
            alt=""
            className="w-2 p-7 h-2  rounded-full bg-blue-500"
          />
          <div className="flex items-center w-19 ml-8 flex-col ">
            <h3 className="font-bold font-arial">Call Me</h3>
            <span className="">201-354-4443</span>
            <span className="">201-354-4443</span>
          </div>
        </div>
        <div className="flex items-center float-end ml-12">
          <img
            src="."
            alt=""
            className="w-2 p-7 h-2  rounded-full bg-blue-500"
          />
          <div className="flex  items-center w-19 ml-8
           flex-col">
            <h3 className="font-bold font-Arial">Call Me</h3>
            <span>201-354-4443</span>
            <span>201-354-4443</span>
          </div>
        </div>
        <div className="flex items-center float-end m-3 ml-12">
          <img
            src="."
            alt=""
            className="w-2 p-7 h-2 rounded-full bg-blue-500"
          />
          <div className="flex items-center flex-col ml-8 w-19 ">
            <h3 className="font-bold">Call Me</h3>
            <span>201-354-4443</span>
            <span>201-354-4443</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formm;
