exports.debug = (title, obj, status) => {
  const moment = require('moment');
  const colors = require('colors');
  const fs = require('fs');
  // this will help format the json
  const utils = require('util');
  // for versioning
  const utils = require('semver');

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

exports.patch = (tag) => {
  console.log(' current version v'+tag);
  const versionCurr = tag.split('.');
  versionCurr[2]++;
  const versionPatched = versionCurr.join('.');
  console.log(' bumped to v'+ versionPatched);
  return versionPatched;

}

exports.major = (tag) => {
  console.log(tag + ' major this mess');
}

exports.minor = (tag) => {
  console.log(tag + ' minor this mess');
}
