var inq = require('inquirer');

function getUsernameAndPassword(title) {
  var questions = [{
    name: 'email',
    type: 'input',
    message: 'your username / email'
  }, {
    name: 'password',
    type: 'password',
    message: 'your password'
  }];

  if (title && typeof title === 'string') {
    console.log(title);
  }
  return new Promise(function (resolve) {
    inq.prompt(questions, function (answers) {
      resolve({
        username: answers.email,
        password: answers.password
      });
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
