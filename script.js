function SubmitForm(){
    let fullname = document.getElementById("name-label").value;
    let email = document.getElementById("email-label").value;
    let number = document.getElementById("number-label").value;
    if(fullname == "" || email == "" || number == ""){
        alert("Please fill all the fields");
    }
    else{
        alert(fullname.value);
    }
}

// TODO: Submit Button must work