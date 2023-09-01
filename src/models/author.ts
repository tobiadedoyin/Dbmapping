import { timeStamp } from "console";
import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      required: true,
    },
    lastname: {
      type: String,
      trim: true,
      required: true,
    },
    dob: {
      type: Date,
    },
    dod: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

AuthorSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.firstname && this.lastname) {
    fullname = `${this.firstname}, ${this.lastname}`;
  }

  return fullname;
});

AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

export default mongoose.model("Author", AuthorSchema);
