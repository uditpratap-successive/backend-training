
const express = require('express');
const customHeaderMiddleware = require('./CustomMiddleware');

const app = express();


app.use(customHeaderMiddleware);


app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
