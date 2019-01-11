# requireAll(location)

##### [source](../lib/require-all/index.js)

`location` - path where modules are located

This function is great utility for index modules that require and export a slew of sibling modules.

For instance, you have `index.js` in your controllers directory and want to require all controller modules as functions off of the directories index, you can simply convert...

```javascript
module.exports = {
  moduleA: require('./moduleA'),
  moduleB: require('./moduleB'),
  moduleC: require('./moduleC'),
  moduleD: require('./moduleD'),
};
```

Into ...

```javascript
module.exports = require('functility').requireAll(__dirname);
```
