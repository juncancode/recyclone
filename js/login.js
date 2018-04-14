// Loading Script
            var loader;

            function myFunction(){
                loader = setTimeout(showPage, 3000);
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
     
// Saves user name
            