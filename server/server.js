const express = require('express');
const planetsData = require('../db/planets.json')

const PORT = 3001;

const app = express();

app.get('/api/planets', (req, res) => res.json(planetsData));
app.listen(PORT)