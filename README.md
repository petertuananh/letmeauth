> A modern and easy login API which support rich method [letmeauth.xyz](https://letmeauth.xyz) 
## Installation

<details>
<summary>Mac Prerequisites</summary>
<br>

```bash
1. Install nodejs
2. Run `npm i letmeauth` in terminal

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