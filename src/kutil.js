exports.debug = (title, obj, status) => {
  const moment = require('moment');
  const colors = require('colors');
  // this will help format the json
  const utils = require('util');

  // Time formater
  const time = moment().format('ddd, MM/Do/YY, h:mm:ssa');

  const seperator = '\n----------------------------\n';

  // This is the payload for the append file function
  const pkg = '\n' + colors.yellow('[' + time + ']') + ' ' + colors.white(title) +
  ' ' + colors.gray(utils.format('%j', obj)) + ' ' + colors.blue(status) + seperator;

  const pkglog = '[' + time + ']' +
  ' ' + title + ' ' + utils.format('%j', obj) + status + seperator;


};
