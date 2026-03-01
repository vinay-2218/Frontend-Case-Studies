/* ===============================
   GLOBAL STATE
================================ */
var islogedin = false;

/* ===============================
   SECTION REFERENCES
================================ */
var home = document.getElementById("home");
var products = document.getElementById("products");
var aboutus = document.getElementById("aboutus");
var contact = document.getElementById("contact");
var login = document.getElementById("loginsection");
var signup = document.getElementById("signupsection");

/* ===============================
   NAVBAR BUTTONS
================================ */
var loginBtn = document.getElementById("loginbtn");
var signupBtn = document.getElementById("signupbtn");
var logoutBtn = document.getElementById("logoutbtn");

/* ===============================
   COMMON UTILITIES
================================ */
function hideAll() {
    home.style.display = "none";
    products.style.display = "none";
    aboutus.style.display = "none";
    contact.style.display = "none";
    login.style.display = "none";
    signup.style.display = "none";
}

function updateNavbar() {
    if (islogedin === true) {
        loginBtn.style.display = "none";
        signupBtn.style.display = "none";
        logoutBtn.style.display = "inline";
    } else {
        loginBtn.style.display = "inline";
        signupBtn.style.display = "inline";
        logoutBtn.style.display = "none";
    }
}

/* ===============================
   NAVIGATION FUNCTIONS
================================ */
function loadhome() {
    hideAll();
    home.style.display = "block";
    updateNavbar();
}

function loadproducts() {
    if (islogedin === false) {
        alert("Please login first");
        loginpage();
        return;
    }
    hideAll();
    products.style.display = "block";
    updateNavbar();
}

function loadabout() {
    hideAll();
    aboutus.style.display = "block";
    updateNavbar();
}

function loadcontact() {
    hideAll();
    contact.style.display = "block";
    updateNavbar();
}

function loginpage() {
    hideAll();
    login.style.display = "block";
    updateNavbar();
}

function signuppage() {
    hideAll();
    signup.style.display = "block";
    updateNavbar();
}

/* ===============================
   LOGIN LOGIC
================================ */
function verifylogin() {
    var name = document.getElementById("name1").value;
    var password = document.getElementById("password1").value;

    if (name === "basha" && password === "123") {
        islogedin = true;
        loadhome();
    } else {
        alert("Invalid username or password");
        loginpage();
    }
}

/* ===============================
   SIGNUP LOGIC
================================ */
function verifysignup() {
    if (verify()) {
        alert("Signup successful! Please login.");
        islogedin = false;   // ❗ NOT logged in
        loginpage();        // Go to login page
    } else {
        signuppage();       // Stay on signup page
    }
    updateNavbar();
}

function verify() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("confirm").value;

    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid email");
        return false;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        alert("Password must contain an uppercase letter");
        return false;
    }
    if (!/[0-9]/.test(password)) {
        alert("Password must contain a number");
        return false;
    }
    if (!/[!@#$%^&*]/.test(password)) {
        alert("Password must contain a special character");
        return false;
    }
    if (password !== cpassword) {
        alert("Passwords do not match");
        return false;
    }
    return true;
}

/* ===============================
   LOGOUT (FUNCTION ONLY)
================================ */
function logout() {
    islogedin = false;
    loadhome();
}

/* ===============================
   INITIAL LOAD
================================ */
loadhome();





 /*
 var islogedin =false;
        const login=document.getElementById("loginsection");
        const signup=document.getElementById("signupsection");
        const home=document.getElementById("home");
        const products=document.getElementById("products");
        const aboutus=document.getElementById("aboutus");
        const contact=document.getElementById("contact");
        const sections = {
    home: document.getElementById("home"),
    products: document.getElementById("products"),
    aboutus: document.getElementById("aboutus"),
    contact: document.getElementById("contact"),
    login: document.getElementById("loginsection"),
    signup: document.getElementById("signupsection")
};

        function navigate(section){
            for(let id of sections){
                document.getElementById(id).style.display="none";
            }
            if(islogedin===true){
                 document.getElementById("loginbtn").style.display="none";
                document.getElementById("signupbtn").style.display="none";
                document.getElementById("logoutbtn").style.display="inline";
            }
            document.getElementById(section).style.display="block";

        }/*
        function loadhome(){
            if(islogedin ===true){
                document.getElementById("loginbtn").style.display="none";
                document.getElementById("signupbtn").style.display="none";
                document.getElementById("logoutbtn").style.display="inline";
            }
            else{
                alert("plz login first");
            }
        }
        function loadproducts(){
            if(islogedin ===true){
                //load the products the in the bidy
            }
            else{
                alert("plz login first");
            }

        }
        function loginpage(){
            login.style.display="block";
            signup.style.display="none";
            home.style.display="none";
            products.style.display="none";
            aboutus.style.display="none";
            contact.style.display="none";  

        
        }
        function verifylogin(){
            const name= document.getElementById("name1").value;
            const password=document.getElementById("password1").value;
            if(name==="basha" && password==="123"){
                islogedin = true;
                homepage();
            }
            else{
                alert("invalid username or password")
            }
        }
        function signuppage(){
             login.style.display="none";
            signup.style.display="block";
            home.style.display="none";
            products.style.display="none";
            aboutus.style.display="none";
            contact.style.display="none";  

        }
        function verifysignup(){
            if(verify()){
                homepage();
            }
            else{
                signuppage();
            }

            
        }
        function verify(){
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let cpassword=document.getElementById("confirm").value;
        if (!email.includes("@")|| !email.includes(".")){
            alert("wrong email");
            return false;
        }
        if (password.length  <8){
            alert("Password must be at least 8 characters long");
            return false;
        }
        if(!/[A-Z]/.test(password)){
            alert("Password must include an uppercase letter");
            return false;
        }
        if(!/[0-9]/.test(password)){
             alert("Password must include a number");
             return false;
        }
        if (!/[!@#$%^&*]/.test(password)) {
             alert("Password must include a special character");
                 return false;
        }
        if (password !== cpassword) {
             alert("Passwords do not match");
            return false;
        }
            return true;

         }
      function homepage(){
             login.style.display="none";
            signup.style.display="none";
            home.style.display="block";
            products.style.display="none";
            aboutus.style.display="none";
            contact.style.display="none";  

        }*/