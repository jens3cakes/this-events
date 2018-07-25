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
    console.log("hello")
   
   }






/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var secMenu = document.querySelectorAll("menu")
for (var i = 0; i<secMenu.length; i++) {
    secMenu[i].addEventListener("toggle",reveal);
}
function reveal() {
console.log("hello");
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
var thumbsDown = document.querySelectorAll(".thumb");
for( var i = 0;i<thumbsDown.length; i++){
thumbsDown[i].addEventListener("click",tally)
//console.log("Hello");
}
function tally(){
var count = 0;{
      if(thumbsDown[i]=== true);{
    console.log(count ++);
      }
}
}