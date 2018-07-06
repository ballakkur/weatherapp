const request = require('request');
let getWeather=(latitude,longitude) =>{
    request({
        url:`https://api.darksky.net/forecast/904c2db8ffe0627c216d15c0d068d47e/${latitude},${longitude}`,
        json:true
    },
    (error,response,body)=>{
        if(!error && response.statusCode ===200 ){        
            console.log("current temperature is:");
        console.log(JSON.stringify(((5/9)*(body.currently.temperature-32)),undefined,2))
        console.log(`but it feels like ${((5/9)*(body.currently.apparentTemperature-32))} celcius `)
        }else{
        console.log("some error occured")
        }
    })
}
module.exports={
    getWeather:getWeather
}