function cityInfo() {
    const cityName = document.getElementById("country").value;
    const userName = 'AnasMubasher';

    const baseURL = `http://api.geonames.org/wikipediaSearchJSON?formatted=true&q=${cityName}&maxRows=1&username=${userName}&style=full`;    

    getLatLng(baseURL)
    .then(data => {
        console.log(data);
        postData('/addData', {
            countryCode: data.geonames[0].countryCode,
            lat: data.geonames[0].lat,
            lng: data.geonames[0].lng
        })
    })
}

// Get the lat lng data 
const getLatLng = async (baseURL) => {
    const res = await fetch(baseURL);

    try {
        const data = await res.json();
        console.log(data);
        return data;

    } catch (e) {
        console.log("error", e);
    }

};

// Post the lat lng data to the server
const postData = async (url = "", data = {}) => {
    console.log(data);

    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch (e) {
        console.log("error", e);
    }
};

export { cityInfo }
export { postData }