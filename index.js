const yargs = require('yargs');
const location = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
    .options({
        a:{
            description:"Address to fetch the weather",
            alias:'a',
            demand:true,
            string:true
        }
    })
    .help()
    .argv;
    console.log(argv);
    let asyncFunc = async ()=>{
        try{
            let results = await location.getLocation(argv.a)
            console.log(results);
weather.getWeather(results.latitude,results.longitude);
        }catch(err){
            console.log(err)
        }
    }
     asyncFunc();   
      

     
