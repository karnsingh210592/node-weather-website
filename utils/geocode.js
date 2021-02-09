const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoia2FybnNpbmdoMjEwNTkyIiwiYSI6ImNra3F2OW83cjBtazcyd3Bhdm95OTdqZmQifQ.a0LQw3mstcUxRdQgQwdFJw&limit=1`;

    request({url , json : true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to location service!', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location. Please modify to continue', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
