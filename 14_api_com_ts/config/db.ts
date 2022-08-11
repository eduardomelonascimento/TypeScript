import config from "config";
import mongoose from "mongoose";
import Logger from "./logger";

export default async function connect() {
  const dbUri: string = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    Logger.info("Database connected successfully");
  } catch (e: any) {
    Logger.error("Error on database connection: " + e);
    process.exit(1);
  }
}
