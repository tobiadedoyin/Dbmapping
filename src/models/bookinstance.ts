import mongoose, { Schema } from "mongoose";

const BookInstanceSchema = new mongoose.Schema({
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  imprint: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due: {
    type: Date,
    default: Date.now,
  },
});
BookInstanceSchema.virtual("url").get(function () {
  return `/catalog/bookinstance/${this._id}`;
});

export default mongoose.model("BookInstance", BookInstanceSchema);
