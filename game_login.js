function playGame(){
    playerone = document.getElementById("inputname_1").value;
    playertwo = document.getElementById("inputname_2").value;
    if(playerone.length < 3){
        document.getElementById("warning-1").style.visibility = "visible";
    }
    if(playertwo.length < 3){
        document.getElementById("warning-2").style.visibility = "visible";
    } else {
        
    localStorage.setItem("playerone", playerone);
    localStorage.setItem("playertwo", playertwo);

    window.location = "gamepage.html";
    }
}