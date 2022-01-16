import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

/* Movie 라우트는 영화 하나 보여줌 */
function Movie({ id, img, title, summary, genres }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link className={styles.titleLink} to={`/movie/${id}`}>
          {title}
        </Link>
      </div>
      <img className={styles.img} src={img} />
      {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)} ...` : summary}</p> */}
      <ul className={styles.genresList}>
        {genres &&
          genres.map((g) => (
            <li className={styles.genresItem} key={g}>
              {g}
            </li>
          ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
