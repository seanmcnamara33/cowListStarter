const {readAll, doesItExist, inputCow} = require('../database/mysql/index.js')
const express = require('express');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let db;

const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/cows', async (req, res) => {
  var cows = await readAll();
  res.status(200).send(cows);
})

app.post('/api/cows', async (req, res) => {
  var result = await inputCow(req.body);
  res.status(201).send(result);
})
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
    readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
      if(choice==='mongo') {
        console.log('Your db is Mongo');
        db = require('../database/mongo');
      } else if(choice === 'mysql') {
        console.log('Your db is mysql');
        db = require('../database/mysql');
      } else {
        console.log('Stop node, restart and try again, valid options are mysql and mongo')
      }
    })

});
