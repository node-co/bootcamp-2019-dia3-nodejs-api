const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let usuarios = [
  { nombre: "usuario0" },
  { nombre: "usuario1" },
  { nombre: "usuario2" },
  { nombre: "usuario3" },
  { nombre: "usuario4" }
];

let empleadores = [
  { id: 0, nombre: "Almacenes Exito" },
  { id: 1, nombre: "Centro comercial Santa Fe" },
  { id: 2, nombre: "Carulla" },
  { id: 3, nombre: "Jumbo" },
  { id: 4, nombre: "D1" }
];

app.get("/", function(req, res) {
  res.send("hola soy la ruta raíz");
});

app.get("/usuarios", function(req, res) {
  res.send(usuarios);
});

app.post("/usuarios", function(req, res) {
  usuarios.push(req.body);
  const tamanoArray = usuarios.length;
  res.send(usuarios[tamanoArray - 1]);
});

app.put("/usuarios/:index", function(req, res) {
  if (usuarios[req.params.index]) {
    usuarios[req.params.index] = req.body;
    res.send(usuarios[req.params.index]);
  } else {
    res.send(`no existe usuario con index = ${req.params.index}`);
  }
});

app.get("/usuarios/:index", function(req, res) {
  if (usuarios[req.params.index]) {
    res.send(usuarios[req.params.index]);
  } else {
    res.send(`no existe usuario con index = ${req.params.index}`);
  }
});

app.delete("/usuarios/:index", function(req, res) {
  if (usuarios[req.params.index]) {
    usuarios = usuarios.filter((usuario, index) => index != req.params.index);
    res.send({ mensaje: `indice ${req.params.index} eliminado` });
  } else {
    res.send(`no existe usuario con index = ${req.params.index}`);
  }
});

app.get("/empleadores", function(req, res) {
  res.send(empleadores);
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
