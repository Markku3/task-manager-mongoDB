const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/naytto', {
   useNewUrlParser: true,   
   useUnifiedTopology: true
});

// --- User Schema/Model ---
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

// --- Todo Schema/Model ---
const todoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
const Todo = mongoose.model('Todo', todoSchema);

app.use(cors());
app.use(express.json());
app.use(session({
  secret: 'your-secret-key', // use a strong secret in production!
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set to true if using HTTPS
}));

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve all static files (JS, CSS, images)
app.use(express.static(__dirname));

// Routing for pages
app.get('/', (req, res) => res.render('index'));
app.get('/auth', (req, res) => res.render('auth'));
app.get('/personal', (req, res) => res.render('personal'));
app.get('/index', (req, res) => res.render('index'));

// --- Registration endpoint ---
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (e) {
    res.status(400).json({ error: 'Username already exists' });
  }
});

// --- Login endpoint ---
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: 'Invalid credentials' });
  req.session.user = { _id: user._id, username: user.username };
  res.json({ message: 'Login successful', username });
});

// --- Get current user info ---
app.get('/api/me', (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not authenticated' });
  res.json({ username: req.session.user.username });
});

// --- Logout endpoint ---
app.post('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

// --- Get all todos for user ---
app.get('/api/todos', async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not authenticated' });
  try {
    const todos = await Todo.find({ userId: req.session.user._id });
    res.json({ todos });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// --- Create todo ---
app.post('/api/todos', async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not authenticated' });
  const { text, description = '' } = req.body;
  if (!text) return res.status(400).json({ error: 'Missing fields' });
  try {
    const todo = new Todo({
      userId: req.session.user._id,
      text,
      description,
      completed: false
    });
    await todo.save();
    res.json({ todo });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// --- Update todo ---
app.put('/api/todos/:id', async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not authenticated' });
  const { id } = req.params;
  const { text, description, completed } = req.body;
  if (!text) return res.status(400).json({ error: 'Missing data' });
  try {
    const result = await Todo.updateOne(
      { _id: id, userId: req.session.user._id },
      { $set: { text, description, completed: !!completed } }
    );
    if (result.modifiedCount === 0) return res.status(404).json({ error: 'Todo not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
});

// --- Delete todo ---
app.delete('/api/todos/:id', async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not authenticated' });
  const { id } = req.params;
  try {
    await Todo.deleteOne({ _id: id, userId: req.session.user._id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));