const express = require('express')
const fs = require("fs");
const app = express();
app.use(express.json())
const PORT = 3000

app.post('/canciones', function (req, res) {
    const { id, cancion, artista, tono } = req.body;

})

app.get('/canciones', function (req, res) {
    const readRepertorio = fs.readFileSync("repertorio.json", "utf8");
    res.json(readRepertorio)
})

app.put('/canciones/:id', function (req, res) {
    res.send('Hello World')
})

app.delete('/canciones/:id', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT, console.log(`Server on port: ${PORT}`))