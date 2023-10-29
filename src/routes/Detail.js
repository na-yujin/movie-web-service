import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import Movie from "../components/Movie";
function Detail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
    ).json();
    console.log(json)
    setMovies(json.data.movies);
    setLoading(false)
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (<h1>Loading</h1>) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  )
}
export default Detail;