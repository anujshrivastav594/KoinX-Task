import express from "express";

import { getAllCryptocurrencies_Ids_Names, fetchAndUpdateData } from "../controllers/task1.js";


const router = express.Router();

//Task 1
router.get("/getAllCrypto", getAllCryptocurrencies_Ids_Names);
router.post("/postAllCrypto", fetchAndUpdateData);

//Task 2

export default router;