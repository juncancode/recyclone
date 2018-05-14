// Loading Script
var loader;
var username = document.getElementById("user_name");
var enter = document.getElementById("enter");
var message = document.getElementById("message");

function myFunction(){
    loader = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("logo").style.display = "block";
    document.getElementById("question").style.display = "block";
    document.getElementById("user_name").style.display = "block";
    document.getElementById("enter").style.display = "block";
    document.getElementById('lbody').style.backgroundColor = "#66c144";
} 

// Users have are required to put their name to move on
enter.addEventListener("click",login);

function login(){
    if (username.value == "") {
     message.innerHTML = "Please enter your name.";
    } else {
            sessionStorage.setItem('name',username.value);
      
            window.location.href = "home.html";
    }   
}
