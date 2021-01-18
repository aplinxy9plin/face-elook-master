/* eslint-disable import/no-anonymous-default-export */
const get = async (api) => {
    const f = await fetch("http://78.140.15.84:8080/" + api)
    const json = await f.json()
    return json
}

const post = async (lastName, firstName, api) => {
//     try {
//     const response = await fetch("http://78.140.15.84:8080/" + api, {
//         lastName,
//         firstName
//     })
// } catch (e) {
//     alert(e)
}

export default {
    get,
    post,
}