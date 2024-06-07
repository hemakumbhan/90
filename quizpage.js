pl1name=localStorage.getItem("user1");
document.getElementById("p1").innerHTML= pl1name+":";
pl2name=localStorage.getItem("user2");
document.getElementById("p2").innerHTML= pl2name+":";
var p1_score=0; 
var p2_score=0;

function send(){
    console.log("send");
    no1 = document.getElementById("add1").value;
    no2 = document.getElementById("add2").value;
    actual_answer = parseInt(no1)*parseInt(no2);
    question_no="<h4>"+no1+"X"+no2+"</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_no+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("add1").value="";
    document.getElementById("add2").value="";
}

question_turn="player1";
document.getElementById("Question").innerHTML = "Question Turn -" + pl1name;
answer_turn="player2";
document.getElementById("answer").innerHTML = "Answer Turn -" + pl2name;

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            p1_score = p1_score + 1;
            document.getElementById("p1score").innerHTML = p1_score;
        }

        else {
            p2_score = p2_score + 1;
            document.getElementById("p2score").innerHTML = p2_score;
        }

    }

    if (question_turn == "player2") {
        question_turn = "player1";
        document.getElementById("Question").innerHTML = "Question Turn -" + pl1name;
    }

    else {
        question_turn = "player2";
        document.getElementById("Question").innerHTML = "Question Turn -" + pl2name;
    }

    if (answer_turn == "player2") {
        answer_turn = "player1";
        document.getElementById("answer").innerHTML = "Answer Turn -" + pl1name;
    }

    else {
        answer_turn = "player2";
        document.getElementById("answer").innerHTML = "Answer Turn -" + pl2name;
    }
    document.getElementById('output').innerHTML=" ";
}