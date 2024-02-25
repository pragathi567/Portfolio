var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
let sideMenu = document.getElementById("sideMenu");


function opentab(tabname){
for(let tabLink of tabLinks){
tabLink.classList.remove("active");
}
for(let tabContent of tabContents){
tabContent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active");
document.getElementById(tabname).classList.add("active-tab");
}

function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-200px";
}