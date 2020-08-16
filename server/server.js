const express = require('express');
const path = require('path');
const userController = require('./controllers/userController.js');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.resolve(__dirname, '../build')));



app.use('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
})

app.use('/login', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.user);
  // res.redirect('/home', );
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.use((err, req, res, next) => {
  res.sendStatus(400);
})

app.use((req, res, next) => {
  const defaultErr = {
    log: 'Global Error Handler -- Sorry about it',
    status: 400,
    message: ''
  }
})

app.listen(3000, () => console.log(`Listening on PORT: 3000`));