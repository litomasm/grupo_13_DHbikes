const express= require('express');
const app= express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor levantado. http://localhost:3000')
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/views/Registro.html')
});

app.get('/ingreso', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
});

app.get('/producto', (req, res) => {
    res.sendFile(__dirname + '/views/producto.html')
});

app.get('/carrito', (req, res) => {
    res.sendFile(__dirname + '/views/carrito.html')
});