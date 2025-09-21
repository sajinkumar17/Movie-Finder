import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";



const Search = ({ api , title }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data: movies } = useFetch(api, query);


  useEffect(( ) => {
    document.title = `${title} - ${query}`;
  }, [title, query]);
  // console.log(api)
  return (
    <main>
      <section className="text-2xl font-bold my-5 text-center">
        {movies.length === 0 ? "No results found" : `Search Results for "${query}"`}
        </section>
      <section className="max-w-7xl max-auto py-7">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
          ))
          }
        </div>
      </section>
    </main>
  )
}

export default Search
