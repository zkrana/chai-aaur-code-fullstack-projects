import mongoose from "mongoose";

export async function connect() {
  mongoose.connect(process.env.MONGO_URI!);

  const connect = mongoose.connection;
  //Check response, db connection.
  connect.on("connected", () => {
    console.log("MongoDB Connection Successfully.");
  });

  //Check response, db connection error.
  connect.on("error", (err) => {
    console.log("there have a error in DB conneciotionb." + err);
    process.exit();
  });

  try {
  } catch (error) {
    console.log("Connection failed.", error);
  }
}
