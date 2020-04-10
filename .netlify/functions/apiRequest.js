const Axios = require('axios');
require('dotenv').config()
exports.handler = async (event, context, callback) => {
  const pass = (body) => {callback(null, {statusCode: 200, body: JSON.stringify(body)})}
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const API_KEY=process.env.API_KEY
  const params = JSON.parse(event.body);
  const MOVIE_API_URL = `${params.first}${API_KEY}${params.second}`;
    await Axios(MOVIE_API_URL)
        .then(res=>{pass(res.data)})
        .catch(e=>{console.log(e)})
}