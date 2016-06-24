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

exports.log = (title, _arg, _arg1, _arg2) => {
  const pkg = title + ':\t';
  console.log(pkg, _arg);
};

// PATCH version bumping
exports.patch = (tag) => {
  const semver = require('semver');

  let newPatch = semver.inc(tag, 'patch');

  return '\nPATCH BUMP: ' + tag + ' ---> ' + newPatch + '\n';

};

// MINOR version bumping
exports.minor = (tag) => {
  const semver = require('semver');

  const newMinor = semver.inc(tag, 'minor');

  return newMinor;

};

// MINOR version bumping
exports.major = (tag) => {
  const semver = require('semver');

  const newMajor = semver.inc(tag, 'major');

  return newMajor;

};
