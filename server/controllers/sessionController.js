const fetch = require('node-fetch');
const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  const { access_token } = req.locals;

  let id;

  if (access_token) {
    id = access_token;
  } else {
    id = req.cookies.ssid;
  }

  Session.findOne({ cookieId: id }, (err, session) => {
    if (err) return next(err);
    if (!session) return res.redirect('/login');
    next();
  });
};

sessionController.startSession = (req, res, next) => {
  const { _id } = res.locals.user;
  const { access_token } = res.locals;
  if (Session.findOne({ cookieId: _id, access_token })) return next();
  Session.create({ cookieId: _id, access_token });
  next();
};

module.exports = sessionController;
