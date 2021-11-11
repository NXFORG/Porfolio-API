const Fact = require('../models/Fact');

async function index(req, res) {
    try {
        const factList = await Fact.all;
        await res.json(factList);
    }
    catch(err) {
        res.status(500).json(err);
    };
};

async function show(req, res) {
    try {
        const foundFact = await Fact.getFactById(parseInt(req.params.id));
        res.json(foundFact);
    }
    catch(err) {
        res.status(404).json(err);
    };
};

module.exports = { index, show }
