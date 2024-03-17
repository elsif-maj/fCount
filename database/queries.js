const db = require('./db');

// Create the fcounts table if it doesn't exist 
const createTableSQL = `
  CREATE TABLE IF NOT EXISTS fcounts (
    id INTEGER PRIMARY KEY,
    url TEXT NOT NULL,
    status TEXT NOT NULL,
    fcount INTEGER DEFAULT NULL 
  );
`
const createFCountTable = () => {
  db.run(createTableSQL, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
};

module.exports = {
  createFCountTable
};
