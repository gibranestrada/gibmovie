const Axios = require('axios');
const queryString = require('query-string');
require('dotenv').config()
exports.handler = async (event, context, callback) => {
  const pass = (body) => {callback(null, {statusCode: 200, body: JSON.stringify(body)})}
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const API_KEY=process.env.API_KEY
  const params = queryString.parse(event.body);
  const MOVIE_API_URL = `${params.params.first}${API_KEY}${params.params.second}`;
    await Axios(MOVIE_API_URL)
        .then(res=>{pass(res.data)})
        .catch(e=>{console.log(e)})
//    let data = await response.json()
//    await pass(data)
//  } catch(err) {
//      let error = {
//        statusCode: err.statusCode || 500,
//        body: JSON.stringify({error: err.message})
//  }
//   await pass(error)
 
}