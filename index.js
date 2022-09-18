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
};
exports.getOauth2URL = async function getOauth2URL(target) {
    const app_id = target.client_id || target.app_id || target.application_id
    if (!app_id) return { result : "Missing application ID" }
    const redirect_url = target.redirect_url || target.callback_url || target.redirect || target.callback
    if (!redirect_url) return { result : "Missing callback url" }
    const url = `${rootURL}/oauth2/authorize?app_id=${app_id}&redirect_url=${redirect_url}`
    return { result : url }
}