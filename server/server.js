const express = require('express')
const app = express()

var api = express.Router();

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept');
  // res.setHeader('Access-Control-Allow-Credentials', true);
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



app.use('/api', api);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


