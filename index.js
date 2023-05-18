const express = require('express')
const { fnReadFile, fnWriteFile } = require("./utils.js")
const app = express();

// Middleware para procesar json
app.use(express.json())

const PORT = process.env.PORT || 3000

// Muestra página inicio
app.get('/', (req, res) => res.status(200).sendFile(__dirname + "/index.html"))

// Agregar una nueva canción
app.post('/canciones', (req, res) => {
    const canciones = fnReadFile();
    canciones.push(req.body);
    fnWriteFile(canciones);
    res.status(200).send("Canción agregada!");
})

// Obtener todas las canciones
app.get('/canciones', (req, res) => {
    res.status(200).json(fnReadFile())
})

// Editar una canción
app.put('/canciones/:id', (req, res) => {
    const editRepertorio = fnReadFile().map(r => r.id == req.params.id ? req.body : r)
    fnWriteFile(editRepertorio);
    res.status(200).send('Canción Editada')
})

// Borrar una canción
app.delete('/canciones/:id', (req, res) => {
    const filterRepertorio = fnReadFile().filter(r => r.id != req.params.id);
    fnWriteFile(filterRepertorio);
    res.status(200).send('Canción eliminada!');
})

app.listen(PORT, console.log(`Server on port: ${PORT}`))