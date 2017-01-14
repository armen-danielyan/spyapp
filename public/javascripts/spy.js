console.log(navigator);
console.log(history);
console.log(location);
console.log(screen);

var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var s = "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
            console.log(s);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

getLocation();
