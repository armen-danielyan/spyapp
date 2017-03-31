$(document).ready(function(){

    var loc;
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
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);
                }
            }
        })
    }, "jsonp");



    function showPosition(position) {
        loc = 'http://maps.google.com/maps?z=12&t=m&q=loc:' + position.coords.latitude + '+' + position.coords.longitude;
        console.log(loc);
        console.log(userID);

        $.ajax({
            url: '/loc',
            data: {
                id: userID,
                loc: loc
            },
            type: 'POST',
            success: function(res){
                userID = res.id;
                console.log(userID);
            }
        })
    }
});