const Axios = require('axios');
require('dotenv').config()
exports.handler = async (event, context, callback) => {
  const pass = (body) => {callback(null, {statusCode: 200, body: body})}
  const API_KEY=process.env.API_KEY
    const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`;
    await Axios(MOVIE_API_URL)
        .then(res=>{pass(res.data)})
//    let data = await response.json()
//    await pass(data)
//  } catch(err) {
//      let error = {
//        statusCode: err.statusCode || 500,
//        body: JSON.stringify({error: err.message})
//  }
//   await pass(error)
 
}