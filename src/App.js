import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  // data , data를 수정할 수 있는 함수
  const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year').then((response) => response.json())
  //   .then((json) => {
  //     setMovies(json.data.movies);
  //     setLoading(false);
  //   });
  // },[])
  const getmovies = async() => {
    // const response = await fetch(
    //   'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
    // );
    // const json = await response.json();

    const json = await ( 
      await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getmovies();
  }, [])
  return (
    <div>
     {loading ? (
      <h1>loading</h1>
     ) : (
       <div>
       {movies.map((movie) => (
         <div key={movie.id}>
          <img src={movie.medium_cover_image}></img>
          <h2>{movie.title}</h2>
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map((g)=> (
              <li key={g}>{g}</li>
            ))}
          </ul>
         </div>
       ))}
     </div>  
     )}
    </div>
  );
}

export default App;
