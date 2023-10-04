import { mongoose } from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connection succcessful");
  } catch (error) {
    throw new Error("mongo db connection is failed");
  }
};

export default dbConnection;
