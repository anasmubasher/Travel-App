/*function cityImage () {

    getCityName()
    .then(res => getCityImage(res))
    .then(data => updataUIImage(data))
}

// functions (GET, GET, UPDATEUI)
const getCityName = async () => {
    const req = await fetch('/cityWeather');

    try {
        const getCityName = await req.json();
        console.log(getCityName);
        return getCityName;
    } catch (e) {
        console.log("error", e);
    }
};

const getCityImage = async (data) => {
    const apiKey = "24424801-8737eb1c670dcf9ac7e799f73";

    const cityImage = data.hits[0].webformatURL;
    const baseURL = `https://pixabay.com/api/?key=${apiKey}&q=${cityImage}&image_type=photo&pretty=true`;

    const res = await fetch(baseURL);

    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log("error", e);
    }
};

const updataUIImage = async (data) => {
    console.log(data);

    try {
        console.log(cityWeather);
        document.getElementById('image').setAttribute("src", data.hits[0].webformatURL)
    } catch (e) {
        console.log("error", e);
    }
}

export { cityImage }*/