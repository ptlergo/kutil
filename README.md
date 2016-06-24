#[kutil](https://www.npmjs.com/package/kutil)
Utility tool to debug and log values passed into it.

##Install
```
npm install kutil
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
Using `gulp` the tool can bump either major, minor, or patch.

After importing `package.json` file create a task Using `.patch()`, `.major()`, or `.minor()`.
```javascript
const package = ('./package.json')
gulp.task('patch', ()=> {
  kutil.patch(package.version);
});
```
