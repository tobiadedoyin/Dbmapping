import mongoose from "mongoose";
import { MONGODB_URI } from "./index";

const dbconnection = async () => {
  await mongoose.connect(MONGODB_URI);
  console.log("db connected");
};

export default dbconnection;
