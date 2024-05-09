const express = require('express');
const app = express();

function authenticate(req, res, next) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({ error: 'Unauthorized: Authentication token missing' });
    }

    const validToken = 'secretToken';
    if (authToken !== validToken) {
        return res.status(401).json({ error: 'Unauthorized: Invalid authentication token' });
    }

    next();
}

app.get('/protected-resource', authenticate, (req, res) => {
    res.send('Welcome to the protected resource!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
