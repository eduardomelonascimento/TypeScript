require("dotenv").config();

import config from "config";
import express from "express";
import connect from "../config/db";
import Logger from "../config/logger";
import router from "./router";
import morganMiddleware from "./middlewares/morgan";

const port: number = config.get<number>("port");
const app = express();

app.use(express.json());
app.use(morganMiddleware);
app.use("/api", router);

app.listen(port, async () => {
  Logger.info(`API listening on port ${port}`);
  await connect();
});
