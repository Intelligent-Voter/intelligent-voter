const express = require('express');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const axios = require('axios');

// pulling client secrets from .env file
// const client_id = "f8b6bfd93cd4f603bd03";
const client_id = '2e3c7b09858631e8f922';
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const cookie_secret = process.env.COOKIE_SECRET;

// Controllers required in
const userController = require('./controllers/userController.js');
const cookieController = require('./controllers/cookieController.js');
const sessionController = require('./controllers/sessionController.js');

// routes to use required modules
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static pages
app.use('/build', express.static(path.resolve(__dirname, '../build')));
app.use('/img', express.static(path.resolve(__dirname, '../client/images')));
app.use('/images', express.static(path.resolve(__dirname, '../client/images')));



app.use('/oauth', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000/authorize`);
  next();
});

app.use('/authorize', userController.getToken, userController.getGithubUser, (req, res) => {
  console.log(res.locals.github);
  res.json({ answer: res.locals.github });
});

app.use('/update', userController.updateAddress, (req, res) => {
  res.status(200).json(res.locals.user);
});

app.use('/signup', userController.createUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  res.status(200).json(res.locals.user);
});

app.use('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  res.status(200).json(res.locals.user);
  // res.redirect('/home', );
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// catch-all
app.use((req, res, next) => {
  res.sendStatus(404);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global Error Handler -- Sorry about it',
    status: 400,
    message: err,
  };
  console.log(err);
});

app.listen(3000, () => console.log('Listening on PORT: 3000'));


// Button for OAuth 

{ /* <a href={`https://github.com/login/oauth/authorize?client_id=2e3c7b09858631e8f922`}>Github</a> */ }
