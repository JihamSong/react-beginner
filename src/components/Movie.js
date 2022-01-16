import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

/* Movie 라우트는 영화 하나 보여줌 */
function Movie({ id, img, title, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={img} />
      <p>{summary.length > 235 ? `${summary.slice(0, 235)} ...` : summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
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
