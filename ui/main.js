// counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
    // create a request object
    var request = new XMLHttpRequest();
    
    //capture the response & store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
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
        }
    };
    
    // Make the request
    request.open('GET', 'http://felixaraj.imad.hasura-app.io/counter', true);
    request.send(null);
   
    };
    // Submit name
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    var submit = document.getElementById('submit_btn');
    submit.onclick = function() {
        // create a request object
    var request = new XMLHttpRequest();
    
    //capture the response & store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
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
        }
    };
    
    // Make the request
    request.open('GET', 'http://felixaraj.imad.hasura-app.io/counter', true);
    request.send(null);
        //Capture a list of names & render it as a list
        var names = ['name1', 'name2', 'name3'];
        var list = '';
        for (var i=0; i<names.length; i++) {
            list +='<li>' + name[i] + '</li>' ;
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
        
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
