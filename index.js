const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=> {
    res.send("Hello Express");
});

app.get('/api/p1', (req,res)=> {
   res.write("Ca marche");
   res.send();
});

app.get('/api/p2', (req,res)=> {
    res.write("Ca marche");
    res.send();
 });

app.listen(4242, () =>{
    console.log("Ecoute du port 4242");
});