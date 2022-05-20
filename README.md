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
    'huray/prettier'
  ]
}
```

#### Javascript + React
```js
module.exports = {
  extends: [
    'huray',
    'huray/react',
    'huray/prettier'
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
    'huray/prettier'
  ]
}
```
#### tsconfig.json
```
"include": [
    ".eslintrc.js",
    "src"
  ]
  ```
  
### 프로젝트에 .prettierrc 파일 추가해주세요
 
  ```
 {
    "singleQuote": true,
    "semi": true,
    "useTabs": false,
    "tabWidth": 2,
    "trailingComma": "all",
    "printWidth": 80,
    "arrowParens": "always"
}
```

