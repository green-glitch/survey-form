function SubmitForm(){
    let fullname = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    if(fullname == "" || email == "" || number == ""){
        alert("Please fill all the fields");
    }
    else{
        message = [
            "# Inputs: \n\n",
            "Name: " + fullname + "\n",
            "Email: " + email + "\n",
            "Age: " + number + "\n",
        ];

        alert(message.join(""));
    }
}