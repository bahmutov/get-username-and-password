var inq = require('inquirer');

function merge(answers, values) {
  var merged = JSON.parse(JSON.stringify(answers));
  Object.keys(values).forEach(function (key) {
    merged[key] = values[key];
  });
  return merged;
}

function getUsernameAndPassword(title) {
  var environmentValues = {};
  var questions = [];

  if (process.env.USERNAME) {
    environmentValues.username = process.env.USERNAME;
  } else {
    questions.push({
      name: 'username',
      type: 'input',
      message: 'your username / email'
    });
  }
  if (process.env.PASSWORD) {
    environmentValues.password = process.env.PASSWORD;
  } else {
    questions.push({
      name: 'password',
      type: 'password',
      message: 'your password'
    });
  }

  if (environmentValues.username && environmentValues.password) {
    return Promise.resolve(environmentValues);
  }

  if (title && typeof title === 'string') {
    console.log(title);
  }
  return new Promise(function (resolve) {
    inq.prompt(questions, function (answers) {
      var info = merge(answers, environmentValues);
      resolve(info);
    });
  });
}

module.exports = getUsernameAndPassword;

if (!module.parent) {
  getUsernameAndPassword('just an example')
    .then(function (info) {
      console.log('you entered username "%s" and password "%s"',
        info.username, info.password);
    });
}
