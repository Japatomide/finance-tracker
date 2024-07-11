import "dotenv/config";
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = process.env.MONGO_URI as string;
app.use("/financial-records", financialRecordRouter);

app.listen(port, async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected To MongoDB");
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error("Failed to Connect to MongoDB:", error);
  }
});
