// counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // Take some action
    if (request.status === 200){
        var counter = request.responseText;
        counter = counter + 1;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
         }
            {
             //not done yet
            }
    
    // Make the request
    request.open('GET', 'http://felixaraj.imad.hasura-app.io/counter', true);
    request.send(null);
   
    };

// change the text of the main-text div

/* var element = document.getElementById('main-text');
element.innerHTML = 'Love & Peace to all'; */

// moving the image

/*var img = document.getElementById('oliver');

var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 40);  
};

/* img.onclick = function() {
    img.style.marginLeft = '100px';
}; */

/*console.log('Felix Arokiya Raj! God Bless You all');*/
