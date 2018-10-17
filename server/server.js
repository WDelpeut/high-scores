const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/../client/'));
app.use(bodyParser.json());

let highScores = [
  {
    "name": "Wes",
    "score": 100
  }, {
    "name": "Sven",
    "score": 5
  }, {
    "name": "Bert",
    "score": 1
  }, 
];

app.get('/get-score', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(highScores));
});

app.post('/add-score', (req, res) => {
  highScores.push(req.body);
  console.log(highScores);
  res.setHeader('Content-Type', 'application/json');
  res.end('{"message": "OK"}');
});

app.put('/update-score', (req, res) => {
  highScores.map(item => {
    if(item.name === req.body.name) {
      item.score = req.body.score;
    }
  });
  res.setHeader('Content-Type', 'application/json');
  res.end('{"message": "OK"}');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});