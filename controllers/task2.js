import axios from "axios";

// API endpoint to get the price of one cryptocurrency in terms of another on a specific date

export const priceConversion = async (req, res) => {
    try {
        const { fromCurrency, toCurrency, date } = req.body;
        
        // Fetch price data from CoinGecko API
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`);
        const priceData = response.data;
        
        console.log(priceData);
        res.json({ price: priceData });
    } catch (error) {
        console.error('Error fetching cryptocurrency price:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
