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
  
## Note
#### ✅ 프로젝트에서 `.prettierrc` 파일은 생략해도 됩니다.
ESLint의 Prettier를 사용하는 방식으로 별도의 Prettier 설정 파일은 생성하지 않아도 됩니다.

만약 파일 저장 시 자동 포맷이 적용되지 않는다면, 기본 포맷터를 ESLint로 설정해야 합니다.

<details>
 <summary>[ VSCode인 경우 ]</summary>
 <br />
 
 1. VSCode에서 `code > prefernces > settings` 혹은 `command + ,` 단축키를 누른다.
    
    <img width="500" alt="image" src="https://github.com/huraypositive/eslint-config/assets/52408122/e1809e9f-00f2-418e-8ff4-1803f12d3550">
  
 2. `default formmatter`를 검색한 뒤, 해당 옵션을 `ESLint`로 설정한다.
    
    <img width="700" alt="image" src="https://github.com/huraypositive/eslint-config/assets/52408122/9d3dd9d1-ee1d-4029-aae2-c6543467e114">

</details>

<details>
 <summary>[ Webstorm인 경우 ]</summary>
 <br />
  
 1. 설정 > eslint > 자동 eslint --fix실행 > 저장 시 모든 액션 > prettier실행 체크해제 
   
   <img width="500" alt="image" src="https://github.com/huraypositive/eslint-config/assets/52408122/b2c01ca8-51d0-43ab-a767-5d102192a4e8">
   <img width="500" alt="image" src="https://github.com/huraypositive/eslint-config/assets/52408122/aac9f653-9b5a-42e6-afb9-7a686ca3b5fa">

</details>
