import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

const Details = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["workshop", "event"],
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  banner: [
    {
      type: String,
      required: true,
    },
  ],
  days: {
    type: String,
  },
  date: {
    type: String,
  },
  round1: {
    type: String,
  },
  rule1: {
    type: String,
  },
  round2: {
    type: String,
  },
  rule2: {
    type: String,
  },
  round3: {
    type: String,
  },
  rule3: {
    type: String,
  },
  inposition: {
    type: String,
  },
  photo: [
    {
      type: String,
      required: true,
    },
  ],
  inname: {
    type: String,
  },
  inexeperience: {
    type: String,
  },
  indescription: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  mailid: {
    type: String,
  },
  requirements: {
    type: String,
  },

  course: {
    type: String,
  },

  location: {
    type: String,
    required: true,
  },
  facoordinator: {
    type: String,
    required: true,
  },
  stcoordinator1: {
    type: String,
    required: true,
  },
  stcoordinator2: {
    type: String,
    required: true,
  },
});

const Result = new mongoose.Schema({
  event: {
    type: String,
    required: true,
    unique: true,
  },
  round1: {
    type: String,
  },
  round2: {
    type: String,
  },
  round3: {
    type: String,
  },
});

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

User.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

const authUser = mongoose.models.authUser || mongoose.model("authUser", User);
const userRegistered =
  mongoose.models.Registered || mongoose.model("Registered", Registration);
const eventDetails =
  mongoose.models.Details || mongoose.model("Details", Details);
const eventResults =
  mongoose.models.results || mongoose.model("results", Result);

export { authUser, userRegistered, eventDetails, eventResults };
