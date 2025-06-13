import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.once("connected", () =>
      console.log("Database has been connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URL}${process.env.DB_NAME}`);
  } catch (error) {
    console.log("Database connection error:", error.message);
  }
};

export default connectDB;
