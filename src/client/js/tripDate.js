function tripDate () {
    const tripStart = new Date(document.getElementById('start').value).getTime();
    const tripEnd = new Date(document.getElementById('end').value).getTime();

// Get today's date and time
let now = new Date().getTime();

 // Find the distance between now and the trip date
let distance = tripStart - now;
var tripLength = tripEnd - tripStart;

// Time calculations for days, hours, minutes and seconds
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

let tripDays = Math.floor(tripLength / (1000 * 60 * 60 * 24));

console.log(`${days}d ${hours}h ${minutes}m`);
console.log(`${tripDays}d`);

document.getElementById("remainTime").innerHTML = `${days}d ${hours}h ${minutes}m`;
document.getElementById("tripLength").innerHTML = `${tripDays}d`;
}

export { tripDate }