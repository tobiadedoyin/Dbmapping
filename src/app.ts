import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(morgan("tiny"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
