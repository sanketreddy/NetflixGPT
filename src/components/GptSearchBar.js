import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import useGptSearchBar from "../CustomHooks/useGptSearchBar";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const inputBoxData = useRef(null);
  const handleGptSearch = useGptSearchBar(inputBoxData);
  const error = useSelector((store) => store.gpt.error);

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
      >
        <input
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="p-4 m-4 col-span-10"
          ref={inputBoxData}
        />
        <div className="flex justify-center items-center flex-wrap">
          <button
            onClick={handleGptSearch}
            className="py-2 px-4 m-2 bg-red-700 font-bold text-white rounded-lg w-20 md:w-auto"
          >
            {lang[language].search}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
