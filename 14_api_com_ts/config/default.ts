export default {
  port: 8080,
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apits.6syfj21.mongodb.net/?retryWrites=true&w=majority`,
  env: "development",
};
