const express = require('express');
const path = require('path');
const notesRouter = require('./routes/notes');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/notes', notesRouter);

if (!fs.existsSync('./notes')) fs.mkdirSync('./notes');

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
