import { Request, Response, Router } from "express";
import {
  createMovie,
  getAllMovies,
  getMovieById,
  removeMovieById,
  updateMovieById,
} from "./controllers/movieControllers";
import validateMovie from "./middlewares/movieValidation";
import validate from "./middlewares/handleValidation";

const router: Router = Router();
export default router;

router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working");
  })
  .post("/movie", validateMovie(), validate, createMovie)
  .get("/movies", getAllMovies)
  .get("/movie/:id", getMovieById)
  .delete("/movie/:id", removeMovieById)
  .put("/movie/:id", validateMovie(), validate, updateMovieById);
