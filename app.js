const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/login-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to MongoDB');
  
    // Create a default user if not exists
    const User = require('./models/User');
    const user = await User.findOne({ username: 'admin' });
  
    if (!user) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const defaultUser = new User({
        username: 'admin',
        password: hashedPassword
      });
      await defaultUser.save();
    }
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Move User model definition outside the MongoDB connection block
const User = require('./models/User');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', async (req, res) => {
    console.log('Received login request:', req.body);
  
    const { username, password } = req.body;
    const user = await User.findOne({ username });
  
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      console.log('Redirecting to dashboard');
      res.redirect('/dashboard');
    } else {
      console.log('Login failed. Redirecting to /');
      res.redirect('/');
    }
  });
  
  app.get('/dashboard', (req, res) => {
    if (req.session.user) {
      console.log('User is logged in. Sending dashboard.html');
      res.sendFile(__dirname + '/views/dashboard.html');
    } else {
      console.log('User is not logged in. Redirecting to /');
      res.redirect('/');
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
