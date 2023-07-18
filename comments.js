// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a comments array
const comments = [
  { id: 1, body: 'This is a comment' },
  { id: 2, body: 'This is another comment' },
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send('The comment with the given ID was not found.');
  }
  res.json(comment);
});

// Create a comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    body: req.body.body,
  };
  comments.push(comment);
  res.json(comment);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send('The comment with the given ID was not found.');
  }
  comment.body = req.body.body;
  res.json(comment);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send('The comment with the given ID was not found.');
  }
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.json(comment);
});

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Path: index.js
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a comments array
const comments = [
  { id: 1