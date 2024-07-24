const fullname = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const dropdown = document.getElementById("dropdown");
const options = document.getElementsByTagName("option");
const recommend = document.getElementsByName("recommend");
const about = document.getElementsByName("about");

function SubmitForm(){
    let fn = fullname.value;
    let em = email.value;
    let age = number.value;
    let drop = dropdown.value;

    if(fn == "" || em == "" || age == ""){
        //alert("Please fill all the fields");
    }
    else{
        message = [
            "Inputs: \n\n",
            "Name: " + fn + "\n",
            "Email: " + em + "\n",
            "Age: " + age + "\n",
            "Satisfied? " + options[parseInt(drop) + 3].innerText + "\n",
        ];

        // alert(message.join(""));
    }
    alert("The form will be working soon.");
}