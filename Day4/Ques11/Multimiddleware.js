//11.Write a series of middleware functions and chain them together to demonstrate how multiple middleware can be applied to a single route.

const express = require('express');
const app = express();

app.get('/login',
    (req, res, next) => {
        console.log('Middleware 1');
        next();
    },
    (req, res, next) => {
        console.log('Middleware 2');
        next();
    },
    (req, res, next) => {
        console.log('Middleware 3');
        next();
    },
    (req, res) => {
        console.log('Route handler');
        res.send('Response from route handler');
    }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});