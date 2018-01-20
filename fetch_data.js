
const CLIENT = require('./CONST/CLIENT_CONSTS.js')
const request = require('request')

const headers = {
    Authorization : `Token ${CLIENT.SERVER_TOKEN}`,
    'Accept-Language': 'en_US',
    'Content-Type': 'application/json'
}
var fetch_data = ({start_lat, start_long, end_lat, end_long},callback ) => {
    var url = `https://api.uber.com/v1.2/estimates/price?start_latitude=${start_lat}&start_longitude=${start_long}&end_latitude=${end_lat}&end_longitude=${end_long}`
    request.get({
        headers,
        url
        },
        (error, response,body)=>{
            // console.dir(JSON.parse(body));
            callback(error,response, body)
        } 
    )
};
module.exports = fetch_data;
