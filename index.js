// backend-api/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the Backend API!' });
});

app.listen(PORT, () => {
    console.log(`Backend API running on port ${PORT}`);
});

