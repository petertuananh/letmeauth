const axios = require("axios");
const rootURL = 'https://letmeauth.xyz'

exports.checkToken = async function checkToken(target) {
    let result = {}
    if (!target.token) {
        result = 'Missing token'
        return result
    }
    const app_id = target.client_id || target.app_id || target.application_id
    if (!app_id) {
        result = 'Missing application ID'
        return result
    }
    try {
        
        await axios.default.get(`${rootURL}/oauth2/checktoken?token=${target.token}&app_id=${app_id}`)
            .catch(e => {
                return { result: `Error : ${e}` }
            })
            .then((res) => {
                if (res.data == 'Unknown application!') {
                    result = "Invalid application ID"
                } else if (res.data == 'Unknown token!') {
                    result = "Invalid access token"
                } else if (res.data.id) {
                    result = res.data
                }
            })
    } catch (error) {
        result = `Error : ${error}`
        
    }
    return result
};
exports.getOauth2URL = async function getOauth2URL(target) {
    const app_id = target.client_id || target.app_id || target.application_id
    if (!app_id) return { result: "Missing application ID" }
    const redirect_url = target.redirect_url || target.callback_url || target.redirect || target.callback
    if (!redirect_url) return { result: "Missing callback url" }
    const url = `${rootURL}/oauth2/authorize?app_id=${app_id}&redirect_url=${redirect_url}`
    return { result: url }
}