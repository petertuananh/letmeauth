const axios = require("axios");
const rootURL = 'https://letmeauth.xyz'
const querystring = require('node:querystring');

exports.checkToken = async function checkToken(target) {
    let result = {}
    let error = {}
    let user = {}
    const app_id = target.client_id || target.app_id || target.application_id
    const app_secret = target.client_secret || target.secret
    await axios.default.get(`${rootURL}/oauth2/checktoken?token=${target.token}&app_id=${app_id}&client_secret=${app_secret}`)
        .catch(e => {
            error = e
        })
        .then((res) => {
            if (!res) return
            if (res.data.code) {
                error = { code: res.data.code, msg: res.data.msg } || null
            } else if (res.data.id) {
                user = res.data || null
            }
        })
    if (error.code) result.error = error || null
    if (user) result.user = user || null
    return result
};
exports.getOauth2URL = async function getOauth2URL(target) {
    let result = {}
    const redirect_url = target.redirect_url || target.callback_url || target.redirect || target.callback
    const app_id = target.client_id || target.app_id || target.application_id
    const url = `${rootURL}/oauth2/authorize?app_id=${app_id}&scopes=${querystring.escape(target.scopes)}&redirect_url=${redirect_url}`
    result.url = url || null
    return result
}
