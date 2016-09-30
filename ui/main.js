// change the text of the main-text div

var element = document.getElementById('main-text');
element.innerHTML = 'Love & Peace to all';

// moving the image

var img = document.getElementById('oliver');

var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 50);  
};

img.onclick = function() {
    img.style.marginLeft = '100px';
};

console.log('Felix Arokiya Raj! God Bless You all');
