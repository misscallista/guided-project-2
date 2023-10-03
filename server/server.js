const express = require('express');
const planetsData = require('../db/planets.json');
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "swapi";

const PORT = 3001;

const app = express();

app.get('/api/planets', (req, res) => res.json(planetsData));


app.listen(PORT);