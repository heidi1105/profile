var words = ["I CODE. I CREATE."],
    el = document.getElementById('magic'),
    word_counter = 0,
    character_counter = 0;

function updateText()
{
    if(words[word_counter][character_counter] === " "){
        el.innerHTML += "&nbsp;";
    }else {

    el.innerHTML = el.innerHTML+words[word_counter][character_counter];
    }
                character_counter++;

    


    if(character_counter == words[word_counter].length+1)
    {
        word_counter++;     //choose a different word
        character_counter = 0;  //start over with the first character of the word
        el.innerHTML = '';  //set the html to be blank

        //if we're displaying the last word, go back to the first word
        if(word_counter == words.length)
            el.innerHTML = words[words.length-1]
            clearInterval(intervalId)

    }
}

var intervalId = setInterval(updateText,500);



// Get the modal
var modal1 = document.getElementsByClassName("modal")[0];
var modal2 = document.getElementsByClassName("modal")[1];
var modal3 = document.getElementsByClassName("modal")[2];

// Get the button that opens the modal
var btn1 = document.getElementById("box1");
var btn2 = document.getElementById("box2");
var btn3 = document.getElementById("box3");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];


// When the user clicks on the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
        modal1.style.display = "none";
}

span2.onclick = function() {
        modal2.style.display = "none";
}

span3.onclick = function() {
        modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

window.scroll(function (e) {
   if (!modal ) {
       e.preventDefault();
   }
})



