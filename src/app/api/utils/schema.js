import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validator: {
        validate: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
        message: "Email is not valid",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

const Registration = new mongoose.Schema(
  {
    event: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      validator: {
        validate: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
        message: "Email is not valid",
      },
    },
    phone: {
      type: Number,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const authUser = mongoose.models.authUser || mongoose.model("authUser", User);
const userRegistered =
  mongoose.models.Registered || mongoose.model("Registered", Registration);

export { authUser, userRegistered };
