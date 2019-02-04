const axios = require('axios'); 


const getClima = async(lat, lng) => {
    //axios

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=967e0eb14133823d12a8599f5f05ac21`);

    return resp.data.main.temp;
            
}

module.exports = { getClima }