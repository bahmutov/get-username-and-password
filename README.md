# get-username-and-password

> Promise-returning CLI function that asks the user the username and password to login, or grabs from environment

[![NPM][get-username-and-password-icon] ][get-username-and-password-url]

[![Build status][get-username-and-password-ci-image] ][get-username-and-password-ci-url]
[![dependencies][get-username-and-password-dependencies-image] ][get-username-and-password-dependencies-url]
[![devdependencies][get-username-and-password-devdependencies-image] ][get-username-and-password-devdependencies-url]

    npm install --save get-username-and-password

To use

```js
getUsernameAndPassword('just an example')
  .then(function (info) {
    console.log('you entered username "%s" and password "%s"',
      info.username, info.password);
  });
```

    just an example
    ? your username / email gleb
    ? your password ****
    you entered username "gleb" and password "ffff"

Built on top of [inquirer](https://www.npmjs.com/package/inquirer).

Related: [inquirer-confirm](https://github.com/bahmutov/inquirer-confirm) - simple CLI yes / no as a promise.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/get-username-and-password/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[get-username-and-password-icon]: https://nodei.co/npm/get-username-and-password.png?downloads=true
[get-username-and-password-url]: https://npmjs.org/package/get-username-and-password
[get-username-and-password-ci-image]: https://travis-ci.org/bahmutov/get-username-and-password.png?branch=master
[get-username-and-password-ci-url]: https://travis-ci.org/bahmutov/get-username-and-password
[get-username-and-password-dependencies-image]: https://david-dm.org/bahmutov/get-username-and-password.png
[get-username-and-password-dependencies-url]: https://david-dm.org/bahmutov/get-username-and-password
[get-username-and-password-devdependencies-image]: https://david-dm.org/bahmutov/get-username-and-password/dev-status.png
[get-username-and-password-devdependencies-url]: https://david-dm.org/bahmutov/get-username-and-password#info=devDependencies
