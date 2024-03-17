const db = require('./db');

// GET /f-counts
const getAllFCounts = (callback) => {
  db.all(`SELECT ROWID as id, url, status, fcount FROM fcounts`, callback);
}

// POST /f-counts
const insertFCount = (imgUrl, callback) => {
  db.run(`INSERT INTO fcounts(url, status) VALUES(?, ?)`, [imgUrl, "pending"], callback);
}

// GET /f-counts/:id
const getFCountById = (id, callback) => {
  db.get(`SELECT ROWID as id, url, status, fcount FROM fcounts WHERE ROWID = ?`, [id], callback);
}

// DELETE /f-counts/:id
const deleteFCountById = (id, callback) => {
  db.run(`DELETE FROM fcounts WHERE ROWID = ?`, id, callback);
}

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
  createFCountTable,
  getAllFCounts,
  insertFCount,
  getFCountById,
  deleteFCountById
};
