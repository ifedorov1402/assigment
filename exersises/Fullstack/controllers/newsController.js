

const axios = require('axios');

const API_KEY = process.env.NEWS_DATA_API_KEY; 
const BASE_URL = 'https://newsdata.io/api/1/news';

const getLatestNews = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                apikey: API_KEY,
                language: 'en'  // Specify English language
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const searchNews = async (req, res) => {
    const { query } = req.query;
    try {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&q=${query}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getLatestNews,
    searchNews
};
