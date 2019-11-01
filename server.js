const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const actionrouter = require('./routers/actionrouter');
const projectrouter = require('./routers/projectrouter');

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/action', actionrouter);
server.use('/api/project', projectrouter);
server.get('/', (req,res) => {
    res.send(`<h2>Sprint challenge</h2>`);
})

module.exports = server;