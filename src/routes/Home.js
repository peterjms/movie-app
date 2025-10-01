import {useState, useEffect} from "react";
import Movie from "../components/Movie.js";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const res = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {getMovies()}, []);

  console.log(movies);


    return (
        <div className={styles.container}>
            {loading ? (
              <div className={styles.loading}>
                <span>Loading...</span>
              </div>
            ) : movies.map((movie) => <Movie
            className={styles.movies} 
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            />)}
        </div>
    )
}

export default Home;