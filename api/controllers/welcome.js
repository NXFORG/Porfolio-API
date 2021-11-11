const Welcome = require('../models/Welcome');

async function index(req, res) {
    try {
        const welcomeList = await Welcome.all;
        await res.json(welcomeList);
    }
    catch(err) {
        res.status(500).json(err);
    };
};

async function show(req, res) {
    try {
        const foundWelcome = await Welcome.getWelcomeById(parseInt(req.params.id));
        res.json(foundWelcome);
    }
    catch(err) {
        res.status(404).json(err);
    };
};

module.exports = { index, show }