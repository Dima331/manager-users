const jwt = require('jsonwebtoken')
const express = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const mysql = require("mysql2");
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({ 'type': 'application/json' }))
app.use(bodyParser.urlencoded({ 'extended': true }))
const registration = require('./routes/registration.routes');
const users = require('./routes/users.routes');
const PORT = config.get('port') || 5000


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "manager",
  password: "root"
});

db.connect((err) => {
  if (err) { throw err; }
  console.log('Connected to database');
});
global.db = db;

app.use('/api/auth', registration);
app.use('/api/users', users);

app.listen(PORT, () => console.log(`here port ${PORT}`))




