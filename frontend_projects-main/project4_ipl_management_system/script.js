sections=["matches","pointstable","home","teamscontainer","teams-information","about"];
function hideall(){
    sections.forEach(id => {document.getElementById(id).style.display='none';

        
    });
}
function about(){
    hideall();
    document.getElementById("about").style.display='block';
}
function home(){
    hideall();
    document.getElementById("home").style.display='block';

}
function teams(){
    hideall();
    document.getElementById("teamscontainer").style.display='flex';
}
function players(){
    hideall();
    document.getElementById("teams-information").style.display='flex';
}
function matches(){
    hideall();
    document.getElementById("home").style.display='block';
}
function pointstable(){
    hideall();
    document.getElementById("pointstable").style.display='block';
}
/*
function navigate(team){
    hideall();
    document.getElementById(team).style.display='inline-block';
}
    */