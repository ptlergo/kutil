exports.debug = (title, obj, status) => {
  const moment = require('moment');
  const colors = require('colors');
  const fs = require('fs');
  // this will help format the json
  const utils = require('util');
  // for versioning
  const semver = require('semver');

  // Time formater
  const time = moment().format('ddd, MM/Do/YY, h:mm:ssa');

  const seperator = '\n----------------------------\n';

  // This is the payload for the append file function
  const pkg = '\n' + colors.yellow('[' + time + ']') + ' ' + colors.white(title) +
  ' ' + colors.gray(utils.format('%j', obj)) + ' ' + colors.blue(status) + seperator;

  const pkglog = '[' + time + ']' +
  ' ' + title + ' ' + utils.format('%j', obj) + status + seperator;

  // if developer passes DEBUG=true it will show logging and will save to log file.
  if (process.env.DEBUG) {
    // using the file system to append to existing file with a flage of append.
    // passing in the package string.
    console.log(pkg);
    fs.appendFile('logs/logfile.log', pkglog, { flags: 'a' }, (err) => {
      if (err) throw err;
    });
  }
};
