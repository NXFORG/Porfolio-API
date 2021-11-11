const axios = require('axios');

async function show(req, res) {
    try {
        const github = await axios.get(`https://api.github.com/users/${req.params.name}`);
        res.json(github.data);
    }
    catch(err) {
        res.status(404).json(err);
    };
};

module.exports = { show };