const request = require('request');
let getLocation = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("some error ouccured");
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject("invalid address");
            }
            else if (body.status === 'OK') {
                resolve( {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }

        });
    })

}
module.exports = {
    getLocation: getLocation
}
