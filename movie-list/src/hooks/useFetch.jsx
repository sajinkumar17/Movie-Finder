import React, { useEffect,useState } from "react";
import { PageNotFound } from "../pages";

const useFetch = (url,query="") => {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTc4ZWE2ZGM4MjViOTgxMjlmNzMyOGE4ZDc2Nzg1MCIsIm5iZiI6MTc1Nzc4MTczMC40ODQsInN1YiI6IjY4YzU5ZWUyNWRmN2RkMTEwMzJiMzkwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZCzm1V_QhQ2S-ANPboyOCHqDSYRfqS-qXqLU476LsIs",
    },
  };

//   https://api.themoviedb.org/3/keyword/keyword_id

  useEffect(() => {
    async function fetchMovies() {
      // Simulate an API call
      const response = await fetch(`https://api.themoviedb.org/3/${url}?query=${query}`, options);

      const data = await response.json();

      setData(data.results);
    }
    fetchMovies();
  }, [url,query]);
  return {
    data,
  };
};

export default useFetch;
