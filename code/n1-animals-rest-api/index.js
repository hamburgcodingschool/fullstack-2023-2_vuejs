// import express from "express" // ES6 Modules Syntax
const express = require("express") // CommonJS Syntax

const cors = require("cors")

const db = require("./db")

const app = express()

const port = 3000

app.use(cors())

app.get("/animals", async function(req, res) {
    
    const animalsList = await db.getAnimals()

    res.json({
        status: "OK",
        count: animalsList.length,
        results: animalsList
    })
})

app.get("/animals/:id", async function(req, res) {
    
    const id = parseInt(req.params.id)
    const animal = await db.getAnimalById(id)

    res.json({
        status: "OK",
        animal: animal
    })
})


app.listen(port, function() {
    console.log(`Listening on ${port}`)
})