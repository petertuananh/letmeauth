const axios = require("axios");
const rootURL = 'https://letmeauth.xyz'

exports.checkToken = async function checkToken(target) {
    if (!target.token) return { result : "Missing token" }
    const app_id = target.client_id || target.app_id || target.application_id
    if (!app_id) return { result : "Missing application ID" }
    const res = await axios.default.get(`${rootURL}/oauth2/checktoken?token=${target.token}&app_id=${app_id}`)
    if (res.data == 'Unknown application!') {
        return { result : "Invalid application ID" }
    } else if (res.data == 'Unknown token!') {
        return { result : "Invalid access token" }
    } else if (res.data.id) {
        return { result : res.data }
    }
}