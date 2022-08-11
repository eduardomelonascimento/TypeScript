import MovieModel from "../models/Movie";
import Logger from "../../config/logger";
import { Request, Response } from "express";

export async function createMovie(req: Request, res: Response) {
  try {
    const movie = await MovieModel.create(req.body);
    res.status(201).json({ movie });
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    res.status(422).json({ error: e.message });
  }
}

export async function getMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      res.status(404).json({ error: "Movie not found" });
    } else {
      res.status(200).json(movie);
    }
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    res.status(500).json({ error: "Tente novamente mais tarde" });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    res.status(200).json(movies);
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    res.status(500).json({ error: "Tente novamente mais tarde" });
  }
}

export async function removeMovieById(req: Request, res: Response) {
  try {
    const { id } = req.body;
    const movie = await MovieModel.deleteOne(id);
    if (!movie) {
      res.status(404).json({ error: "Movie nof found" });
    } else {
      res.status(200).json({ message: "Movie successfully removed" });
    }
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    res.status(500).json({ error: "Tente novamente mais tarde" });
  }
}

export async function updateMovieById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      res.status(404).json({ error: "Movie not found" });
    } else {
      const updatedMovie = await MovieModel.findByIdAndUpdate(id, data, { new: true });
      res.status(200).json(updatedMovie);
    }
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`);
    res.status(422).json({ error: e.message });
  }
}
