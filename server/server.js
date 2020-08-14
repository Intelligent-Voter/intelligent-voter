const express = require('express');
const path = require('path');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.resolve(__dirname, '../build')));

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