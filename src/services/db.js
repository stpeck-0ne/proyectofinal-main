const mysql2 = require('mysql2')

const pool = mysql2.createPool({
  host: '127.0.0.1',
  port: '3306',
  database: 'projectd',
  password: '46983916',
  user: 'akoz'
})

module.exports = { pool }
