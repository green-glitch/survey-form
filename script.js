const fullname = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const dropdown = document.getElementById("dropdown");
const options = document.getElementsByTagName("option");
const recommend = document.getElementsByName("recommend");
const about = document.getElementsByName("about");

function GetRecommend(){
    for (let i = 0; i <= 4; i++){
        if (recommend[i].checked){
            return recommend[i].value;
        }
    }
}

function GetAbout(){
    let arr = [];
    for (let i = 0; i <= 4; i++){
        if (about[i].checked){
            arr.push(about[i].value);
        }
    }
    return arr;
}

function SubmitForm(){
    let fn = fullname.value;
    let em = email.value;
    let age = number.value;
    let drop = dropdown.value;

    if(fn == "" || em == "" || age == ""){
        alert("Please fill all the fields");
    }
    else{
        message = [
            "Inputs: \n\n",
            "Name: " + fn + "\n",
            "Email: " + em + "\n",
            "Age: " + age + "\n",
            "Satisfied: " + options[parseInt(drop) + 3].innerText + "\n",
            "Recommend: " + GetRecommend() + "\n",
            "About: " + GetAbout().join(", "),
        ];

        alert(message.join(""));
    }
    // alert("The form will be working soon.");
}