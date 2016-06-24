const gulp = require('gulp');
const kutil = require('./src/kutil');
const package = require('./package.json');

gulp.task('patch', () => {
  let ver = package.version;
  console.log('current version -->' + ver);
  ver = kutil.patch(ver);
  console.log('\nbumped to -->' + ver);

});
