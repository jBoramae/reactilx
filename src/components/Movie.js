import propTypes from "prop-types";
import styles from "../App.module.css";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, year }) {
   return (
      <div className={styles.liBox}>
         <div>
            <Link to={`/movie/${id}`} className={styles.stFont}>
               {title} ({year})
            </Link>
            <p className={styles.para}>
               {summary.length > 160 ? `${summary.slice(0, 160)}...` : summary}
            </p>
         </div>
         <img src={coverImg} className={styles.thumbnail} alt={title} />
      </div>
   );
}

Movie.propTypes = {
   id: propTypes.number.isRequired,
   coverImg: propTypes.string.isRequired,
   title: propTypes.string.isRequired,
   summary: propTypes.string.isRequired,
   genres: propTypes.arrayOf(propTypes.string).isRequired,
   rating: propTypes.number.isRequired,
   year: propTypes.number.isRequired,
};

export default Movie;
