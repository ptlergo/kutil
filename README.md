#[kutil](https://www.npmjs.com/package/kutil)
Utility tool to debug and log values passed into it.

##Install
```
npm install kutil
```

###gulp
install gulp for version bumping
```
npm install -g gulp
```

## Getting Started
Create a logs directory in root.
`/logs/logfile.log`

### Debug Usage
Run project with the debug mode on.
```
DEBUG=true node src/your-entry-point
```
Require the 'kutil' package in file where needed.
```javascript
const util = require('kutil');
```
Pass in a string `title` and an object within the `debug()` method call.
```javascript
util.debug(title, obj, status);
```

### Log Usage
Require the 'kutil' package in file where needed.
```javascript
const util = require('kutil');
```
Pass in a string `title` and up to-but not limited to-4 arguments into the `log()` method call. The arguments will be logged out.
```javascript
util.log(title, arg, arg1, arg2);
```

###Version Bump Usage

After importing `package.json` file create a task.
Pass in the version number, and then a string of 'patch', 'minor', 'major' as the 2nd parameter.
```javascript
const package = ('./package.json')
gulp.task('patch', ()=> {
  kutil.bump(package.version, 'patch');
});
```
