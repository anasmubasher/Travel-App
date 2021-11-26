function weatherForcast() {

    getLatLngg()
    .then(data => {
        console.log(data);
        getWeatherData(data)
        .then(data => {
            console.log('We can access data here');
            console.log(data);
            getCityImage(data);
        })
    })
}

// Get the lat and lng from the server
const getLatLngg = async () => {
    const res = await fetch('/all');

    try {
        const latLng = await res.json();
        console.log(latLng);
        return latLng;
    } catch (e) {
        console.log("error", e);
    }
};

// Fetch the weather data and manipulate the dom
const getWeatherData = async (data) => {
    const apiKey = '7ae084a19a1340c997dce57edc354e84';

    console.log(data);
    const lat = data[data.length-1].south;
    const lng = data[data.length-1].north;

    const res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&days=1&key=${apiKey}`);

    try {
        const data = await res.json();
        console.log(data);
        document.getElementById('high-temp').innerHTML = `<span>high_temp: ${data.data[0].high_temp}</span>`;
        document.getElementById('low-temp').innerHTML = `<span>low_temp: ${data.data[0].low_temp}</span>`;
        return data;
    } catch (e) {
        console.log("error", e);
    }
};

// Get the city image and insert it in the dom
const getCityImage = async (data) => {
    const apiKey = "24424801-8737eb1c670dcf9ac7e799f73";

    const cityName = data.city_name;
    const baseURL = `https://pixabay.com/api/?key=${apiKey}&q=${cityName}&image_type=photo&pretty=true`;

    const res = await fetch(baseURL);

    try {
        const data = await res.json();
        console.log(data);
        document.getElementById('img').setAttribute("src", data.hits[0].webformatURL);
    } catch (e) {
        console.log("error", e);
    }
};

export { weatherForcast }