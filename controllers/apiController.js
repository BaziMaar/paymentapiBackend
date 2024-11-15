const axios = require('axios');
require('dotenv').config();

const API_BASE_URL = process.env.API_BASE_URL;

exports.createOrder = async (req, res) => {
    try {
        console.log(req.body)
        const response = await axios.post(`https://allapi.in/order/create`, req.body, {
            headers: {
                'Content-Type': 'application/json',
                // Add additional headers if needed
            },
        })
        res.status(response.status).json(response.data);
    } catch (error) {
        console.log('Error:', error.message);
        res.status(error.response?.status || 500).json({
            error: error.message,
            details: error.response?.data || 'Internal Server Error',
        });
    }
};
