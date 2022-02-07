import { useEffect, useState } from "react";
import styles from "../App.module.css";
import Movie from "../components/Movie";

function Home() {
   const [loading, setLoading] = useState(true);
   const [movies, setMovies] = useState([]);
   const getMovies = async () => {
      const json = await (
         await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
         )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);

      /*       fetch(
         "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
         .then((res) => res.json())
         .then((json) => {
            setMovies(json.data.movies);
            setLoading(false);
         }); */
   };

   useEffect(() => {
      getMovies();
   }, []);

   return (
      <div className={styles.main}>
         {loading ? (
            <h1 className={styles.stFont}>Loading... </h1>
         ) : (
            <ul className={styles.box}>
               {movies.map((movie, index) => (
                  <Movie
                     key={index}
                     id={movie.id}
                     coverImg={movie.medium_cover_image}
                     summary={movie.summary}
                     title={movie.title}
                     year={movie.year}
                     rating={movie.rating}
                     genres={movie.genres}
                     runtime={movie.runtime}
                  />
               ))}
            </ul>
         )}
      </div>
   );
}

export default Home;

/* <li key={index} className={styles.liFlex}>
      <ul>
         <strong className={styles.stFont}>
            {movie.title}{" "}
         </strong>
         {movie.genres.map((genre, index2) => (
            <li className={styles.pFont} key={index2}>
               ✔ {genre}
            </li>
         ))}
         <li className={styles.pFont}>
            Rating : ⭐ {movie.rating}
         </li>
         <li className={styles.pFont}> Year : {movie.year}</li>
         <li className={styles.pFont}>
            Summary : {movie.summary}
         </li>
      </ul>
      <img
         src={movie.medium_cover_image}
         className={styles.thumbnail}
      />
   </li> */
