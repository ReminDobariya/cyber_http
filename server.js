const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my simple API!');
});

app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.json({ message: `Hello, ${name}!` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
