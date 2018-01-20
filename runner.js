const fetch_price = require('./fetch_data.js');

fetch_price({start_lat:37.7752315, start_long:-122.418075, end_lat: 37.7752415, end_long:-122.518075}, 
(error, response,body) => console.dir(JSON.parse(body)));