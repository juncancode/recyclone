// Loading Script
var loader;
var username = document.getElementById("user_name");
var enter = document.getElementById("enter");
var firstname = document.getElementById("name");

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
    username.value = "Please Enter your name";
    } else {
        enter.addEventListener("click",function(){
           localStorage.setItem('name',username.value)
            var name = localStorage.getItem('name')
            console.log(name)
            window.location.href = "home.html";
        });
    }   
}

// Saves user name
            