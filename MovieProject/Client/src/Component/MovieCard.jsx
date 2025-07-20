import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASEURL = import.meta.env.VITE_BASEURL;

const MovieCard = ({
  movieId,
  title,
  genre,
  director,
  releaseYear,
  description,
  onDelete,
}) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/movie/deleteMovie/${movieId}`, {
        withCredentials: true,
      });
      alert("🗑️ Movie deleted successfully!");
      onDelete?.();
    } catch (error) {
      console.error("❌ Failed to delete movie:", error);
      alert("Failed to delete movie.");
    }
  };

  const handleUpdate = () => {
    navigate(`/update/${movieId}`, {
      state: { title, genre, director, releaseYear, description },
    });
  };

  return (
    <div
      className="card shadow-sm border-primary mb-4"
      style={{ width: "100%", maxWidth: "400px" }}
    >
      <div className="card-body">
        <h5 className="card-title text-primary">🎥 {title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          🎞️ {genre} | 📅 {releaseYear}
        </h6>
        <p className="card-text">
          <strong>🎬 Director:</strong> {director}
        </p>
        <p className="card-text">📝 {description}</p>

        {/* Buttons side by side */}
        <div className="d-flex justify-content-between mt-3">
          <button
            onClick={handleDelete}
            className="btn btn-outline-danger btn-danger text-light w-50 me-2"
            style={{ borderRadius: "25px" }}
          >
            🗑️ Delete
          </button>

          <button
            onClick={handleUpdate}
            className="btn btn-outline-success btn-success text-light w-50 ms-2"
            style={{ borderRadius: "25px" }}
          >
            ✏️ Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
