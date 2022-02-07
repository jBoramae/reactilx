import propTypes from "prop-types";
import styles from "../App.module.css";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, rating, genres, year }) {
   return (
      <li className={styles.liFlex}>
         <ul>
            <h2>
               <Link to="/movie" className={styles.stFont}>
                  {title}
               </Link>
            </h2>
            {genres.map((genre, index2) => (
               <li className={styles.pFont} key={index2}>
                  ✔ {genre}
               </li>
            ))}
            <li className={styles.pFont}>Rating : ⭐ {rating}</li>
            <li className={styles.pFont}> Year : {year}</li>
            <li className={styles.pFont}>Summary : {summary}</li>
         </ul>
         <img src={coverImg} className={styles.thumbnail} alt={title} />
      </li>
   );
}

Movie.propTypes = {
   coverImg: propTypes.string.isRequired,
   title: propTypes.string.isRequired,
   summary: propTypes.string.isRequired,
   genres: propTypes.arrayOf(propTypes.string).isRequired,
   rating: propTypes.number.isRequired,
   year: propTypes.number.isRequired,
};

export default Movie;
