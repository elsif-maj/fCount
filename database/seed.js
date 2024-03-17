// This can be run to seed the DB with mock data
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./fCountDB.sqlite3', (err) => {
  console.log('Connecting to SQLite to seed mock data');
  if (err) {
    console.error(err.message);
  }
});

const seedData = [
  { url: 'http://example.com', status: 'pending', fcount: null },
  { url: 'http://example.org', status: 'completed', fcount: 5 },
  { url: 'https://www.whoah.io', status: 'completed', fcount: 0 },
  { url: 'http://example.org', status: 'completed', fcount: 22 },
  { url: 'http://www.run.dev', status: 'pending', fcount: null },
];

seedData.forEach(item => {
  db.run(`INSERT INTO fcounts(url, status, fcount) VALUES(?, ?, ?)`, [item.url, item.status, item.fcount], function(err) {
    if (err) {
      return console.log(err.message);
    }
  });
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Closing connectiong to SQLite after seeding mock data');
});