const CLIENT = require('./CONST/CLIENT_CONSTS.js')
const request = require('request')

const headers = {
    Authorization : `Token ${CLIENT.SERVER_TOKEN}`,
    'Accept-Language': 'en_US',
    'Content-Type': 'application/json'
}

request.get({
    headers,
    url:'https://api.uber.com/v1.2/estimates/price?start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075',
    },
    (error, response,body)=>{
        console.dir(JSON.parse(body));
    } 
)