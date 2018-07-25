const express = require('express');
const port = process.env.PORT || 3000;

const server = express();

server.listen(port, () => console.log(`The server is listening on port ${port}`));