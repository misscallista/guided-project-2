const express = require('express');
const { MongoClient } = require('mongodb');
const url_mongo = "mongodb://localhost:27017";
const client = new MongoClient(url_mongo);
const dbName = "swapi";
const CORS = require('cors');


const db = client.db(dbName);
// name planets collection
const planetsData = db.collection("planets");
const filmsData = db.collection("films");

const charactersData = db.collection("characters");

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(CORS());

app.get('/api/planets', async (req, res) => {
    try {
        const planets = await planetsData.find({}).toArray();
        res.status(200).json(planets);
    } catch(err) {
        res.status(500).json(err)
    }
});

app.get('/api/films', async (req, res) => {
    try {
        const films = await filmsData.find({}).toArray();
        res.status(200).json(films);
    } catch(err) {
        res.status(500).json(err)
    }
});

app.get('/api/characters', async (req, res) => {
    try {
        const characters = await charactersData.find({}).toArray();
        res.send(json(characters));
    } catch(err) {
        res.status(500).json(err)
    }
});

app.get('/api/characters/:id', async (req, res) => {
    try {
        const character = await charactersData.findOne({"id": Number(req.params.id)});
        res.send(character);
    } catch(err) {
        res.status(500).json(err);
    }
});

app.get('/api/films/:id', async (req, res) => {
    try {
        const film = await filmsData.findOne({"id": Number(req.params.id)});
        res.send(film);
    } catch(err) {
        res.status(500).json(err);
    }
});

app.get('/api/planets/:id', async (req, res) => {
    try {
        const planet = await planetsData.findOne({"id": Number(req.params.id)});
        res.send(planet);
    } catch(err) {
        res.status(500).json(err);
    }
});

app.listen(PORT);

