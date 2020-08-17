const fetch = require('node-fetch');
const axios = require('axios');
const User = require('../models/userModel.js');

const userController = {};

userController.createUser = async (req, res, next) => {
  const {
    username, password, address, zipcode,
  } = req.body;
  console.log(username);
  try {
    const dataJ = await fetch(`https://usgeocoder.com/api/get_info.php?address=${address}&zipcode=${zipcode}&authkey=97c7224b2017426c36967c31af4c7645&format=json`);
    const data = await dataJ.json();
    const { state } = data.usgeocoder.address_info;
    const district = data.usgeocoder.jurisdictions_info.congressional_legislators.congressional_district_id.congressional_district_id_value;

    const repJson = await fetch(`https://api.propublica.org/congress/v1/members/house/${state}/${district}/current.json`, {
      method: 'GET',
      headers: {
        'x-api-key': 'czotF7qf5gL6JUwX03GdtucgNcSaJOOMgZsutEGF',
      },
    });
    const rep = await repJson.json();

    const senJson = await fetch(`https://api.propublica.org/congress/v1/members/senate/${state}/current.json`, {
      method: 'GET',
      headers: {
        'x-api-key': 'czotF7qf5gL6JUwX03GdtucgNcSaJOOMgZsutEGF',
      },
    });
    const senator = await senJson.json();

    res.locals.user = await User.create({
      username, password, zipcode, rep: rep.results[0], senators: senator.results, state,
    });
    console.log(res.locals.user);
    next();
  } catch (err) {
    next(err);
  }
};

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err) {
      res.redirect('/signup');
    }
    console.log('About to compare passwords!!');
    user.comparePassword(password, (err, isMatch) => {
      if (err) return next(err);
      if (isMatch) {
        res.locals.user = user;
        return next();
      }
      res.json({ error: 'Password does not match!' });
    });
  });
};

userController.getToken = (req, res, next) => {
  const client_id = '2e3c7b09858631e8f922';
  const { code } = req.query;
  const client_secret = '67c20b137b8a214dae7bf1d020470edf2e780308';
  axios({
    method: 'POST',

    url: `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,

    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    const params = new URLSearchParams(response.data);

    res.locals.access_token = params.get('access_token');

    return next();
  }).catch((err) => next(err));
};

userController.getGithubUser = async (req, res, next) => {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `bearer ${res.locals.access_token}`,
    },
  });
  const data = await response.json();
  res.locals.github = data;
  next();
};

userController.updateAddress = async (req, res, next) => {
  const { username, address, zipcode } = req.body;

  try {
    const dataJ = await fetch(`https://usgeocoder.com/api/get_info.php?address=${address}&zipcode=${zipcode}&authkey=97c7224b2017426c36967c31af4c7645&format=json`);
    const data = await dataJ.json();
    const { state } = data.usgeocoder.address_info;
    const district = data.usgeocoder.jurisdictions_info.congressional_legislators.congressional_district_id.congressional_district_id_value;

    const repJson = await fetch(`https://api.propublica.org/congress/v1/members/house/${state}/${district}/current.json`, {
      method: 'GET',
      headers: {
        'x-api-key': 'czotF7qf5gL6JUwX03GdtucgNcSaJOOMgZsutEGF',
      },
    });
    const rep = await repJson.json();

    const senJson = await fetch(`https://api.propublica.org/congress/v1/members/senate/${state}/current.json`, {
      method: 'GET',
      headers: {
        'x-api-key': 'czotF7qf5gL6JUwX03GdtucgNcSaJOOMgZsutEGF',
      },
    });
    const senator = await senJson.json();

    res.locals.user = await User.findOneAndUpdate({ username }, {
      address, zipcode, senators: senator.results, rep: rep.results[0], state,
    }, (err, user) => {
      if (err) next(err);
    });
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userController;
