import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(process.env.CNN_DB);
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
}

export { dbConnect };
