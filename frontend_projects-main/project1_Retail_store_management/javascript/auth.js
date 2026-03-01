window.onload =function(){
   const islogin=localStorage.getItem("isloggedin");
   if(islogin==="true"){
    document.getElementById("loginbtn").remove();
    document.getElementById("signupbtn").remove();
    document.getElementById("logourbtn").style.display="inline";

   }

}