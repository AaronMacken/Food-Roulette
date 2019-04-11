var arrow = document.querySelector("#myArrow");
var page2Intro = document.querySelector("#page2Intro");
arrow.addEventListener("click", function(){
    page2Intro.scrollIntoView();
});