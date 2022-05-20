# eslint-config-huray
[![npm version](https://badge.fury.io/js/eslint-config-huray.svg)](https://badge.fury.io/js/eslint-config-huray)

ESLint configurations based on huray style guide

## Installation
```
yarn add --dev eslint-config-huray
```

## Usage
.eslintrc.js

### Javascript
```javascript
module.exports = {
  extends: [
    'huray'
  ]
}
```

#### Javascript + React
```js
module.exports = {
  extends: [
    'huray',
    'huray/react',
  ],
}
``` 


#### Typescript + React
```javascript
module.exports = {
  extends: [
    'huray',
    'huray/typescript',
    'huray/react',
  ]
}
```
