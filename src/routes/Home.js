import { useEffect, useState } from "react";
import styles from "../App.module.css";
import Movie from "../components/Movie";

function Home() {
   const [rate, setRate] = useState("");
   const onChange = (event) => setRate(event.target.value);
   // console.log(rate);

   const [sort, setSort] = useState("");
   const onSelect = (event) => setSort(event.target.value);
   // console.log(sort);

   const [loading, setLoading] = useState(true);
   const [movies, setMovies] = useState([]);
   const getMovies = async (rate, sort) => {
      const json = await (
         await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rate}&sort_by=${sort}`
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

   const onSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      getMovies(rate, sort);
   };

   useEffect(() => {
      getMovies("1", "year");
   }, []);

   return (
      <div className={styles.main}>
         <label htmlFor="sort">Sort by : </label>
         <select id="sort" onChange={onSelect} on>
            <option value="year">Year</option>
            <option value="title">Title</option>
            <option value="runtime">Runtime</option>
            <option value="rating">Rating</option>
            <option value="genres">Genres</option>
         </select>

         <form onSubmit={onSubmit}>
            <label htmlFor="rate">Search by minimum rating : </label>
            <input
               id="rate"
               placeholder="Input rating 0.0~10.0"
               value={rate}
               onChange={onChange}
            />
            <button>Search</button>
         </form>

         <hr />
         {loading ? (
            <h1 className={styles.stFont}>Loading... </h1>
         ) : (
            <ul className={styles.liGrid}>
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
