const apikey='b151fecdc547ef98fa8cb0d27691b9eb';
const getWeatherData = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
    
}
export default getWeatherData;