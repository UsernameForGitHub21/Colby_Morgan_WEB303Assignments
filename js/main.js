// WEB303 Assignment 2


// for convert.html
$('a#convert').on('click', function(){

$('div#content').hide();

var xhr = new XMLHttpRequest;
xhr.open('GET', 'convert.html', true);
xhr.onload = function(){
        if(this.status === 200){
        let el = document.getElementById("content");
        el.innerHTML=xhr.responseText;
    }
}
xhr.send();

$('div#content').fadeIn();

});

//for prospect
$('a#prospect').on('click', function(){

    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'prospect.html', true);
    xhr.onload = function(){
            if(this.status === 200){
            let el = document.getElementById("content");
            el.innerHTML=xhr.responseText;
        }
    }
    xhr.send();
    
    $('div#content').fadeIn();
    
    });


//for retain
$('a#retain').on('click', function(){

    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'retain.html', true);
    xhr.onload = function(){
            if(this.status === 200){
            let el = document.getElementById("content");
            el.innerHTML=xhr.responseText;
        }
    }
    xhr.send();

    $('div#content').fadeIn();  
    
    });