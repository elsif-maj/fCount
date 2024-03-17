const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World")
});

const PORT = 3100;
app.listen(PORT, () => {"The fCount server is listening on port ", PORT});
