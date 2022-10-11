//first function getJson
function getJson(){
    var team = $.getJSON("../team.json")

    team.each(function(){
        $('div#team').html("<h2>" + team.name +"</h2><br><h5>" + team.position +"</h5><br><h2>" + team.bio +"</h2>");
})}

//second funtion ajax
function ajax(){
    $('div#team').html("<p>Loading...</p>");
   var team2 = $.ajax("../team.json");

    //if fails
    team2.fail(function(){
        $('div#team').html('<p>ERROR: the content could not be retrieved...</p>');
    });

    //loads content
    team.done.each(function(){
        $('div#team').html("<h2>" + team.name +"</h2><br><h5>" + team.position +"</h5><br><h2>" + team.bio +"</h2>");
})}


$(document).ready(function(){
    getJson();
});