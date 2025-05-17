import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Serve static files from the "public" folder
app.use(express.static('public'));

// Middleware to parse form data (x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));

// Hardcoded credentials
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = '1234';

// GET login handler (less secure)
app.get('/login', (req, res) => {
  const { username, password } = req.query;
  const success = username === VALID_USERNAME && password === VALID_PASSWORD;

  res.send(success
    ? `<h2>✅ Login successful (GET)</h2>`
    : `<h2>❌ Login failed (GET)</h2>`);
});

// POST login handler (secure)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const success = username === VALID_USERNAME && password === VALID_PASSWORD;

  res.send(success
    ? `<h2>✅ Login successful (POST)</h2>`
    : `<h2>❌ Login failed (POST)</h2>`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
