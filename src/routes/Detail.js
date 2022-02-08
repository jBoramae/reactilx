import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../App.module.css";
import { Link } from "react-router-dom";

function Detail() {
   const { id } = useParams();
   // <Route path="/movie/:id"> => ":id", 즉 id로 parameter를 받음
   const [loading, setLoading] = useState(true);
   const [detail, setDetail] = useState({});

   const getDetail = useCallback(async () => {
      const json = await (
         await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetail(json.data.movie);
      setLoading(false);
   }, [id]);

   useEffect(() => {
      getDetail();
   }, [getDetail]);

   // console.log(detail);

   return (
      <div className={styles.main}>
         {loading ? (
            <h1 className={styles.stFont}>Loading... </h1>
         ) : (
            <div className={styles.liFlex}>
               <img
                  src={detail.large_cover_image}
                  alt={detail.title}
                  className={styles.detailedImg}
               />
               <ul className={styles.detailedBox}>
                  <li className={styles.stFont}>
                     {detail.title} ({detail.year})
                  </li>
                  <p className={styles.pFont}>{detail.description_full}</p>
                  <li className={styles.pFont}>
                     플레이타임 : {detail.runtime}분
                  </li>
                  <li className={styles.pFont}>평점 : {detail.rating}점</li>
                  <li className={styles.pFont}>장르</li>
                  {detail.genres.map((genre, index) => (
                     <li className={styles.pFont} key={index}>
                        　· {genre}
                     </li>
                  ))}
               </ul>
               <button className={styles.bsBtn}>
                  <Link to={`/movie`} className={styles.bsText}>
                     뒤로가기
                  </Link>
               </button>
            </div>
         )}
      </div>
   );
}

export default Detail;
