var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json());

var api = express.Router();

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


var players = [
  {id:0, first_name: "alex", last_name: "fergisson", phone: "123456", email: "alex@gmail.com"},
  {id:1, first_name: "alexis", last_name: "sanchez", phone: "987654", email: "alexis@gmail.com"},
  {id:2, first_name: "cristiano", last_name: "renalso", phone: "445566", email: "cristiano@gmail.com"},
  {id:3, first_name: "mouhamed", last_name: "salah", phone: "111122", email: "m.salah@gmail.com"},
  {id:4, first_name: "lioenl", last_name: "messi", phone: "458698", email: "messi@gmail.com"}
]

/// get all players
api.get('/players', function (req, res) {
  res.json(players)
})

/// get one player
api.get('/players/:id', (req, res) => {
  const result = players.filter(p => p.id == req.params.id);
  res.json(result);
})

/// delete player
api.delete('/players/:id', (req, res) => {
  let playerId = req.params.id;
  let player = players.filter(player => {
    return player.id == playerId;
  })[0];

  const index = players.indexOf(player);
  players.splice(index, 1);

  res.json({ message: `player with id ${playerId} is deleted`});
})

/// post player 
api.post('/players', (req, res) => {
  console.log(req.body);
  let player = {
    id: players.length +1,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone
  };
  
  players.push(player);

  res.json(player);
})

app.use('/api', api);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


