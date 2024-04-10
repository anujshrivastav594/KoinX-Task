import express from "express";

import { priceConversion } from "../controllers/task2.js";


const router = express.Router();

//Task 2
router.post("/priceConvert", priceConversion);


export default router;