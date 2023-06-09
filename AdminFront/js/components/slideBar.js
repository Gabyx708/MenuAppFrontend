
const sideBar = document.querySelector("#slidebar");

async function getSlideBar(){

    const response = await fetch('../../../slideBar.html');
    const hmlt = await response.text();
    sideBar.innerHTML = hmlt;
}


window.onload = () =>{
getSlideBar();
}
