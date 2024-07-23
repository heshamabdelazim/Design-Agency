import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    img: {
      type: String, //this will not be required so the default of required:false
    },
    isAdmin: {
      type: Boolean,
      default: false, //when the user login the admin will be false
    },
  },
  { timestamps: true }
); //while creating any user it's gonna create data automatically

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      // unique: true, // we need false So, the default is false
      // min: 3,
      // max: 20
    },
    desc: {
      type: String,
      required: true,
      //   unique: true,
      //   max: 50,
    },
    img: {
      type: String, //this will not be required so the default of required:false
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
); //while creating any user it's gonna create data automatically

const devSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 60,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
      max: 120,
    },
  },
  { timestamps: true }
);

// export const User = mongoose.model("User", userSchema);      // We will not use this.
// Because if we have a user on DB We don't need to create a new one. instead we have to use an existing one like the following

export const User = mongoose.models.User || mongoose.model("User", userSchema); //this code means it will get the User from DB but if nothing in DB It will make a new User
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema); //this code means it will get the User from DB but if nothing in DB It will make a new User
export const Dev = mongoose.models["Devs"] || mongoose.model("Devs", devSchema); //this code means it will get the User from DB but if nothing in DB It will make a new User

//This three consts we will use later but Schemas for these consts

//Taht's all, Using these models you are ready to update and fetch
