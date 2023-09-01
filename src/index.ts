import app from "./app";
import http from "http";
import { PORT } from "./config";
import dbconnection from "./config/dbConnecton";

dbconnection().catch((error) => console.log(error.message));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("server listening .....");
});
