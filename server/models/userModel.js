const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const MONGO_URI = 'mongodb+srv://stan:rhino@cluster0.etihd.mongodb.net/users?retryWrites=true&w=majority';
const SALT_WORK_FACTOR = 10;

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'users'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));
  
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: String,
  zipcode: Number,
  rep: Object,
  senators: Object,
  state: String,
})

userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.hash(user.password, SALT_WORK_FACTOR, function (err, hash) {
    if (err) return next(err)
    user.password = hash
    return next();
  })
})

userSchema.methods.comparePassword = function (pass, cb) {
  bcrypt.compare(pass, this.password, function (err, isMatch) {
    // if (err) return next(err)
    cb(err, isMatch)
  })
}

const User = mongoose.model('users', userSchema);

module.exports = User;