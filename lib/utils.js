/*
import mongoose from "mongoose";

const connection = {}; //what you see here is object empty, means no keys, means no isConncted key

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      //if the (connection object) has a key isConnected. This current function will stop
      console.log("Using existing connection");
      return;
      }
      // if no connection and false. OK I will create a new one connection || new update
      //
      const db = await mongoose.connect(process.env.MONGO);
      console.log(db);
      console.log(process.env.MONGO);
      connection.isConnected = db.connection[0].readyState;
      } catch (error) {
        console.log(error);
        throw new Error(error);
        }
        };
        
        */
