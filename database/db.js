const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database/fCountDB.sqlite3', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

module.exports = db;