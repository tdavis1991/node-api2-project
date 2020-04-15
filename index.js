const express = require('express');
const posts = require('./data/posts/posts-router');
const cors = require('cors');

const server = express()

const port = 4000;

server.use(express.json());
server.use('/api/posts', posts);
server.use(cors())

server.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`)
})