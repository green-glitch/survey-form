let recommend = document.getElementsByName("recommend");

function GetRecommend(){
    for (let i = 0; i <= 4; i++){
        alert("ff")
        if (recommend[i].checked){
            return recommend[i].value;
        }
    }
}