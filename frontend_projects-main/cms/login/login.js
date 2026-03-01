function validate(){
    let name=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(name!="" && password!=""){
        if(name=="basha" && password=="12345"){
            alert("Login Successful");
            window.location.href="../cms/main/cms.html";
            alert("its working");
        }
        else{
            alert("Invalid Credentials");
        }
    }
    else{
        alert("Please enter the details");
    }

}