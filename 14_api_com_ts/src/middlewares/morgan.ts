import morgan, { StreamOptions } from "morgan";
import Logger from "../../config/logger";
import config from "config";

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

const skip = () => {
  const enviroment = config.get<string>("env") || "development";
  return enviroment != "development";
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time s",
  { skip, stream }
);

export default morganMiddleware;
