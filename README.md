> A modern and easy login API which support rich method [letmeauth.xyz](https://letmeauth.xyz) 
<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/letmeauth" target="_blank"><img src="https://nodei.co/npm/letmeauth.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
  <p>
  <a href="https://nodejs.org/" target="_blank"><img alt="node-current" src="https://img.shields.io/node/v/letmeauth?logo=node.js&logoColor=white&style=flat-square"></a>
  <a href="https://letmeauth.xyz" target="_blank"><img alt="Website" src="https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=green&up_message=website%20is%20up&url=https%3A%2F%2Fletmeauth.xyz"></a>
  <img alt="npm" src="https://img.shields.io/npm/v/letmeauth">

  </p>
  </div>

## Requirement
- Node.js 16.9.0 or higher

## Installation
```npm
npm install letmeauth
```
## Example
```js
const letmeauth = require('letmeauth');

// check token and return user json
letmeauth.checkToken({ 
    token : '',
    app_id : ''  
})
.then((res)=>{
    console.log(res.result)
})

// get Oauth2 URL
letmeauth.getOauth2URL({
    app_id : '',
    callback : '' //https://localhost:3000/callback
}).then((res)=>{
    console.log(res.result)
})

```