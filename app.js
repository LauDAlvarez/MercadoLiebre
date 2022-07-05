const express = require('express');
const app = express();

const path = require('path')

//MIDDLEWARDE
app.use(express.static('public'));
app.set('puerto', process.env.PORT || 3000)

//Rutas


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/register.html'))
})

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/login.html'))
})
app.listen( app.get('puerto'), ()=> console.log(`Servidor corriendo en el ${app.get('puerto')}`));