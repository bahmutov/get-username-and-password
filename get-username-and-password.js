var Promise = require('bluebird');
var inq = require('inquirer');

function merge(answers, values) {
  var merged = answers;
  Object.keys(values).forEach(function (key) {
    if (!merged[key]) {
      merged[key] = values[key];
    }
  });
  return merged;
}

function getUsernameAndPassword(options) {
  if (typeof options === 'string') {
    options = {
      title: options
    };
  }
  options = options || {};
  var environmentValues = {
    username: process.env.USERNAME || options.username,
    password: process.env.PASSWORD || options.password
  };
  var questions = [];

  if (!environmentValues.username) {
    questions.push({
      name: 'username',
      type: 'input',
      message: 'your username / email'
    });
  }
  if (!environmentValues.password) {
    questions.push({
      name: 'password',
      type: 'password',
      message: 'your password'
    });
  }

  if (environmentValues.username && environmentValues.password) {
    return Promise.resolve(environmentValues);
  }

  if (options.title && typeof options.title === 'string') {
    console.log(options.title);
  }
  return new Promise(function (resolve, reject) {
    inq.prompt(questions, function (answers) {
      var info = merge(answers, environmentValues);
      resolve(info);
    });
  });
}

module.exports = getUsernameAndPassword;

if (!module.parent) {
  getUsernameAndPassword('just an example')
    .tap(function (info) {
      console.log('you entered username "%s" and password "%s"',
        info.username, info.password);
    })
    .done();
}
