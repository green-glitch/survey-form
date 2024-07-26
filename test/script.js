let recommend = document.getElementsByName("recommend");

function GetRecommend(){
    for (let i = 0; i <= 4; i++){
        alert(i + "" + recommend[i].checked);
    }
}

GetRecommend();