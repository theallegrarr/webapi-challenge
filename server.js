const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const actionrouter = require('./routers/actionrouter');
const projectrouter = require('./routers/projectrouter');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/action', actionrouter);
server.use('/api/project', projectrouter);
server.get('/', (req,res) => {
    res.send(`<h2>Sprint challenge</h2>`);
})

module.exports = server;