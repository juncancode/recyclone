// images
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page4 = document.getElementById("page4");
// next 
var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var next3 = document.getElementById("next3");

// skip button 
var skip = document.getElementById("skip");

// back
var before1 = document.getElementById("back1");
var before2 = document.getElementById("back2");
var before3 = document.getElementById("back3");

// play button
var playBut = document.getElementById("play_but");
// Back button 
var last = document.getElementById("last");

next1.addEventListener("click",function(){
    console.log("test");
    page1.style.display = "none";
    page2.style.display = "block";
    back1.style.display = "none";
    back2.style.display = "block";
    next1.style.display = "none";
    next2.style.display = "block";
    skip.style.display = "none";
});

next2.addEventListener("click",function(){
    console.log("test");
    page2.style.display = "none";
    page3.style.display = "block";
    back2.style.display = "none";
    back3.style.display = "block";
    next2.style.display = "none";
    next3.style.display = "block";
});

next3.addEventListener("click",function(){
    page3.style.display = "none";
    page4.style.display = "block";
    back3.style.display = "none";
    next3.style.display = "none";
    last.style.display = "block";
    playBut.style.display = "block";
});

before2.addEventListener("click",function(){
     console.log("testing");
     page1.style.display = "block";
     page2.style.display = "none";
     next2.style.display = "none";
     next1.style.display = "block";
     before2.style.display = "none";
     before1.style.display = "block";
     skip.style.display = "block";
});

before3.addEventListener("click",function(){
     console.log("testing");
     page2.style.display = "block";
     page3.style.display = "none";
     next3.style.display = "none";
     next2.style.display = "block";
     before3.style.display = "none";
     before2.style.display = "block";
});

last.addEventListener("click",function(){
    page3.style.display = "block"; 
    page4.style.display = "none";
    last.style.display = "none";
    back3.style.display = "block";
    next3.style.display = "block";
    playBut.style.display = "none";
});


