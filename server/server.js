const express = require('express');
const config = require('config');
const mysql = require("mysql2");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({ 'type': 'application/json' }));
app.use(bodyParser.urlencoded({ 'extended': true }));

const registration = require('./routes/registration.routes');
const users = require('./routes/users.routes');
// const PORT = config.get('port') || 5000;
const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

const db = mysql.createConnection({
  host: "eu-cdbr-west-03.cleardb.net",
  user: "b7d5fcc0dab453",
  database: "heroku_834f816ce945ec4",
  password: "fc773d3c"
});
//mysql://b7d5fcc0dab453:fc773d3c@eu-cdbr-west-03.cleardb.net/heroku_834f816ce945ec4?reconnect=true
db.connect((err) => {
  if (err) { throw err; }
  console.log('Connected to database');
});
global.db = db;

app.use('/api/auth', registration);
app.use('/api/users', users);

app.listen(PORT, () => console.log(`here port ${PORT}`));




