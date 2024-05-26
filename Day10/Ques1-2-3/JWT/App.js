const express = require('express');
require('./connection');
const router = require('./Route/signup');
const router2 = require('./Route/login');
const router3=require('./Route/protected')
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use('/', router);
app.use('/', router2);
app.use('/', router3);
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
