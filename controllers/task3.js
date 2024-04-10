import axios from "axios";

// API endpoint to get the company list holding the specific currency

export const companyList = async (req, res) => {
    try {
        const { currency } = req.body;
        
        // Fetch Companies list from CoinGecko API
        const response = await axios.get(`https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`);
        const companies = response.data.companies;
        
        console.log(companies);
        res.json({ CompanyLists: companies });
    } catch (error) {
        console.error('Error fetching cryptocurrency price:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
