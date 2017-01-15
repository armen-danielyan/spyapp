function getLocation() {
    var loc = '';
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            loc = position.coords.latitude + ', ' + position.coords.longitude;
        });
    }
    return loc;
}

$(document).ready(function(){
    var userID = 0;

    $.get("https://ipinfo.io", function(response) {
        $.ajax({
            url: '/ajax',
            data: {
                screen: screen.width + ' x ' + screen.height,

                city: response.city,
                country: response.country,
                hostname: response.hostname,
                ip: response.ip,
                org: response.org,
                region: response.region
            },
            type: 'POST',
            success: function(res){
                userID = res.id;
                console.log(userID);
            }
        })
    }, "jsonp");

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
});