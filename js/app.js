//Secret Menu Challenge
//Add event listeners to the following:

//console.log("hello World");
/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var findMenu = document.querySelectorAll(".navi");
//console.log(findMenu);
for (var i =0; i<findMenu.length; i++) {
    //console.log(findMenu[i]);
findMenu[i].addEventListener("click",showSecret);
}

function showSecret() {
    var childElem = this.querySelectorAll(".inner")[0];
    if ( childElem.style.display=== "block") {
        childElem.style.display = "none";
    }else {
        childElem.style.display = "block";
    }
     
   
   }






/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var secMenu = document.getElementsByClassName("name")
for (var i = 0; i<secMenu.length; i++) {
    secMenu[i].addEventListener("mouseover",reveal);
}
function reveal() {
var sMen = this.querySelectorAll(".menu")[0];
if (sMen.style.display === "none") {
    sMen.style.display = "block";
}else {
    sMen.style.display = "none";
}
} 

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
var thumbsDown = document.getElementsByClassName("thumb");
for( var i = 0;i<thumbsDown.length; i++){
thumbsDown[i].addEventListener("click",tally)
//console.log("Hello");
var counter = document.createElement("div");
counter.className = "hater";
thumbsDown[i].appendChild(counter);
}
function tally(){
var haterCount = this.querySelectorAll(".hater")[0];
//console.log(haterCount);
haterCount.innerHTML++;
      }


