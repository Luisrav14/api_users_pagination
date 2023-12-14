import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("BD Connected");
  } catch (error) {
    console.error("DB conection error:", error);
    throw error;
  }
};
