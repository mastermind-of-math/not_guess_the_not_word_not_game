playerone = localStorage.getItem("playerone");
playertwo = localStorage.getItem("playertwo");

playerone_score = 0;
playertwo_score = 0;

document.getElementById("player1_score").innerHTML = playerone_score;
document.getElementById("player2_score").innerHTML = playertwo_score;

document.getElementById("playerone").innerHTML = playerone + " : ";
document.getElementById("playertwo").innerHTML = playertwo + " : ";

document.getElementById("playerQuestion").innerHTML = "Question : " + playerone;
document.getElementById("playerAnswer").innerHTML = "Answer : " + playertwo;

scoreadd1 = 1;
scoreadd2 = 1;

function send(){
    get_word = document.getElementById("word").value;
    real_word = get_word.toLowerCase();

    charAt1 = real_word.charAt(1);

    math_var = Math.floor(real_word.length/2)
    charAt2 = real_word.charAt(math_var)

    charAt3 = real_word.charAt(real_word.length-1);

    removeone = real_word.replace(charAt1, "_");
    removetwo = removeone.replace(charAt2, "_");
    guess_word = removetwo.replace(charAt3, "_");

    question_word = "<h4 id='word_display'>Question : " + guess_word + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_box' style='width:500px; height:50px;'>";
    check_button= "<br><br><button class='btn btn-info' onclick='checkguess()'>Check Guess</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question = "player1";
answer = "player2";

function checkguess(){
    get_word = document.getElementById("input_box").value;
    fake_word = get_word.toLowerCase();

    if(fake_word == real_word){
        if(answer == "player1"){
            playerone_score = playerone_score + scoreadd1;
            document.getElementById("player1_score").innerHTML = playerone_score;
        } else if(answer == "player2"){
            playertwo_score = playertwo_score + scoreadd2;
            document.getElementById("player2_score").innerHTML = playertwo_score;
        }
    }

    if(question == "player1"){
        question = "player2"
        document.getElementById("playerQuestion").innerHTML = "Question : " + playertwo;
    } else if(question == "player2"){
        question = "player1"
        document.getElementById("playerQuestion").innerHTML = "Question : " + playerone;
    } 

    if(answer == "player1"){
        answer = "player2"
        document.getElementById("playerAnswer").innerHTML = "Answer : " + playertwo;
    } else if(answer == "player2"){
        answer = "player1"
        document.getElementById("playerAnswer").innerHTML = "Answer : " + playerone;
    }

    document.getElementById("output").innerHTML = "";
}

function hi(){
    var promptans = Number(prompt("Write here!"));
    if(promptans == null){
        promptans = 1;
    }
    if(answer == "player1"){
        scoreadd1 = promptans;
    } else if(answer == "player2"){
        scoreadd2 = promptans;
    }
}