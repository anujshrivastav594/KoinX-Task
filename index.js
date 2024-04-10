import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cron from 'node-cron';
import Crypto from "./models/Task1.js";
import { fetchAndUpdateData } from "./controllers/task1.js";

import task1Route from "./routes/task1.js";
import task2Route from "./routes/task2.js";
import task3Route from "./routes/task3.js";

// import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
} catch(error) {
   throw error;

}
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected.")
})
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected.")
})

app.use(express.json());


 // Run the fetchAndUpdateData function every hour
 cron.schedule('0 */1 * * *', fetchAndUpdateData); // Run every hour at minute 0
        
 
// app.use(cors({ origin: 'https://localhost:8800' }));

app.use("/api/task1", task1Route);
app.use("/api/task2", task2Route);
app.use("/api/task3", task3Route);

//error handeling middle-ware
app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong!";
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    });
});

const port = process.env.PORT || 8800

app.listen(port, ()=> {
    connect();
    console.log("Connected to Backend on " + port + "!");
})
