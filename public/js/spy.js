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
});