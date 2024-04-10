import express from "express";

import { companyList } from "../controllers/task3.js";


const router = express.Router();

//Task 3
router.post("/companies", companyList);


export default router;