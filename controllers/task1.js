import axios from "axios";
import Crypto from "../models/Task1.js";

export const getAllCryptocurrencies_Ids_Names = async (req, res, next) => {
    
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/list`);
    const coinList = response.data;

    if (!coinList) {
      throw new Error("Empty response data");
      return;
    }

     res.json(coinList);

  } catch (err) {
    next(err);
  }

  };

  export const fetchAndUpdateData = async (req, res, next) => {
    try {
        // Fetch data from the API using Axios
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
        const coinList = response.data;

        // Extract only the "name" and "symbol" fields from each object
        const validCoins = coinList.map(({ name, id }) => ({ name, id }));
        
        // Update the data in the MongoDB collection
        await Crypto.deleteMany(); // Clear existing data
        await Crypto.insertMany(validCoins);
        console.log('Data updated successfully');
        res.send('Data updated successfully');
    } catch (error) {
        next(err);
    }
};



