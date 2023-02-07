// function display_location_enabled()
// {
// // Default message
// var str = "Geolocation is not supported in this browser";
// if (window.navigator.geolocation)
// {
// str = "Geolocation is supported in this browser";
// }
// alert (str);
// }
// function getLocation()
// {
// if (window.navigator.geolocation) {
// navigator.geolocation.getCurrentPosition(showPosition);
// }
// else{
// alert ("Geolocation is not supported in this browser.");
// }
// }
// function showPosition(position)
// {
// document.writeln("Latitude: " + position.coords.latitude + "\n" +"Longitude: " + position.coords.longitude);
// }

// function getLocation() {
//     function showPosition(position)
//     {
//     alert("Latitude: " + position.coords.latitude + "\n" +
//     "Longitude: " + position.coords.longitude);
//     }
//     function errorHandler(error) {
//     switch (error.code) {
//     case error.PERMISSION_DENIED:
//     alert ("You have denied access to your position.");
//     break;
//     case error.POSITION_UNAVAILABLE:
//     alert ("There was a problem getting your position.");
//     break;
//     case error.TIMEOUT:
//     alert ("The application has timed out attempting to get your position.");
//     break;
//     }
//     }}