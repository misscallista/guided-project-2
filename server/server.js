const express = require('express');
const { MongoClient } = require('mongodb');
const url_mongo = "mongodb://localhost:27017";
const client = new MongoClient(url_mongo);
const dbName = "swapi";


const db = client.db(dbName);
// name planets collection
const planetsData = db.collection("planets");

const PORT = 3001;

const app = express();

app.get('/api/planets', async (req, res) => {
    try {
        const planets = await planetsData.find({}).toArray();

        res.status(200).json(planets);
        console.log("good")
        console.log(planets)
    } catch(err) {
        res.status(500).json(err)
        console.log("bad")
    }
});

app.listen(PORT);

