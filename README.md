# kutil
Utility tool to debug and log values passed into it.

## Getting Started
Create a logs directory in root.
* /logs/logfile.log


### Debug Usage
* Pass in a string title and a object.
```
const util = require('path/to/lib/util');

util.debug(title, obj);
```

### Log Usage
* Pass in title and a second argument you want to log out.
* Pass in up to 4 arguments including the title.
** util.log(title, arg, arg1, arg2);
```
const util = require('path/to/lib/util');

util.log(title, arg);
```
