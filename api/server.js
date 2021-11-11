const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


const welcomeRoutes = require('./routes/welcome');
const factRoutes = require('./routes/facts');
const githubRoutes = require('./routes/github');

server.get('/', (req, res) => res.send("Welcome to Chris Anstead's portfolio API"));

server.use('/welcome', welcomeRoutes);
server.use('/facts', factRoutes);
server.use('/github', githubRoutes);

module.exports = server;