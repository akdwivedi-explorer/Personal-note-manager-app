const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const notesDir = path.join(__dirname, '..', 'notes');

// View All Notes
router.get('/', (req, res) => {
  fs.readdir(notesDir, (err, files) => {
    if (err) return res.status(500).send('Error reading notes');
    res.render('notes', { notes: files });
  });
});

// Form Page to Add Note
router.get('/add', (req, res) => {
  res.render('add-note');
});

// Add Note Logic
router.post('/add', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.send('Missing fields');
  const filePath = path.join(notesDir, `${title}.txt`);
  fs.writeFile(filePath, content, err => {
    if (err) return res.status(500).send('Failed to save note');
  res.redirect('/notes');
  });
});

// View a Single Note
router.get('/:title', (req, res) => {
  const filePath = path.join(notesDir, `${req.params.title}.txt`);
  fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) return res.status(404).send('Note not found');
    res.render('view-note', { title: req.params.title, content });
  });
});

// Delete a Note
router.post('/:title/delete', (req, res) => {
  const filePath = path.join(notesDir, `${req.params.title}.txt`);
  fs.unlink(filePath, err => {
    if (err) return res.status(500).send('Error deleting note');
    res.redirect('/notes');
  });
});

module.exports = router;
