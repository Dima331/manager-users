const express = require('express')
const config = require('config')
const app = express()

const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "manager",
  password: "root"
});
connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });


 const sql = `create table if not exists users(
    id int primary key auto_increment,
    name varchar(255) not null,
    age int not null
  )`;
   
  connection.query(sql, function(err, results) {
      if(err) console.log(err);
      else console.log("Таблица создана");
  });
 // закрытие подключения
//  connection.end(function(err) {
//   if (err) {
//     return console.log("Ошибка: " + err.message);
//   }
//   console.log("Подключение закрыто");
// });


// app.use(express.json({ extended: true }))

// const PORT = config.get('port') || 5000

// async function start() {
// }
// start()

//app.listen(PORT, () => console.log(`here port ${PORT}`))