/*
    Assignment #4
    Colby Morgan 0764405
*/

$(function () {
    // your code here

    //<script src="modernizr-custom.js"></script>
    //Do i have to place this in my html?

    $(document).ready(function(){

        localStorage.setItem(firstLatitude, 42);
        localStorage.setItem(firstLongitude, -82);

        
        //checks if their is geolocation
        //console.log(modernizr.geolocation);
        if(modernizr.geolocation){
            //displays current location in div#locationhere
            $('div#locationhere').html('<p>Current Latitude: ' + position.coords.latitude + '<br> Current Longitude: ' + position.coords.longitude + '</p>');

            //checks if local strorage exists, if it does, displays it on the page
            if(localStorage.getItem(firstLogitude) != false && localStorage.getItem(firstLatitude) != false){

                //displays last known location, welcomes back, and compares locations
                $('div#locationhere').after('<p>Previous Latitude: ' + localStorage.getItem("firstLatitude") + '<br> Previous Longitutde: ' + localStorage.getItem("firstLongitude") + '</p>');
                $('div#locationhere').after('<h2>Weclome Back! Your previous data has been loaded!');
                var distance = calcDistanceBetweenPoints(localStorage.getItem("firstLatitude"), localStorage.getItem("firstLongitude"), position.coords.latitude, position.coords.logitude);
                $('div#locationhere').after('<p>You have travelled ' + distance + 'm!</p>');

            } else {
                //welcome user for first time and store position
                $('div#locationhere').after('<h2>Welcome to the distance calculator!');

            }

        } else {
            console.log("ERROR: You must allow geolocation.")
        }
    });




    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


