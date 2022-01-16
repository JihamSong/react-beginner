import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Detail.module.css";

/* 제목 클릭했을 때 화면 */
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
