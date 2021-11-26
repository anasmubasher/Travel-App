const generate = document.getElementById('generate');
generate.addEventListener('click', handleSubmit);


async function handleSubmit (e) {
    e.preventDefault();
    await Client.cityInfo();
    await Client.tripDate();
    await Client.weatherForcast();
}

export { handleSubmit }