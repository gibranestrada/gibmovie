const Axios = require('axios');
require('dotenv').config()
exports.handler = async (event, context, callback) => {
  const pass = (body) => {callback(null, {statusCode: 200, body: JSON.stringify(body)})}
  const API_KEY=process.env.API_KEY
    const MOVIE_API_URL = `${event.queryStringParameters.first}${API_KEY}${event.queryStringParameters.second}`;
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