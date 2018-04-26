// Loading Script
var loader;
var username = document.getElementById("user_name");
var enter = document.getElementById("enter");
var firstname = document.getElementById("name");
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

// Users have are rquired to put their name to move on
function login(){
    if (username.value == "") {
     message.innerHTML = "Please enter your name.";
    } else {
        enter.addEventListener("click",function(){
            window.location.href = "home.html";
            sessionStorage.setItem('name',username.value);
            firstname.innerText = sessionStorage.getItem('name');
            console.log(name)
        });
    }   
}

// Saves user name
            