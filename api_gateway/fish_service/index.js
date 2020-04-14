const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) =>
    res.json('xin chào from fish_service')
);

app.get('/info', (req, res) => {
    res.json('fish_service info');
});

app.listen(3100, () =>
    console.log('fish_service is listening on port 3100.')
);
