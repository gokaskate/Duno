const express = require('express');
const path = require('path');


const pool = require('./database');

//Iniciar
const app = express();
app.use(require("./routes/index.js"));

//Ajustes
app.set('port', process.env.port || 4000);

//Middelewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));

//Variables Globales
app.use((req, res, next) => {
    next();
})


//Rutas
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.post('/pet', async(req, res) => {
    console.log(req.body)
    const result = await pool.query('INSERT INTO animales set ?', [req.body])
    res.sendFile(path.join(__dirname + '/public/mensajegud.html'));
})

app.post('/pot', async(req, res) => {
    console.log(req.body)
    const result = await pool.query('INSERT INTO hogares_depaso set ?', [req.body])
    res.sendFile(path.join(__dirname + '/public/mensajebad.html'));
})


//Start
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});