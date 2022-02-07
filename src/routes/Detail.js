import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../App.module.css";

function Detail({ coverImg, title, summary, rating, genres, year, runtime }) {
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

   console.log(detail);

   return (
      <div>
         {loading ? (
            <h1 className={(styles.stFont, styles.main)}>Loading... </h1>
         ) : (
            <div>로딩 끝</div>
         )}
      </div>
   );
}

export default Detail;
