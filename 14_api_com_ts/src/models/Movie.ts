import { model, Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: { type: String, unique: true },
    rating: Number,
    description: String,
    directors: Array,
    stars: Array,
    poster: String,
  },
  {
    timestamps: true,
  }
);

const MovieModel = model("Movie", movieSchema);

export default MovieModel;
