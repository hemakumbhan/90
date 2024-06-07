function adduser(){
    var user_name1 = document.getElementById("name").value;
    var user_name2 = document.getElementById("word").value;
    localStorage.setItem("user1",user_name1);
    localStorage.setItem("user2",user_name2);
    window.location.replace("Quizpage.html");
}