// backend-api/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


app.get('/api', (req, res) => {
    res.set('X-Custom-Header', 'This is a custom header');
    res.json({ message: 'Hello from the Backend API!' });
});

app.listen(PORT, () => {
    console.log(`Backend API running on port ${PORT}`);
});

