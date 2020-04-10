const Axios = require('axios');
require('dotenv').config()
exports.handler = async (event, context, callback) => {
  const pass = (body) => {callback(null, {statusCode: 200, body: body})}
  const API_KEY=process.env.REACT_APP_API_KEY
    const MOVIE_API_URL = `${event.first}${API_KEY}${event.second}`;
    await Axios(MOVIE_API_URL)
        .then(res=>{console.log(res);pass(res)})
//    let data = await response.json()
//    await pass(data)
//  } catch(err) {
//      let error = {
//        statusCode: err.statusCode || 500,
//        body: JSON.stringify({error: err.message})
//  }
//   await pass(error)
 
}